// 无须过多的参数，可以固定

import { parseHtmlToObj } from "../util"
import { getAccountConf } from "../../constant"
import { getCurrentAccountLocalInfo } from "./getCurrentAccountLocalInfo"
import { getContactOverlay } from "./getContactOverlay"
import { getPhone400FromEnvironment } from "./getPhone400FromEnvironment"

export const saveProduct = async (productId: string) => {
  const productInfo = await getProductBaseInfo(productId)
  return await saveProductBaseInfo(productInfo)
}

/** 页面保存成功时 baseInfo 的字段白名单，避免多余字段导致服务端反序列化失败 */
const BASE_INFO_WHITELIST = [
  'productId', 'travelDays', 'maxTravelDays', 'travelNights', 'productLevel',
  'mainName', 'name', 'subName',
  'masterDepartureCityId', 'masterDepartureProvinceId', 'masterDepartureCityName',
  'masterDepartureCountryName', 'masterDepartureCountryId',
  'destinationCityID', 'destinationProvinceId', 'destinationCityName',
  'destinationCountryName', 'destinationCountryId',
  'brandId', 'vendorProductCode', 'providerProductName',
  'phone400', 'phone400ToB', 'extNumberId', 'operationNote',
  'userGroupId', 'vendorId', 'isSimpleTour', 'active', 'businessOwner',
  'serviceLanguages', 'defaultServiceLanguages', 'isServiceLanguageInput',
  'isCityManage', 'priceCurrency', 'isExtendToStay', 'price', 'priceDescription',
  'isAutoCalculateProductLevel', 'productLevelSwitch', 'departureCities',
  'categoryPropertyPkgId', 'useTripResource', 'distributionChannels',
  'preSaleStatus', 'routeId', 'routeName', 'routeAliasTitleOriginal',
  'routeMainTitle', 'routeSubTitle', 'isUpgradeSelf',
  'productVersion', 'productSubVersion', 'isFixedPriceProduct',
  'createTime', 'modifyTime',
] as const

function pickBaseInfo(raw: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const k of BASE_INFO_WHITELIST) {
    if (Object.prototype.hasOwnProperty.call(raw, k)) {
      out[k] = raw[k]
    }
  }
  return out
}

/** 页面 advancedSettings 中 tags 传 []，避免复杂结构导致反序列化失败 */
function sanitizeAdvancedSettings(raw: Record<string, unknown>): Record<string, unknown> {
  const out = { ...raw }
  out.tags = []
  return out
}

/** 规范化 bookingControl 中的 phone 字段为对象格式 { areaCode, phone, phoneNoFull } */
function normalizeBookingControlPhone(ctrl: Record<string, unknown>): Record<string, unknown> {
  const out = { ...ctrl }
  const areaCode = (out.vendorBookingSeneschalPhoneAreaCode as string) ?? '86'
  delete out.vendorBookingSeneschalPhoneAreaCode
  const seneschalPhone = out.vendorBookingSeneschalPhone
  if (typeof seneschalPhone === 'string') {
    out.vendorBookingSeneschalPhone = {
      areaCode,
      phone: seneschalPhone,
      phoneNoFull: seneschalPhone ? `+86 ${seneschalPhone}` : undefined,
    }
  }
  return out
}

/**
 * 从导入的 productInfo 中正确解析各字段，兼容多种导出结构
 * 导出时已保存完整数据，此处只需正确解析即可
 */
function normalizeProductInfo(productInfo: any) {
  const pb = productInfo?.productBaseInfo || productInfo
  return {
    baseInfo: pb.baseInfo ?? productInfo.baseInfo ?? {},
    bookingControl: pb.bookingControl ?? pb.bookingControls ?? productInfo.bookingControl ?? productInfo.bookingControls,
    nameAreaRules:
      pb.nameAreaRules ??
      pb.nameAreas ??
      productInfo.nameAreaRules ??
      productInfo.nameAreas ??
      [],
    scenicSpots:
      pb.scenicSpots ??
      pb.districtScenicSpots ??
      productInfo.scenicSpots ??
      productInfo.districtScenicSpots ??
      [],
    advancedSettings:
      pb.advancedSettings ?? productInfo.advancedSettings ?? {},
  }
}

export const saveProductBaseInfo = async (productInfo: any) => {
  const normalized = normalizeProductInfo(productInfo)
  // 导入时使用当前登录账号的地接社名称（brandId/brandName/productBrandDto）
  const { saleControlInfoDto, phone400: accountPhone400 } = await getAccountConf()
  const productId = productInfo?.productId ?? productInfo?.baseInfo?.productId

  // 地接社 localInfo 需使用当前账号数据，单独查询并覆盖
  let localInfoOverlay: { localInfoID?: number; localInfoIds?: number[] } = {}
  if (productId) {
    localInfoOverlay = await getCurrentAccountLocalInfo(String(productId))
  }

  const pid = productId != null ? (typeof productId === 'number' ? productId : parseInt(String(productId), 10)) : undefined
  // 从当前环境获取 phone400、extNumberId：优先 getResourceInfoList+baseInfoMerge+getExtNumberList，否则用 AccountConfMap
  const envResult = await getPhone400FromEnvironment(productInfo)
  const phone400Overlay = envResult.phone400 ?? accountPhone400 ?? ''

  const rawBaseInfo = {
    ...normalized.baseInfo,
    ...(pid != null && !isNaN(pid) && { productId: pid }),
    brandId: saleControlInfoDto.brandId,
    phone400: phone400Overlay,
    ...(envResult.extNumberId != null && { extNumberId: envResult.extNumberId }),
  }
  const baseInfo = pickBaseInfo(rawBaseInfo as Record<string, unknown>)

  const rawBookingControl = normalized.bookingControl ?? productInfo?.bookingControl
  const contactOverlay = await getContactOverlay()
  let bookingControl: Record<string, unknown> | undefined
  if (rawBookingControl) {
    const merged = {
      ...rawBookingControl,
      ...(localInfoOverlay.localInfoID != null && { localInfoID: localInfoOverlay.localInfoID }),
      ...(Array.isArray(localInfoOverlay.localInfoIds) && {
        localInfoIds: localInfoOverlay.localInfoIds,
      }),
      ...(contactOverlay && contactOverlay),
    }
    bookingControl = normalizeBookingControlPhone(merged as Record<string, unknown>)
  }
  // clause：从 productInfo 提取，与真实保存数据结构一致
  const rawClause = productInfo?.clause ?? productInfo?.productBaseInfo?.clause
  const clause = rawClause && typeof rawClause === 'object'
    ? {
        formalDtos: rawClause.formalDtos ?? [],
        draftDtos: rawClause.draftDtos ?? [],
        requiredDtos: rawClause.requiredDtos ?? [],
        suitableDtos: rawClause.suitableDtos ?? [],
      }
    : undefined

  // 仅包含 API 期望的字段，避免多余字段导致反序列化失败 (SaveProductBaseInfoRequestType)
  const body: Record<string, unknown> = {
    contentType: 'json',
    head: {
      cid: '09031059218989378081',
      ctok: '',
      cver: '1.0',
      lang: '01',
      sid: '8888',
      syscode: '09',
      auth: '',
      extension: []
    },
    baseInfo,
    nameAreaRules: (normalized.nameAreaRules || []).map((it: any) =>
      typeof it === 'object' && it !== null
        ? {
            ...it,
            pOIDistrictName: it.pOIDistrictName ?? it.poiDistrictName,
            pOIScenicSpotID: it.pOIScenicSpotID ?? it.poiScenicSpotID,
            parentInfo: it.parentInfo ?? it.parent,
          }
        : it
    ),
    meta: {
      auditStatus: 'N',
      canEditSubName: 'T',
      canEditTravelDays: 'T',
      saveStep: -70,
      tourDailys: 0,
      isBaseInfoSwitched: 'T',
      isonline: 'F',
      releaseActive: 'F',
      resourceApproveStatus: 'N',
      priceApproveStatus: 'N',
      inventoryApproveStatus: 'N',
      nameJoinRuleDto: {
        day: '%1$s日',
        days: '%1$s日',
        night: '%1$s晚',
        nights: '%1$s晚',
        pattern: '私家团',
        destinationJoiner: '+',
        diamonds: '(%1$s钻)',
        mainName: '%1$s%2$s%3$s%4$s',
        name: '%1$s·%2$s'
      },
      isProductLevelSwitched: 'T',
      canUserMoreLocale: 'F',
      isChildrenPriceSwitched: 'T',
      workTemplateOpen: 'T',
      hasEditPermission: 'T',
      isChild: false,
      canEditCategoryProperty: 'F',
      useNewTourDaily: true,
      hiddenSkuInfo: false,
      switches: {
        canEditPM: 'F',
        productLevelAudit: 'T',
        vendorContactMouldSwitch: 'T',
        PoiInvalidIntercept: 'F',
        PoiInvalidOpen: 'T',
        nameAudit: 'T',
        loanTerms: 'F',
        goldTourGuide: 'F'
      },
      canSelfCheck: 'F',
      isIncludeFlight: false,
      hasTripResourcePermission: true,
      noTripResourcePermissionReason: {},
      plateTag: '',
      minTourInfoScore: 80,
      isGeneralPackage: 'F',
      canAssociateFixedPriceProduct: 'F',
      unSupportFixedPriceProdMsg: 'notInWhitelist',
      canEditServiceLanguage: true,
      saveType: 2,
      resizeTourDailyInfo: 'F',
    },
    advancedSettings: sanitizeAdvancedSettings(normalized.advancedSettings ?? {}),
    scenicSpots: [], // 页面保存时传空数组，复杂结构可能导致反序列化失败
    resourceFields: productInfo?.resourceFields ?? {},
  }

  if (bookingControl != null) body.bookingControl = bookingControl
  if (clause != null && (clause.formalDtos?.length || clause.requiredDtos?.length)) body.clause = clause
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveProductBaseInfo?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  const data = await res.json()
  const status = data?.ResponseStatus
  const ack = status?.Ack
  const errors = status?.Errors

  // 识别 Ack=Failure 或 Errors 非空，均视为失败（兼容服务端反序列化失败等场景）
  if (ack === 'Failure' || (Array.isArray(errors) && errors.length > 0)) {
    const msg = Array.isArray(errors) && errors.length > 0
      ? errors.map((item: any) => item.Message).join(', ')
      : '保存失败，服务端返回 Failure'
    throw new Error(msg)
  }
  return data
}

export const getProductBaseInfo = async (productId: string) => {
  const res = await fetch(
    `https://vbooking.ctrip.com/ivbk/vendor/baseInfoMerge?productId=${productId}&from=vbk`,
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
        // 'if-none-match': 'W/"8b1cb-6A3N/TGBPC2QSjvxx+PsxwnYSpY"',
        priority: 'u=0, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }
  )

  const html = await res.text();
  
  const obj = parseHtmlToObj(html);
  return obj.productBaseInfo
}
