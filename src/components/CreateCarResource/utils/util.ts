import * as XLSX from 'xlsx'
import { PRICE_STEP } from '~src/constant'
import { saveResource } from './saveResource'
import { savePrice } from './savePrice'
import { getVendorId } from '../../scripts/getVendorId'
import { buildExistingResourceKey } from './history'

// 辅助函数：将字符串转换为 ArrayBuffer
function s2ab(s) {
    const buf = new ArrayBuffer(s.length)
    const view = new Uint8Array(buf)
    for (let i = 0; i < s.length; i++) {
        view[i] = s.charCodeAt(i) & 0xff
    }
    return buf
}

export function downloadCarResourceWorkbook(resourceRows = [], groupRows = []) {
    const workbook = XLSX.utils.book_new()
    appendDomesticCarResourceSheet(workbook, resourceRows)
    appendDomesticCarResourceGroupSheet(workbook, groupRows)

    const excelData = XLSX.write(workbook, { type: 'binary' })
    const blobData = new Blob([s2ab(excelData)], {
        type: 'application/octet-stream'
    })
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(blobData)
    downloadLink.download = `用车资源-${formatNowForFileName()}.xlsx`
    downloadLink.click()
}

const domesticCarColumns = [
    {
        key: '经济5座',
        labels: ['经济5座', '5座经济'],
        resourceName: '5座经济型车(1-3)',
        headers: ['资源名称1-3人', '资源描述', 'ID号'],
    },
    {
        key: '舒适5座',
        labels: ['舒适5座', '5座舒适'],
        resourceName: '5座舒适型车(1-4)',
        headers: ['资源名称1-4人', '资源描述', 'ID号'],
    },
    {
        key: '商务7座',
        labels: ['商务7座', '7座'],
        resourceName: '7座商务车(1-5)',
        headers: ['资源名称 1-5人', '资源描述', 'ID号'],
    },
    {
        key: '9座小巴',
        labels: ['9座小巴', '商务9座', '9座'],
        resourceName: '9座商务车(1-7)',
        headers: ['资源名称 1-7人', '资源描述', 'ID号'],
    },
    {
        key: '12座中巴',
        labels: ['12座中巴', '12座'],
        resourceName: '12座车(1-10)',
        headers: ['资源名称 1-10人', '资源描述', 'ID号'],
    },
    {
        key: '14座中巴',
        labels: ['14座中巴', '14座'],
        resourceName: '14座用车',
        headers: ['资源名称 1-12人', '资源描述', 'ID号'],
    },
    {
        key: '19座中巴',
        labels: ['19座中巴', '19座'],
        resourceName: '19座用车',
        headers: ['资源名称1-15人', '资源描述', 'ID号'],
    },
]

function appendDomesticCarResourceSheet(workbook, resourceRows) {
    const validRows = resourceRows.filter((row) => row.resourceId && row.createStatus === 'success')
    const groupedRows = domesticCarColumns.map((column) => {
        return validRows
            .filter((row) => getDomesticCarKey(row.label || row.carName || '') === column.key)
            .sort((a, b) => Number(a.price) - Number(b.price))
    })
    const maxRows = Math.max(0, ...groupedRows.map((rows) => rows.length))
    const trailingBlankColumns = ['', '', '']
    const domesticColumnCount = domesticCarColumns.length * 3 + trailingBlankColumns.length
    const rows = [
        new Array(domesticColumnCount).fill(''),
        ['提前预订：1天12点 是否必选：是 是否默认：是 单位：辆 份数算法：每单', ...new Array(domesticColumnCount - 1).fill('')],
        [...domesticCarColumns.flatMap((column) => column.headers), ...trailingBlankColumns],
    ]

    for (let index = 0; index < maxRows; index++) {
        rows.push([
            ...domesticCarColumns.flatMap((column, columnIndex) => {
                const row = groupedRows[columnIndex][index]
                if (!row) {
                    return ['', '', '']
                }
                return [column.resourceName, Number(row.price), row.resourceId]
            }),
            ...trailingBlankColumns,
        ])
    }

    const worksheet = XLSX.utils.aoa_to_sheet(rows)
    worksheet['!cols'] = [
        ...domesticCarColumns.flatMap(() => [
            { width: 22 },
            { width: 12 },
            { width: 14 },
        ]),
        { width: 12 },
        { width: 12 },
        { width: 12 },
    ]
    worksheet['!merges'] = [{ s: { r: 1, c: 0 }, e: { r: 1, c: domesticColumnCount - 1 } }]
    XLSX.utils.book_append_sheet(workbook, worksheet, '国内车辆资源')
}

function appendDomesticCarResourceGroupSheet(workbook, groupRows) {
    const rows = [
        ['资源组ID', '资源组名称', '', '', ''],
        ...groupRows
            .filter((row) => row.resourceGroupId && row.status === 'success')
            .map((row) => [row.resourceGroupId, row.resourceGroupName || '', '', '', '']),
    ]
    const worksheet = XLSX.utils.aoa_to_sheet(rows)
    worksheet['!cols'] = [{ width: 14 }, { width: 90 }, { width: 12 }, { width: 12 }, { width: 12 }]
    XLSX.utils.book_append_sheet(workbook, worksheet, '国内用车资源组')
}

function getDomesticCarKey(text) {
    const source = String(text || '').split(/[:：]/)[0].trim()
    const aliases = domesticCarColumns
        .flatMap((column) => column.labels.map((label) => ({ key: column.key, label })))
        .sort((prev, next) => next.label.length - prev.label.length)
    const matched = aliases.find(({ label }) => source.includes(label) || String(text || '').includes(label))
    return matched?.key || source
}

function formatNowForFileName() {
    const date = new Date()
    const pad = (value) => String(value).padStart(2, '0')
    return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日${pad(date.getHours())}时${pad(date.getMinutes())}分`
}

type CreateCarResourcePriceOptions = {
    startDate?: string;
    endDate?: string;
    existingResourceMap?: Map<string, any>;
}

export function collectExistingCarResourceRows(car, existingResourceMap?: Map<string, any>) {
    const rows = []
    const missingPrices = []
    for (let price = Number(car.start); price <= Number(car.end); price += PRICE_STEP) {
        const row = buildCarResourceRow(car, price)
        const existingResource = existingResourceMap?.get(
            buildExistingResourceKey(car.label || car.carName, price)
        )
        if (existingResource?.resourceId) {
            row.resourceId = existingResource.resourceId
            row.createStatus = 'success'
            row.priceStatus = 'history'
            row.createdAt = existingResource.createTime || existingResource.createdAt || new Date().toISOString()
            rows.push(row)
            continue
        }
        missingPrices.push(price)
    }
    return { rows, missingPrices }
}

export const createCarResource = async (
    car,
    user,
    callback,
    vendorId?: string | number,
    priceOptions: CreateCarResourcePriceOptions = {}
) => {
    const currentVendorId = vendorId ?? await getVendorId()
    const { rows, missingPrices } = collectExistingCarResourceRows(car, priceOptions.existingResourceMap)
    for (const row of rows) {
        callback(row)
    }
    const createdRows = await createCarResourcesByPrices(
        car,
        user,
        missingPrices,
        callback,
        currentVendorId,
        priceOptions
    )
    return [...rows, ...createdRows]
}

export async function createCarResourcesByPrices(
    car,
    user,
    prices: number[],
    callback,
    vendorId?: string | number,
    priceOptions: CreateCarResourcePriceOptions = {}
) {
    const currentVendorId = vendorId ?? await getVendorId()
    const results = []
    for (const i of prices) {
        const row = buildCarResourceRow(car, i)
        try {
            const resource = await saveResource({
                ...car,
                price: i
            }, user, currentVendorId)
            row.resourceId = resource.resourceId
            row.createStatus = 'success'
            await savePrice(resource.resourceId, i, currentVendorId, priceOptions);
            row.priceStatus = 'success'
        } catch (error) {
            console.error(i, car, error)
            row.createStatus = row.resourceId ? 'success' : 'failed'
            row.priceStatus = row.resourceId ? 'failed' : 'skipped'
            row.error = error instanceof Error ? error.message : String(error)
        }
        results.push(row)
        callback(row)
    }
    return results
}

function buildCarResourceRow(car, price: number) {
    return {
        ...car,
        price,
        resourceId: '',
        createStatus: 'pending',
        priceStatus: 'pending',
        error: '',
        createdAt: new Date().toISOString()
    }
}
