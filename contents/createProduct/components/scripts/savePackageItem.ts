export const savePackage = async (productId: string | number) => {
  const packages = await getPackageList(productId)
  console.log({ packages })
  return await savePackageItem(productId, packages.itemList[0])
}

export const savePackageItem = async (productId: string | number, packageInfo: any) => {
  const body = {
    contentType: 'json',
    priceInputType: '1',
    productId,
    packageInfo
  }

  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/savePackageItem?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
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
        'x-ctx-locale': 'zh-CN'
      },
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/packageManage?productid=48399524&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const getPackageList = async (productId: string | number) => {
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
