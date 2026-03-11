import { getVendorId } from "../../scripts/getVendorId"
import { saveCustomerCpntTemplateInfo } from "../../scripts/saveCustomerCpntTemplateInfo"
import { savePackageItem } from "../../scripts/savePackageItem"
import { getTravelDays } from "./util"

export const createPackageItem = async (productId: string | number, products: any[]) => {
    const vendorId = await getVendorId()
    const travelDays = getTravelDays(products)
    const template = await saveCustomerCpntTemplateInfo({ resourceVendorId: vendorId, resourceId: 0, piCustomerInfoTemplateId: 0 })
    const res = await savePackageItem(productId, {
        "name": `${travelDays}日套餐`,
        "needShuttle": "F",
        "vendorConfirmModeId": 2,
        "confirmHour": 4,
        "isHotelShareRoom": "F",
        "isContainBedFee": "T",
        "visaInfo": [],
        "vendorResourceCode": "",
        "isSmsVBKNotice": "T",
        "isMainPackage": "T",
        // 携程要求默认为 false
        // "isHotelResource": "F",
        "isHotelResource": "T",
        "piCustomerInfoTemplateId": template.cpntTemplateInfoId,
        "resourceNameRule": {
            "days": travelDays,
            "upgradeType": {},
            "upgradeValue": {}

        }
    })
    console.log(res)
}