import { parseHtmlToObj } from "../util";

// 获取子产品列表
export const getTourDays = async (productId: string) => {
  const res = await fetch(`https://vbooking.ctrip.com/ivbk/vendor/TourDays?productid=${productId}&istab=1&from=vbk`, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "max-age=0",
      "if-none-match": "W/\"890e1-jrVN+EGSWmRqDWdeb32xl8FB2jA\"",
      "priority": "u=0, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
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