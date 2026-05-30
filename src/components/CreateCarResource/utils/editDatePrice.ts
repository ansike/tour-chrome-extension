import { PRICE_RATE } from "~src/constant";

type ResourcePriceRow = {
  label?: string;
  carTypeKey?: string;
  carName?: string;
  price: number | string;
  resourceId: number | string;
  createStatus?: string;
  priceStatus?: string;
};

export type EditDatePriceResult = {
  label: string;
  carName: string;
  price: number;
  resourceId: number | string;
  status: "success" | "dryRun" | "failed";
  error: string;
  updatedDateCount: number;
  firstDate: string;
  lastDate: string;
  updatedAt: string;
};

export type EditDatePriceSummary = {
  total: number;
  success: number;
  dryRun: number;
  failed: number;
  holidayDateCount: number;
  firstHolidayDate: string;
  lastHolidayDate: string;
};

type HolidayDefinition = {
  name: string;
  start: string;
  end: string;
  rate: number;
  source: "official" | "predicted";
};

type Holiday = HolidayDefinition & {
  start: string;
  end: string;
};

type EditDatePriceOptions = {
  vendorId: string | number;
  rows: ResourcePriceRow[];
  startDate: string;
  endDate: string;
  priceRate?: number;
  concurrency?: number;
  dryRun?: boolean;
  onProgress?: (result: EditDatePriceResult, summary: EditDatePriceSummary) => void;
};

export type ResourcePriceItem = {
  date: string;
  active: boolean;
  marketPrice: number;
  cost: number;
};

const holidayDefinitions: HolidayDefinition[] = [
  { name: "端午节", start: "2026-06-19", end: "2026-06-21", rate: 1.5, source: "official" },
  { name: "暑假", start: "2026-07-10", end: "2026-08-31", rate: 1.5, source: "official" },
  { name: "中秋节", start: "2026-09-25", end: "2026-09-27", rate: 1.5, source: "official" },
  { name: "国庆节", start: "2026-10-01", end: "2026-10-07", rate: 1.5, source: "official" },
  { name: "春节", start: "2027-02-04", end: "2027-02-12", rate: 1.5, source: "predicted" },
  { name: "清明节", start: "2027-04-05", end: "2027-04-07", rate: 1.3, source: "predicted" },
  { name: "劳动节", start: "2027-05-01", end: "2027-05-05", rate: 1.5, source: "predicted" },
  { name: "端午节", start: "2027-06-09", end: "2027-06-11", rate: 1.5, source: "predicted" },
  { name: "暑假", start: "2027-07-10", end: "2027-08-31", rate: 1.5, source: "predicted" },
  { name: "中秋节", start: "2027-09-15", end: "2027-09-17", rate: 1.5, source: "predicted" },
  { name: "国庆节", start: "2027-10-01", end: "2027-10-07", rate: 1.5, source: "predicted" },
  { name: "春节", start: "2028-01-24", end: "2028-02-01", rate: 1.5, source: "predicted" },
  { name: "清明节", start: "2028-04-04", end: "2028-04-06", rate: 1.3, source: "predicted" },
  { name: "劳动节", start: "2028-05-01", end: "2028-05-05", rate: 1.5, source: "predicted" },
  { name: "端午节", start: "2028-05-28", end: "2028-05-30", rate: 1.5, source: "predicted" },
  { name: "暑假", start: "2028-07-10", end: "2028-08-31", rate: 1.5, source: "predicted" },
  { name: "国庆节", start: "2028-10-01", end: "2028-10-07", rate: 1.5, source: "predicted" },
  { name: "中秋节", start: "2028-10-03", end: "2028-10-05", rate: 1.5, source: "predicted" },
  { name: "春节", start: "2029-02-11", end: "2029-02-19", rate: 1.5, source: "predicted" },
  { name: "清明节", start: "2029-04-04", end: "2029-04-06", rate: 1.3, source: "predicted" },
  { name: "劳动节", start: "2029-05-01", end: "2029-05-05", rate: 1.5, source: "predicted" },
  { name: "端午节", start: "2029-06-16", end: "2029-06-18", rate: 1.5, source: "predicted" },
  { name: "暑假", start: "2029-07-10", end: "2029-08-31", rate: 1.5, source: "predicted" },
  { name: "中秋节", start: "2029-09-22", end: "2029-09-24", rate: 1.5, source: "predicted" },
  { name: "国庆节", start: "2029-10-01", end: "2029-10-07", rate: 1.5, source: "predicted" },
  { name: "春节", start: "2030-02-01", end: "2030-02-09", rate: 1.5, source: "predicted" },
  { name: "清明节", start: "2030-04-05", end: "2030-04-07", rate: 1.3, source: "predicted" },
  { name: "劳动节", start: "2030-05-01", end: "2030-05-05", rate: 1.5, source: "predicted" },
  { name: "端午节", start: "2030-06-05", end: "2030-06-07", rate: 1.5, source: "predicted" },
  { name: "暑假", start: "2030-07-10", end: "2030-08-31", rate: 1.5, source: "predicted" },
];

export function getDefaultEditStartDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDatePricePreview(startDate: string, endDate: string) {
  const holidayDates = buildHolidayDates(getHolidays(startDate, endDate));
  return {
    holidayDateCount: holidayDates.length,
    firstHolidayDate: holidayDates[0]?.date || "",
    lastHolidayDate: holidayDates[holidayDates.length - 1]?.date || "",
  };
}

export function buildFullDateResourcePrices(
  basePrice: number,
  startDate: string,
  endDate: string,
  priceRate = PRICE_RATE,
): ResourcePriceItem[] {
  validateDateText(startDate, "开始日期");
  validateDateText(endDate, "结束日期");
  if (startDate > endDate) {
    throw new Error("开始日期不能晚于结束日期");
  }

  const holidays = getHolidays(startDate, endDate);
  return getDatesBetween(startDate, endDate).map((date) => {
    const holiday = findHoliday(date, holidays);
    const cost = holiday ? Math.ceil(basePrice * holiday.rate) : basePrice;
    return {
      date,
      active: true,
      marketPrice: Math.ceil(cost * priceRate),
      cost,
    };
  });
}

export async function editCarResourceDatePrice({
  vendorId,
  rows,
  startDate,
  endDate,
  priceRate = PRICE_RATE,
  concurrency = 3,
  dryRun = false,
  onProgress,
}: EditDatePriceOptions) {
  validateDateText(startDate, "开始日期");
  validateDateText(endDate, "结束日期");
  if (startDate > endDate) {
    throw new Error("开始日期不能晚于结束日期");
  }

  const filteredRows = normalizeRows(rows);
  const holidays = getHolidays(startDate, endDate);
  const holidayDates = buildHolidayDates(holidays);
  if (!holidayDates.length) {
    throw new Error("当前日期范围内没有可修改的假日日期");
  }

  const results: EditDatePriceResult[] = [];
  const getSummary = () => buildSummary(results, holidayDates);

  await runWithConcurrency(filteredRows, concurrency, async (row) => {
    const resourcePrices = buildResourcePrices(row.price, holidayDates, priceRate);
    let result: EditDatePriceResult;

    if (dryRun) {
      result = buildResult(row, resourcePrices, "dryRun", "");
    } else {
      try {
        await changePrice({
          resourceId: Number(row.resourceId),
          resourcePrices,
          vendorId,
        });
        result = buildResult(row, resourcePrices, "success", "");
      } catch (error) {
        result = buildResult(
          row,
          resourcePrices,
          "failed",
          error instanceof Error ? error.message : String(error),
        );
      }
    }

    results.push(result);
    onProgress?.(result, getSummary());
  });

  return {
    results,
    summary: getSummary(),
  };
}

function normalizeRows(rows: ResourcePriceRow[]) {
  const seen = new Set<string>();
  return rows
    .filter((row) => row.createStatus == null || row.createStatus === "success")
    .filter((row) => row.priceStatus == null || row.priceStatus === "success")
    .map((row) => ({
      ...row,
      price: Number(row.price),
      resourceId: row.resourceId,
    }))
    .filter((row) => {
      const key = String(row.resourceId || "");
      if (!key || !Number.isFinite(row.price) || row.price <= 0 || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

function buildResult(
  row: ResourcePriceRow,
  resourcePrices: Array<{ date: string; active: boolean; marketPrice: number; cost: number }>,
  status: EditDatePriceResult["status"],
  error: string,
): EditDatePriceResult {
  return {
    label: row.label || row.carTypeKey || "",
    carName: row.carName || "",
    price: Number(row.price),
    resourceId: row.resourceId,
    status,
    error,
    updatedDateCount: resourcePrices.length,
    firstDate: resourcePrices[0]?.date || "",
    lastDate: resourcePrices[resourcePrices.length - 1]?.date || "",
    updatedAt: new Date().toISOString(),
  };
}

function buildSummary(
  results: EditDatePriceResult[],
  holidayDates: Array<{ date: string; holiday: Holiday }>,
): EditDatePriceSummary {
  return {
    total: results.length,
    success: results.filter((item) => item.status === "success").length,
    dryRun: results.filter((item) => item.status === "dryRun").length,
    failed: results.filter((item) => item.status === "failed").length,
    holidayDateCount: holidayDates.length,
    firstHolidayDate: holidayDates[0]?.date || "",
    lastHolidayDate: holidayDates[holidayDates.length - 1]?.date || "",
  };
}

function getHolidays(startDate: string, endDate: string): Holiday[] {
  return holidayDefinitions
    .filter((holiday) => holiday.start <= endDate && holiday.end >= startDate)
    .map((holiday) => ({
      ...holiday,
      start: holiday.start < startDate ? startDate : holiday.start,
      end: holiday.end > endDate ? endDate : holiday.end,
    }));
}

function findHoliday(dateText: string, holidays: Holiday[]) {
  const matched = holidays.filter((holiday) => holiday.start <= dateText && dateText <= holiday.end);
  if (!matched.length) {
    return null;
  }
  return matched.sort((a, b) => b.rate - a.rate)[0];
}

function buildHolidayDates(holidays: Holiday[]) {
  const byDate = new Map<string, Holiday>();
  for (const holiday of holidays) {
    for (const date of getDatesBetween(holiday.start, holiday.end)) {
      const existing = byDate.get(date);
      if (!existing || holiday.rate > existing.rate) {
        byDate.set(date, holiday);
      }
    }
  }
  return [...byDate.entries()]
    .map(([date, holiday]) => ({ date, holiday }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function buildResourcePrices(
  basePrice: number,
  holidayDates: Array<{ date: string; holiday: Holiday }>,
  priceRate: number,
) {
  return holidayDates.map(({ date, holiday }) => {
    const cost = Math.ceil(basePrice * holiday.rate);
    return {
      date,
      active: true,
      marketPrice: Math.ceil(cost * priceRate),
      cost,
    };
  });
}

async function changePrice({
  resourceId,
  resourcePrices,
  vendorId,
}: {
  resourceId: number;
  resourcePrices: Array<{ date: string; active: boolean; marketPrice: number; cost: number }>;
  vendorId: string | number;
}) {
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
    saveType: "M",
    resourcePrices,
    resourceChildPrices: [],
    resourceStorages: [],
    relatedSingleRoomPrices: [],
    vendorId,
  };

  const response = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/SaveResourceStoragePriceInfo.json?_fxpcqlniredt=09031119411217359276&_fxpcqlniredt=09031119411217359276",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify(body),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`changePrice HTTP ${response.status}: ${text.slice(0, 500)}`);
  }
  return text ? JSON.parse(text) : {};
}

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (item: T) => Promise<void>,
) {
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, limit) }, async () => {
    while (cursor < items.length) {
      const current = items[cursor++];
      await worker(current);
    }
  });
  await Promise.all(workers);
}

function validateDateText(dateText: string, label: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText)) {
    throw new Error(`${label}格式必须是 YYYY-MM-DD`);
  }
}

function toDate(dateText: string) {
  const [year, month, day] = dateText.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
  const next = new Date(date.getTime());
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function getDatesBetween(startText: string, endText: string) {
  const dates: string[] = [];
  for (let date = toDate(startText), end = toDate(endText); date <= end; date = addDays(date, 1)) {
    dates.push(formatDate(date));
  }
  return dates;
}
