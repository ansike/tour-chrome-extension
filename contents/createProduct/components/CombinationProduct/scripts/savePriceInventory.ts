import { getPackageList } from "../../scripts/savePackageItem"

export const savePriceInventory = async (
    productId: string | number,
    products: any[]
) => {
    const curResult = await getPackageList(productId)
    console.log(curResult)

    const { optionalResourceId, singleResourceId } = curResult.itemList[0]

    const dateArrs = await Promise.all(products.map(pro => getPriceArr(pro.baseInfo.productId)))

    console.log(dateArrs)
    // 获取前一个产品的价格+日期信息
    const dateArr = mergeDateArr(dateArrs);
    // console.log(dateArr)
    const groups = groupBy(dateArr, it => it.adultPrice.cost)

    // 将前一个产品的日期+价格 写入新的产品
    const res = await Promise.all(
        Object.keys(groups).map(async price => {
            let dates = groups[price].map(it => it.adultPrice.date)
            if (dates.length > 370) {
                await savePriceInventoryFetch({
                    productId,
                    dates: dates.slice(0, 300),
                    singleResourceId,
                    optionalResourceId,
                    priceObj: groups[price][0]
                })
                dates = dates.slice(300)
            }
            return savePriceInventoryFetch({
                productId,
                dates,
                singleResourceId,
                optionalResourceId,
                priceObj: groups[price][0]
            })
        })
    )
    console.log('savePriceInventory', res)
    return res
}

export const savePriceInventoryFetch = async props => {
    const {
        productId,
        dates,
        singleResourceId,
        optionalResourceId,
        priceObj
    } = props
    const saveBody = {
        contentType: 'json',
        head: {
            cid: '09031015310214817373',
            ctok: '',
            cver: '1.0',
            lang: '01',
            sid: '8888',
            syscode: '09',
            auth: '',
            extension: []
        },
        priceTerms: 1,
        priceInputType: 1,
        optionalResourceId,
        type: 'A',
        dateChoose: {
            submitType: 'D',
            dates
        },
        singleResourcePriceInventory: {
            price: {
                adultCostPrice: priceObj?.adultPrice?.cost,
                adultSalePrice: priceObj?.adultPrice?.marketPrice,
                chdCostPrice: priceObj?.childPrice?.cost,
                chdSalePrice: priceObj?.childPrice?.marketPrice
            },
            inventory: {
                isLimit: priceObj?.inventory?.isLimit,
                isExceed: priceObj?.inventory?.isExceed,
                total: priceObj?.inventory?.total
            }
        },
        tourInfoId: -1,
        productId: productId,
        singleResourceId
    }

    const dateRes = await fetch(
        'https://online.ctrip.com/restapi/soa2/15638/savePriceInventory?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373',
        {
            headers: {
                accept: '*/*',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                cookieorigin: 'https://vbooking.ctrip.com',
                pragma: 'no-cache',
                priority: 'u=1, i',
                'sec-ch-ua':
                    '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'x-ctx-locale': 'zh-CN'
            },
            referrer:
                'https://vbooking.ctrip.com/ivbk/vendor/priceInventory?productid=48465278&istab=1&from=vbk',
            referrerPolicy: 'no-referrer-when-downgrade',
            body: JSON.stringify(saveBody),
            method: 'POST',
            mode: 'cors',
            credentials: 'include'
        }
    )

    return await dateRes.json()
}
export const getBatchOperateSchedule = async props => {
    const { productId, yearMonth, singleResourceId, optionalResourceId } = props
    const body = {
        contentType: 'json',
        head: {
            cid: '09031015310214817373',
            ctok: '',
            cver: '1.0',
            lang: '01',
            sid: '8888',
            syscode: '09',
            auth: '',
            extension: []
        },
        packageKey: {
            masterResourceId: singleResourceId,
            servantResourceId: optionalResourceId
        },
        productId: productId,
        yearMonth: yearMonth
    }

    const dateRes = await fetch(
        'https://online.ctrip.com/restapi/soa2/15638/GetBatchOperateSchedule?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373',
        {
            headers: {
                accept: '*/*',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                cookieorigin: 'https://vbooking.ctrip.com',
                pragma: 'no-cache',
                priority: 'u=1, i',
                'sec-ch-ua':
                    '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"macOS"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'x-ctx-locale': 'zh-CN'
            },
            referrerPolicy: 'no-referrer-when-downgrade',
            body: JSON.stringify(body),
            method: 'POST',
            mode: 'cors',
            credentials: 'include'
        }
    )

    return await dateRes.json()
}


const mergeDateArr = (dateArrs: any[]) => {
    const dateArr = []
    const min = Math.min(...dateArrs.map(arr => arr.length))
    for (let i = 0; i < min; i++) {
        let flag = false
        let temp = {} as any
        for (let j = 0; j < dateArrs.length; j++) {
            const cur = dateArrs[j][i]
            // 如果中间有空或者日期不等，直接跳过
            if (!cur?.adultPrice?.cost || (temp?.adultPrice?.date && temp?.adultPrice?.date !== cur?.adultPrice?.date)) {
                flag = true
                break
            }
            if (!temp?.adultPrice?.date) {
                temp = JSON.parse(JSON.stringify(cur))
            } else {
                temp.adultPrice.cost += cur.adultPrice.cost
                temp.adultPrice.marketPrice += cur.adultPrice.marketPrice
                temp.childPrice.cost += cur.childPrice.cost
                temp.childPrice.marketPrice += cur.childPrice.marketPrice
                temp.inventory.total = Math.min(temp.inventory.total, cur.inventory.total)
                temp.inventory.totalNum = Math.min(temp.inventory.totalNum, cur.inventory.totalNum)
            }
        }
        if (flag) {
            continue
        } else {
            dateArr.push(temp)
        }
    }
    return dateArr
}
const getPriceArr = async (productId: string | number) => {
    // prev product
    const preResult = await getPackageList(productId)
    const { optionalResourceId: prevOptionalResourceId, singleResourceId: prevSingleResourceId } = preResult.itemList[0]

    // 获取前一个产品的价格+日期信息
    const dateArr = []
    let yearMonth = getCurrentYearMonth()
    while (true) {
        const res = await getBatchOperateSchedule({
            productId: productId,
            yearMonth: yearMonth,
            singleResourceId: prevSingleResourceId,
            optionalResourceId: prevOptionalResourceId
        })
        const filteredData = res.dates.filter(date => date.adultPrice)
        dateArr.push(...filteredData)
        const lastDate = res.dates[res.dates.length - 1]
        // 没有成人或者儿童，认为以后的日期不需要继续，跳出当前循环
        if (!lastDate?.adultPrice?.cost || !lastDate?.childPrice?.cost) {
            break
        }
        yearMonth = getNextMonth(yearMonth)
    }
    return dateArr
}
/**
 * 计算给定年月字符串的下一个月的年月字符串
 * @param {string} yearMonth - 格式为 "YYYY-MM" 的年月字符串
 * @returns {string} - 下一个月的年月字符串,格式为 "YYYY-MM"
 */
export function getNextMonth(yearMonth) {
    // 将年月字符串拆分为年和月
    const [year, month] = yearMonth.split('-')

    // 将月份转换为数字
    const monthNum = parseInt(month)

    // 计算下一个月
    let nextMonthNum = monthNum + 1
    let nextYear = parseInt(year)

    // 如果下一个月超过12月,则进入下一年
    if (nextMonthNum > 12) {
        nextMonthNum = 1
        nextYear += 1
    }

    // 将数字转换回字符串格式
    const nextMonthStr = nextMonthNum.toString().padStart(2, '0')
    const nextYearMonth = `${nextYear}-${nextMonthStr}`

    return nextYearMonth
}

/**
 * 获取当前年月字符串,格式为 "YYYY-MM"
 * @returns {string} - 当前年月字符串
 */
export function getCurrentYearMonth() {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    return `${year}-${month}`
}

/**
 * 根据指定的键对数组进行分组
 * @param {Array} arr - 需要分组的数组
 * @param {string|Function} key - 用于分组的键,可以是属性名字符串或者自定义的函数
 * @returns {Object} - 分组后的对象,键为分组依据,值为对应的分组数组
 */
export function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key]
        if (!result[groupKey]) {
            result[groupKey] = []
        }
        result[groupKey].push(item)
        return result
    }, {})
}


