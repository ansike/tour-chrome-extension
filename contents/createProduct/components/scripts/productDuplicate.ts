
export const productDuplicate = async (productId: string): Promise<{newProductId: string}> => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/productDuplicate.json?_fxpcqlniredt=09031072216594047056&_fxpcqlniredt=09031072216594047056", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en",
      "content-type": "application/json",
      "cookieorigin": "https://vbooking.ctrip.com",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN",
      "x-tt-env": "boe_planning_ldx"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031072216594047056\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return await res.json();
}