// 无须过多的参数，可以固定
type saveSaleControlInfoProps = {}

export const saveSaleControlInfo = async (props?: saveSaleControlInfoProps): Promise<{productId: number}> => {
  const data = {
    contentType: 'json',
    head: {
      cid: '09031059218989378081',
      ctok: '',
      cver: '1.0',
      lang: '01',
      sid: '8888',
      syscode: '09',
      auth: '',
      extension: []
    },
    id: '1431565', // 供应商ID
    idType: 'providerId',
    saleControlInfoDto: {
      contractId: 648526,
      saleMode: 'P',
      productCategoryId: 9,
      productPatternId: 4,
      brandId: 91924,
      brandName: 'N30旅行',
      productBrandDto: {
        brandId: 91924,
        brandName: 'N30旅行',
        brandNameEn: 'N30-Travel',
        brandLocal: 'zh-CN'
      },
      priceInputType: 1,
      distributionChannels: [
        'ctripshop',
        'bestone',
        'youtripshop',
        'bestoneb2b',
        'tripsystem',
        'ctrip'
      ],
      maintainType: 'S',
      inputLocale: 'zh-CN',
      regionDistributionChannelDtos: [
        {
          region: 'CN',
          isChecked: 'T',
          locales: ['zh-CN'],
          distributionChannels: [
            { channelName: 'ctripshop', isChecked: 'T' },
            { channelName: 'bestone', isChecked: 'T' },
            { channelName: 'youtripshop', isChecked: 'T' },
            { channelName: 'bestoneb2b', isChecked: 'T' },
            { channelName: 'ctrip', isChecked: 'T' },
            { channelName: 'tripsystem', isChecked: 'T' }
          ]
        }
      ],
      desCityDto: {}
    }
  };
  
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveSaleControlInfo?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        pragma: 'no-cache',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN'
      },
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/saleControlMerge?producttype=0&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(data),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )
  return await res.json()
}
