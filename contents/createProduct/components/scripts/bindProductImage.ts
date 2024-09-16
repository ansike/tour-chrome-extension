
export const bindProductImage = async (productId: string | number, productImages: any[]) => {
    const data = {
        // isCover: true,
        "contentType": "json",
        "head": {
            "cid": "09031056310749994837",
            "ctok": "",
            "cver": "1.0",
            "lang": "01",
            "sid": "8888",
            "syscode": "09",
            "auth": "",
            "extension": []
        },
        "productId": productId,
        "productImages": productImages
        // [
        //     {
        //         "imageId": 40608265,
        //         "sortNum": 17
        //     }
        // ]
    }
    const res = await fetch("https://online.ctrip.com/restapi/soa2/12719/bindProductImage.json?_fxpcqlniredt=09031056310749994837&_fxpcqlniredt=09031056310749994837", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json",
            "cookieorigin": "https://vbooking.ctrip.com",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-ctx-locale": "zh-CN",
            "x-tt-core": "1"
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify(data),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    return await res.json()
}