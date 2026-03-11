export async function getResourceList(user, pageNo = 1, pageSize = 10) {
    // dr 506368
    // tl 621237
    // ask 642097
    const bookingContactId = user.contactCardId;
    const res = await fetch(
        "https://online.ctrip.com/restapi/soa2/15638/searchResourceList.json?_fxpcqlniredt=09031119411217359276&_fxpcqlniredt=09031119411217359276",
        {
            headers: {
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                cookieorigin: "https://vbooking.ctrip.com",
                "sec-ch-ua":
                    '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-ctx-locale": "zh-CN",
            },
            referrerPolicy: "no-referrer-when-downgrade",
            body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031119411217359276\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"resourceIds\":[],\"resourceName\":\"\",\"categoryList\":[{\"categoryId\":\"2\",\"piCategoryId\":\"1132\"}],\"departureCityId\":null,\"destinationCityId\":null,\"productRegion\":null,\"active\":\"\",\"vendorId\":null,\"pmEid\":\"\",\"paEid\":\"\",\"createTimeStart\":null,\"createTimeEnd\":null,\"bookingContactId\":${bookingContactId},\"pageNo\":${pageNo},\"pageSize\":${pageSize},\"businessOwner\":\"VBK\",\"active\":\"T\"}`,
            method: "POST",
            mode: "cors",
            credentials: "include",
        }
    );
    return await res.json();
}


export async function getResource({ resourceId }) {
    const res = await fetch(
        "https://online.ctrip.com/restapi/soa2/15638/queryResourceInfo?_fxpcqlniredt=09031072216594047056&_fxpcqlniredt=09031072216594047056",
        {
            headers: {
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                cookieorigin: "https://vbooking.ctrip.com",
                priority: "u=1, i",
                "sec-ch-ua":
                    '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-ctx-locale": "zh-CN",
            },
            referrerPolicy: "no-referrer-when-downgrade",
            body: `{"contentType":"json","head":{"cid":"09031072216594047056","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"","extension":[]},"resourceId":${resourceId}}`,
            method: "POST",
            mode: "cors",
            credentials: "include",
        }
    );
    return await res.json();
}
export async function changeResource({ resourceData }, user) {
    const { baseInfo, bookingControllerInfo, vendorRelatedInfo, carIds } =
        resourceData;

    bookingControllerInfo.vendorBookingContactId = user.contactCardId
    const data = {
        contentType: "json",
        head: {
            cid: "09031072216594047056",
            ctok: "",
            cver: "1.0",
            lang: "01",
            sid: "8888",
            syscode: "09",
            auth: "",
            extension: [],
        },
        resourceInfo: {
            baseInfo,
            bookingControllerInfo,
            vendorRelatedInfo,
            carIds,
        },
        customerInfoTemplateOpen: "T",
    };
    await fetch(
        "https://online.ctrip.com/restapi/soa2/15638/saveResource?_fxpcqlniredt=09031072216594047056&_fxpcqlniredt=09031072216594047056",
        {
            headers: {
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                "content-type": "application/json",
                cookieorigin: "https://vbooking.ctrip.com",
                priority: "u=1, i",
                "sec-ch-ua":
                    '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "x-ctx-locale": "zh-CN",
            },
            referrerPolicy: "no-referrer-when-downgrade",
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            credentials: "include",
        }
    );
}
