import * as XLSX from 'xlsx';
import { version } from '~package.json';
import type { CsvExportRow, ProductData } from '../types';
import { SCHEMA_VERSION } from '../types';
import { encodeBase64, computeChecksum } from './base64';

export async function exportProductsToCsv(
  products: ProductData[],
  accountId: string = 'unknown'
): Promise<void> {
  const rows: CsvExportRow[] = [];

  for (const product of products) {
    const saleControl = encodeBase64(product.saleControl);
    const baseInfo = encodeBase64(product.baseInfo);
    const imageText = encodeBase64(product.imageText);
    const tripDesc = encodeBase64(product.tripDesc);
    const packages = encodeBase64(product.packages);
    const priceInventory = encodeBase64(product.priceInventory);
    const resourceConfig = encodeBase64(product.resourceConfig);
    const clauses = encodeBase64(product.clauses);
    const routeTraffic = encodeBase64(product.routeTraffic);
    const advancedSettings = encodeBase64(product.advancedSettings);

    const payload = [
      saleControl,
      baseInfo,
      imageText,
      tripDesc,
      packages,
      priceInventory,
      resourceConfig,
      clauses,
      routeTraffic,
      advancedSettings,
    ].join('|');

    const checksum = await computeChecksum(payload);

    rows.push({
      schemaVersion: SCHEMA_VERSION,
      toolVersion: version,
      exportAccountId: accountId,
      productId: product.productId,
      productName: product.productName,
      saleControl,
      baseInfo,
      imageText,
      tripDesc,
      packages,
      priceInventory,
      resourceConfig,
      clauses,
      routeTraffic,
      advancedSettings,
      payloadChecksum: checksum,
      exportedAt: new Date().toISOString(),
    });
  }

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

  const date = new Date();
  const fileName = `products_export_${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}_${date
    .getHours()
    .toString()
    .padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}.csv`;

  XLSX.writeFile(workbook, fileName, { bookType: 'csv' });
}

export function exportResultsToCsv(
  results: Array<{
    sourceProductId: string;
    productName: string;
    newProductId: string;
    status: string;
    stage: string;
    retryCount: number;
    errorMessage: string;
  }>
): void {
  const rows = results.map((r) => ({
    ...r,
    importedAt: new Date().toISOString(),
  }));

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Results');

  const date = new Date();
  const fileName = `import_result_${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}_${date
    .getHours()
    .toString()
    .padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}.csv`;

  XLSX.writeFile(workbook, fileName, { bookType: 'csv' });
}
