export interface ProductData {
  productId: string;
  productName: string;
  saleControl: any;
  baseInfo: any;
  imageText: any;
  tripDesc: any;
  packages: any;
  priceInventory: any;
  resourceConfig: any;
  clauses: any;
  routeTraffic: any;
  advancedSettings: any;
}

export interface ExportItem {
  productId: string;
  productName: string;
  status: 'pending' | 'extracting' | 'success' | 'failed';
  errorMessage?: string;
  data?: ProductData;
}

export interface ImportItem {
  sourceProductId: string;
  productName: string;
  newProductId?: string;
  status: 'pending' | 'importing' | 'success' | 'partial' | 'failed';
  stage?: string;
  errorMessage?: string;
  retryCount?: number;
}

export interface CsvExportRow {
  schemaVersion: string;
  toolVersion: string;
  exportAccountId: string;
  productId: string;
  productName: string;
  saleControl: string;
  baseInfo: string;
  imageText: string;
  tripDesc: string;
  packages: string;
  priceInventory: string;
  resourceConfig: string;
  clauses: string;
  routeTraffic: string;
  advancedSettings: string;
  payloadChecksum: string;
  exportedAt: string;
}

export interface ImportResultRow {
  sourceProductId: string;
  productName: string;
  newProductId: string;
  status: string;
  stage: string;
  retryCount: number;
  errorMessage: string;
  importedAt: string;
}

export const SCHEMA_VERSION = 'v1';
