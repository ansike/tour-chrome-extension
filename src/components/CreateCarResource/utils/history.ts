import { PRICE_STEP } from "~src/constant";

import { getResourceList } from "./getResourceList";

type CarConfig = {
  label: string;
  carName: string;
  start: number;
  end: number;
};

type ExistingResourceRow = {
  resourceId?: number | string;
  resourceName?: string;
  resourceDesc?: number | string;
  active?: string;
};

const carTypeAliases = [
  { key: "经济5座", aliases: ["经济5座", "5座经济"] },
  { key: "舒适5座", aliases: ["舒适5座", "5座舒适"] },
  { key: "商务7座", aliases: ["商务7座", "7座"] },
  { key: "12座中巴", aliases: ["12座中巴", "12座"] },
  { key: "14座中巴", aliases: ["14座中巴", "14座"] },
  { key: "19座中巴", aliases: ["19座中巴", "19座"] },
  { key: "9座小巴", aliases: ["9座小巴", "商务9座", "9座"] },
];

export async function buildExistingResourceMap(user, cars: CarConfig[]) {
  const expectedKeys = new Set<string>();
  for (const car of cars) {
    const typeKey = normalizeCarType(car.label || car.carName);
    for (let price = Number(car.start); price <= Number(car.end); price += PRICE_STEP) {
      expectedKeys.add(buildExistingResourceKey(typeKey, price));
    }
  }

  const map = new Map<string, ExistingResourceRow>();
  await collectExistingResourcePages(user, expectedKeys, map, {
    bookingContactId: false,
  });

  return map;
}

export function buildExistingResourceKey(resourceName: string, price: number | string) {
  return `${normalizeCarType(resourceName)}::${Number(price)}`;
}

function collectExistingResources(
  resources: ExistingResourceRow[],
  expectedKeys: Set<string>,
  map: Map<string, ExistingResourceRow>,
) {
  for (const resource of resources) {
    if (!isUsableResource(resource)) {
      continue;
    }
    const key = buildExistingResourceKey(resource.resourceName || "", resource.resourceDesc || "");
    if (expectedKeys.has(key) && !map.has(key)) {
      map.set(key, resource);
    }
  }
}

async function collectExistingResourcePages(
  user,
  expectedKeys: Set<string>,
  map: Map<string, ExistingResourceRow>,
  options: { resourceName?: string; bookingContactId?: number | null | false } = {},
) {
  const pageSize = 100;
  const firstPage = await getResourceList(user, 1, pageSize, options);
  assertResourceListSuccess(firstPage);
  collectExistingResources(firstPage.resources || [], expectedKeys, map);

  const totalCount = Number(firstPage.totalCount || 0);
  const pageCount = Math.ceil(totalCount / pageSize);
  const pageNumbers = Array.from({ length: Math.max(pageCount - 1, 0) }, (_, index) => index + 2);
  for (let index = 0; index < pageNumbers.length; index += 4) {
    const pages = await Promise.all(
      pageNumbers.slice(index, index + 4).map((pageNo) =>
        getResourceList(user, pageNo, pageSize, options),
      ),
    );
    for (const page of pages) {
      assertResourceListSuccess(page);
      collectExistingResources(page.resources || [], expectedKeys, map);
    }
  }
}

function assertResourceListSuccess(response) {
  const status = response?.ResponseStatus;
  if (!status || status.Ack !== "Failure") {
    return;
  }
  const errorMessage = status.Errors?.map((error) => error.Message).filter(Boolean).join("；");
  throw new Error(errorMessage || "拉取历史用车资源失败");
}

function normalizeCarType(text: string) {
  const source = String(text || "").split(/[:：]/)[0].trim();
  const aliases = carTypeAliases
    .flatMap((item) => item.aliases.map((alias) => ({ key: item.key, alias })))
    .sort((prev, next) => next.alias.length - prev.alias.length);
  const matched = aliases.find(({ alias }) =>
    source.includes(alias) || String(text || "").includes(alias),
  );
  return matched?.key || source;
}

function isUsableResource(resource: ExistingResourceRow) {
  if (!resource.resourceId || !resource.resourceName) {
    return false;
  }
  if (!Number.isFinite(Number(resource.resourceDesc))) {
    return false;
  }
  return !resource.active || resource.active === "有效" || resource.active === "T";
}
