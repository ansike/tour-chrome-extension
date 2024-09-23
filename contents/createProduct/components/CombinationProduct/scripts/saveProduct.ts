import { getSaleControlInfoDto, venderId } from "~contents/createProduct/constant"
import { saveProductBaseInfo } from "../../scripts/saveProductBaseInfo";
import { createProductDraft } from "../../scripts/saveProductResource";

// TODO 获取当前用户
export const saveProduct = async (productId: string | number, products: any[], subTitle: string) => {

    const saleControlInfoDto = await getSaleControlInfoDto();

    // 循环获取组合产品基础信息中的所有天数，增加前后两天的到达和返程
    const travelDays = getTravelDays(products)
    // 住宿晚数在天数上减少1
    const travelNights = travelDays - 1
    const cities = products.map((cur) => cur.nameAreas[0].pOIDistrictName).join("+")
    const mainName = `${cities}${travelDays}日${travelNights}晚私家团`
    const subName = subTitle
    const name = `${mainName}·${subName}`
    const providerProductName = 'TEST-安思科'
    const baseInfo = {
        productId,
        travelDays,
        "maxTravelDays": travelDays,
        "productLevel": 0,
        name,
        "masterDepartureCityId": 4,
        "destinationCityID": 4,
        "brandId": saleControlInfoDto.brandId,
        "vendorProductCode": "",
        providerProductName,
        "phone400": "173874",
        "operationNote": "",
        "userGroupId": 1000335089,
        "vendorId": venderId,
        "isSimpleTour": "",
        // "active": "F",
        active: "D",
        "businessOwner": "VBK",
        "serviceLanguages": [
            1
        ],
        "defaultServiceLanguages": [
            1
        ],
        "isServiceLanguageInput": false,
        "isCityManage": "F",
        "priceCurrency": "RMB",
        "isExtendToStay": "F",
        "priceDescription": "",
        "price": 0,
        "isAutoCalculateProductLevel": "T",
        "productLevelSwitch": "T",
        "categoryPropertyPkgId": 0,
        "useTripResource": "T",
        "distributionChannels": [
            "ctripshop",
            "bestone",
            "youtripshop",
            "bestoneb2b",
            "ctrip",
            "tripsystem"
        ],
        "preSaleStatus": 0,
        travelNights,
        mainName,
        subName
    }

    const nameAreaRules = products.map((cur) => cur.nameAreas[0])
    const product = {
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
        baseInfo,
        "bookingControl": products[0].bookingControls,
        "nameAreaRules": nameAreaRules,
        "meta": {
            "auditStatus": "N",
            "canEditSubName": "T",
            "canEditTravelDays": "T",
            "saveStep": -70,
            "tourDailys": 0,
            "isBaseInfoSwitched": "T",
            "isonline": "F",
            "releaseActive": "F",
            "resourceApproveStatus": "N",
            "priceApproveStatus": "N",
            "inventoryApproveStatus": "N",
            "nameJoinRuleDto": {
                "day": "%1$s日",
                "days": "%1$s日",
                "night": "%1$s晚",
                "nights": "%1$s晚",
                "pattern": "私家团",
                "destinationJoiner": "+",
                "diamonds": "(%1$s钻)",
                "mainName": "%1$s%2$s%3$s%4$s%5$s",
                "name": "%1$s·%2$s"
            },
            "isProductLevelSwitched": "T",
            "canUserMoreLocale": "F",
            "isChildrenPriceSwitched": "T",
            "workTemplateOpen": "T",
            "hasEditPermission": "T",
            "isChild": false,
            "canEditCategoryProperty": "F",
            "useNewTourDaily": true,
            "hiddenSkuInfo": false,
            "switches": {
                "canEditPM": "F",
                "productLevelAudit": "T",
                "vendorContactMouldSwitch": "T",
                "PoiInvalidIntercept": "F",
                "PoiInvalidOpen": "T",
                "nameAudit": "T",
                "loanTerms": "F",
                "goldTourGuide": "T"
            },
            "canSelfCheck": "F",
            "isIncludeFlight": false,
            "hasTripResourcePermission": true,
            "noTripResourcePermissionReason": {},
            "plateTag": "destination",
            "minTourInfoScore": 80,
            "isGeneralPackage": "F",
            "saveType": 2,
            "resizeTourDailyInfo": "F"
        },
        "advancedSettings": {
            "pMEID": "l.chen37",
            "pAEID": "wangyongxiang",
            "productRegionID": 1604,
            "productManagerConfigId": 18194,
            "productRegionName": "渝鄂私家团",
            "effectDate": "2024-09-13",
            "expireDate": "2024-09-13",
            "effectDays": 0,
            "isJudgeForeigner": "F",
            "isAutoProcess": "T",
            "productDistributionChannals": [],
            "paymentTypes": [
                1,
                2,
                4,
                16,
                64,
                256,
                512,
                1024
            ],
            "distributionPriceWay": "C",
            "skuCommissionRate": 2.5,
            "adjustWay": "P",
            "isAutoCalculatePrice": "T",
            "tags": [],
            "isVendorHasGoldGuide": "F"
        },
        "scenicSpots": [],
        "resourceFields": {},
        "clause": {
            "formalDtos": [
                {
                    "clauseItemId": 3031,
                    "itemCode": "3031"
                },
                {
                    "clauseItemId": 2037,
                    "itemCode": "2037"
                },
                {
                    "clauseItemId": 32230,
                    "itemCode": "32230"
                },
                {
                    "clauseItemId": 32269,
                    "itemCode": "32269"
                },
                {
                    "clauseItemId": 32370,
                    "itemCode": "32370"
                },
                {
                    "clauseItemId": 335,
                    "itemCode": "335"
                },
                {
                    "clauseItemId": 378,
                    "itemCode": "378"
                },
                {
                    "clauseItemId": 642,
                    "itemCode": "642"
                },
                {
                    "clauseItemId": 32598,
                    "itemCode": "32598"
                },
                {
                    "clauseItemId": 36583,
                    "itemCode": "36583"
                },
                {
                    "clauseItemId": 935,
                    "itemCode": "935"
                },
                {
                    "clauseItemId": 936,
                    "itemCode": "936"
                },
                {
                    "clauseItemId": 939,
                    "itemCode": "939"
                },
                {
                    "clauseItemId": 32752,
                    "itemCode": "32752"
                },
                {
                    "clauseItemId": 944,
                    "itemCode": "944"
                }
            ],
            "draftDtos": [],
            "requiredDtos": [
                {
                    "clauseItemId": 46,
                    "itemCode": "46"
                },
                {
                    "clauseItemId": 335,
                    "itemCode": "335"
                },
                {
                    "clauseItemId": 378,
                    "itemCode": "378"
                },
                {
                    "clauseItemId": 32230,
                    "itemCode": "32230"
                },
                {
                    "clauseItemId": 32370,
                    "itemCode": "32370"
                },
                {
                    "clauseItemId": 32598,
                    "itemCode": "32598"
                }
            ],
            "suitableDtos": [
                {
                    "clauseItemId": 3,
                    "itemCode": "3"
                },
                {
                    "clauseItemId": 4,
                    "itemCode": "4"
                },
                {
                    "clauseItemId": 7,
                    "itemCode": "7"
                },
                {
                    "clauseItemId": 12,
                    "itemCode": "12"
                },
                {
                    "clauseItemId": 13,
                    "itemCode": "13"
                },
                {
                    "clauseItemId": 19,
                    "itemCode": "19"
                },
                {
                    "clauseItemId": 43,
                    "itemCode": "43"
                },
                {
                    "clauseItemId": 46,
                    "itemCode": "46"
                },
                {
                    "clauseItemId": 70,
                    "itemCode": "70"
                },
                {
                    "clauseItemId": 98,
                    "itemCode": "98"
                },
                {
                    "clauseItemId": 134,
                    "itemCode": "134"
                },
                {
                    "clauseItemId": 140,
                    "itemCode": "140"
                },
                {
                    "clauseItemId": 179,
                    "itemCode": "179"
                },
                {
                    "clauseItemId": 180,
                    "itemCode": "180"
                },
                {
                    "clauseItemId": 335,
                    "itemCode": "335"
                },
                {
                    "clauseItemId": 363,
                    "itemCode": "363"
                },
                {
                    "clauseItemId": 371,
                    "itemCode": "371"
                },
                {
                    "clauseItemId": 373,
                    "itemCode": "373"
                },
                {
                    "clauseItemId": 378,
                    "itemCode": "378"
                },
                {
                    "clauseItemId": 383,
                    "itemCode": "383"
                },
                {
                    "clauseItemId": 411,
                    "itemCode": "411"
                },
                {
                    "clauseItemId": 430,
                    "itemCode": "430"
                },
                {
                    "clauseItemId": 434,
                    "itemCode": "434"
                },
                {
                    "clauseItemId": 439,
                    "itemCode": "439"
                },
                {
                    "clauseItemId": 467,
                    "itemCode": "467"
                },
                {
                    "clauseItemId": 468,
                    "itemCode": "468"
                },
                {
                    "clauseItemId": 473,
                    "itemCode": "473"
                },
                {
                    "clauseItemId": 478,
                    "itemCode": "478"
                },
                {
                    "clauseItemId": 479,
                    "itemCode": "479"
                },
                {
                    "clauseItemId": 485,
                    "itemCode": "485"
                },
                {
                    "clauseItemId": 486,
                    "itemCode": "486"
                },
                {
                    "clauseItemId": 491,
                    "itemCode": "491"
                },
                {
                    "clauseItemId": 538,
                    "itemCode": "538"
                },
                {
                    "clauseItemId": 554,
                    "itemCode": "554"
                },
                {
                    "clauseItemId": 563,
                    "itemCode": "563"
                },
                {
                    "clauseItemId": 642,
                    "itemCode": "642"
                },
                {
                    "clauseItemId": 820,
                    "itemCode": "820"
                },
                {
                    "clauseItemId": 935,
                    "itemCode": "935"
                },
                {
                    "clauseItemId": 936,
                    "itemCode": "936"
                },
                {
                    "clauseItemId": 939,
                    "itemCode": "939"
                },
                {
                    "clauseItemId": 944,
                    "itemCode": "944"
                },
                {
                    "clauseItemId": 991,
                    "itemCode": "991"
                },
                {
                    "clauseItemId": 1012,
                    "itemCode": "1012"
                },
                {
                    "clauseItemId": 1077,
                    "itemCode": "1077"
                },
                {
                    "clauseItemId": 1079,
                    "itemCode": "1079"
                },
                {
                    "clauseItemId": 1082,
                    "itemCode": "1082"
                },
                {
                    "clauseItemId": 1089,
                    "itemCode": "1089"
                },
                {
                    "clauseItemId": 1095,
                    "itemCode": "1095"
                },
                {
                    "clauseItemId": 1101,
                    "itemCode": "1101"
                },
                {
                    "clauseItemId": 1120,
                    "itemCode": "1120"
                },
                {
                    "clauseItemId": 1144,
                    "itemCode": "1144"
                },
                {
                    "clauseItemId": 1145,
                    "itemCode": "1145"
                },
                {
                    "clauseItemId": 1153,
                    "itemCode": "1153"
                },
                {
                    "clauseItemId": 1163,
                    "itemCode": "1163"
                },
                {
                    "clauseItemId": 1174,
                    "itemCode": "1174"
                },
                {
                    "clauseItemId": 2013,
                    "itemCode": "2013"
                },
                {
                    "clauseItemId": 2037,
                    "itemCode": "2037"
                },
                {
                    "clauseItemId": 3002,
                    "itemCode": "3002"
                },
                {
                    "clauseItemId": 3006,
                    "itemCode": "3006"
                },
                {
                    "clauseItemId": 3007,
                    "itemCode": "3007"
                },
                {
                    "clauseItemId": 3008,
                    "itemCode": "3008"
                },
                {
                    "clauseItemId": 3010,
                    "itemCode": "3010"
                },
                {
                    "clauseItemId": 3011,
                    "itemCode": "3011"
                },
                {
                    "clauseItemId": 3012,
                    "itemCode": "3012"
                },
                {
                    "clauseItemId": 3014,
                    "itemCode": "3014"
                },
                {
                    "clauseItemId": 3016,
                    "itemCode": "3016"
                },
                {
                    "clauseItemId": 3017,
                    "itemCode": "3017"
                },
                {
                    "clauseItemId": 3018,
                    "itemCode": "3018"
                },
                {
                    "clauseItemId": 3031,
                    "itemCode": "3031"
                },
                {
                    "clauseItemId": 3035,
                    "itemCode": "3035"
                },
                {
                    "clauseItemId": 10002,
                    "itemCode": "10002"
                },
                {
                    "clauseItemId": 10049,
                    "itemCode": "10049"
                },
                {
                    "clauseItemId": 10065,
                    "itemCode": "10065"
                },
                {
                    "clauseItemId": 10066,
                    "itemCode": "10066"
                },
                {
                    "clauseItemId": 10067,
                    "itemCode": "10067"
                },
                {
                    "clauseItemId": 10068,
                    "itemCode": "10068"
                },
                {
                    "clauseItemId": 10069,
                    "itemCode": "10069"
                },
                {
                    "clauseItemId": 10070,
                    "itemCode": "10070"
                },
                {
                    "clauseItemId": 10071,
                    "itemCode": "10071"
                },
                {
                    "clauseItemId": 10072,
                    "itemCode": "10072"
                },
                {
                    "clauseItemId": 10073,
                    "itemCode": "10073"
                },
                {
                    "clauseItemId": 10074,
                    "itemCode": "10074"
                },
                {
                    "clauseItemId": 10075,
                    "itemCode": "10075"
                },
                {
                    "clauseItemId": 10076,
                    "itemCode": "10076"
                },
                {
                    "clauseItemId": 10077,
                    "itemCode": "10077"
                },
                {
                    "clauseItemId": 10078,
                    "itemCode": "10078"
                },
                {
                    "clauseItemId": 10079,
                    "itemCode": "10079"
                },
                {
                    "clauseItemId": 10080,
                    "itemCode": "10080"
                },
                {
                    "clauseItemId": 10081,
                    "itemCode": "10081"
                },
                {
                    "clauseItemId": 10087,
                    "itemCode": "10087"
                },
                {
                    "clauseItemId": 10088,
                    "itemCode": "10088"
                },
                {
                    "clauseItemId": 10089,
                    "itemCode": "10089"
                },
                {
                    "clauseItemId": 10090,
                    "itemCode": "10090"
                },
                {
                    "clauseItemId": 10091,
                    "itemCode": "10091"
                },
                {
                    "clauseItemId": 10092,
                    "itemCode": "10092"
                },
                {
                    "clauseItemId": 10094,
                    "itemCode": "10094"
                },
                {
                    "clauseItemId": 10095,
                    "itemCode": "10095"
                },
                {
                    "clauseItemId": 10096,
                    "itemCode": "10096"
                },
                {
                    "clauseItemId": 10097,
                    "itemCode": "10097"
                },
                {
                    "clauseItemId": 10105,
                    "itemCode": "10105"
                },
                {
                    "clauseItemId": 20012,
                    "itemCode": "20012"
                },
                {
                    "clauseItemId": 31635,
                    "itemCode": "31635"
                },
                {
                    "clauseItemId": 32230,
                    "itemCode": "32230"
                },
                {
                    "clauseItemId": 32269,
                    "itemCode": "32269"
                },
                {
                    "clauseItemId": 32370,
                    "itemCode": "32370"
                },
                {
                    "clauseItemId": 32598,
                    "itemCode": "32598"
                },
                {
                    "clauseItemId": 32716,
                    "itemCode": "32716"
                },
                {
                    "clauseItemId": 32752,
                    "itemCode": "32752"
                },
                {
                    "clauseItemId": 33006,
                    "itemCode": "33006"
                },
                {
                    "clauseItemId": 36408,
                    "itemCode": "36408"
                },
                {
                    "clauseItemId": 36583,
                    "itemCode": "36583"
                }
            ]
        }
    }
    console.log(product)
    // const craft = await createProductDraft(productId)
    // console.log(craft)
    const res = await saveProductBaseInfo(product)
    console.log(res)
}


export const getTravelDays = (products) => {
    return products.reduce((acc, cur) => acc + cur.baseInfo.travelDays, 0) + 2
}