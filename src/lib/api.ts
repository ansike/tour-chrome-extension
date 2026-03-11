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
