import { autoSaveRequiredTextClause } from "../scripts/autoSaveRequiredTextClause";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { updateResourceActive } from "../scripts/updateResourceActive";
import { createPackageItem } from "./scripts/createPackageItem";
import { saveClauses } from "./scripts/saveClauses";
import { savePriceInventory } from "./scripts/savePriceInventory";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductResource } from "./scripts/saveProductResource";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDaily } from "./scripts/saveTourDailyDetail";

export const fns = [
  saveProduct,
  saveProductRichtext,
  saveTourDaily,
  createPackageItem,
  savePriceInventory,
  saveProductResource,
  saveClauses,
  autoSaveRequiredTextClause,
  updateResourceActive,
];

export const combinationProduct = async (
  productObjs: any[],
  subTitle: string,
  callback,
) => {
  const saleControlInfo = await saveSaleControlInfo()
  const newProductId = saleControlInfo.productId;
  // const newProductId = 54630655    ;
  console.log("新产品ID：", newProductId);
  callback({
    productId: newProductId,
  });
  for (let i = 0; i < fns.length; i++) {
    try {
      await fns[i](newProductId, productObjs, subTitle);
      callback({
        currentStep: i + 1,
      });
    } catch (error) {
      console.error(error);
      callback({
        currentStep: i + 1,
        error: fns[i].name+":"+error?.message || "Error",
      });
      break;
    }
  }
};

/**
 * 传入产品列表，返回所有的排列组合
 * @param products
 * @returns products[]
 **/
export const permutationProducts = (products: any[], cur = []) => {
  const result = [];
  if (!products.length) {
    result.push(cur);
    return result;
  }
  for (let i = 0; i < products.length; i++) {
    result.push(
      ...permutationProducts(
        [...products.slice(0, i), ...products.slice(i + 1)],
        [...cur, products[i]],
      ),
    );
  }
  return result;
};
