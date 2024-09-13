// 批量获取产品详情
export const getProductsDetail = async (productIds: string[]) => {
  return Promise.all(productIds.map(getProductDetail))
}

// 获取单个产品详情
export const getProductDetail = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getProductBaseInfo?_fxpcqlniredt=09031072216594047056&_fxpcqlniredt=09031072216594047056',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en',
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
        'x-tt-env': 'boe_planning_ldx'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031072216594047056\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"needAdvancedSettings\":true,\"needBaseInfo\":true,\"needBookingControls\":true,\"needContractInfo\":true,\"needMeta\":true,\"needNameArea\":true,\"need4135PackageInfo\":true,\"needSaleControlInfo\":true,\"needViewLink\":true,\"needDistrictScenicSpots\":true,\"needParentChildren\":true}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  return await res.json()
}
