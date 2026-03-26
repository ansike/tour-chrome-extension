import { API_BASE_URL, API_ENDPOINTS } from './config';
import { getToken, setAuthData, clearAuthData, type AuthData } from './auth';

interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}

interface CaptchaData {
  captcha_id: string;
  image_base64: string;
}

interface LoginResponse {
  token: string;
  expires_at: string;
  user: {
    id: number;
    name: string;
    phone: string;
    status: string;
  };
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth = false
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (requireAuth) {
    const token = await getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const data = await response.json();
  
  if (data.code === 401) {
    await clearAuthData();
  }
  
  return data;
}

export async function getCaptcha(): Promise<ApiResponse<CaptchaData>> {
  return request<CaptchaData>(API_ENDPOINTS.CAPTCHA);
}

export async function login(
  phone: string,
  password: string,
  captchaId: string,
  captchaCode: string
): Promise<ApiResponse<LoginResponse>> {
  const response = await request<LoginResponse>(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    body: JSON.stringify({
      phone,
      password,
      captcha_id: captchaId,
      captcha_code: captchaCode,
    }),
  });

  if (response.code === 200 && response.data) {
    const authData: AuthData = {
      token: response.data.token,
      expiresAt: response.data.expires_at,
      user: response.data.user,
    };
    await setAuthData(authData);
  }

  return response;
}

export async function checkAuth(): Promise<ApiResponse<any>> {
  return request(API_ENDPOINTS.ME, {}, true);
}

export async function logout(): Promise<ApiResponse<any>> {
  const response = await request(API_ENDPOINTS.LOGOUT, { method: 'POST' }, true);
  await clearAuthData();
  return response;
}

export async function getProductDumpConfig(regionType: string): Promise<ApiResponse<any>> {
  return request(`${API_ENDPOINTS.PRODUCT_DUMP_CONFIG}?regionType=${regionType}`, {}, true);
}

export async function submitProductTransferImportLog(payload: {
  vendorId: string;
  vbkAccount: string;
  items: Record<string, unknown>[];
}): Promise<number | null> {
  const token = await getToken();
  if (!token) return null;
  try {
    const res = await request<{ id: number }>(
      API_ENDPOINTS.PRODUCT_TRANSFER_IMPORT_LOG,
      { method: 'POST', body: JSON.stringify(payload) },
      true,
    );
    if (res.code === 200 && res.data != null && typeof (res.data as { id?: number }).id === 'number') {
      return (res.data as { id: number }).id;
    }
    console.warn('[Tour Helper] product transfer import log:', res.message);
  } catch (e) {
    console.warn('[Tour Helper] product transfer import log failed', e);
  }
  return null;
}

export async function submitProductTransferExportLog(payload: {
  vendorId: string;
  vbkAccount: string;
  items: Record<string, unknown>[];
  relatedImportLogId?: number | null;
}): Promise<number | null> {
  const token = await getToken();
  if (!token) return null;
  try {
    const body: Record<string, unknown> = {
      vendorId: payload.vendorId,
      vbkAccount: payload.vbkAccount,
      items: payload.items,
    };
    if (payload.relatedImportLogId != null) {
      body.relatedImportLogId = payload.relatedImportLogId;
    }
    const res = await request<{ id: number }>(
      API_ENDPOINTS.PRODUCT_TRANSFER_EXPORT_LOG,
      { method: 'POST', body: JSON.stringify(body) },
      true,
    );
    if (res.code === 200 && res.data != null && typeof (res.data as { id?: number }).id === 'number') {
      return (res.data as { id: number }).id;
    }
    console.warn('[Tour Helper] product transfer export log:', res.message);
  } catch (e) {
    console.warn('[Tour Helper] product transfer export log failed', e);
  }
  return null;
}
