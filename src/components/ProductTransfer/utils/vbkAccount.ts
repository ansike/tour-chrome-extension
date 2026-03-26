import { getCurrentUserInfo } from '../../scripts/getCurrentUserInfo';

/**
 * 从 getCurrentUserInfo 根级 user.account 解析 VBK 登录账号（如 vbk_671205）
 */
export async function extractVbkAccount(): Promise<string> {
  try {
    const data = (await getCurrentUserInfo()) as {
      ResponseStatus?: { Ack?: string };
      user?: { account?: string };
    };
    const ack = data?.ResponseStatus?.Ack;
    if (ack != null && ack !== 'Success') {
      return '';
    }
    const acc = data?.user?.account;
    return typeof acc === 'string' ? acc : '';
  } catch {
    return '';
  }
}
