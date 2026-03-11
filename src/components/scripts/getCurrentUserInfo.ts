
export const getCurrentUserInfo = async () => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/12405/getCurrentUserInfo", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN",
      "x-tour-auth-from": "vbk_online"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{\"needMenu\":false,\"needUserInfo\":true,\"needPermission\":true,\"needToolBar\":false,\"needHeadBar\":false,\"applicationCode\":\"vbk_online\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return res.json();
}