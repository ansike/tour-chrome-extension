

type ResourceNameRule = {
    days: number;
    upgradeType: Record<string, unknown>;
    upgradeValue: Record<string, unknown>;
}

type PackageInfo = {
    confirmHour: number;
    extendPropertyProducts: Array<number|string>;
    isContainBedFee: "T" | "F";
    isHotelResource: "T" | "F";
    isHotelShareRoom: "T" | "F";
    isMainPackage: "T" | "F";
    isSmsVBKNotice: "T" | "F";
    name: string;
    needShuttle: "T" | "F";
    optionalResourceId: number;
    piCustomerInfoTemplateId: number;
    resourceNameRule: ResourceNameRule;
    singleResourceId: number;
    vendorConfirmModeId: number;
    vendorResourceCode: string;
    visaInfo: Array<string | number>
}

type SavePackageItemStruct = {
    contentType: string;
    priceInputType: number;
    productId:string
    packageInfo:PackageInfo
}


type savePackageItemProps = {
    productId:string;
    priceInputType: number; 
    packageInfo:PackageInfo;
}


export const savePackageItem = async (props: savePackageItemProps) => {
    const {productId, priceInputType, packageInfo} = props
    const body = {
        contentType: "json",
        priceInputType, 
        productId,
        packageInfo,
    }

    const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/savePackageItem?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
        "headers": {
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
          "content-type": "application/json",
          "cookieorigin": "https://vbooking.ctrip.com",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-ctx-locale": "zh-CN"
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