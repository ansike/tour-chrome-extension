import { getTourDaily } from "./getProductBaseInfo";


export const saveSubTourDailyDetail = async (productId: string) => {
    const { tourInfo, tourDaily } = await getTourDaily(productId, 'auditTourInfoId');

    // const newTourDailyText = JSON.stringify(tourDaily.tourInfo);
    // const tourDailyText = await checkTourDaily(tourInfo, newTourDailyText, 8);
    // const tourDailyText1 = await checkTourDaily(tourInfo, tourDailyText, 3);
    // const newTourDaily = JSON.parse(tourDailyText1);

    await saveTourDailyDetail(tourDaily);

    const res = await saveProductTourInfo(tourInfo);
    return res;
}

export const saveProductTourInfo = async (tourInfo: any) => {
    const result = await fetch("https://online.ctrip.com/restapi/soa2/15638/saveProductTourInfo?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "cookieorigin": "https://vbooking.ctrip.com",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-ctx-locale": "zh-CN"
        },
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=48466822&istab=1&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            "contentType": "json",
            "head": {
                "cid": "09031178210202430147",
                "ctok": "",
                "cver": "1.0",
                "lang": "01",
                "sid": "8888",
                "syscode": "09",
                "auth": "",
                "extension": []
            },
            "tourInfo": tourInfo,
            "saveType": 3
        }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    return await result.json();
}
export const saveTourDailyDetail = async (tourInfo: any) => {
    const result = await await fetch("https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json;charset=UTF-8",
            "cookieorigin": "https://vbooking.ctrip.com",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-ctx-locale": "zh-CN"
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            requestHeader: {
                locale: 'zh-CN',
            },
            piCategoryId: 0,
            tourInfo
        }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    return await result.json();
}
