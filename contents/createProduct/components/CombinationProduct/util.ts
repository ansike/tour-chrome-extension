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
    updateResourceActive
]
export const combinationProduct = async (productObjs: any[], subTitle: string, callback) => {
    const saleControlInfo = await saveSaleControlInfo()
    const newProductId = saleControlInfo.productId;
    // const newProductId = 52760960;
    console.log("新产品ID：", newProductId)
    callback({
        productId: newProductId,
    })
    for (let i = 0; i < fns.length; i++) {
        await fns[i](newProductId, productObjs, subTitle)
        callback({
            currentStep: i + 1,
        })
    }
}
