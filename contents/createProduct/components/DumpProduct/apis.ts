// 获取排名数据
export const getTourMarketQuotationsRanking = async ({ region, isUp, productType }) => {
  const date = new Date().toISOString().split("T")[0];
  const body = {
    baseParam: {
      masterConfigId: 7,
    },
    queryParam: {
      inMap: {
        dest_region_name: region,
        prd_pat_name: productType,
      },
      startDate: date,
      endDate: date,
      pageNo: 1,
      pageSize: 50,
    },
    otherParam: {
      metricList: ["suc_ord_cnt_normalization", "suc_ord_cnt_rate"],
      orderList: [
        isUp ? "suc_ord_cnt_rate" : "suc_ord_cnt_normalization",
        "productid",
      ],
      orderType: isUp ? "desc" : "asc",
      groupList: ["productid"],
      prefix: "grp_last7d",
    },
    needOwnData: false,
  };

  const res = await fetch(
    "https://m.ctrip.com/restapi/soa2/13807/getTourMarketQuotationsRanking",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        appname: "vbkbusiness",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://vbooking.ctrip.com/",
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  return res.json();
};

export { getProductDumpConfig } from "../../../../lib/api";