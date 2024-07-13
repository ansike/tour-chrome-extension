export const getTourDaily = async (productId: string) => {
  const tourInfoId = await getProductTourInfoList(productId);
  return await getTourDailyDetail(tourInfoId)
}

export const getProductTourInfoList = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getProductTourInfoList?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
        'https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=48068703&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  const text = await res.text()
  const tourInfoIdRegex = /"tourInfoId":(\d+)/
  const match = tourInfoIdRegex.exec(text)
  return match[1]
}

export const getTourDailyDetail = async (tourInfoId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20049/getTourDailyDetail.json',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json;charset=UTF-8',
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
      body: `{\"requestHeader\":{\"locale\":\"zh-CN\"},\"tourInfoId\":\"${tourInfoId}\",\"departureDate\":\"2024-07-12\",\"businessData\":\"\",\"contentType\":\"json\"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  return await res.json()
}
