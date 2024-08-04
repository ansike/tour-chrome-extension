// 无须过多的参数，可以固定

import { sleep } from '../util';

export const saveSubProductResource = async (
  productId: string,
  sub: any
) => {
  const { transitionType, enter, leave } = sub;
  // 创建携程草稿，随后会产生新的productId和segmentId，后续的save都是save 草稿的product+segment
  await createProductDraft(productId)

  // 获取 segments
  const { draftProductSegments } = await getSegments(productId)
  const destinyCity = draftProductSegments.segments[0].segmentBase.destinationCity;

  console.log({ draftProductSegments })
  if (draftProductSegments.segments[0].segmentBase.departureCity.cityId !== 0) {
    // 在最前方增加一条行程
    await saveSegment({
      segmentBase: {
        departureAdjustDays: 0,
        departureCity: { cityId: 0, cityName: "多出发" },
        destinationCity: destinyCity,
        segmentNumber: 1
      },
      productId,
      segmentId: 0
    })
  }

  if (draftProductSegments.segments[draftProductSegments.segments.length - 1].segmentBase.destinationCity.cityId !== 0) {
    // 在最后增加子产品一条行程
    await saveSegment({
      segmentBase: {
        departureAdjustDays: 0,
        departureCity: destinyCity,
        destinationCity: { cityId: 0, cityName: "多到达" },
        segmentNumber: draftProductSegments.segments.length + 2
      },
      productId,
      segmentId: 0
    })
  }

  const { draftProductSegments: newSegments } = await getSegments(productId);

  // 去程
  await saveSegment({
    ...newSegments.segments[0],
    ...enter,
  })
  // 回程
  await saveSegment({
    ...newSegments.segments[newSegments.segments.length - 1],
    ...leave,
  })

  async function setMutipleDepartureCities(productId: string) {
    // 获取所有的出发城市
    const { multiDepartureCities } = await getMultiDepartureCities();
    // 拥有机场的城市
    const cities = getTransitionCitiesByType(multiDepartureCities, transitionType);
    console.log({ transitionType })

    // 不包含当前的城市
    let filteredCities = cities.filter(item => item.cityId !== destinyCity.cityId);
    console.log({ filteredCities })

    // 保存当前城市
    await saveSegmentCommonData(productId, filteredCities);
    // 提交分段
    await submitSegments(productId)

    // 检查提交的城市是否含有特定的航班
    const checkSegmentResultCities = async (productId: string) => {
      let isChecking = true;
      while (isChecking) {
        const res = await getSubmitSegmentsResult(productId);
        if (res.result === 'F') {
          isChecking = false
          const errorCityIds = res.checkSegmentResultCities.map(it => it.city.cityId);
          filteredCities = filteredCities.filter(item => !errorCityIds.includes(item.cityId));
          await sleep(1000);
          console.log(productId, { filteredCities })
          // 检索到的城市无资源考虑重新设置出发城市
          if(!filteredCities.length){
            isChecking = false;
            return await setMutipleDepartureCities(productId);
          }
          await saveSegmentCommonData(productId, filteredCities);
          await submitSegments(productId);
          await checkSegmentResultCities(productId);
        } else if (res.result === 'T') {
          console.log(productId, res.messages)
          isChecking = false
        } else if (res.result === 'U') {
          await sleep(1500);
        }
      }
    }
    await checkSegmentResultCities(productId);

  }
  await setMutipleDepartureCities(productId);

  return 'success'
}

function getRandomDate() {
  const today = new Date()
  const futureDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  )
  const randomDates = []

  // while (randomDates.length < 3) {
  const randomTimestamp =
    Math.random() * (futureDate.getTime() - today.getTime()) + today.getTime()
  const randomDate = new Date(randomTimestamp)
  const formattedDate = randomDate.toISOString().slice(0, 10)

  if (!randomDates.includes(formattedDate)) {
    randomDates.push(formattedDate)
  }
  // }

  return randomDates
}

function getTransitionCitiesByType(multiDepartureCities, type) {
  // both只取用热门,
  if (type === 'both') {
    return multiDepartureCities[0].departureCities
  }
  // 所有的飞机或火车
  return multiDepartureCities.slice(1).map((item) => {
    return item.departureCities.filter((it) => it[type]);
  }).reduce((prev, cur) => {
    return prev.concat(cur)
  }, [])
}


// 设置使用携程资源
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

// 保存产品的segment
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

// 获取前一个产品的segments
export const saveSegmentCommonData = async (productId: string, departureCities) => {
  const body = {
    "contentType": "json",
    "head": {
      "cid": "09031147210876379845",
      "ctok": "",
      "cver": "1.0",
      "lang": "01",
      "sid": "8888",
      "syscode": "09",
      "auth": "",
      "extension": []
    },
    "segmentCommonData": {
      productId,
      departureCities,
      "isCityManage": "F"
    }
  }
  try {
    const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/SaveSegmentCommonData?_fxpcqlniredt=09031147210876379845&_fxpcqlniredt=09031147210876379845", {
      "headers": {
        "accept": "*/*",
        "accept-language": "en",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "cookieorigin": "https://vbooking.ctrip.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN"
      },
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": JSON.stringify(body),
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    return await res.json()
  } catch (error) {
    return saveSegmentCommonData(productId, departureCities)
  }
}

// 获取多出发城市
export const getMultiDepartureCities = async () => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/getMultiDepartureCities.json?_fxpcqlniredt=09031147210876379845&_fxpcqlniredt=09031147210876379845", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "cookieorigin": "https://vbooking.ctrip.com",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{\"contentType\":\"json\",\"head\":{\"cid\":\"09031147210876379845\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json()
}

// 获取提交结果
export const getSubmitSegmentsResult = async (productId: string) => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/getSubmitSegmentsResult?_fxpcqlniredt=09031147210876379845&_fxpcqlniredt=09031147210876379845", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "cookieorigin": "https://vbooking.ctrip.com",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN"
    },
    "referrer": "https://vbooking.ctrip.com/product/input/newResourceRule?productid=49492798&from=vbk",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031147210876379845\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":${productId}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json()
}


