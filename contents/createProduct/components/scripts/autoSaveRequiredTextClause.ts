
export const autoSaveRequiredTextClause = async (productId: string) => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/20698/autoSaveRequiredTextClause?_fxpcqlniredt=09031027417137010024&_fxpcqlniredt=09031027417137010024", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json",
      "cookieorigin": "https://vbooking.ctrip.com",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031027417137010024\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":${productId}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json()

}
