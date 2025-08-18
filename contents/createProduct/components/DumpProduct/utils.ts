import { getTourMarketQuotationsRanking } from "./apis";

export const dumpData = async (
  selectedRegions: string[],
  selectedDataTypes: string[],
  callback: (data: any) => void,
) => {
  const data = [];
  let idx = 0;
  for (const region of selectedRegions) {
    for (const dataType of selectedDataTypes) {
      data.push({
        idx,
        region,
        dataType,
        status: "pending",
      });
      idx++;
    }
  }

  callback(data);
  for (const item of data) {
    const { idx } = item;
    const res = await getTourMarketQuotationsRanking({
      region: item.region,
      isUp: item.dataType === "飙升",
    });
    if (res?.tableDataItemList) {
      exportCSV(item.region, item.dataType, formatData(res.tableDataItemList));
      item.status = "success";
    } else {
      item.status = "error";
    }
    data[idx] = item;
    callback(data);
  }
};

type tableDataItem = {
  dimMap: {
    productid: string;
    rank: string;
    productName: string;
  };
  metricMap: {
    suc_ord_cnt_normalization: number;
    suc_ord_cnt_rate: number;
  };
};

export const formatData = (data: tableDataItem[]) => {
  return data.map((item) => ({
    rank: item.dimMap.rank,
    productid: item.dimMap.productid,
    productName: item.dimMap.productName,
  }));
};

export const exportCSV = (
  region: string,
  dataType: string,
  data: tableDataItem["dimMap"][],
) => {
  const csv = data.map((item) => Object.values(item).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const date = new Date().toISOString().split("T")[0];
  a.download = `${region}_${dataType}_${date}.csv`;
  a.click();
};
