import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDailyDetail } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (products: any[]) => {
    // const res = await saveSaleControlInfo()

    console.log(products)

    const newProductId = 52348901;
    // await saveProduct(newProductId, products)
    // const res = await saveProductRichtext(newProductId, products)
    const res = await saveTourDailyDetail(newProductId, products)
    console.log(res)

    return []
}