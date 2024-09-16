import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductRichtext } from "./scripts/saveProductRichtext";

export const combinationProduct = async (products: any[]) => {
    // const res = await saveSaleControlInfo()

    console.log(products)

    const newProductId = 52348901;
    await saveProduct(newProductId, products)
    const res = await saveProductRichtext(newProductId, products)
    // console.log(res)

    return []
}