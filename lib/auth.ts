const STORAGE_KEY = 'tour_helper_auth';

export interface AuthData {
  token: string;
  expiresAt: string;
  user: {
    id: number;
    name: string;
    phone: string;
    status: string;
  };
}

export async function getAuthData(): Promise<AuthData | null> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY], (result) => {
      const data = result[STORAGE_KEY] as AuthData | undefined;
      if (!data) {
        resolve(null);
        return;
      }
      if (new Date(data.expiresAt) <= new Date()) {
        clearAuthData();
        resolve(null);
        return;
      }
      resolve(data);
    });
  });
}

export async function getToken(): Promise<string | null> {
  const authData = await getAuthData();
  return authData?.token || null;
}

export async function setAuthData(data: AuthData): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY]: data }, () => {
      resolve();
    });
  });
}

export async function clearAuthData(): Promise<void> {
  return new Promise((resolve) => {
    chrome.storage.local.remove([STORAGE_KEY], () => {
      resolve();
    });
  });
}

export async function isLoggedIn(): Promise<boolean> {
  const authData = await getAuthData();
  return authData !== null;
}
