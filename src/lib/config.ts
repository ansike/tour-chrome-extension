export const API_BASE_URL =
  process.env.PLASMO_PUBLIC_API_URL ?? 'https://www.atdtour.com';

export const API_ENDPOINTS = {
  CAPTCHA: '/api/extension/captcha',
  LOGIN: '/api/extension/auth/login',
  ME: '/api/extension/auth/me',
  LOGOUT: '/api/extension/auth/logout',
  PRODUCT_DUMP_CONFIG: '/api/product/dump/config',
  PRODUCT_TRANSFER_IMPORT_LOG: '/api/extension/product-transfer/import-log',
  PRODUCT_TRANSFER_EXPORT_LOG: '/api/extension/product-transfer/export-log',
} as const;

console.log('[Tour Helper] API_BASE_URL:', API_BASE_URL);
