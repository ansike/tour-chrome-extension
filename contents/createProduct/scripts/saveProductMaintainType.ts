// 无须过多的参数，可以固定

import { getPackageList } from './savePackageItem'

export const saveProductResource = async (
  prevProductId: string,
  productId: string
) => {
  // 使用携程资源
  await saveProductMaintainType(productId)

  // 创建携程草稿，随后会产生新的productId和segmentId，后续的save都是save 草稿的product+segment
  await createProductDraft(productId)

  const packageList = await getPackageList(productId)
  // 获取 segments
  const prevSegments = await getSegments(prevProductId)
  const { productSegments, draftProductSegments } = await getSegments(productId)

  for (let i = 0; i < prevSegments.productSegments.segments.length; i++) {
    const segment = prevSegments.productSegments.segments[i]
    const curSegment = draftProductSegments.segments[i]
    const packages = {
      masterResourceId: packageList.itemList[0].singleResourceId,
      packageName: packageList.itemList[0].name,
      segmentId: curSegment?.segmentId || 0,
      servantResourceId: packageList.itemList[0].singleResourceId
    }
    // 存在修改
    if (curSegment) {
      await saveSegment({
        ...segment,
        packages,
        productId: curSegment.productId,
        segmentId: curSegment.segmentId
      })
    } else {
      // 不存在创建
      delete segment.segmentId
      await saveSegment({
        ...segment,
        packages,
        productId: draftProductSegments.segments[0].productId,
        segmentId: 0
      })
    }
  }
  const res = await submitSegments(productId)
  // TODO res 返回不符合预期需要重试日期+删除部分行程。

  return res
}

//
export const saveProductMaintainType = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveProductMaintainType?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"maintainType\":\"P\"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

// 获取前一个产品的segments
export const getSegments = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getSegments?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":${productId}}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  const data = await res.json()
  return data
}

// 获取前一个产品的segments
export const saveSegment = async segment => {
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
    segment
  }
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveSegment?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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

// 获取前一个产品的segments
export const createProductDraft = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/createProductDraft?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"module\":\"segment\",\"productId\":${productId}}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

// 获取前一个产品的segments
export const submitSegments = async (productId: string) => {
  const dates = getRandomDate()
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
    productId,
    schedule: dates,
    adultCount: 2,
    childCount: 0,
    audit: { saveStep: 2 }
  }
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/submitSegments?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
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

function getRandomDate () {
  const today = new Date()
  const futureDate = new Date(
    today.getFullYear(),
    today.getMonth() + 3,
    today.getDate()
  )
  const randomDates = []

  while (randomDates.length < 3) {
    const randomTimestamp =
      Math.random() * (futureDate.getTime() - today.getTime()) + today.getTime()
    const randomDate = new Date(randomTimestamp)
    const formattedDate = randomDate.toISOString().slice(0, 10)

    if (!randomDates.includes(formattedDate)) {
      randomDates.push(formattedDate)
    }
  }

  return randomDates
}
