// 无须过多的参数，可以固定

import { flight, train, TRANSTORT_TYPE } from "~contents/createProduct/constant"
import { getPackageList } from "../../scripts/savePackageItem"
import { searchResourceGroup } from "../../scripts/searchResourceGroup"


export const saveProductResource = async (
  productId: string | number,
  productObjs: any[],
) => {

  // 使用携程资源
  await saveProductMaintainType(productId)

  // 创建携程草稿，随后会产生新的productId和segmentId，后续的save都是save 草稿的product+segment
  await createProductDraft(productId)

  const packageList = await getPackageList(productId)
  const packageObj = packageList.itemList[0]

  // 资源组合逻辑
  // segment1 套餐+用车资源组
  // segment2 原行程1的 segment
  // segmentx 行程1到行程2 需要的segment 飞机/火车/汽车
  // segment3 原行程2的 segment
  // 其他的依次类推

  const productsSegment = await Promise.all(productObjs.map(pro => getSegments(pro.baseInfo.productId)))

  let sum = 0
  productsSegment.forEach(seg => {
    seg.productSegments.segments.forEach(s => {
      s.segmentResourceGroups.forEach(rg => {
        const m = rg.resourceGroup.resourceGroupName.match(/经济(\d+)/)
        sum += +m[1]
      })
    })
  })

  const group = await searchResourceGroup(`经济${sum}`)

  const { draftProductSegments } = await getSegments(productId)

  let curIdx = 0
  // 第一个segment
  const firstSegment = draftProductSegments.segments[curIdx]
  firstSegment.segmentBase.maxStayNights = 0
  firstSegment.segmentBase.minStayNights = 0
  firstSegment.segmentBase.stayNights = 0
  firstSegment.segmentResourceGroups = [
    {
      resourceGroupId: group.resourceGroupDtos[0].resourceGroupId,
      sort: 0
    }
  ]
  await saveSegment({
    ...firstSegment,
    packages: [{
      masterResourceId: packageObj.singleResourceId,
      packageName: packageObj.name,
      segmentId: firstSegment?.segmentId || 0,
      servantResourceId: packageObj.optionalResourceId
    }],
    productId,
    segmentId: firstSegment.segmentId
  })
  curIdx++

  // 产品级别的segments
  for (let i = 0; i < productsSegment.length; i++) {
    const seg = productsSegment[i]
    // 增加一个流转segment
    if (i > 0) {
      // 上一段行程的最后一个segment
      const prevSeg = productsSegment[i - 1].productSegments.segments[productsSegment[i - 1].productSegments.segments.length - 1]
      // 当前行程的第一个segment
      const curSeg = productsSegment[i].productSegments.segments[0]
      const hotel = productsSegment[i].productSegments.segments.find(s => s.hotel).hotel
      const draftSeg = draftProductSegments.segments[curIdx]
      const segment: any = {
        hotel,
        segmentBase: {
          departureCity: prevSeg.segmentBase.destinationCity,
          destinationCity: curSeg.segmentBase.departureCity,
          segmentNumber: curIdx + 1,
          maxStayNights: 1,
          minStayNights: 1,
          stayNights: 1,
        },
        packages: [],
        productId,
        segmentId: draftSeg?.segmentId || 0
      }
      const product = productObjs[i - 1]
      switch (product.transmission) {
        case TRANSTORT_TYPE.FLIGHT:
          segment.flight = JSON.parse(JSON.stringify(flight))
          break;
        case TRANSTORT_TYPE.TRAIN:
          segment.train = JSON.parse(JSON.stringify(train))
          break;
        case TRANSTORT_TYPE.CAR:
          const group = await searchResourceGroup(`经济${product.price}`)
          segment.segmentResourceGroups = [
            {
              resourceGroupId: group.resourceGroupDtos[0].resourceGroupId,
              sort: 0
            }
          ]
          break
      }

      await saveSegment(segment)
      curIdx++
    }
    // 第一个涉及套餐的segment，不需要保存
    for (let j = 1; j < seg.productSegments.segments.length; j++) {
      const s = seg.productSegments.segments[j]
      // 第一晚需要加1，增加抵达目的地的住宿天数
      if (s.segmentBase.stayNights && i === 0 && j === 1) {
        s.segmentBase.maxStayNights += 1
        s.segmentBase.minStayNights += 1
        s.segmentBase.stayNights += 1
      }
      const draftSeg = draftProductSegments.segments[curIdx]
      s.segmentBase.segmentNumber = curIdx + 1
      await saveSegment({
        ...s,
        packages: [],
        productId,
        segmentId: draftSeg?.segmentId || 0
      })
      curIdx++
    }
  }

  const res = await submitSegments(productId)
  // TODO res 返回不符合预期需要重试日期+删除部分行程。

  return res
}

//
export const saveProductMaintainType = async (productId: string | number) => {
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
export const getSegments = async (productId: string | number) => {
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
export const createProductDraft = async (productId: string | number) => {
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
export const submitSegments = async (productId: string | number) => {
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

function getRandomDate() {
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
