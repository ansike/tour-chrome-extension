import { getTourDaily } from "../../scripts/getProductBaseInfo"
import { checkTourDaily } from "../../scripts/saveTourDailyDetail"

export const saveTourDailyDetail = async (productId: string | number, products: any[]) => {
    const productTours = await Promise.all(products.map(pro => getTourDaily(pro.baseInfo.productId)))
    console.log(productTours)
    const firstCity = products[0].nameAreas[0].pOIDistrictName
    const lastCity = products[products.length - 1].nameAreas[0].pOIDistrictName
    const tourDailyHotels = productTours[0].tourDaily.tourInfo.tourDailyDescriptions[0].tourDailyInfos.find(it => it.activeType.name === '酒店').tourDailyHotels

    const firstDay = calcFirstDay(firstCity, tourDailyHotels)
    const lastDay = calcLastDay(lastCity)
    const middleTourDailyDescriptions = productTours.map(it => it.tourDaily.tourInfo.tourDailyDescriptions).reduce((acc, cur) => acc.concat(cur), [])
    const tourDailyDescriptions = [
        firstDay,
        ...middleTourDailyDescriptions,
        lastDay
    ]

    tourDailyDescriptions.forEach((it, idx) => {
        it.orderDay = idx + 1
        it.tourDailyDescriptionId = null
        it.refId = null
        it.tourDailyInfos.forEach(info => {
            info.tourDailyInfoId = null
        })
    })
    console.log(tourDailyDescriptions)
    const newTourDailyText = JSON.stringify({tourDailyDescriptions})
    const productTourInfo = {
        main: true,
        tourInfoId: 0,
        productId,
        sort: 0,
        isNew: true,
    }
    const tourDailyText8 = await checkTourDaily(productTourInfo, newTourDailyText, 8);
    const tourDailyText3 = await checkTourDaily(productTourInfo, tourDailyText8, 3);
    const newTourDaily = JSON.parse(tourDailyText3);
    productTourInfo.auditTourInfoId = newTourDaily.tourInfoId;
    productTourInfo.auditTourInfoStatus = 1;

    console.log(newTourDaily)

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
            "tourInfo": productTourInfo,
            "saveType": 3
        }),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    return await result.json();
}

const calcFirstDay = (city, hotels) => {
    const firstDay = {
        "tourDailyDescriptionId": null,
        "orderDay": 1,
        "dailyDescription": `【抵达${city}】自由活动【专车接机/站】`,
        "tourDailyLocations": [],
        "tourDailyInfos": [
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": "D",
                    "name": "全天"
                },
                "activeType": {
                    "key": 8,
                    "name": "交通"
                },
                "distance": 200,
                "driveTime": 120,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": 1,
                    "name": "前往"
                },
                "takeTime": 0,
                "description": "今日各地贵宾根据自选航班/火车，抵达成都。我们将全天24小时在机场/火车站/市区内指定地点，由专车迎接您开启本次行程\n【温馨提示】：\n1、本产品不含导游，旅行管家将于出发前3天向您致电，与您沟通出游的注意事项，请尽量保持手机畅通。\n2、请携带实际出行人身份证或其它有效证件，以便顺利乘机及入住酒店。3、如您乘坐火车前往，建议提前1小时以上到达火车站，以便换票及等车。乘坐飞机建议提前2小时以上到达机场以便值机及行李托运。\n4、酒店入住时间正常为14:00，如遇到提前抵达无法提前入住情况，可行李寄存。\n5、若误机、改签等原因导致长时间无法会合司机的，请主动联系司机或旅行管家告知相关情况，以便做好协调安排。\n6、今日专车司机送您至酒店办理入住手续后请自行在成都市游玩。",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 1,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": null,
                    "includeAdult": null,
                    "includeChild": null,
                    "costInclude": null,
                    "cost": null,
                    "currency": null,
                    "foodType": null,
                    "refId": null,
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465019712847890",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": null,
                    "name": "12:00"
                },
                "activeType": {
                    "key": 0,
                    "name": "餐饮"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 60,
                "description": "",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 2,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": {
                        "key": "L",
                        "name": "午餐"
                    },
                    "includeAdult": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "includeChild": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "costInclude": {
                        "key": "",
                        "name": null
                    },
                    "cost": 0,
                    "currency": {
                        "currencyCode": "CNY"
                    },
                    "foodType": {
                        "key": null,
                        "name": null
                    },
                    "refId": "282465032759230550",
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465019712847891",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": "D",
                    "name": "全天"
                },
                "activeType": {
                    "key": 7,
                    "name": "自由活动"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 0,
                "description": "请根据您的到达时间自由安排活动；",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 3,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": null,
                    "includeAdult": null,
                    "includeChild": null,
                    "costInclude": null,
                    "cost": null,
                    "currency": null,
                    "foodType": null,
                    "refId": null,
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465019712847892",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": null,
                    "name": "18:00"
                },
                "activeType": {
                    "key": 0,
                    "name": "餐饮"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 0,
                "description": "",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 4,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": {
                        "key": "S",
                        "name": "晚餐"
                    },
                    "includeAdult": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "includeChild": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "costInclude": {
                        "key": "",
                        "name": null
                    },
                    "cost": 0,
                    "currency": {
                        "currencyCode": "CNY"
                    },
                    "foodType": {
                        "key": null,
                        "name": null
                    },
                    "refId": "282465032759230551",
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465019712847893",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": null,
                    "name": "20:30"
                },
                "activeType": {
                    "key": 1,
                    "name": "酒店"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 0,
                "description": "【温馨提示】\n1、贵宾可在下单时点击“更多酒店”及“更多房型”来查阅各种酒店及房型选择，点击房型名称，详细查看关于房型、面积、早餐、加床及退订政策等内容。如需酒店早餐，请选择带早餐的房型。\n2.到达酒店后，请自行到前台办理入住手续，如有疑问可咨询酒店前台或致电私人管家。\n3.、依酒店规定，当天14点后方可办理入住；若您抵达较早，可将行李寄存于前台，自行前往周边景点或餐厅。\n4、若入住酒店时需支付房卡押金，请您自理，退房查房后，如无问题酒店会原路退还给您（退房时间一般是中午12点），入住期间如有消费请看清价格后再消费。",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 5,
                "costInclude": true,
                "tourDailyHotels": hotels,
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": null,
                    "includeAdult": null,
                    "includeChild": null,
                    "costInclude": null,
                    "cost": null,
                    "currency": null,
                    "foodType": null,
                    "refId": null,
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465019712847874",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            }
        ],
        "refId": "282465019714961419",
        "parentId": null,
        "seaCruise": false,
        "useCar": {
            "key": "N",
            "name": null
        }
    }
    return firstDay
}
const calcLastDay = (city) => {
    const lastDay = {
        "tourDailyDescriptionId": null,
        "orderDay": 4,
        "dailyDescription": `【${city}-返程】返回温馨的家【专车+专车送机/站】`,
        "tourDailyLocations": [],
        "tourDailyInfos": [
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": "D",
                    "name": "全天"
                },
                "activeType": {
                    "key": 8,
                    "name": "交通"
                },
                "distance": 300,
                "driveTime": 180,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": 1,
                    "name": "前往"
                },
                "takeTime": 0,
                "description": "全天路程",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 1,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": null,
                    "includeAdult": null,
                    "includeChild": null,
                    "costInclude": null,
                    "cost": null,
                    "currency": null,
                    "foodType": null,
                    "refId": null,
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465039296053303",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": null,
                    "name": "08:00"
                },
                "activeType": {
                    "key": 0,
                    "name": "餐饮"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 60,
                "description": "酒店含早，根据所选床位赠送，不吃不退，儿童不占床，不含餐；\n【温馨提示】\n1、如出发较早。您可提前通知酒店前台，要求打包早餐；\n2、出行人不占床位则无法赠送早餐，需要您自行在入住酒店根据标准现补早餐费用；\n3.房型请注意选择含早餐房型，如无早餐房型，需自费",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 2,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": {
                        "key": "B",
                        "name": "早餐"
                    },
                    "includeAdult": {
                        "key": "I",
                        "name": "费用包含"
                    },
                    "includeChild": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "costInclude": {
                        "key": "",
                        "name": null
                    },
                    "cost": 0,
                    "currency": {
                        "currencyCode": "CNY"
                    },
                    "foodType": {
                        "key": null,
                        "name": null
                    },
                    "refId": "282465032761344108",
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465039296053304",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": null,
                    "name": "12:00"
                },
                "activeType": {
                    "key": 0,
                    "name": "餐饮"
                },
                "distance": 0,
                "driveTime": 0,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": null,
                    "name": null
                },
                "takeTime": 60,
                "description": "",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 4,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": {
                        "key": "L",
                        "name": "午餐"
                    },
                    "includeAdult": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "includeChild": {
                        "key": "E",
                        "name": "费用自理"
                    },
                    "costInclude": {
                        "key": "",
                        "name": null
                    },
                    "cost": 0,
                    "currency": {
                        "currencyCode": "CNY"
                    },
                    "foodType": {
                        "key": null,
                        "name": null
                    },
                    "refId": "282465032761344109",
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465039296053306",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            },
            {
                "tourDailyInfoId": null,
                "takeoffTime": {
                    "key": "A",
                    "name": "下午"
                },
                "activeType": {
                    "key": 8,
                    "name": "交通"
                },
                "distance": 0,
                "driveTime": 90,
                "transportation": {
                    "key": null,
                    "name": null
                },
                "directionType": {
                    "key": 1,
                    "name": "前往"
                },
                "takeTime": 0,
                "description": "请根据时间预订返程交通；\n返回温馨的家“",
                "productsOnSale": "",
                "specialGift": "",
                "warmTips": "",
                "sort": 6,
                "costInclude": false,
                "tourDailyHotels": [],
                "tourDailyTrains": [],
                "tourDailyCar": {
                    "businessType": null,
                    "departureLocation": null,
                    "destinationLocation": null,
                    "airport": null,
                    "trainStation": null,
                    "pickUpLocation": null,
                    "dropOffLocation": null,
                    "cars": null
                },
                "tourDailyFlights": [],
                "tourDailyPois": [
                    {
                        "tourDailyPoiId": null,
                        "poi": {
                            "poiId": 0,
                            "poiName": null,
                            "isPublished": null,
                            "poiType": {
                                "key": null,
                                "name": null
                            },
                            "district": null,
                            "location": null,
                            "openTime": null,
                            "address": null,
                            "minTakeTime": 0,
                            "maxTakeTime": 0,
                            "cost": null,
                            "currency": {
                                "currencyCode": null
                            },
                            "costUnit": {
                                "key": 1,
                                "name": "人"
                            },
                            "redPoi": false,
                            "mapType": null,
                            "longitude": null,
                            "latitude": null,
                            "ggLongitude": null,
                            "ggLatitude": null,
                            "inMainLand": null,
                            "tags": [],
                            "inShoppingBlacklist": null,
                            "inShoppingWhitelist": null,
                            "childPoiIds": null,
                            "parentPoiIds": null,
                            "invaildInfoDto": {
                                "poiId": null,
                                "poiName": null,
                                "poiStatus": null,
                                "mergeToPoiId": null,
                                "mergeToPoiName": null,
                                "poiTempStartDate": null,
                                "poiTempEndDate": null
                            },
                            "openTimeDetailDto": {
                                "hasFormatTime": null,
                                "openStatus": null,
                                "formatTimeDtos": null
                            },
                            "parentTags": [],
                            "poiLocation": null,
                            "sightZones": [],
                            "ticketType": null,
                            "relateSystemTicket": {
                                "key": "F",
                                "name": "否"
                            }
                        },
                        "sort": 1,
                        "orFlag": true,
                        "suffixName": {
                            "key": null,
                            "name": null
                        },
                        "costInclude": {
                            "key": "",
                            "name": null
                        },
                        "images": [],
                        "refId": null,
                        "parentId": null,
                        "poiSelfFundedActivities": [],
                        "groupType": {
                            "key": null,
                            "name": null
                        },
                        "groupSort": null
                    }
                ],
                "tourDailyDinner": {
                    "tourDailyDinnerId": null,
                    "dinnerType": null,
                    "includeAdult": null,
                    "includeChild": null,
                    "costInclude": null,
                    "cost": null,
                    "currency": null,
                    "foodType": null,
                    "refId": null,
                    "parentId": null
                },
                "tourDailyThemes": [],
                "tourDailyGather": null,
                "tourDailyDismiss": null,
                "tourDailyDistricts": [],
                "refId": "282465039298166799",
                "parentId": null,
                "communication": "",
                "customStatus": 0
            }
        ],
        "refId": "282465019714961422",
        "parentId": null,
        "seaCruise": false,
        "useCar": {
            "key": "N",
            "name": null
        }
    }
    return lastDay
}