import { getPackageList } from "./savePackageItem";


export const savePriceInventory = async (productId: string) => {
   
   // pre
    const result = await getPackageList(productId)
    const {itemList} = result

    const currDate = new Date()
    const currYear = currDate.getFullYear()
    const currMonth = currDate.getMonth() + 1
    const currDay = currDate.getDate();

    const body ={
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
        "packageKey": {
            "masterResourceId": itemList[0].singleResourceId,
            "servantResourceId": itemList[0].optionalResourceId,
        },
        "productId": `${productId}`,
        "yearMonth": `${currYear}-${currMonth}`
    }
   
    // step 1 获取当前数据
    
    const dateRes = await fetch("https://online.ctrip.com/restapi/soa2/15638/GetBatchOperateSchedule?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
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
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/priceInventory?productid=48465278&istab=1&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    
    const batchResult = await dateRes.json()

    const date = batchResult.dates[currDay]
    const {adultPrice, childPrice, base, inventory} = date

    // step 2 修改数据

    const saveBody = {
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
        "priceTerms": 1,
        "priceInputType": 1,
        "optionalResourceId": 48068708,
        "type": "A",
        "dateChoose": {
            "submitType": "D",
            "dates": [
                base.productDate
            ]
        },
        "singleResourcePriceInventory": {
            "price": {
                "adultCostPrice": adultPrice.cost,
                "adultSalePrice": adultPrice.marketPrice,
                "chdCostPrice": childPrice.cost,
                "chdSalePrice": childPrice.marketPrice,
            },
            "inventory": {
                "isLimit": inventory.isLimit,
                "isExceed": inventory.isExceed,
                "total": inventory.total,
            }
        },
        "tourInfoId": -1,
        "productId": `${productId}`,
        "singleResourceId": 48068706
    }

    const modifRes = await fetch("https://online.ctrip.com/restapi/soa2/15638/savePriceInventory?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
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
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/priceInventory?productid=48465278&istab=1&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify(saveBody),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });
    
      console.log('save success!',modifRes)
}