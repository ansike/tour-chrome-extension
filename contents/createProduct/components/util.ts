import * as XLSX from 'xlsx'
import type { TourDay } from './CreateModal/interface'
import type { TourDailyDescription } from './scripts/getProductBaseInfo'
import { createSubProduct } from './scripts/createSubProduct'
import { saveProductRichText } from './scripts/savedescriptioninfo'
import { saveSubProductResource } from './scripts/saveSubProductResource'
import { saveSubTourDailyDetail } from './scripts/saveSubTourDailyDetail'
import { saveSubClauses } from './scripts/saveSubClauses'
import { activeSubProduct, getPackageId } from './scripts/updateSubResourceActive'
import { subProductCategories } from './CreateModal/constant'
import { productDuplicate } from './scripts/productDuplicate'
import { saveSaleControlInfo } from './scripts/saveSaleControlInfo'
import { saveProduct } from './scripts/saveProductBaseInfo'
import { saveTourDailyDetail } from './scripts/saveTourDailyDetail'
import { savePackage } from './scripts/savePackageItem'
import { savePriceInventory } from './scripts/savePriceInventory'
import { saveProductResource } from './scripts/saveProductResource'
import { saveClauses } from './scripts/saveClauses'
import { updateResourceActive } from './scripts/updateResourceActive'

export const parseHtmlToObj = (html: string) => {
  const match = html.match(/<script>([\s\S]*?)<\/script>/)
  if (match) {
    // TODO 换一个方法获取 product 基础数据
    const str = match[1].split(' = ')[2].split('\n')[0]
    // const obj = JSON.parse(str)
    return JSON.parse(str)
  } else {
    console.log('Unable to find __INITIAL_STATE__ object in the input string.')
    return
  }
}

export function exportExcelToNestedJSON(excelData: any) {
  try {
    // 读取 Excel 数据
    const workbook = XLSX.read(excelData, { type: 'array' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    // 获取表头信息
    const headers = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 0 })

    // 构建表头对象
    const headerObj = {}
    headers.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const mergedCell = getMergedCellValue(worksheet, rowIndex, colIndex)
        if (!headerObj[colIndex]) {
          headerObj[colIndex] = []
        }
        headerObj[colIndex][rowIndex] = mergedCell || cell
      })
    })

    // 将 Excel 数据转换为嵌套的 JSON 格式
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: (row, index) => {
        const keys = Object.keys(headerObj)
        return keys.map(key => headerObj[key][index]).join('.')
      },
      range: 1, // 从第二行开始
      blankrows: false // 忽略空行
    })

    // 格式化 JSON 输出
    const formattedJSON = JSON.stringify(jsonData, null, 2)

    return formattedJSON
  } catch (error) {
    console.error('Error exporting Excel to nested JSON:', error)
    throw error
  }
}

// 获取合并单元格的值
export function getMergedCellValue(worksheet, rowIndex, colIndex) {
  const cell = worksheet[XLSX.utils.encode_cell({ r: rowIndex, c: colIndex })]
  if (cell && cell.l && cell.l.target) {
    const { r: mergedRowIndex, c: mergedColIndex } = XLSX.utils.decode_cell(
      cell.l.target
    )
    if (mergedRowIndex <= rowIndex && mergedColIndex <= colIndex) {
      return worksheet[
        XLSX.utils.encode_cell({ r: mergedRowIndex, c: mergedColIndex })
      ].v
    }
  }
  return null
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 辅助函数：将字符串转换为 ArrayBuffer
function s2ab(s) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buf
}

export function formatData(productId, data) {
  const { routes } = data

  const result = { productId }

  routes.forEach((item, index) => {
    result[`day-${index + 1}`] = item.dailyDescription
  })
  return result
}

/**
 * 
 * @param data json 格式
 * const jsonData = [
    { productID: 'pid-1', day1: 'xxx', day2: 'xxxx', day3: 'xxxx' },
    { productID: 'pid-2', day1: 'xxx', day2: 'xxxx', day3: 'xxxx'  },
  ];
  [
    {
        "productId": 48481211,
        "day-1": "【出发地-成都】接机/站-宽窄巷子-蜀风雅韵-锦里-酒店 | 专车",
        "day-2": "【成都-广汉 古蜀探秘】熊猫基地-三星堆 | 专车",
        "day-3": "【成都-都江堰】都江堰-青城山 | 专车",
        "day-4": "【成都】成都市区一日citywalk   |  无车无导",
        "day-5": "【成都-返程】自由活动-返程 | 专车送机/站服务"
    },
    {
        "productId": 48481212,
        "day-1": "【出发地-成都】接机/站-宽窄巷子-蜀风雅韵-锦里-酒店 | 专车",
        "day-2": "【成都-广汉 古蜀探秘】熊猫基地-三星堆 | 专车",
        "day-3": "【成都】成都市区一日citywalk   |  无车无导",
        "day-4": "【成都-都江堰】都江堰-青城山 | 专车",
        "day-5": "【成都-返程】自由活动-返程 | 专车送机/站服务"
    }
]
 */

export function downloadXslx(routes: TourDay[], productId: string) {
  console.log(routes)
  const data = routes.map(route => {
    const days = route.routes.reduce((prev, cur) => {
      prev['day-' + cur.orderDay] = cur.dailyDescription
      return prev
    }, {})
    return {
      productId: route.productId,
      ...days
    }
  })
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
  downloadLink.download = `产品分裂数据-${productId}-${year}年${month}月${day}日${hour}时${min}分.xlsx`

  downloadLink.click()
}

/**
 * 由豆包生成，除去首末两天的线路全排列
 * @param arr
 * @returns
 */
export function permuteWithDeletions(list: TourDailyDescription[] = []): TourDay[] {
  if (list.length <= 3) {
    return [
      {
        id: list.map((v) => v.orderDay).join("-"),
        status: "wait",
        routes: list,
        currentStep: 0,
      },
    ];
  }
  const first = list.shift();
  const last = list.pop();
  const results: TourDailyDescription[][] = [];

  const permutations = generatePermutations(list);
  results.push(...permutations);

  return results
    .map((val) => [first, ...val, last])
    .map((val, i) => ({
      id: val.map((v) => v.orderDay).join("-"),
      status: "wait",
      routes: val.map((v, i) => ({ ...v, orderDay: i + 1 })),
      currentStep: 0,
      subProducts: JSON.parse(JSON.stringify(subProductCategories)),
    }));

  function generatePermutations(
    arr: TourDailyDescription[],
  ): TourDailyDescription[][] {
    if (arr.length === 0) return [[]];
    const result: TourDailyDescription[][] = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const subPermutations = generatePermutations(remaining);
      for (const subPermutation of subPermutations) {
        result.push([current, ...subPermutation]);
      }
    }
    return result;
  }
}

export const createSubProductStepFns = [
  saveProductRichText,// 子产品富文本
  saveSubProductResource,// 子产品资源配置
  saveSubTourDailyDetail,// 子产品行程描述
  saveSubClauses,// 子产品条款维护
];

// 创建子产品
export async function createProduct(product: TourDay, updateTourDayStatus) {
  const { productId, subProducts = [] } = product

  const pkgObj = await getPackageId(productId);
  const existSubProductNames = pkgObj.childList.map(it => it.lineDescription);
  const mappedSubProducts = subProducts.map(sub => {
    if (existSubProductNames.includes(sub.lineDescription)) {
      sub.status = '已经存在';
      sub.step = createSubProductStepFns.length;
    }
    return sub;
  })

  // 根据已经存在的子产品过滤一下，避免重复创建
  updateTourDayStatus(productId, {
    subProducts: mappedSubProducts
  });

  for (let i = 0; i < mappedSubProducts.length; i++) {
    const sub = mappedSubProducts[i];
    if (sub.status === '已经存在') continue;
    // 创建子产品
    const subProductId = await createSubProduct(productId, sub.lineDescription);
    sub.productId = subProductId;
    for (let i = 0; i < createSubProductStepFns.length; i++) {
      const fn = createSubProductStepFns[i];
      await fn(subProductId, sub);
      sub.step++;
      updateTourDayStatus(productId, {
        subProducts: mappedSubProducts
      });
    }

    // 子产品激活
    await activeSubProduct(productId, subProductId)
  }

  return {
    mappedSubProducts
  }
}

export async function duplicateProduct(product: TourDay, updateTourDayStatus) {
  const { productId, routes } = product
  const newProduct = await productDuplicate(productId);
  const newProductId = newProduct.newProductId;

  const duplicateProductStepFns = [
    () => saveSaleControlInfo(newProductId),
    () => saveProduct(newProductId),
    () => saveProductRichText(newProductId),
    () => saveTourDailyDetail(newProductId, routes),
    () => savePackage(newProductId),
    () => savePackage(newProductId),
    () => savePriceInventory(productId, newProductId),
    () => saveProductResource(productId, newProductId),
    () => saveClauses(newProductId),
    () => updateResourceActive(newProductId),
  ]
  const len = duplicateProductStepFns.length;
  let i = 0
  updateTourDayStatus({ newProductId, total: len, current: 0 })
  try {
    for (; i < len; i++) {
      await duplicateProductStepFns[i]();
      updateTourDayStatus({ newProductId, total: len, current: i + 1 })
    }
  } catch (error) {
    updateTourDayStatus({ newProductId, total: len, current: i + 1, error: error.message })
  }

  return {
    newProductId
  }
}