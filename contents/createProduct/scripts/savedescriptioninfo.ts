// 无须过多的参数，可以固定

import { parseHtmlToObj } from '~/contents/createProduct/CreateModal/util'

export const saveProductRichText = async (productId: string) => {
  const productImageText = await getProductImageText(productId)
  console.log({productImageText});
  return await saveProductBaseInfo(productImageText, productId)
}

export const saveProductBaseInfo = async (productInfo: any, productId) => {
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
    dto: {
      productId,
      saveType: 4,
      pmRcmdItems: productInfo.pmRcmdItems,
      productDesc: productInfo.productDesc,
      addInfoCode: productInfo.addInfoCode
    }
  }
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/savedescriptioninfo?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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

export const getProductImageText = async (productId: string) => {
  const res = await fetch(
    `https://vbooking.ctrip.com/product/input/productImageText?productId=${productId}&pattern=4&from=vbk`,
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'max-age=0',
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

  const html = await res.text()

  const obj = parseHtmlToObj(html)
  return obj
}
