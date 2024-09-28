import { TRANSTORT_TYPE } from "~contents/createProduct/constant";
import { flightClause, TAB_CLAUSE, trainClause } from "./constant";
import { getTourDaily } from "../../scripts/getProductBaseInfo";

export const saveClauses = async (productId: string | number, productObjs: any[]) => {
  try {
    for (let tabEnum = 1; tabEnum <= 4; tabEnum++) {
      await setClause1(productId, productObjs, tabEnum);
    }
    return 'success'
  } catch (error) {
    return error
  }
}


export const setClause1 = async (productId, productObjs: any[], tabEnum) => {
  const productClause = await listProductClauses(productId, tabEnum)
  const clausePackageItemDtos = JSON.parse(JSON.stringify(TAB_CLAUSE[`tab${tabEnum}BaseClause`]))

  if (tabEnum === 1) {
    // 1. 根据日程中的设置，自动设置成人和儿童门票
    const productTours = await Promise.all(productObjs.map(pro => getTourDaily(pro.productId)))
    const pois = productTours.map(tour => {
      return tour.tourDaily.tourInfo.tourDailyDescriptions.map(tourDaily => {
        // 过滤景点
        return tourDaily.tourDailyInfos.filter((tourDailyInfo) => tourDailyInfo.activeType.key === 3).map((tourDailyInfo) => {
          // 含门票: 5是首道大门票，6是已含门票
          return tourDailyInfo.tourDailyPois.filter(poi => poi.suffixName.key === 5|| poi.suffixName.key === 6).map(poiIt => poiIt.poi.poiName)
        }).reduce((acc, cur) => acc.concat(cur), [])
      }).reduce((acc, cur) => acc.concat(cur), [])
    }).reduce((acc, cur) => acc.concat(cur), []).join(',')

    if (pois) {
      clausePackageItemDtos.find(dto => dto.clauseItemId === 13).elementDtos.find(it => it.componentCode === 'landticketremarks').value = pois
      clausePackageItemDtos.find(dto => dto.clauseItemId === 10087).elementDtos.find(it => it.componentCode === 'landticket2').value = pois
    }

    // 2. 处理中间段火车/飞机条款
    for (const product of productObjs) {
      switch (product.transmission) {
        case TRANSTORT_TYPE.FLIGHT:
          clausePackageItemDtos.push(...flightClause)
          break;
        case TRANSTORT_TYPE.TRAIN:
          clausePackageItemDtos.push(...trainClause)
          break;
        case TRANSTORT_TYPE.CAR:
          break;
        default:
          break;
      }
    }
  }
  await saveClausePackage({ centralDataDto: productClause.centralDataDto, clausePackageItemDtos })

  await saveProductClauses(
    productId,
    productClause.centralDataDto.clausePackageId,
    tabEnum
  )
}

// export const setClausePackage = async (productId, tabEnum, products: any[]) => {
//   const productClause = await listProductClauses(productId, tabEnum)
//   const clausePackage = await getClausePackage(productClause)

//   if (tabEnum === 3) {
//     // 单房差
//     const hasSingle = clausePackageItemDtos.find(it => it.clauseItemId === 3010);
//     if (!hasSingle) {
//       clausePackageItemDtos.push(
//         {
//           "clauseItemId": 3010,
//           "secondClassTypeId": 25,
//           "elementDtos": [
//             {
//               "componentCode": "singlepricetype32",
//               "value": "综合考量目前常规团队出行人群结构并考虑实际入住体验等因素，本产品暂时无法提供拼房。报价是按照2成人入住1间房计算的价格，请在页面中选择所需房间数或单人房差选项"
//             }
//           ]
//         }
//       )
//     }
//   }

//   await saveClausePackage({
//     productClause,
//     clausePackageItemDtos
//   })

//   await saveProductClauses(
//     productId,
//     productClause.centralDataDto.clausePackageId,
//     tabEnum
//   )
//   // // 随机休眠 1s - 4s
//   // await sleep(Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000)
// }

export const getClausePackage = async (productClause: any) => {
  const body = {
    ...productClause.centralDataDto,
    clauseFilterConditionDto: productClause.centralDataDto?.filterConditionDto,
    firstClassClauseTypeIds:
      productClause.centralDataDto.additionalInfoDto.firstClassTypeIds
  }
  delete body.filterConditionDto
  body.additionalInfoDto = {
    ...body.additionalInfoDto,
    isTra: 'F',
    isChildrenToNew: 'T'
  }
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20046/getClausePackage?',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'text/plain;charset=UTF-8',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const listProductClauses = async (
  productId: string,
  tabEnum: number
) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/listProductClauses?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/newResourceClause?productid=48464967&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"tabEnum\":${tabEnum}}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const getPackageList = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getPackageList?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"priceInputType\":1}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const saveClausePackage = async ({
  centralDataDto,
  clausePackageItemDtos
}) => {
  console.log({
    centralDataDto,
    clausePackageItemDtos
  })

  const body = {
    ...centralDataDto,
    firstClassClauseTypeIds:
      centralDataDto.additionalInfoDto.firstClassTypeIds,
    pICategoryId: centralDataDto.filterConditionDto.pICategoryId,
    clausePackageItemDtos,
  }

  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20046/saveClausePackage',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'text/plain;charset=UTF-8',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const saveProductClauses = async (
  productId: string,
  packageId: string,
  tabEnum: number
) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveProductClauses.json?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/newResourceClause?productid=48464967&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"packageId\":${packageId},\"saveType\":3,\"productId\":\"${productId}\",\"tabEnum\":${tabEnum},\"clauseEditDtos\":[],\"unBookingRuleDtos\":[]}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}


