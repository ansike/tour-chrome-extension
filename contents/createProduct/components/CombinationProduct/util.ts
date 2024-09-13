import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo"

export const combinationProduct = async (products: any[]) => {
    const res = await saveSaleControlInfo()
    console.log(res)
    return []
}