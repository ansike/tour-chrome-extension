import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { updateResourceActive } from "../scripts/updateResourceActive";
import { createPackageItem } from "./scripts/createPackageItem";
import { saveClauses } from "./scripts/saveClauses";
import { savePriceInventory } from "./scripts/savePriceInventory";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductResource } from "./scripts/saveProductResource";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDaily } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (productObjs: any[], subTitle: string) => {
    const saleControlInfo = await saveSaleControlInfo()
    const newProductId = saleControlInfo.productId;
    // const newProductId = 52731061;
    console.log({ newProductId })
    await saveProduct(newProductId, productObjs, subTitle)
    await saveProductRichtext(newProductId, productObjs)
    await saveTourDaily(newProductId, productObjs)
    await createPackageItem(newProductId, productObjs)
    await savePriceInventory(newProductId, productObjs)
    await saveProductResource(newProductId, productObjs)
    await saveClauses(newProductId, productObjs)
    await updateResourceActive(newProductId)
    return newProductId
}
