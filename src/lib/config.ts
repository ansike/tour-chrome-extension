function getApiBaseUrl(): string {
  // 开发环境使用本地服务
  // if (typeof chrome !== 'undefined' && chrome.runtime?.getManifest) {
  //   const manifest = chrome.runtime.getManifest();
  //   const isDev = !manifest.update_url;
  //   if (isDev) {
  //     return 'http://localhost:8000';
  //   }
  // }
  return 'https://www.askfuture.online';
}

export const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  CAPTCHA: '/api/extension/captcha',
  LOGIN: '/api/extension/auth/login',
  ME: '/api/extension/auth/me',
  LOGOUT: '/api/extension/auth/logout',
  PRODUCT_DUMP_CONFIG: '/api/product/dump/config',
} as const;

console.log('[Tour Helper] API_BASE_URL:', API_BASE_URL);
