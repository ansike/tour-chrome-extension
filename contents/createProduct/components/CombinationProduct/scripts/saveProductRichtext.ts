import { getProductImageText, saveProductBaseInfo } from "../../scripts/savedescriptioninfo"
import { bindProductImage } from "../../scripts/bindProductImage"

export const saveProductRichtext = async (productId: string | number, products: any[]) => {
    const productsRichtext = await Promise.all(products.map(pro => getProductImageText(pro.baseInfo.productId)))

    // 子产品的图片放到新的产品上
    const productImages = productsRichtext.map((pro) => pro.productImages.map(img => {
        return {
            imageId: img.imageId,
            sortNum: img.sortNum,
        }
    })).reduce((acc, cur) => acc.concat(cur), [])
    await bindProductImage(productId, productImages)

    const productInfo = {
        pmRcmdItems: productsRichtext[0].pmRcmdItems,
        productDesc: { ...productsRichtext[0].productDesc, id: productId },
    }
    
    return await saveProductBaseInfo(productInfo, productId)
}
