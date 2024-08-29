export const suggestAirport = async (keyword: string) => {
  const body = {
    "contentType": "json",
    "head": {
      "cid": "09031056310749994837",
      "ctok": "",
      "cver": "1.0",
      "lang": "01",
      "sid": "8888",
      "syscode": "09",
      "auth": "",
      "extension": []
    },
    keyword
  }

  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/suggestAirport?_fxpcqlniredt=09031056310749994837&_fxpcqlniredt=09031056310749994837", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "cookieorigin": "https://vbooking.ctrip.com",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN",
      "x-tt-core": "1"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": JSON.stringify(body),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return await res.json()
}