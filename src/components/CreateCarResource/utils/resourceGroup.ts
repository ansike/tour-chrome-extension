import { PRICE_STEP } from "~src/constant";

type CreatedResourceRow = {
  label?: string;
  price: number | string;
  resourceId: number | string;
  createStatus?: string;
  priceStatus?: string;
};

type ResourceGroupDefinition = {
  resourceGroupName: string;
  resourceIds: Array<number | string>;
};

export type ResourceGroupResult = ResourceGroupDefinition & {
  resourceGroupId: number | string | null;
  status: "success" | "failed";
  error: string;
  createdAt: string;
  source?: "history" | "created";
};

export type ResourceGroupSummary = {
  expectedGroupTotal: number;
  createdGroupTotal: number;
  failedGroupTotal: number;
};

const groupCars = [
  { sourceLabels: ["经济5座", "5座经济"], groupLabel: "5座经济", rate: 1.2, key: "normal5" },
  { sourceLabels: ["舒适5座", "5座舒适"], groupLabel: "5座舒适", rate: 1.3, key: "comfort5" },
  { sourceLabels: ["商务7座", "7座"], groupLabel: "7座", rate: 2.4, key: "car7" },
  { sourceLabels: ["商务9座", "9座"], groupLabel: "9座", rate: 3, key: "car9" },
  { sourceLabels: ["12座中巴", "12座"], groupLabel: "12座", rate: 3.8, key: "car12" },
  { sourceLabels: ["14座中巴", "14座"], groupLabel: "14座", rate: 4, key: "car14" },
  { sourceLabels: ["19座中巴", "19座"], groupLabel: "19座", rate: 4.9, key: "car19" },
];

const limitGroupLabels = new Set(["9座", "12座", "14座", "19座"]);
const maxGroupMoney = 70000;

export async function createCarResourceGroupsFromRows(
  rows: CreatedResourceRow[],
  onProgress?: (result: ResourceGroupResult, summary: ResourceGroupSummary) => void,
) {
  const definitions = buildGroupDefinitions(rows);
  const results: ResourceGroupResult[] = [];
  const getSummary = () => buildSummary(definitions.length, results);
  const existingGroupMap = await buildExistingResourceGroupMap();
  const { historyResults, missingDefinitions } = matchExistingResourceGroups(definitions, existingGroupMap);

  for (const result of historyResults) {
    results.push(result);
    onProgress?.(result, getSummary());
  }

  for (let i = 0; i < missingDefinitions.length; i++) {
    const group = missingDefinitions[i];
    const baseResult = {
      ...group,
      resourceGroupId: null,
      status: "failed" as ResourceGroupResult["status"],
      error: "",
      createdAt: new Date().toISOString(),
    };

    try {
      const resourceGroupId = await createResourceGroup(group.resourceGroupName);
      await addCarIntoGroup(resourceGroupId, group.resourceIds);
      await updateResourceGroup(resourceGroupId, group.resourceGroupName);
      const result: ResourceGroupResult = {
        ...baseResult,
        resourceGroupId,
        status: "success",
        source: "created",
      };
      results.push(result);
      onProgress?.(result, getSummary());
    } catch (error) {
      const result: ResourceGroupResult = {
        ...baseResult,
        error: error instanceof Error ? error.message : String(error),
      };
      results.push(result);
      onProgress?.(result, getSummary());
    }
  }

  return {
    definitions,
    results,
    summary: getSummary(),
  };
}

export function buildGroupDefinitions(rows: CreatedResourceRow[]): ResourceGroupDefinition[] {
  const resourceMap = buildResourceMap(rows);
  const normal5 = groupCars[0];
  const normal5Prices = [...(resourceMap.get(normal5.key)?.keys() || [])].sort((a, b) => a - b);
  const definitions: ResourceGroupDefinition[] = [];

  for (const normal5Price of normal5Prices) {
    const basePrice = normal5Price / normal5.rate;
    const resourceIds: Array<number | string> = [];
    const nameParts: string[] = [];

    for (const car of groupCars) {
      const price = roundUpToStep(Math.trunc(car.rate * basePrice), PRICE_STEP);
      if (price > maxGroupMoney && limitGroupLabels.has(car.groupLabel)) {
        continue;
      }

      const resourceId = resourceMap.get(car.key)?.get(price);
      if (!resourceId) {
        continue;
      }

      resourceIds.push(resourceId);
      nameParts.push(`${car.groupLabel}${price}`);
    }

    if (nameParts.length < 4) {
      break;
    }

    definitions.push({
      resourceGroupName: nameParts.join("+"),
      resourceIds,
    });
  }

  return definitions;
}

function matchExistingResourceGroups(
  definitions: ResourceGroupDefinition[],
  existingGroupMap: Map<string, ExistingResourceGroup>,
) {
  const historyResults: ResourceGroupResult[] = [];
  const missingDefinitions: ResourceGroupDefinition[] = [];

  for (const group of definitions) {
    const existingGroup = findExistingResourceGroup(existingGroupMap, group.resourceGroupName);
    if (existingGroup?.resourceGroupId) {
      historyResults.push({
        ...group,
        resourceGroupName: existingGroup.resourceGroupName || group.resourceGroupName,
        resourceGroupId: existingGroup.resourceGroupId,
        status: "success",
        source: "history",
        error: "",
        createdAt: existingGroup.createTime || new Date().toISOString(),
      });
      continue;
    }
    missingDefinitions.push(group);
  }

  return { historyResults, missingDefinitions };
}

function buildResourceMap(rows: CreatedResourceRow[]) {
  const map = new Map<string, Map<number, number | string>>();
  for (const row of rows) {
    if (row.createStatus !== "success" || !row.resourceId) {
      continue;
    }
    const car = getGroupCar(row.label || "");
    const price = Number(row.price);
    if (!car || !Number.isFinite(price)) {
      continue;
    }
    if (!map.has(car.key)) {
      map.set(car.key, new Map());
    }
    map.get(car.key)?.set(price, row.resourceId);
  }
  return map;
}

function getGroupCar(label: string) {
  const matched = groupCars
    .flatMap((car) => car.sourceLabels.map((sourceLabel) => ({ car, sourceLabel })))
    .sort((prev, next) => next.sourceLabel.length - prev.sourceLabel.length)
    .find((item) => label.includes(item.sourceLabel));
  return matched?.car;
}

function roundUpToStep(price: number, step: number) {
  return Math.ceil(price / step) * step;
}

function buildSummary(expectedGroupTotal: number, results: ResourceGroupResult[]): ResourceGroupSummary {
  return {
    expectedGroupTotal,
    createdGroupTotal: results.filter((item) => item.status === "success").length,
    failedGroupTotal: results.filter((item) => item.status === "failed").length,
  };
}

async function createResourceGroup(resourceGroupName: string) {
  const body = {
    contentType: "json",
    head: buildHead(),
    resourceGroupDto: { resourceGroupName, resourcePICategoryId: 1132, mandatory: "T" },
  };
  const data = await postJson(
    "https://online.ctrip.com/restapi/soa2/15638/createResourceGroup?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449",
    body,
    "https://vbooking.ctrip.com/product/input/resourceGroup?from=vbk",
  );
  if (!data.resourceGroupId) {
    throw new Error(`createResourceGroup missing id: ${JSON.stringify(data).slice(0, 500)}`);
  }
  return data.resourceGroupId;
}

type ExistingResourceGroup = {
  resourceGroupId?: number | string;
  resourceGroupName?: string;
  active?: string;
  createTime?: string;
};

async function buildExistingResourceGroupMap() {
  const pageSize = 100;
  const firstPage = await searchResourceGroupPage(1, pageSize);
  assertResourceGroupSearchSuccess(firstPage);
  const map = new Map<string, ExistingResourceGroup>();
  collectExistingResourceGroups(firstPage.resourceGroupDtos || [], map);

  const totalCount = Number(firstPage.total || firstPage.totalCount || 0);
  const pageCount = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: Math.max(pageCount - 1, 0) }, (_, index) => index + 2);
  for (let index = 0; index < pageNumbers.length; index += 4) {
    const pages = await Promise.all(
      pageNumbers.slice(index, index + 4).map((pageNo) => searchResourceGroupPage(pageNo, pageSize)),
    );
    for (const page of pages) {
      assertResourceGroupSearchSuccess(page);
      collectExistingResourceGroups(page.resourceGroupDtos || [], map);
    }
  }

  return map;
}

function collectExistingResourceGroups(groups: ExistingResourceGroup[], map: Map<string, ExistingResourceGroup>) {
  for (const group of groups) {
    if (!group.resourceGroupId || !group.resourceGroupName || !isUsableResourceGroup(group)) {
      continue;
    }
    for (const key of getResourceGroupLookupKeys(group.resourceGroupName)) {
      if (!map.has(key)) {
        map.set(key, group);
      }
    }
  }
}

function isUsableResourceGroup(group: ExistingResourceGroup) {
  return !group.active || group.active === "T" || group.active === "有效";
}

function normalizeResourceGroupName(name: string) {
  return String(name || "").replace(/\s+/g, "");
}

function normalizeResourceGroupNameWithout19(name: string) {
  return normalizeResourceGroupName(name)
    .split("+")
    .filter((part) => !part.startsWith("19座"))
    .join("+");
}

function getResourceGroupLookupKeys(name: string) {
  const exactKey = normalizeResourceGroupName(name);
  const without19Key = normalizeResourceGroupNameWithout19(name);
  return Array.from(new Set([exactKey, without19Key].filter(Boolean)));
}

function findExistingResourceGroup(map: Map<string, ExistingResourceGroup>, resourceGroupName: string) {
  for (const key of getResourceGroupLookupKeys(resourceGroupName)) {
    const group = map.get(key);
    if (group) {
      return group;
    }
  }
  return null;
}

function assertResourceGroupSearchSuccess(response) {
  const status = response?.ResponseStatus;
  if (!status || status.Ack !== "Failure") {
    return;
  }
  const errorMessage = status.Errors?.map((error) => error.Message).filter(Boolean).join("；");
  throw new Error(errorMessage || "拉取历史用车资源组失败");
}

async function searchResourceGroupPage(pageNo = 1, pageSize = 100, resourceGroupName = "") {
  const cid = getVbkCid();
  const body = {
    contentType: "json",
    head: buildHead(),
    resourceGroupName,
    pageNo,
    pageSize,
  };
  return postJson(
    `https://online.ctrip.com/restapi/soa2/15638/searchResourceGroup?_fxpcqlniredt=${cid}&_fxpcqlniredt=${cid}`,
    body,
    "https://vbooking.ctrip.com/product/input/resourceGroup?from=vbk",
  );
}

async function addCarIntoGroup(resourceGroupId: number | string, resourceIds: Array<number | string>) {
  const body = {
    contentType: "json",
    head: buildHead(),
    resourceGroupId: String(resourceGroupId),
    resourceIds,
  };
  return postJson(
    "https://online.ctrip.com/restapi/soa2/15638/AddResourcesIntoCarGroup?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449",
    body,
    `https://vbooking.ctrip.com/product/input/resourceGroupDetail?from=vbk&resourceGroupId=${resourceGroupId}`,
  );
}

async function updateResourceGroup(resourceGroupId: number | string, resourceGroupName: string) {
  const body = {
    contentType: "json",
    head: buildHead(),
    resourceGroupDto: { resourceGroupId: String(resourceGroupId), resourceGroupName, active: "T", mandatory: "T" },
  };
  return postJson(
    "https://online.ctrip.com/restapi/soa2/15638/updateResourceGroup?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449",
    body,
    `https://vbooking.ctrip.com/product/input/resourceGroupDetail?from=vbk&resourcegroupid=${resourceGroupId}`,
  );
}

function buildHead() {
  const cid = getVbkCid();
  return {
    cid,
    ctok: "",
    cver: "1.0",
    lang: "01",
    sid: "8888",
    syscode: "09",
    auth: "",
    extension: [],
  };
}

function getVbkCid() {
  const cookies = typeof document === "undefined" ? "" : document.cookie || "";
  const cookieMap = cookies.split(";").reduce<Record<string, string>>((map, item) => {
    const [key, ...value] = item.trim().split("=");
    if (key) {
      map[key] = value.join("=");
    }
    return map;
  }, {});
  return cookieMap.vbk_login_cid || cookieMap.GUID || "09031111115146167449";
}

async function postJson(url: string, body: unknown, referrer: string) {
  const response = await fetch(url, {
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
    referrer,
    referrerPolicy: "no-referrer-when-downgrade",
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors",
    credentials: "include",
  });
  const text = await response.text();
  let data: any;
  try {
    data = text ? JSON.parse(text) : {};
  } catch (error) {
    data = { rawText: text };
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${text.slice(0, 500)}`);
  }
  return data;
}
