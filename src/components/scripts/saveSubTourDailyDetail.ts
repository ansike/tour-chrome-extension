import { getTourDaily } from "./getProductBaseInfo";
import { getTourDays } from "./getTourDays";

const activeTypeMap = {
  // {key: 14, name: "火车"}
  train: 14,
  // {key: 2, name: "航班"}
  flight: 2,
};
const transportationTypes = [activeTypeMap.train, activeTypeMap.flight];

export const saveSubTourDailyDetail = async (productId: string, sub) => {
  const { tourInfo, tourDaily } = await getTourDaily(productId);
  // 添加交通工具
  await addTransportationToTourDaily(tourDaily.tourInfo, sub);
  await saveTourDailyDetail(tourDaily.tourInfo);

  const res = await saveProductTourInfo(tourInfo);
  return res;
};

const addTransportationToTourDaily = async (tourInfo: any, sub) => {
  const obj = await getTourDays(sub.productId);
  const dailyContext = obj.dailyContext;
  const firstTransport =
    dailyContext?.tourDailyDescriptions?.[0]?.tourDailyInfos?.[0];
  // 添加交通工具
  const descriptions = tourInfo.tourDailyDescriptions;
  const firstDay = descriptions[0];
  // 判断是否已经设置交通工具
  const firstHasSetTransportation = firstDay.tourDailyInfos.some(
    (item) => transportationTypes.includes(item.activeType.key),
  );
  if (!firstHasSetTransportation && firstDay && firstTransport) {
    firstDay.tourDailyInfos.unshift(firstTransport);
  }

  const lastTransport =
    dailyContext?.tourDailyDescriptions?.[
      dailyContext?.tourDailyDescriptions.length - 1
    ]?.tourDailyInfos?.[0];
  const lastDay = descriptions[descriptions.length - 1];
  // 判断是否已经设置交通工具
  const lastHasSetTransportation = lastDay.tourDailyInfos.some(
    (item) => transportationTypes.includes(item.activeType.key),
  );
  
  if (!lastHasSetTransportation && lastDay && lastTransport) {
    lastTransport.sort = lastDay.tourDailyInfos.length + 1;
    lastDay.tourDailyInfos.push(lastTransport);
  }
};

export const saveTourDailyDetail = async (tourInfo: any) => {
  const result = await await fetch(
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
        tourInfo,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  return await result.json();
};

export const saveProductTourInfo = async (tourInfo: any) => {
  const result = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/saveProductTourInfo?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147",
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
        tourInfo: tourInfo,
        saveType: 3,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  return await result.json();
};
