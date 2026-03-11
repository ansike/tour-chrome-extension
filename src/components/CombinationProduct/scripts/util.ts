/**
 * 根据指定的键对数组进行分组
 * @param {Array} arr - 需要分组的数组
 * @param {string|Function} key - 用于分组的键,可以是属性名字符串或者自定义的函数
 * @returns {Object} - 分组后的对象,键为分组依据,值为对应的分组数组
 */
export function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = typeof key === "function" ? key(item) : item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

export const calcMiddleTravelDays = (products) => {
  const cityIds = products.map((pro) => pro.baseInfo.destinationCityID);
  const cityGroup = groupBy(cityIds, (k) => k);
  // 中间段的行程(如果存在相同目的地 要减去中间段)
  return Object.keys(cityGroup).length - 1;
};

export const getTravelDays = (products) => {
  // 1. 首末两天的行程
  // 2. 中间段的行程(如果存在相同目的地 要减去中间段)
  const middleTravelDays = calcMiddleTravelDays(products);
  return (
    products.reduce((acc, cur) => acc + cur.baseInfo.travelDays, 0) +
    2 +
    middleTravelDays
  );
};
