import { saveProductBaseInfo } from "../scripts/savedescriptioninfo";
import { savePackage, savePackageItem } from "../scripts/savePackageItem";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { createPackageItem } from "./scripts/createPackageItem";
import { saveProduct } from "./scripts/saveProduct";
import { saveProductRichtext } from "./scripts/saveProductRichtext";
import { saveTourDailyDetail } from "./scripts/saveTourDailyDetail";

export const combinationProduct = async (products: any[]) => {
    const saleControlInfo = await saveSaleControlInfo()

    console.log(products)

    const newProductId = saleControlInfo.productId || 52348901;
    await saveProduct(newProductId, products)
    await saveProductRichtext(newProductId, products)
    await saveTourDailyDetail(newProductId, products)
    const res = await createPackageItem(newProductId, products)
    console.log(res)
   

    return []
}

// {
//     "contentType": "json",
//     "head": {
//       "cid": "09031056310749994837",
//       "ctok": "",
//       "cver": "1.0",
//       "lang": "01",
//       "sid": "8888",
//       "syscode": "09",
//       "auth": "",
//       "extension": []
//     },
//     "packageInfo": {
//       "name": "7日套餐",
//       "needShuttle": "F",
//       "vendorConfirmModeId": 2,
//       "confirmHour": 4,
//       "isHotelShareRoom": "F",
//       "isContainBedFee": "T",
//       "visaInfo": [],
//       "vendorResourceCode": "",
//       "isSmsVBKNotice": "T",
//       "isMainPackage": "T",
//       "isHotelResource": "T",
//       "piCustomerInfoTemplateId": 33878829,
//       "resourceNameRule": {
//         "days": 7,
//         "upgradeType": {},
//         "upgradeValue": {}
//       }
//     },
//     "productId": "52348901",
//     "priceInputType": 1
//   }