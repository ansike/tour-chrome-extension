import { parseHtmlToObj } from "../util";


export const activeSubProduct = async (parentProductId: string, productId: string) => {
  const pkgObj = await getPackageId(parentProductId);
  for(const pkg of pkgObj.childList){
    if(pkg.subProductId === productId){
      await updatePackageStatus(pkg.packageId);
    }
  }
  return "success"
}

export const updatePackageStatus = async (packageId: string) => {
  const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/updatePackageStatus?_fxpcqlniredt=09031147210876379845&_fxpcqlniredt=09031147210876379845", {
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
    "body": `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031147210876379845\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"packageId\":${packageId},\"packageType\":\"specialPackage\"}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json()

}

export const getPackageId = async (parentProductId: string) => {
  const res = await fetch(`https://vbooking.ctrip.com/ivbk/vendor/trafficLineEdit?productid=${parentProductId}&istab=1&from=vbk`, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "priority": "u=0, i",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });

  const text = await res.text()
  return parseHtmlToObj(text)
}