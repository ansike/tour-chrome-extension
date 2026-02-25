import * as XLSX from 'xlsx';
import type { CsvExportRow, ProductData } from '../types';
import { SCHEMA_VERSION } from '../types';
import { decodeBase64, computeChecksum } from './base64';

export interface ParseResult {
  success: boolean;
  products: ProductData[];
  errors: Array<{ row: number; message: string }>;
}

/** 从 URL 拉取并解析 CSV，用于调试时默认加载 */
export async function parseCsvFromUrl(url: string): Promise<ParseResult> {
  const res = await fetch(url, { credentials: "omit" });
  if (!res.ok) {
    return {
      success: false,
      products: [],
      errors: [{ row: 0, message: `请求失败: ${res.status}` }],
    };
  }
  const buf = await res.arrayBuffer();
  return parseCsvFromArrayBuffer(buf);
}

/** 调试用内置示例 CSV（产品 69251539），不依赖网络请求 */
export const DEBUG_SAMPLE_CSV = `schemaVersion,toolVersion,exportAccountId,productId,productName,saleControl,baseInfo,imageText,tripDesc,packages,priceInventory,resourceConfig,clauses,routeTraffic,advancedSettings,payloadChecksum,exportedAt
v1,0.1.21,debug,69251539,测试产品,e30=,eyJwcm9kdWN0SWQiOiI2OTI1MTUzOSIsInByb2R1Y3ROYW1lIjoi5rWL6K+V5Lqn5ZOBIn0=,e30=,e30=,e30=,e30=,e30=,e30=,e30=,e30=,ec0657e5b16d8a376ccd31d7834d467e10c01483d31c0dc53eb957cbc6716bd7,2026-02-21T08:37:59.759Z`;

/** 从字符串解析 CSV，用于调试时内置示例 */
export async function parseCsvFromString(csv: string): Promise<ParseResult> {
  const encoder = new TextEncoder();
  const buf = encoder.encode(csv).buffer;
  return parseCsvFromArrayBuffer(buf);
}

/** 从 ArrayBuffer 解析 CSV */
export async function parseCsvFromArrayBuffer(
  data: ArrayBuffer
): Promise<ParseResult> {
  try {
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json<CsvExportRow>(worksheet);

    const products: ProductData[] = [];
    const errors: Array<{ row: number; message: string }> = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 2;

      if (row.schemaVersion !== SCHEMA_VERSION) {
        errors.push({
          row: rowNum,
          message: `不支持的协议版本: ${row.schemaVersion}，需要 ${SCHEMA_VERSION}`,
        });
        continue;
      }

      const payload = [
        row.saleControl,
        row.baseInfo,
        row.imageText,
        row.tripDesc,
        row.packages,
        row.priceInventory,
        row.resourceConfig,
        row.clauses,
        row.routeTraffic,
        row.advancedSettings,
      ].join("|");

      const computedChecksum = await computeChecksum(payload);
      if (computedChecksum !== row.payloadChecksum) {
        errors.push({
          row: rowNum,
          message: "数据校验失败，文件可能已损坏",
        });
        continue;
      }

      try {
        const product: ProductData = {
          productId: row.productId,
          productName: row.productName,
          saleControl: decodeBase64(row.saleControl),
          baseInfo: decodeBase64(row.baseInfo),
          imageText: decodeBase64(row.imageText),
          tripDesc: decodeBase64(row.tripDesc),
          packages: decodeBase64(row.packages),
          priceInventory: decodeBase64(row.priceInventory),
          resourceConfig: decodeBase64(row.resourceConfig),
          clauses: decodeBase64(row.clauses),
          routeTraffic: decodeBase64(row.routeTraffic),
          advancedSettings: decodeBase64(row.advancedSettings),
        };

        if (!product.baseInfo || !product.productId) {
          errors.push({
            row: rowNum,
            message: "缺少必要字段（productId 或 baseInfo）",
          });
          continue;
        }

        products.push(product);
      } catch (parseError) {
        errors.push({
          row: rowNum,
          message: `数据解析失败: ${(parseError as Error).message}`,
        });
      }
    }

    return { success: errors.length === 0, products, errors };
  } catch (error) {
    return {
      success: false,
      products: [],
      errors: [{ row: 0, message: `文件解析失败: ${(error as Error).message}` }],
    };
  }
}

export async function parseCsvFile(file: File): Promise<ParseResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target?.result as ArrayBuffer | undefined;
      if (!data) {
        resolve({
          success: false,
          products: [],
          errors: [{ row: 0, message: "文件读取失败" }],
        });
        return;
      }
      resolve(parseCsvFromArrayBuffer(data));
    };
    reader.onerror = () => {
      resolve({
        success: false,
        products: [],
        errors: [{ row: 0, message: "文件读取失败" }],
      });
    };
    reader.readAsArrayBuffer(file);
  });
}
