export async function searchProviderContactCardList(searchKeyWord) {
  const body = {
    "providerId": 1393638,
    "contactType": 0,
    "selectedContactCardIdList": [],
    searchKeyWord: searchKeyWord,
    "version": "v0.4",
    "pageIndex": 1,
    "pageSize": 10
  }
  const res = await fetch("https://m.ctrip.com/restapi/soa2/17264/searchProviderContactCardList", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-ctx-locale": "zh-CN",
      "x-tour-auth-from": "vbk"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": JSON.stringify(body),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
  return res.json();
}
