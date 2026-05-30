import { getVendorId } from "../../scripts/getVendorId";
import { buildFullDateResourcePrices } from "./editDatePrice";

type SavePriceOptions = {
  startDate?: string;
  endDate?: string;
};

export async function savePrice(
  resourceId,
  cost,
  vendorId?: string | number,
  options: SavePriceOptions = {},
) {
  const currentVendorId = vendorId ?? (await getVendorId());
  const resourcePrices = buildFullDateResourcePrices(
    cost,
    options.startDate || getTodayText(),
    options.endDate || "2030-07-12",
  );
  const body = {
    contentType: "json",
    head: {
      cid: "09031111115146167449",
      ctok: "",
      cver: "1.0",
      lang: "01",
      sid: "8888",
      syscode: "09",
      auth: "",
      extension: [],
    },
    resourceId,
    costPriceCurrency: "CNY",
    inventoryMode: "U",
    saveType: "N",
    resourcePrices,
    resourceChildPrices: [],
    resourceStorages: [],
    relatedSingleRoomPrices: [],
    vendorId: currentVendorId,
  };
  const res = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/SaveResourceStoragePriceInfo.json?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        "sec-ch-ua":
          '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrer:
        "https://vbooking.ctrip.com/ivbk/vendor/additionalservicedetail?type=new&tabkey=2&resourceid=41646573&from=vbk",
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`savePrice HTTP ${res.status}: ${text.slice(0, 500)}`);
  }
  return res.json().catch(() => ({}));
}

function getTodayText() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
