import { PRICE_RATE, venderId } from "~contents/createProduct/constant";



function getDatesBetween(start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(dt.toISOString().slice(0, 10));
    }
    return arr;
  }

export async function savePrice(resourceId, cost) {
    let dateArr = getDatesBetween(new Date("2024/02/26"), new Date("2030/03/31"));
    const marketPrice = Math.ceil(cost * PRICE_RATE);
    const body = {
      contentType: "json",
      head: {
        cid: "09031111115146167449",
        ctok: "",
        cver: "1.0",
        lang: "01",
        sid: "8888",
        syscode: "09",
        auth: "",
        extension: [],
      },
      resourceId,
      costPriceCurrency: "CNY",
      inventoryMode: "U",
      saveType: "N",
      resourcePrices: dateArr.map((date) => {
        return {
          date: date,
          active: true,
          marketPrice,
          cost,
        };
      }),
      resourceChildPrices: [],
      resourceStorages: [],
      relatedSingleRoomPrices: [],
      vendorId: venderId,
    };
    const res = await fetch(
      "https://online.ctrip.com/restapi/soa2/15638/SaveResourceStoragePriceInfo.json?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449",
      {
        headers: {
          accept: "*/*",
          "accept-language": "zh-CN,zh;q=0.9",
          "content-type": "application/json",
          cookieorigin: "https://vbooking.ctrip.com",
          "sec-ch-ua":
            '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-ctx-locale": "zh-CN",
        },
        referrer:
          "https://vbooking.ctrip.com/ivbk/vendor/additionalservicedetail?type=new&tabkey=2&resourceid=41646573&from=vbk",
        referrerPolicy: "no-referrer-when-downgrade",
        body: JSON.stringify(body),
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );
    return res.json();
  }
  