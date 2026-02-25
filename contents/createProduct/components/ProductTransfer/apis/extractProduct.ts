import { getProductDetail } from '../../scripts/getProductDetail';
import { getTourDaily } from '../../scripts/getProductBaseInfo';
import { getPackageList } from '../../scripts/savePackageItem';
import { getSegments } from '../../scripts/saveProductResource';
import { listProductClauses } from '../../scripts/saveClauses';
import { getBatchOperateSchedule, getCurrentYearMonth, getNextMonth } from '../../scripts/savePriceInventory';
import { getProductImageText } from '../../scripts/savedescriptioninfo';
import type { ProductData } from '../types';

/** 从 getProductDetail 完整响应中提取 saleControl */
export async function extractSaleControl(productId: string): Promise<any> {
  const res = await getProductDetail(productId);
  return res.saleControlInfo || res.productBaseInfo?.saleControlInfo || {};
}

/**
 * 导出产品全部数据：合并 API 完整响应，不遗漏任何字段
 * 导入时只需正确解析即可，无需再次导出
 * @param productId 产品 ID
 * @param detailRes 可选，已获取的 getProductDetail 响应，传入可避免重复请求
 */
export async function extractBaseInfo(
  productId: string,
  detailRes?: any
): Promise<any> {
  const res = detailRes ?? (await getProductDetail(productId));
  const pb = res.productBaseInfo || {};
  // 合并顶层与 productBaseInfo，确保所有字段都被导出
  return {
    ...res,
    ...pb,
    baseInfo: pb.baseInfo || res.baseInfo || {},
    bookingControl: pb.bookingControl || res.bookingControl,
    bookingControls: pb.bookingControls || res.bookingControls,
    nameAreaRules: pb.nameAreaRules || pb.nameAreas || res.nameAreaRules || res.nameAreas || [],
    scenicSpots:
      pb.scenicSpots ||
      pb.districtScenicSpots ||
      res.scenicSpots ||
      res.districtScenicSpots ||
      [],
    advancedSettings: pb.advancedSettings || res.advancedSettings || {},
  };
}

export async function extractImageText(productId: string): Promise<any> {
  try {
    return await getProductImageText(productId);
  } catch (e) {
    console.error('extractImageText error:', e);
    return {};
  }
}

export async function extractTripDesc(productId: string): Promise<any> {
  try {
    const { tourInfo, tourDaily } = await getTourDaily(productId);
    return { tourInfo, tourDaily };
  } catch (e) {
    console.error('extractTripDesc error:', e);
    return {};
  }
}

export async function extractPackages(productId: string): Promise<any> {
  try {
    const packages = await getPackageList(productId);
    return packages;
  } catch (e) {
    console.error('extractPackages error:', e);
    return {};
  }
}

export async function extractPriceInventory(productId: string): Promise<any> {
  try {
    const packages = await getPackageList(productId);
    if (!packages.itemList?.[0]) {
      return { dates: [] };
    }

    const { optionalResourceId, singleResourceId } = packages.itemList[0];
    const dateArr: any[] = [];
    let yearMonth = getCurrentYearMonth();
    let maxMonths = 24;

    while (maxMonths > 0) {
      const res = await getBatchOperateSchedule({
        productId,
        yearMonth,
        singleResourceId,
        optionalResourceId,
      });

      if (!res.dates) break;

      const filteredData = res.dates.filter((date: any) => date.adultPrice);
      dateArr.push(...filteredData);

      const lastDate = res.dates[res.dates.length - 1];
      if (!lastDate?.adultPrice?.cost) {
        break;
      }

      yearMonth = getNextMonth(yearMonth);
      maxMonths--;
    }

    return { dates: dateArr, resourceIds: { optionalResourceId, singleResourceId } };
  } catch (e) {
    console.error('extractPriceInventory error:', e);
    return { dates: [] };
  }
}

export async function extractResourceConfig(productId: string): Promise<any> {
  try {
    const res = await getSegments(productId);
    const segments =
      res?.productSegments?.segments ?? res?.draftProductSegments?.segments ?? [];
    return { segments };
  } catch (e) {
    console.error('extractResourceConfig error:', e);
    return {};
  }
}

export async function extractClauses(productId: string): Promise<any> {
  try {
    const clausesTabs: any[] = [];
    for (let tabEnum = 1; tabEnum <= 4; tabEnum++) {
      const clause = await listProductClauses(productId, tabEnum);
      clausesTabs.push({ tabEnum, clause });
    }
    return clausesTabs;
  } catch (e) {
    console.error('extractClauses error:', e);
    return [];
  }
}

export async function extractRouteTraffic(_productId: string): Promise<any> {
  // 线路及交通数据通常与账号资源绑定，跨账号复制时默认跳过
  // 如需提取，可通过 HTML 页面解析实现
  return {};
}

export async function extractAdvancedSettings(productId: string): Promise<any> {
  const res = await getProductDetail(productId);
  const pb = res.productBaseInfo || res;
  return pb.advancedSettings || res.advancedSettings || {};
}

export async function extractFullProduct(
  productId: string,
  onProgress?: (step: string) => void
): Promise<ProductData> {
  onProgress?.('获取产品详情...');
  const detailRes = await getProductDetail(productId);

  onProgress?.('提取销售控制...');
  const saleControl = detailRes.saleControlInfo || detailRes.productBaseInfo?.saleControlInfo || {};

  onProgress?.('提取产品信息...');
  const baseInfo = await extractBaseInfo(productId, detailRes);

  onProgress?.('提取产品图文...');
  const imageText = await extractImageText(productId);

  onProgress?.('提取行程描述...');
  const tripDesc = await extractTripDesc(productId);

  onProgress?.('提取套餐管理...');
  const packages = await extractPackages(productId);

  onProgress?.('提取价格库存班期...');
  const priceInventory = await extractPriceInventory(productId);

  onProgress?.('提取资源配置...');
  const resourceConfig = await extractResourceConfig(productId);

  onProgress?.('提取条款维护...');
  const clauses = await extractClauses(productId);

  onProgress?.('提取线路及交通...');
  const routeTraffic = await extractRouteTraffic(productId);

  onProgress?.('提取高级设置...');
  const pb = detailRes.productBaseInfo || detailRes;
  const advancedSettings = pb.advancedSettings || detailRes.advancedSettings || {};

  return {
    productId,
    productName:
      baseInfo.baseInfo?.productName ||
      baseInfo.productName ||
      baseInfo.name ||
      `产品${productId}`,
    saleControl,
    baseInfo,
    imageText,
    tripDesc,
    packages,
    priceInventory,
    resourceConfig,
    clauses,
    routeTraffic,
    advancedSettings,
  };
}
