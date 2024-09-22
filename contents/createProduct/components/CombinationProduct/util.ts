import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { savePackage, savePackageItem } from "../scripts/savePackageItem";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { updateResourceActive } from "../scripts/updateResourceActive";
import { createPackageItem } from "./scripts/createPackageItem";
import { saveClauses } from "./scripts/saveClauses";
import { savePriceInventory } from "./scripts/savePriceInventory";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductResource } from "./scripts/saveProductResource";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDaily } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (productObjs: any[], products: any[]) => {
    const saleControlInfo = await saveSaleControlInfo()
    console.log(saleControlInfo)
    const newProductId = saleControlInfo.productId;
    // const newProductId = 52348901;
    console.log({ newProductId })
    await saveProduct(newProductId, productObjs)
    await saveProductRichtext(newProductId, productObjs)
    await saveTourDaily(newProductId, productObjs)
    await createPackageItem(newProductId, productObjs)
    await savePriceInventory(newProductId, productObjs)
    await saveProductResource(newProductId, productObjs, products)
    await saveClauses(newProductId, products)
    const res = await updateResourceActive(newProductId)
    console.log(res)
    return []
}
