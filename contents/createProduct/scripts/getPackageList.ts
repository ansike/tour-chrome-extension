
type getPackageListProps = {
    priceInputType: number;
    productId: string
}


export const getPackageList = async (props: getPackageListProps) => {
    const {priceInputType, productId} = props;

    const body = {
        contentType: 'json',
        priceInputType, 
        productId
    }


    const res = await fetch("https://online.ctrip.com/restapi/soa2/15638/getPackageList?_fxpcqlniredt=09031015310214817373&_fxpcqlniredt=09031015310214817373", {
        "headers": {
          "accept": "*/*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "cookieorigin": "https://vbooking.ctrip.com",
          "pragma": "no-cache",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-ctx-locale": "zh-CN"
        },
        "referrer": "https://vbooking.ctrip.com/ivbk/vendor/priceInventory?productid=48413080&from=vbk",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });

      return await res.json()
}