export function encodeBase64(obj: any): string {
  try {
    const jsonStr = JSON.stringify(obj);
    return btoa(unescape(encodeURIComponent(jsonStr)));
  } catch (e) {
    console.error('Base64 encode error:', e);
    return '';
  }
}

export function decodeBase64(str: string): any {
  try {
    const jsonStr = decodeURIComponent(escape(atob(str)));
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error('Base64 decode error:', e);
    return null;
  }
}

export async function computeChecksum(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
