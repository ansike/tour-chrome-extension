import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { savePackage, savePackageItem } from "../scripts/savePackageItem";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { createPackageItem } from "./scripts/createPackageItem";
import { savePriceInventory } from "./scripts/savePriceInventory";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductResource } from "./scripts/saveProductResource";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDailyDetail } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (productObjs: any[], products: any[]) => {
    // const saleControlInfo = await saveSaleControlInfo()

    console.log(productObjs)

    // const newProductId = saleControlInfo.productId || 52348901;
    const newProductId = 52348901;
    // await saveProduct(newProductId, productObjs)
    // await saveProductRichtext(newProductId, productObjs)
    // await saveTourDailyDetail(newProductId, productObjs)
    // await createPackageItem(newProductId, productObjs)
    // await savePriceInventory(newProductId, productObjs)
    const res = await saveProductResource(newProductId, productObjs, products)
    console.log(res)


    return []
}
