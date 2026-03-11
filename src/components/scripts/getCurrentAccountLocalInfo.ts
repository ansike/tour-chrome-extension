import { parseHtmlToObj } from '../util';

/**
 * 从 baseInfoMerge 页获取当前账号的 localInfoID、localInfoIds
 * 从 localInfoDtos 取第一个
 * @param productId 产品 ID，用于请求 baseInfoMerge 页
 */
export async function getCurrentAccountLocalInfo(
  productId: string
): Promise<{ localInfoID?: number; localInfoIds?: number[] }> {
  const result: { localInfoID?: number; localInfoIds?: number[] } = {};

  try {
    const res = await fetch(
      `https://vbooking.ctrip.com/ivbk/vendor/baseInfoMerge?productId=${productId}&from=vbk`,
      {
        headers: { accept: 'text/html,application/xhtml+xml,*/*;q=0.8' },
        method: 'GET',
        credentials: 'include',
      }
    );
    const html = await res.text();
    const state = parseHtmlToObj(html);
    const pb = state?.productBaseInfo ?? state;
    const localInfoDtos =
      pb?.localInfoDtos ??
      pb?.baseInfo?.localInfoDtos ??
      pb?.bookingControl?.localInfoDtos ??
      state?.localInfoDtos ??
      [];
    const first = Array.isArray(localInfoDtos) && localInfoDtos.length > 0 ? localInfoDtos[0] : null;

    if (first) {
      const localInfoID = first.localInfoID ?? first.localInfoId;
      let localInfoIds = first.localInfoIds ?? first.localInfoIds;
      if (localInfoID != null) result.localInfoID = Number(localInfoID);
      if (Array.isArray(localInfoIds)) {
        result.localInfoIds = localInfoIds.map(Number);
      } else if (localInfoID != null) {
        result.localInfoIds = [Number(localInfoID)];
      }
    }
  } catch (e) {
    console.warn('getCurrentAccountLocalInfo from baseInfoMerge failed:', e);
  }

  return result;
}
