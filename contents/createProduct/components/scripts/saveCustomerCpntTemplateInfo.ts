/**
 * @description Step 5: 套餐管理保存接口
 */

type ItemStruct = {
    itemId: string;
    itemValue: string; 
    isChecked: boolean;
}


type ComponentStruct = {
    code: string;
    name: string;
    isNeed: boolean;
    isDisplay:boolean;
    remark: string;
    componentType: string;
    itemValue: ItemStruct[]
}


type SaveCustomerCpntTemplateInfoStruct = {
    businessData: string;
    piCategoryId: number;
    piCustomerInfoTemplateId: number;
    header: {
        locale: string;
        code: string;
    }
    componentItems: ComponentStruct[]
}

type saveCustomerCpntTemplateInfoProps = {
    resourceVendorId: number;
    resourceId: number;
    piCustomerInfoTemplateId:number;
    vendorId: string;
    componentItems: Record<string, unknown>
}


export const saveCustomerCpntTemplateInfo = async (props:saveCustomerCpntTemplateInfoProps ) =>  {

    const {resourceVendorId, resourceId,piCustomerInfoTemplateId,componentItems } = props

    const businessData =  window.encodeURIComponent(`{"from":"vbk","resourceId":${resourceId},"resourceVendorId":"${resourceVendorId}"}`)
    const body =  {
        businessData,
        piCategoryId: 1173, // 目前看起来是固定的，待观察
        piCustomerInfoTemplateId,
        header: {
            locale: "zh-CN",
            code: "vaction",
        },
        componentItems, // getCustomerCpntTemplateInfo- componentItems
    }

    const res = await fetch("https://online.ctrip.com/restapi/soa2/20242/saveCustomerCpntTemplateInfo?", {
        "headers": {
          "accept": "application/json",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/json; charset=utf-8",
          "cookieorigin": "https://vbooking.ctrip.com",
          "pragma": "no-cache",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/packageManage?productid=48399524&istab=1&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });

    return await res.json()
}