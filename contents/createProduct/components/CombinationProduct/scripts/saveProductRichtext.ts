import { getProductImageText, saveProductBaseInfo } from "../../scripts/savedescriptioninfo"
import { bindProductImage } from "../../scripts/bindProductImage"
import { pmRcmdItems } from "~contents/createProduct/constant"

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
        pmRcmdItems: pmRcmdItems,
        productDesc: { id: productId, productDesc: '<p>酒店：精选当地舒适酒店，确保您有个舒适的休息环境，备好精力迎接第二天的探索。</p><p>用车：全程配备专车服务，无需担心交通和语言障碍，让您的旅行更加轻松愉快，专注于享受旅途的美好。</p><p>景点：经典与隐藏的组合，涵盖重庆独具特色的历史文化、现代艺术与自然风光，多角度展现山城魅力。</p><p>透明：无隐形消费，全程明码实价，让您清晰掌握旅行预算，享受真正的纯玩之旅。</p><p>舒适：避免早起赶路，行程安排合理，保证充分的休息时间，让您在旅途中也能保持愉悦的状态。</p><p>安全：专业的司机团队，为您的行程安全提供保障，让您安心享受每一分美丽。</p><p style="margin-top: 0px; margin-bottom: 0px; text-wrap: wrap; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;microsoft yahei&quot;, Arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255); float: none !important; position: static !important; height: auto !important;"><img imageid="39012728" src="https://dimg04.c-ctrip.com/images/0301812000dcfk6kjA9AC.jpg" title="DR-私家团录入产品特色补图" imageauthorize="39012728图片有效-有效期" style="color: rgb(34, 34, 34); font-family: &quot;microsoft yahei&quot;, Arial, sans-serif; font-size: 14px; text-wrap: wrap;"/></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(34, 34, 34); font-family: &quot;microsoft yahei&quot;, Arial, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255); float: none !important; position: static !important; height: auto !important;"></p><p><br/></p>' },
    }

    return await saveProductBaseInfo(productInfo, productId)
}
