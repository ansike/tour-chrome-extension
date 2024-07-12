import * as XLSX from 'xlsx';


export const splitProduct = () => {
  // 
}


export function exportExcelToNestedJSON(excelData: any) {
  try {
    // 读取 Excel 数据
    const workbook = XLSX.read(excelData, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // 获取表头信息
    const headers = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 0 });

    // 构建表头对象
    const headerObj = {};
    headers.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const mergedCell = getMergedCellValue(worksheet, rowIndex, colIndex);
        if (!headerObj[colIndex]) {
          headerObj[colIndex] = [];
        }
        headerObj[colIndex][rowIndex] = mergedCell || cell;
      });
    });

    // 将 Excel 数据转换为嵌套的 JSON 格式
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: (row, index) => {
        const keys = Object.keys(headerObj);
        return keys.map(key => headerObj[key][index]).join('.');
      },
      range: 1, // 从第二行开始
      blankrows: false // 忽略空行
    });

    // 格式化 JSON 输出
    const formattedJSON = JSON.stringify(jsonData, null, 2);

    return formattedJSON;
  } catch (error) {
    console.error('Error exporting Excel to nested JSON:', error);
    throw error;
  }
}

// 获取合并单元格的值
export function getMergedCellValue(worksheet, rowIndex, colIndex) {
  const cell = worksheet[XLSX.utils.encode_cell({ r: rowIndex, c: colIndex })];
  if (cell && cell.l && cell.l.target) {
    const { r: mergedRowIndex, c: mergedColIndex } = XLSX.utils.decode_cell(cell.l.target);
    if (mergedRowIndex <= rowIndex && mergedColIndex <= colIndex) {
      return worksheet[XLSX.utils.encode_cell({ r: mergedRowIndex, c: mergedColIndex })].v;
    }
  }
  return null;
}
