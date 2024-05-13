fetch("https://online.ctrip.com/restapi/soa2/20242/saveCustomerCpntTemplateInfo?", {
  "headers": {
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=utf-8",
    "cookieorigin": "https://vbooking.ctrip.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://vbooking.ctrip.com/ivbk/vendor/packageManage?productid=45005059&from=vbk",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"businessData\":\"%7B%22from%22:%22vbk%22,%22resourceId%22:0,%22resourceVendorId%22:%221431565%22%7D\",\"piCategoryId\":1173,\"piCustomerInfoTemplateId\":0,\"header\":{\"locale\":\"zh-CN\",\"code\":\"vaction\"},\"componentItems\":[{\"code\":\"title\",\"name\":\"预订用户填写信息\",\"itemValue\":[]},{\"code\":\"fill_in_number_limit\",\"name\":\"每单填写出行人数\",\"isNeed\":true,\"isDisplay\":true,\"componentType\":\"radio\",\"itemValue\":[{\"itemId\":\"A\",\"itemValue\":\"全部出行人\",\"isChecked\":true}]},{\"code\":\"is_need_certificate\",\"name\":\"是否需要证件\",\"isNeed\":true,\"isDisplay\":true,\"componentType\":\"radio\",\"remark\":\"客人在预定或者使用本资源，是否需要提供对应的证件\",\"itemValue\":[{\"itemId\":\"T\",\"itemValue\":\"是\",\"isChecked\":true},{\"itemId\":\"F\",\"itemValue\":\"否\",\"isChecked\":false}]},{\"code\":\"customer_info\",\"name\":\"出行人信息\",\"isNeed\":true,\"isDisplay\":true,\"componentType\":\"radio\",\"itemValue\":[{\"itemId\":\"1\",\"itemValue\":\"出行人信息模板\",\"isChecked\":true},{\"itemId\":\"2\",\"itemValue\":\"自定义资料项包\",\"isChecked\":false}]},{\"code\":\"customer_info_package\",\"name\":\"出行人资料项包\",\"isNeed\":true,\"isDisplay\":false,\"componentType\":\"select\",\"itemValue\":[{\"itemId\":\"5122001\",\"itemValue\":\"个人信息\",\"isChecked\":false}]},{\"code\":\"customer_info_template\",\"name\":\"出行人信息模板\",\"isNeed\":true,\"isDisplay\":true,\"componentType\":\"select\",\"itemValue\":[{\"itemId\":\"auto_match_template\",\"itemValue\":\"自动匹配模板\",\"isChecked\":true}]}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


fetch("https://online.ctrip.com/restapi/soa2/15638/savePackageItem?_fxpcqlniredt=09031111115146167449&_fxpcqlniredt=09031111115146167449", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "cookieorigin": "https://vbooking.ctrip.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-ctx-locale": "zh-CN"
  },
  "referrer": "https://vbooking.ctrip.com/ivbk/vendor/packageManage?productid=45005059&from=vbk",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"contentType\":\"json\",\"head\":{\"cid\":\"09031111115146167449\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"packageInfo\":{\"name\":\"7日套餐\",\"needShuttle\":\"F\",\"vendorConfirmModeId\":2,\"confirmHour\":4,\"isHotelShareRoom\":\"F\",\"isContainBedFee\":\"T\",\"visaInfo\":[],\"vendorResourceCode\":\"\",\"isSmsVBKNotice\":\"T\",\"isMainPackage\":\"T\",\"isHotelResource\":\"T\",\"piCustomerInfoTemplateId\":31495591,\"resourceNameRule\":{\"days\":7,\"upgradeType\":{},\"upgradeValue\":{}}},\"productId\":\"45005059\",\"priceInputType\":1}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});