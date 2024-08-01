import { getTourDaily, type TourDailyDescription } from "./getProductBaseInfo";
import { transformNumber2String } from "./util";

const checkTourDaily = async (tourInfo: any, tourDaily: string, saveType: 8 | 3) => {
    const checkRes = await fetch("https://online.ctrip.com/restapi/soa2/15638/checkTourDaily?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147", {
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
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=48426233&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            contentType: "json",
            head: {
                "cid": "09031178210202430147",
                "ctok": "",
                "cver": "1.0",
                "lang": "01",
                "sid": "8888",
                "syscode": "09",
                "auth": "",
                "extension": []
            },
            productTourInfo: tourInfo,
            saveType,
            tourDaily
        }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    const checkJson = await checkRes.json();
    if (checkJson.ResponseStatus.Ack === 'Failure') {
        throw new Error(checkJson.ResponseStatus.Errors.map(it => it.Message).join(','))
    }
    const tourDailyText = transformNumber2String(checkJson.tourDaily);
    return tourDailyText;
}

export const saveTourDailyDetail = async (productId: string, tourDailyDescriptions: TourDailyDescription[]) => {
    const { tourInfo, tourDaily } = await getTourDaily(productId, 'auditTourInfoId');

    const newTourDailyText = JSON.stringify({ ...tourDaily.tourInfo, tourDailyDescriptions });
    const tourDailyText = await checkTourDaily(tourInfo, newTourDailyText, 8);
    const tourDailyText1 = await checkTourDaily(tourInfo, tourDailyText, 3);
    const newTourDaily = JSON.parse(tourDailyText1);

    await fetch("https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json", {
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
            tourInfo: newTourDaily
        }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

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