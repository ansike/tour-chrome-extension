import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { savePackage, savePackageItem } from "../scripts/savePackageItem";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { createPackageItem } from "./scripts/createPackageItem";
import { savePriceInventory } from "./scripts/savePriceInventory";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDailyDetail } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (products: any[]) => {
    // const saleControlInfo = await saveSaleControlInfo()

    console.log(products)

    // const newProductId = saleControlInfo.productId || 52348901;
    const newProductId = 52348901;
    // await saveProduct(newProductId, products)
    // await saveProductRichtext(newProductId, products)
    // await saveTourDailyDetail(newProductId, products)
    // await createPackageItem(newProductId, products)
    // await savePriceInventory(newProductId, products)
    const res = await savePriceInventory(newProductId, products)
    console.log(res)
   

    return []
}
