import * as XLSX from 'xlsx'
import { PRICE_STEP } from '~contents/createProduct/constant'
import { saveResource } from './saveResource'
import { savePrice } from './savePrice'
import { sleep } from '../../util'

// 辅助函数：将字符串转换为 ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff
    }
    return buf
}

/**
 * 
 * @param data json 格式
 * 
    // const newData = [
    //     {
    //         "5座ID": "1",
    //         "5座价格": "1"
    //     },
    //     {
    //         "5座ID": "2",
    //         "5座价格": "2"
    //     },
    // ]
 */

export function downloadXslx(data) {
    console.log({ data })
    const newData = []
    data.forEach((d) => {
        d.items?.forEach((i, idx) => {
            const curObj = newData[idx];
            if (curObj) {
                curObj[d.label + "ID"] = i
                curObj[d.label + "价格"] = d.start + idx * PRICE_STEP
            } else {
                newData[idx] = {
                    [d.label + "ID"]: i,
                    [d.label + "价格"]: d.start + idx * PRICE_STEP
                }
            }
        })
    })

    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(newData)

    const headerRowCells = XLSX.utils.sheet_to_json(worksheet, { range: 1 })
    const colWidths = headerRowCells.map(cell => ({
        width: 20, // 设置宽度为 20 个字符
        alignment: { horizontal: 'left' } // 设置对齐方式为左对齐
    }))
    worksheet['!cols'] = colWidths

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const excelData = XLSX.write(workbook, { type: 'binary' })
    const blobData = new Blob([s2ab(excelData)], {
        type: 'application/octet-stream'
    })

    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(blobData)
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    const hour = date.getHours()
    const min = date.getMinutes()
    downloadLink.download = `用车资源-${year}年${month}月${day}日${hour}时${min}分.xlsx`
    downloadLink.click()
}

export function downloadCarResources(data) {
    console.log({ data })

    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(data)

    const headerRowCells = XLSX.utils.sheet_to_json(worksheet, { range: 1 })
    const colWidths = headerRowCells.map(cell => ({
        width: 20, // 设置宽度为 20 个字符
        alignment: { horizontal: 'left' } // 设置对齐方式为左对齐
    }))
    worksheet['!cols'] = colWidths

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const excelData = XLSX.write(workbook, { type: 'binary' })
    const blobData = new Blob([s2ab(excelData)], {
        type: 'application/octet-stream'
    })

    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(blobData)
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    const hour = date.getHours()
    const min = date.getMinutes()
    downloadLink.download = `用车资源-${year}年${month}月${day}日${hour}时${min}分.xlsx`
    downloadLink.click()
}

export const createCarResource = async (car, user, callback) => {
    const { start, end } = car
    for (let i = start; i <= end; i += PRICE_STEP) {
        try {
            const resource = await saveResource({
                ...car,
                price: i
            }, user)
            await savePrice(resource.resourceId, i);
            callback({
                ...car,
                resourceId: resource.resourceId
            })
        } catch (error) {
            console.error(i, car, error)
            throw error
        }
    }
}