import {
  getProductTourInfoList,
  getTourDaily,
  type TourDailyDescription,
} from "./getProductBaseInfo";
import { transformNumber2String } from "./util";
import { template } from "../CombinationProduct/scripts/constant";

export const checkTourDaily = async (
  productTourInfo: any,
  tourDaily: string,
  saveType: 8 | 3,
) => {
  const checkRes = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/checkTourDaily?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify({
        contentType: "json",
        head: {
          cid: "09031178210202430147",
          ctok: "",
          cver: "1.0",
          lang: "01",
          sid: "8888",
          syscode: "09",
          auth: "",
          extension: [],
        },
        productTourInfo,
        saveType,
        tourDaily,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  const checkJson = await checkRes.json();
  if (checkJson.ResponseStatus.Ack === "Failure") {
    throw new Error(
      checkJson.ResponseStatus.Errors.map((it) => it.Message).join(","),
    );
  }
  const tourDailyText = transformNumber2String(checkJson.tourDaily);
  return tourDailyText;
};

async function calculateTourInfoScore(productTourInfo: any) {
  const res = await fetch(
    "https://online.ctrip.com/restapi/soa2/20049/calculateTourInfoScore",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json;charset=UTF-8",
        cookieorigin: "https://vbooking.ctrip.com",
        "x-ctx-locale": "zh-CN",
      },
      body: JSON.stringify({
        businessData: "{}",
        contentType: "json",
        requestHeader: { locale: "zh-CN" },
        tourInfo: productTourInfo,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  const data = await res.json();
  if (data?.ResponseStatus?.Ack === "Failure") {
    const msg = data?.ResponseStatus?.Errors?.map((e: any) => e.Message).join(", ") ?? "未知错误";
    throw new Error(`行程评分计算失败: ${msg}`);
  }
  return data;
}

async function saveProductTourInfo(productTourInfo: any, tourDailyJson?: string) {
  const body: Record<string, any> = {
    contentType: "json",
    head: {
      cid: "09031178210202430147",
      ctok: "",
      cver: "1.0",
      lang: "01",
      sid: "8888",
      syscode: "09",
      auth: "",
      extension: [],
    },
    tourInfo: {
      tourInfoId: productTourInfo.tourInfoId,
      tourInfoName: productTourInfo.tourInfoName ?? "",
      tourInfoDesc: productTourInfo.tourInfoDesc ?? "",
      productId: productTourInfo.productId,
      main: productTourInfo.main ?? true,
      sort: productTourInfo.sort ?? 0,
      draftTourInfoStatus: productTourInfo.draftTourInfoStatus ?? 2,
      auditTourInfoId: productTourInfo.auditTourInfoId,
      auditTourInfoStatus: productTourInfo.auditTourInfoStatus ?? 1,
      aggregateScore: productTourInfo.aggregateScore ?? 100,
      auditStatus: productTourInfo.auditStatus ?? { key: "N", value: "未提交" },
    },
    saveType: 3,
  };
  if (tourDailyJson) {
    body.tourDaily = tourDailyJson;
  }
  const result = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/saveProductTourInfo?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147",
    {
      headers: {
        accept: "*/*",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        "x-ctx-locale": "zh-CN",
      },
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  const data = await result.json();
  if (data?.ResponseStatus?.Ack === "Failure") {
    const msg = data?.ResponseStatus?.Errors?.map((e: any) => e.Message).join(", ") ?? "未知错误";
    throw new Error(`保存行程关联失败: ${msg}`);
  }
  return data;
}

/** 产品无行程时，从零创建行程（参考 CombinationProduct 流程） */
async function saveTourDailyDetailForNewProduct(
  productId: string,
  tourDailyDescriptions: TourDailyDescription[],
) {
  const formatted = tourDailyDescriptions.map((it, idx) => ({
    ...it,
    orderDay: idx + 1,
    tourDailyDescriptionId: it.tourDailyDescriptionId ?? null,
    refId: it.refId ?? null,
    tourDailyInfos: (it.tourDailyInfos ?? []).map((info: any) => ({
      ...info,
      refId: info.refId ?? null,
      tourDailyInfoId: info.tourDailyInfoId ?? null,
      tourDailyPois: (info.tourDailyPois ?? []).map((poi: any) => ({
        ...poi,
        tourDailyPoiId: poi.tourDailyPoiId ?? null,
        refId: poi.refId ?? null,
      })),
    })),
  }));

  const tourInfoList = await getProductTourInfoList(productId);
  const productIdNum = Number(productId) || parseInt(String(productId), 10);
  let productTourInfo: any = {
    main: true,
    tourInfoId: 0,
    productId: productIdNum,
    sort: 0,
    isNew: true,
    days: formatted.length,
    fromTourInfoId: 0,
    referenceCount: 0,
    template,
    tourDailyDescriptions: formatted,
  };
  if (tourInfoList.tourInfos?.[0]?.tourInfoId) {
    productTourInfo = { ...productTourInfo, ...tourInfoList.tourInfos[0] };
  }

  const newTourDailyText = JSON.stringify({ tourDailyDescriptions: formatted });
  let tourDailyText: string;
  try {
    tourDailyText = await checkTourDaily(productTourInfo, newTourDailyText, 8);
  } catch (error: any) {
    if (error?.message?.includes?.("景点类型数据有误")) {
      const pois = error.message.replaceAll("景点类型数据有误", "").split(",");
      formatted.forEach((item) => {
        (item.tourDailyInfos ?? []).forEach((it: any) => {
          if (it.activeType?.name === "景点") {
            (it.tourDailyPois ?? []).forEach((po: any) => {
              if (pois.includes(po.poi?.poiName) && po.poi?.ticketType?.key === 2 && po.suffixName?.key === 11) {
                po.suffixName = { key: 7, name: "不含门票" };
              }
            });
          }
        });
      });
      tourDailyText = await checkTourDaily(
        productTourInfo,
        JSON.stringify({ tourDailyDescriptions: formatted }),
        8,
      );
    } else {
      throw error;
    }
  }
  const caclTourInfo = await calculateTourInfoScore(productTourInfo);
  productTourInfo.aggregateScore = caclTourInfo.tourInfo?.aggregateScore;

  tourDailyText = await checkTourDaily(productTourInfo, tourDailyText, 3);
  const newTourDaily = JSON.parse(tourDailyText);
  productTourInfo.auditTourInfoId = newTourDaily.tourInfoId;
  productTourInfo.auditTourInfoStatus = 1;
  newTourDaily.tourInfoScores = caclTourInfo.tourInfo?.tourInfoScores;
  newTourDaily.aggregateScore = caclTourInfo.tourInfo?.aggregateScore;

  const saveDetailRes = await fetch(
    "https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json",
    {
      headers: {
        accept: "*/*",
        "content-type": "application/json;charset=UTF-8",
        cookieorigin: "https://vbooking.ctrip.com",
        "x-ctx-locale": "zh-CN",
      },
      body: JSON.stringify({
        requestHeader: { locale: "zh-CN" },
        piCategoryId: 0,
        tourInfo: newTourDaily,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  const saveDetailData = await saveDetailRes.json();
  if (saveDetailData?.ResponseStatus?.Ack === "Failure") {
    const msg = saveDetailData?.ResponseStatus?.Errors?.map((e: any) => e.Message).join(", ") ?? "未知错误";
    throw new Error(`保存行程详情失败: ${msg}`);
  }

  const leanTourInfo = {
    productId: productTourInfo.productId,
    tourInfoId: newTourDaily.tourInfoId,
    auditTourInfoId: newTourDaily.tourInfoId,
    auditTourInfoStatus: 1,
    main: productTourInfo.main,
    sort: productTourInfo.sort,
    aggregateScore: productTourInfo.aggregateScore,
  };
  return saveProductTourInfo(leanTourInfo, JSON.stringify(newTourDaily));
}

export const saveTourDailyDetail = async (
  productId: string,
  tourDailyDescriptions: TourDailyDescription[],
) => {
  const tourInfoList = await getProductTourInfoList(productId);
  const existingTourInfo = tourInfoList.tourInfos?.[0];
  const hasAuditId = existingTourInfo?.auditTourInfoId ?? existingTourInfo?.tourInfoId;

  if (!hasAuditId) {
    return saveTourDailyDetailForNewProduct(
      productId,
      tourDailyDescriptions,
    );
  }

  const { tourInfo, tourDaily } = await getTourDaily(
    productId,
    existingTourInfo.auditTourInfoId ? "auditTourInfoId" : "tourInfoId",
  );

  console.log("tourDailyDescriptions", tourDailyDescriptions);
  let newTourDailyText = JSON.stringify({
    ...tourDaily.tourInfo,
    tourDailyDescriptions,
  });
  let tourDailyText;
  try {
    tourDailyText = await checkTourDaily(tourInfo, newTourDailyText, 8);
  } catch (error: any) {
    if (error?.message?.includes?.("景点类型数据有误")) {
      const pois = (error?.message ?? "").replaceAll("景点类型数据有误", "").split(",");
      console.log({ pois });

      tourDailyDescriptions.forEach((item) => {
        item.tourDailyInfos.forEach((it) => {
            if(it.activeType.name === "景点"){
                it.tourDailyPois.forEach((po) => {
                    // ticketType.key 2 免费
                    // suffixName.key 11 为无需门票
                    if(pois.includes(po.poi.poiName) && po.poi.ticketType.key === 2 && po.suffixName.key === 11){
                        po.suffixName = { key: 7, name: '不含门票' }
                    }
                })
            }
        })
      })
      newTourDailyText = JSON.stringify({
        ...tourDaily.tourInfo,
        tourDailyDescriptions,
      });
      tourDailyText = await checkTourDaily(tourInfo, newTourDailyText, 8);
    }
  }
  const tourDailyText1 = await checkTourDaily(tourInfo, tourDailyText, 3);
  const newTourDaily = JSON.parse(tourDailyText1);

  await fetch(
    "https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json;charset=UTF-8",
        cookieorigin: "https://vbooking.ctrip.com",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify({
        requestHeader: {
          locale: "zh-CN",
        },
        piCategoryId: 0,
        tourInfo: newTourDaily,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  const leanTourInfo = {
    productId: Number(tourInfo.productId) || tourInfo.productId,
    tourInfoId: newTourDaily.tourInfoId,
    auditTourInfoId: newTourDaily.tourInfoId,
    auditTourInfoStatus: 1,
    main: tourInfo.main ?? true,
    sort: tourInfo.sort ?? 0,
    aggregateScore: newTourDaily.aggregateScore ?? tourInfo.aggregateScore,
  };
  return saveProductTourInfo(leanTourInfo, JSON.stringify(newTourDaily));
};
