import { transformNumber2String } from "./util";

export interface TourDailyDescription {
  [key: string]: any;
}

export interface TourInfo {
  tourDailyDescriptions: TourDailyDescription[];
  [key: string]: any;
}

const getProductTourInfoList = async (productId: string | number) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getProductTourInfoList?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  const text = await res.text()
  const newText = transformNumber2String(text);
  const data = JSON.parse(newText);
  return data;
}

export const getTourDailyDetail = async (tourInfoId: string): Promise<{ tourInfo: TourInfo }> => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20049/getTourDailyDetail.json',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json;charset=UTF-8',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"requestHeader\":{\"locale\":\"zh-CN\"},\"tourInfoId\":\"${tourInfoId}\",\"departureDate\":\"2024-07-12\",\"businessData\":\"\",\"contentType\":\"json\"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  const text = await res.text()
  const newText = transformNumber2String(text);
  return JSON.parse(newText);
}

export const getTourDaily = async (productId: string | number, key = 'tourInfoId') => {
  const { tourInfos } = await getProductTourInfoList(productId);
  const tourInfo = tourInfos[0];
  const id = tourInfo[key];
  const tourDaily = await getTourDailyDetail(id);
  return { tourInfo, tourDaily }
}
