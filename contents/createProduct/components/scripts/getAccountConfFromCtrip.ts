import { parseHtmlToObj } from "../util";
import { getDefaultPhone400 } from "./getPhone400FromEnvironment";

const SALE_CONTROL_MERGE_URL =
  "https://vbooking.ctrip.com/ivbk/vendor/saleControlMerge?producttype=0&from=vbk";
const GET_GLOBAL_PRODUCT_BRAND_LIST_URL =
  "https://online.ctrip.com/restapi/soa2/15638/getGlobalProductBrandList?_fxpcqlniredt=09031087213708030917";

/** 从 saleControlMerge 页面获取 __INITIAL_STATE__ */
async function getSaleControlMergeState() {
  const res = await fetch(SALE_CONTROL_MERGE_URL, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    method: "GET",
    credentials: "include",
  });
  const text = await res.text();
  const state = parseHtmlToObj(text);
  if (!state) {
    throw new Error("无法解析 saleControlMerge 页面的 __INITIAL_STATE__");
  }
  return state;
}

/** 从 state 中提取 contractDtos */
function getContractDtos(state: Record<string, unknown>): Record<string, unknown>[] {
  const contractDtos =
    (state.contractDtos as Record<string, unknown>[]) ??
    (state.saleControl as Record<string, unknown>)?.contractDtos ??
    (state.saleControlInfo as Record<string, unknown>)?.contractDtos ??
    [];
  return Array.isArray(contractDtos) ? contractDtos : [];
}

/** 从 contractDtos 组装 contract 相关字段 */
function buildContractFields(contractDtos: Record<string, unknown>[]) {
  const first = contractDtos[0];
  if (!first) {
    throw new Error("contractDtos 为空，无法获取合同信息");
  }
  const contractId = first.contractId ?? first.contract_id;
  const saleMode = (first.saleMode ?? first.sale_mode ?? "P") as string;
  const categoryDtos = (first.categoryDtos ?? first.category_dtos ?? []) as Record<string, unknown>[];
  const patternDtos = (first.patternDtos ?? first.pattern_dtos ?? []) as Record<string, unknown>[];
  const productCategoryId = categoryDtos[0]?.productCategoryId ?? categoryDtos[0]?.categoryId;
  const productPatternId = patternDtos[0]?.productPatternId ?? patternDtos[0]?.patternId;

  return {
    contractId: Number(contractId),
    saleMode,
    productCategoryId: productCategoryId != null ? Number(productCategoryId) : undefined,
    productPatternId: productPatternId != null ? Number(productPatternId) : undefined,
  };
}

/** 调用 getGlobalProductBrandList 获取品牌列表 */
async function getBrandList(vendorId: string) {
  const res = await fetch(GET_GLOBAL_PRODUCT_BRAND_LIST_URL, {
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      cookieorigin: "https://vbooking.ctrip.com",
      "x-ctx-locale": "zh-CN",
    },
    referrer: SALE_CONTROL_MERGE_URL,
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      contentType: "json",
      head: {
        cid: "09031087213708030917",
        ctok: "",
        cver: "1.0",
        lang: "01",
        sid: "8888",
        syscode: "09",
        auth: "",
        extension: [],
      },
      id: String(vendorId),
      idType: "providerId",
      locale: "zh-CN",
      brandSupply: 3,
      regions: ["CN"],
    }),
  });
  const data = (await res.json()) as {
    productBrandDtos?: Array<{
      brandId?: number;
      brandName?: string;
      brandNameEn?: string;
      brandLocal?: string;
    }>;
  };
  const list = data.productBrandDtos ?? [];
  return Array.isArray(list) ? list : [];
}

/** 从携程动态获取并组装账号配置（vendorId、saleControlInfoDto） */
export async function getAccountConfFromCtrip(vendorId?: string) {
  const state = await getSaleControlMergeState();
  const vid =
    vendorId ??
    state.vendorId ??
    (state.userInfo as Record<string, unknown>)?.vendorId ??
    (state.saleControl as Record<string, unknown>)?.vendorId;
  const vidStr = vid != null ? String(vid) : null;
  if (!vidStr) {
    throw new Error("无法从 saleControlMerge 获取 vendorId");
  }

  const contractDtos = getContractDtos(state);
  const contractFields = buildContractFields(contractDtos);

  const brandList = await getBrandList(vidStr);
  const brand = brandList[0];
  if (!brand) {
    throw new Error("getGlobalProductBrandList 返回的品牌列表为空");
  }

  const brandId = Number(brand.brandId ?? 0);
  const brandName = (brand.brandName ?? "") as string;
  const brandNameEn = (brand.brandNameEn ?? "") as string;
  const brandLocal = (brand.brandLocal ?? "zh-CN") as string;

  const saleControlInfoDto = {
    contractId: contractFields.contractId,
    saleMode: contractFields.saleMode,
    ...(contractFields.productCategoryId != null && {
      productCategoryId: contractFields.productCategoryId,
    }),
    ...(contractFields.productPatternId != null && {
      productPatternId: contractFields.productPatternId,
    }),
    brandId,
    brandName,
    productBrandDto: {
      brandId,
      brandName,
      brandNameEn,
      brandLocal,
    },
  };

  const phone400 = await getDefaultPhone400();

  return {
    vendorId: Number(vidStr),
    saleControlInfoDto,
    phone400: phone400 ?? "",
  };
}
