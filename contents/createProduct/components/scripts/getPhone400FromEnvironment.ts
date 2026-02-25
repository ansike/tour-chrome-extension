import { getAccountConf } from "../../constant";
import { parseHtmlToObj } from "../util";

const GET_EXT_NUMBER_LIST_URL =
  "https://online.ctrip.com/restapi/soa2/15638/getExtNumberList?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081";

const GET_RESOURCE_INFO_LIST_URL =
  "https://online.ctrip.com/restapi/soa2/15638/getResourceInfoList.json?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081";


/** 调用 getExtNumberList 获取分机号列表，extNumber 为电话号 */
async function fetchExtNumberList(): Promise<any[]> {
  const body = {
    contentType: "json",
    head: {
      cid: "09031059218989378081",
      ctok: "",
      cver: "1.0",
      lang: "01",
      sid: "8888",
      syscode: "09",
      auth: "",
      extension: [],
    },
  };

  const res = await fetch(GET_EXT_NUMBER_LIST_URL, {
    headers: {
      accept: "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json",
      cookieorigin: "https://vbooking.ctrip.com",
      "x-ctx-locale": "zh-CN",
      "x-tt-core": "1",
    },
    referrerPolicy: "no-referrer-when-downgrade",
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });

  const data = await res.json();
  const status = data?.ResponseStatus;
  if (
    status?.Ack === "Failure" ||
    (Array.isArray(status?.Errors) && status.Errors.length > 0)
  ) {
    throw new Error(
      status?.Errors?.[0]?.Message ?? "getExtNumberList 调用失败",
    );
  }

  const list =
    data?.extNumberList ??
    data?.ExtNumberList ??
    data?.extNumberList?.itemList ??
    data?.ExtNumberList?.itemList ??
    data?.itemList ??
    [];
  return Array.isArray(list) ? list : [];
}

/** 根据 phone400 从 extNumberList 中查找匹配的 extNumberId（extNumber 为电话号） */
function findExtNumberIdByPhone(
  extNumberList: any[],
  phone400: string,
): number | undefined {
  const phone = String(phone400 || "").trim();
  if (!phone) return undefined;

  for (const item of extNumberList) {
    const extNum = String(item?.extNumber ?? item?.extNumberNo ?? "").trim();
    if (extNum === phone || extNum.endsWith(phone) || phone.endsWith(extNum)) {
      const id = item?.extNumberId ?? item?.extNumberID ?? item?.id;
      return id != null ? Number(id) : undefined;
    }
  }
  return undefined;
}

/** 调用 getResourceInfoList 获取当前环境的资源/产品列表 */
async function fetchResourceInfoList(): Promise<any> {
  const body: Record<string, unknown> = {
    contentType: "json",
    head: {
      cid: "09031059218989378081",
      ctok: "",
      cver: "1.0",
      lang: "01",
      sid: "8888",
      syscode: "09",
      auth: "",
      extension: [],
    },
    pageIndex: 1,
    pageSize: 100,
    productPatternList: [],
  };

  const res = await fetch(GET_RESOURCE_INFO_LIST_URL, {
    headers: {
      accept: "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json",
      cookieorigin: "https://vbooking.ctrip.com",
      "x-ctx-locale": "zh-CN",
      "x-tt-core": "1",
    },
    referrerPolicy: "no-referrer-when-downgrade",
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });

  const data = await res.json();
  const status = data?.ResponseStatus;
  if (
    status?.Ack === "Failure" ||
    (Array.isArray(status?.Errors) && status.Errors.length > 0)
  ) {
    throw new Error(
      status?.Errors?.[0]?.Message ?? "getResourceInfoList 调用失败",
    );
  }
  return data;
}

/** 从 baseInfoMerge 页获取产品的 baseInfo（含 phone400） */
async function fetchBaseInfoFromMerge(productId: string): Promise<any> {
  const res = await fetch(
    `https://vbooking.ctrip.com/ivbk/vendor/baseInfoMerge?productId=${productId}&from=vbk`,
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "x-tt-core": "1",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      method: "GET",
      mode: "cors",
      credentials: "include",
    },
  );
  const html = await res.text();
  const obj = parseHtmlToObj(html);
  const pb = obj?.productBaseInfo ?? obj;
  return pb?.baseInfo ?? pb;
}

/** 从 getResourceInfoList 响应中查找与导入产品形态相同的母产品 ID */
function findMotherProductId(data: any): number | undefined {
  const list = data?.resourceInfoList ?? [];
  const arr = Array.isArray(list) ? list : [];

  for (const item of arr) {
    const isChild = item?.isChild ?? item?.isChildProduct;
    if (isChild === true || isChild === "T") continue;

    const pid = item?.productId ?? item?.productID ?? item?.resourceId;
    if (pid != null) return Number(pid);
  }
  return arr[0]?.productId ?? arr[0]?.productID ?? arr[0]?.resourceId;
}

export interface Phone400EnvResult {
  phone400?: string;
  extNumberId?: number;
}

/**
 * 从当前环境获取 400 电话及 extNumberId
 * 1. 调用 getResourceInfoList 获取产品列表，查找与导入产品形态相同的母产品
 * 2. 通过 baseInfoMerge 获取该产品的 phone400
 * 3. 调用 getExtNumberList，根据 phone400 匹配 extNumber 获取 extNumberId
 */
export async function getPhone400FromEnvironment(
  productInfo: any,
): Promise<Phone400EnvResult> {
  const result: Phone400EnvResult = {};
  try {
    const data = await fetchResourceInfoList();

    const refProductId = findMotherProductId(data);

    if (refProductId == null) {
      console.warn("getPhone400FromEnvironment: 未找到匹配的母产品");
      return result;
    }

    const baseInfoData = await fetchBaseInfoFromMerge(String(refProductId));
    const phone400 = baseInfoData?.phone400;
    if (phone400 != null) {
      result.phone400 = String(phone400);
    }


    if (result.phone400) {
      try {
        const extNumberList = await fetchExtNumberList();
        const extNumberId = findExtNumberIdByPhone(
          extNumberList,
          result.phone400,
        );
        if (extNumberId != null) {
          result.extNumberId = extNumberId;
        }
      } catch (e) {
        console.warn("getExtNumberList failed:", e);
      }
    }

    return result;
  } catch (e) {
    console.warn("getPhone400FromEnvironment failed:", e);
    return result;
  }
}
