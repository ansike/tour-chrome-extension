// 无须过多的参数，可以固定

import { parseHtmlToObj } from "~/contents/createProduct/CreateModal/util"

export const saveProduct = async (productId: string) => {
  const productInfo = await getProductBaseInfo(productId)
  return await saveProductBaseInfo(productInfo)
}

export const saveProductBaseInfo = async (productInfo: any) => {
  console.log({ productInfo })
  const data = {
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
    baseInfo: productInfo.baseInfo,
    bookingControl: productInfo.bookingControls,
    nameAreaRules: productInfo.nameAreaRules,
    meta: {
      auditStatus: 'N',
      canEditSubName: 'T',
      canEditTravelDays: 'T',
      saveStep: -70,
      tourDailys: 5,
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
        mainName: '%1$s%2$s%3$s%4$s%5$s',
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
        goldTourGuide: 'T'
      },
      canSelfCheck: 'F',
      isIncludeFlight: false,
      hasTripResourcePermission: true,
      noTripResourcePermissionReason: {},
      plateTag: 'destination',
      minTourInfoScore: 80,
      isGeneralPackage: 'F',
      saveType: 2,
      resizeTourDailyInfo: 'F'
    },
    advancedSettings: productInfo.advancedSettings,
    scenicSpots: [],
    resourceFields: {}
  }
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
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  return await res.json()
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
