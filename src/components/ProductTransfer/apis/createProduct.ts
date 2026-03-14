import { saveClauses, saveClausesFromData } from "../../scripts/saveClauses";
import { getPackageList, savePackageItem } from "../../scripts/savePackageItem";
import {
  groupBy,
  savePriceInventoryFetch,
} from "../../scripts/savePriceInventory";
import { saveProductBaseInfo } from "../../scripts/saveProductBaseInfo";
import { getAuthData } from "../../../lib/auth";
import {
  createProductDraft,
  getSegments,
  saveProductMaintainType,
  saveSegment,
  submitSegments,
} from "../../scripts/saveProductResource";
import { saveSaleControlInfo } from "../../scripts/saveSaleControlInfo";
import { saveTourDailyDetail } from "../../scripts/saveTourDailyDetail";
import type { ProductData } from "../types";

/** 资源配置阶段：只复制行程段、酒店、机酒，不复制附加资源（segmentResourceGroups） */
function stripAdditionalResources(segment: any): any {
  const { segmentResourceGroups, ...rest } = segment ?? {};
  return rest;
}

export interface CreateProductResult {
  newProductId: string;
  success: boolean;
  stage: string;
  errorMessage?: string;
}

/** 剔除 productDesc 中的 <img> 标签，避免跨供应商导入时图片 id 不属于当前供应商 */
function stripImagesFromProductDesc(productDesc: any): any {
  if (!productDesc) return productDesc;
  if (typeof productDesc === "string") {
    return productDesc.replace(/<img[^>]*>/gi, "");
  }
  if (productDesc && typeof productDesc.productDesc === "string") {
    return {
      ...productDesc,
      productDesc: productDesc.productDesc.replace(/<img[^>]*>/gi, ""),
    };
  }
  return productDesc;
}

async function saveDescriptionInfo(
  productId: string,
  imageTextData: any,
): Promise<any> {
  const rawProductDesc = imageTextData?.productDesc ?? "";
  const productDesc = stripImagesFromProductDesc(rawProductDesc);

  const data = {
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
    dto: {
      productId,
      saveType: 4,
      pmRcmdItems: imageTextData?.pmRcmdItems ?? [],
      productDesc,
      addInfoCode: imageTextData?.addInfoCode ?? "",
    },
  };
  const res = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/savedescriptioninfo?_fxpcqlniredt=09031059218989378081",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        "x-ctx-locale": "zh-CN",
        "x-tt-core": "1",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify(data),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  const resData = (await res.json()) as {
    success?: boolean;
    errorMsg?: string;
    ResponseStatus?: { Ack?: string; Errors?: Array<{ Message?: string }> };
  };

  // 校验 API 返回：success=false 或 ResponseStatus 含错误时抛出
  const success = resData?.success;
  const status = resData?.ResponseStatus;
  const ack = status?.Ack;
  const errors = status?.Errors;

  if (
    success === false ||
    ack === "Failure" ||
    ack === "Warning" ||
    (Array.isArray(errors) && errors.length > 0)
  ) {
    const msg =
      resData?.errorMsg ??
      (Array.isArray(errors) && errors.length > 0
        ? errors.map((item: any) => item.Message).join(", ")
        : "保存产品图文失败");
    throw new Error(msg);
  }
  return resData;
}

export async function createProductFromData(
  data: ProductData,
  onProgress?: (stage: string) => void,
): Promise<CreateProductResult> {
  let newProductId = "";
  let stage = "init";

  try {
    console.log("data", data);
    stage = "createProduct";
    onProgress?.("创建新产品...");

    // TEST 代码
    // const newProductId = "69257157";
    const productId = "";

    const createResult = await saveSaleControlInfo(productId, data);
    newProductId = createResult.productId?.toString();

    if (!newProductId) {
      throw new Error("创建产品失败，未获取到新产品 ID");
    }

    stage = "saveBase";
    onProgress?.("保存产品信息...");
    if (data.baseInfo) {
      const base = data.baseInfo as any;
      const authData = await getAuthData();
      const providerProductName = authData?.user?.name ? `TOUR-${authData.user.name}` : "";
      base.baseInfo.providerProductName = providerProductName;
      base.baseInfo.providerProductId = newProductId;
      const productInfo = {
        ...base,
        saleControl:
          data.saleControl ?? base.saleControlInfo ?? base.saleControl,
        bookingControl: base.bookingControls,
        productId: newProductId,
        baseInfo: base.baseInfo,
      };
      await saveProductBaseInfo(productInfo);
    }

    stage = "saveRichText";
    onProgress?.("保存产品图文...");
    if (data.imageText) {
      await saveDescriptionInfo(newProductId, data.imageText);
    }

    stage = "saveTrip";
    onProgress?.("保存行程描述...");
    if (data.tripDesc?.tourDaily?.tourInfo?.tourDailyDescriptions) {
      await saveTourDailyDetail(
        newProductId,
        data.tripDesc.tourDaily.tourInfo.tourDailyDescriptions,
      );
    }

    stage = "savePackage";
    onProgress?.("保存套餐管理...");
    try {
      const curPackages = await getPackageList(newProductId);
      const curPkg = curPackages.itemList?.[0];
      const importedPkg = (data.packages as any)?.itemList?.[0];

      if (curPkg) {
        // 已有套餐：合并导入的套餐信息（套餐名等），但保留新产品的 resourceId（跨账号不同）
        const mergedPkg = {
          ...curPkg,
          ...(importedPkg && {
            packageName: importedPkg.packageName ?? curPkg.packageName,
            packageTitle: importedPkg.packageTitle ?? curPkg.packageTitle,
          }),
          optionalResourceId: curPkg.optionalResourceId,
          singleResourceId: curPkg.singleResourceId,
        };
        await savePackageItem(newProductId, mergedPkg);
      } else if (importedPkg) {
        // 第一次新建：尚无套餐，用导入的套餐信息创建（不传 resourceId，由后端为新产品生成）
        const {
          optionalResourceId,
          singleResourceId,
          childOccupationBedResourceId,
          productId: _productId,
          ...rest
        } = importedPkg;
        await savePackageItem(newProductId, rest);
      }
    } catch (e) {
      console.warn("savePackage warning:", e);
    }

    stage = "savePriceInventory";
    onProgress?.("保存价格库存班期...");
    try {
      if (data.priceInventory?.dates?.length > 0) {
        // 套餐可能刚通过 savePackageItem 创建，后端需要短暂时间同步，重试获取
        let curPackages = await getPackageList(newProductId);
        for (let retry = 0; !curPackages.itemList?.[0] && retry < 3; retry++) {
          await new Promise((r) => setTimeout(r, 800 + retry * 400));
          curPackages = await getPackageList(newProductId);
        }
        if (curPackages.itemList?.[0]) {
          const { optionalResourceId, singleResourceId } =
            curPackages.itemList[0];

          const groups = groupBy(
            data.priceInventory.dates,
            (it: any) => it.adultPrice?.cost,
          );

          for (const price of Object.keys(groups)) {
            const dates = groups[price].map((it: any) => it.adultPrice?.date);
            const priceObj = groups[price][0];

            if (dates.length > 0 && priceObj) {
              await savePriceInventoryFetch({
                productId: newProductId,
                dates: dates.slice(0, 300),
                singleResourceId,
                optionalResourceId,
                priceObj,
              });

              if (dates.length > 300) {
                await savePriceInventoryFetch({
                  productId: newProductId,
                  dates: dates.slice(300),
                  singleResourceId,
                  optionalResourceId,
                  priceObj,
                });
              }
            }
          }
        } else {
          console.warn(
            `savePriceInventory: 产品 ${newProductId} 无法获取套餐，跳过价格库存班期保存`
          );
        }
      }
    } catch (e) {
      console.warn("savePriceInventory warning:", e);
    }

    stage = "saveResourceConfig";
    onProgress?.("保存资源配置（行程段+酒店+机酒）...");
    try {
      const segments = data.resourceConfig?.segments;
      if (Array.isArray(segments) && segments.length > 0) {
        await saveProductMaintainType(newProductId);
        await createProductDraft(newProductId);

        const packageList = await getPackageList(newProductId);
        const curPkg = packageList.itemList?.[0];
        const { draftProductSegments } = await getSegments(newProductId);
        const draftSegs = draftProductSegments?.segments ?? [];

        for (let i = 0; i < segments.length; i++) {
          const srcSegment = stripAdditionalResources(segments[i]);
          const curSegment = draftSegs[i];
          const packages =
            curPkg && i === 0
              ? [
                  {
                    masterResourceId: curPkg.singleResourceId,
                    packageName: curPkg.name,
                    segmentId: curSegment?.segmentId ?? 0,
                    servantResourceId: curPkg.optionalResourceId,
                  },
                ]
              : [];

          if (curSegment) {
            await saveSegment({
              ...srcSegment,
              packages,
              productId: curSegment.productId,
              segmentId: curSegment.segmentId,
            });
          } else {
            const { segmentId: _sid, ...rest } = srcSegment;
            await saveSegment({
              ...rest,
              packages,
              productId: draftSegs[0]?.productId ?? newProductId,
              segmentId: 0,
            });
          }
        }
        await submitSegments(newProductId);
      }
    } catch (e) {
      console.warn("saveResourceConfig warning:", e);
    }

    stage = "saveClause";
    onProgress?.("保存条款维护...");
    try {
      if (
        data.clauses &&
        Array.isArray(data.clauses) &&
        data.clauses.length > 0
      ) {
        await saveClausesFromData(newProductId, data.clauses);
      } else {
        await saveClauses(newProductId);
      }
    } catch (e) {
      console.warn("saveClause warning:", e);
    }

    stage = "completed";
    onProgress?.("完成");

    return {
      newProductId,
      success: true,
      stage: "completed",
    };
  } catch (error) {
    return {
      newProductId,
      success: false,
      stage,
      errorMessage: (error as Error).message,
    };
  }
}
