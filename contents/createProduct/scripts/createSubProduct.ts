
export const createSubProduct = async (parentProductId: string) => {

  // step 1:获取productinfo
  const detail = await getPackageProductDetail(parentProductId)
  const { generalInfoDto, subLineInfoDto } = detail
  
  // step 2:父子产品绑定
  const res = await saveLineInfo({
    parentProductId: parentProductId,
    generalInfoDto: generalInfoDto,
    subLineInfoDto: { ...subLineInfoDto, advanceBookingDays: 1, advanceBookingTime: '18:00', lineDescription: "飞机往返" }
  })

  return res.subProductId
}

const saveLineInfo = async ({ parentProductId, generalInfoDto, subLineInfoDto }) => {
  const body = {
    "contentType": "json",
    "head": {
      "cid": "09031015310214817373",
      "ctok": "",
      "cver": "1.0",
      "lang": "01",
      "sid": "8888",
      "syscode": "09",
      "auth": "",
      "extension": []
    },
    "parentProductId": parentProductId,
    "generalInfoDto": generalInfoDto,
    "subLineInfoDto": subLineInfoDto,
    "tags": [],
    "isVendorHasGoldGuide": "F"
  }

  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/saveLineInfo?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
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
    "referrer": "https://vbooking.ctrip.com/ivbk/vendor/childProductInfo?productid=48468157&pid=48435998&from=vbk&isTab=1",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": JSON.stringify(body),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return await res.json()
}

const getPackageProductDetail = async (parentProductId) => {
  const detailBody = {
    "contentType": "json",
    "head": {
      "cid": "09031015310214817373",
      "ctok": "",
      "cver": "1.0",
      "lang": "01",
      "sid": "8888",
      "syscode": "09",
      "auth": "",
      "extension": []
    },
    "parentProductId": parentProductId,
    "subProductId": 0
  }

  const detailRes = await fetch("https://online.ctrip.com/restapi/soa2/15638/getPackageProductDetail?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
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
    "referrer": "https://vbooking.ctrip.com/ivbk/vendor/childProductInfo?productid=0&pid=48469352&from=vbk",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": JSON.stringify(detailBody),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return await detailRes.json()
}