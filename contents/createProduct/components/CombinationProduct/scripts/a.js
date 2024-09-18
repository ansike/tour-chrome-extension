const tourInfoList = [
  {
    tourInfoId: "283184031347572826",
    tourInfoName: "",
    tourInfoDesc: "",
    productId: 52504368,
    main: true,
    sort: 0,
    draftTourInfoStatus: 2,
    auditTourInfoId: "283184460785565795",
    auditTourInfoStatus: 2,
    aggregateScore: 92,
    auditStatus: {
      key: "A",
      value: "审核通过",
    },
  },
];

const check8 = {
  contentType: "json",
  head: {
    cid: "09031056310749994837",
    ctok: "",
    cver: "1.0",
    lang: "01",
    sid: "8888",
    syscode: "09",
    auth: "",
    extension: [],
  },
  saveType: 8,
  tourDaily:
    '{"tourDailyDescriptions":[{"tourDailyDescriptionId":null,"orderDay":1,"dailyDescription":"d1","useCar":{"key":"N"},"tourDailyLocations":[],"tourDailyInfos":[{"activeType":{"key":3,"name":"景点"},"tourDailyInfoId":null,"takeTime":60,"takeoffTime":{"key":"","name":"14:00"},"transportation":{},"tourDailyHotels":[],"tourDailyImages":[],"tourDailyTrains":[],"tourDailyCar":{},"tourDailyFlights":[],"tourDailyPois":[{"tourDailyPoiId":null,"poi":{"poiId":13228641,"poiName":"重庆两江游","poiType":{"key":66,"name":"活动"},"district":{"districtId":158,"districtName":"重庆","districtType":"City","parents":[{"districtId":110000,"districtName":"中国","districtType":"Country"},{"districtId":120001,"districtName":"亚洲","districtType":"Continent"}]},"location":{"globalId":4,"name":"重庆","categoryId":3,"type":"base"},"openTime":"全年 12:00-22:00开放","address":"重庆市渝中区洪崖洞旅游客运码头","minTakeTime":120,"maxTakeTime":60,"currency":{},"redPoi":false,"costUnit":{"key":1,"name":"人"},"tags":[{"tagId":7093,"tagName":"乘船游览","tagType":66,"tagLevel":2},{"tagId":27,"tagName":"观光路线","tagType":66,"tagLevel":1}],"parentTags":[],"inShoppingBlacklist":false,"poiLocation":{"locationId":454,"locationDistrictId":2015198,"locationName":"Yuzhong District"},"sightZones":[],"invaildInfoDto":{},"openTimeDetailDto":{"hasFormatTime":true,"openStatus":"0","formatTimeDtos":[{"openDateRange":[],"openWeekRange":["1","2","3","4","5","6","7"],"openTimeRange":[],"allYear":true,"openAllDay":false,"closeAllDay":false}]},"relateSystemTicket":{"key":"F"},"isPublished":true,"longitude":106.582999,"latitude":29.56859,"ggLongitude":106.5765414,"ggLatitude":29.5623781,"inMainLand":true,"childPoiIds":[98180287,69571118],"ticketType":{"key":1,"name":"收费"},"asyncValidateStatus":"success"},"sort":1,"orFlag":true,"suffixName":{"key":5,"name":"含首道门票"},"images":[],"costInclude":{"key":""},"poiSelfFundedActivities":[],"groupType":{}}],"tourDailyThemes":[{"tourDailyThemeId":null,"theme":{},"activityName":"","images":[],"location":{},"themeFields":[],"sort":1}],"tourDailyDinner":{},"sort":1,"directionType":{}},{"activeType":{"key":1,"name":"酒店"},"tourDailyInfoId":null,"takeoffTime":{"key":"","name":"20:00"},"transportation":{},"tourDailyHotels":[{"tourDailyHotelId":null,"hotel":{"hotelId":386932,"hotelName":"重庆喜来登大酒店","hotelAddress":"南滨路78号","hotelLevel":{"name":"豪华型"},"hotelStar":{"value":5,"name":"5星","starType":1},"location":{"globalId":4,"name":"重庆","categoryId":3,"type":"base"},"hotelScore":4.5,"active":true,"district":{"districtId":158,"districtName":"重庆","districtType":"City","parents":[{"districtId":110000,"districtName":"中国","districtType":"Country"},{"districtId":120001,"districtName":"亚洲","districtType":"Continent"}]},"longitude":106.593429,"latitude":29.549337,"ggLongitude":"106.58692507783626","ggLatitude":"29.543280784308493","inMainLand":true,"biTag":{"goodHotel":"T","mediumHotel":"F"}},"hotelType":{"key":1,"name":"酒店"},"images":[],"sort":1}],"tourDailyImages":[],"tourDailyTrains":[],"tourDailyCar":{},"tourDailyFlights":[],"tourDailyPois":[],"tourDailyThemes":[],"tourDailyDinner":{},"sort":2,"costInclude":true,"directionType":{}}],"collapse":false,"mode":"view"},{"tourDailyDescriptionId":null,"orderDay":2,"dailyDescription":"d2","useCar":{"key":"N"},"tourDailyLocations":[],"tourDailyInfos":[{"activeType":{"key":9,"name":"其它"},"tourDailyInfoId":null,"takeoffTime":{"key":"","name":"10:00"},"transportation":{},"tourDailyHotels":[],"tourDailyImages":[],"tourDailyTrains":[],"tourDailyCar":{},"tourDailyFlights":[],"tourDailyPois":[],"tourDailyThemes":[],"tourDailyDinner":{},"sort":1,"description":"回归自己的家","directionType":{}}],"collapse":false,"mode":"view"}],"template":{"templateId":3,"name":"跟团","activeTypes":[{"activeTypeId":17,"fields":[{"fieldId":233,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":true,"require":false},{"fieldId":234,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":235,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":236,"field":{"fieldKey":"tourDailyDinner.cost","name":"餐标"},"enable":true,"require":false},{"fieldId":237,"field":{"fieldKey":"tourDailyDinner.currency","name":"餐标货币"},"enable":true,"require":false},{"fieldId":238,"field":{"fieldKey":"tourDailyDinner.includeAdult","name":"成人是否含餐"},"enable":true,"require":true},{"fieldId":239,"field":{"fieldKey":"tourDailyDinner.includeChild","name":"儿童是否含餐"},"enable":true,"require":true},{"fieldId":240,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":241,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":242,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":243,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":true,"require":false},{"fieldId":244,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":245,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":246,"field":{"fieldKey":"tourDailyDinner.dinnerType","name":"餐饮类型"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"餐饮类型可选范围","value":"B,L,S,T,M","enable":true}],"require":true},{"fieldId":247,"field":{"fieldKey":"tourDailyDinner.costInclude","name":"餐饮收费"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"餐饮收费可选范围","value":"I,E","enable":true}],"require":false},{"fieldId":1960,"field":{"fieldKey":"tourDailyDinner.foodType","name":"菜品品类"},"enable":false,"require":false},{"fieldId":248,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T","enable":true}],"require":false},{"fieldId":249,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"poiTypes","name":"poi类型","value":"2","enable":true},{"rangeKey":"isCanHand","name":"自定义POI","value":"","enable":false},{"rangeKey":"isCanSystem","name":"使用系统POI","value":"","enable":false},{"rangeKey":"showDefaultOptions","name":"是否出默认选项","value":"T","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":250,"field":{"fieldKey":"poi.address","name":"地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":251,"field":{"fieldKey":"poi.openTime","name":"营业时间"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":252,"field":{"fieldKey":"poi.cost","name":"poi费用参考"},"enable":false,"require":false},{"fieldId":253,"field":{"fieldKey":"poi.currency","name":"poi货币"},"enable":false,"require":false},{"fieldId":254,"field":{"fieldKey":"tourDailyPois.images","name":"poi图片"},"enable":false,"require":false},{"fieldId":7487,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7488,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12909,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":0,"name":"餐饮"},"enable":true},{"activeTypeId":18,"fields":[{"fieldId":255,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":true,"require":false},{"fieldId":256,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":257,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":258,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":259,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":260,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":261,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":262,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":263,"field":{"fieldKey":"hotel.location","name":"酒店城市"},"enable":false,"require":false},{"fieldId":264,"field":{"fieldKey":"tourDailyHotels.hotelType","name":"酒店类别"},"enable":false,"require":false},{"fieldId":265,"field":{"fieldKey":"hotel.hotelName","name":"酒店名称"},"enable":true,"ranges":[{"rangeKey":"isCanHand","name":"自定义酒店","value":"","enable":false},{"rangeKey":"isCanSystem","name":"系统酒店","value":"T","enable":true},{"rangeKey":"showDefaultOptions","name":"是否出默认选项","value":"T","enable":true},{"rangeKey":"searchIdByGetHotelDetailById","name":"搜索酒店id时是否走getHotelDetailById接口","value":"T","enable":true},{"rangeKey":"maxLen","name":"自定义酒店名称长度","value":"200","enable":true}],"require":true},{"fieldId":266,"field":{"fieldKey":"hotel.hotelAddress","name":"酒店地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":267,"field":{"fieldKey":"tourDailyHotels.images","name":"酒店图片"},"enable":false,"ranges":[{"rangeKey":"max","name":"图片数量上限","value":"","enable":false}],"require":false},{"fieldId":268,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":269,"field":{"fieldKey":"costInclude","name":"是否含酒店"},"enable":false,"require":false},{"fieldId":7489,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7490,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12916,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":1,"name":"酒店"},"enable":true},{"activeTypeId":19,"fields":[{"fieldId":270,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":271,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":272,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":273,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":274,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":275,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":276,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":277,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":278,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":279,"field":{"fieldKey":"flight.flightNo","name":"航班号"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":280,"field":{"fieldKey":"flight.subClass","name":"舱位"},"enable":false,"require":false},{"fieldId":281,"field":{"fieldKey":"flight.departureTime","name":"出发时间"},"enable":false,"require":false},{"fieldId":282,"field":{"fieldKey":"flight.departureAirport","name":"出发机场"},"enable":false,"require":false},{"fieldId":283,"field":{"fieldKey":"flight.departureTerminal","name":"出发航站楼"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":284,"field":{"fieldKey":"flight.arriveTime","name":"到达时间"},"enable":false,"require":false},{"fieldId":285,"field":{"fieldKey":"flight.arriveAirport","name":"到达机场"},"enable":false,"require":false},{"fieldId":286,"field":{"fieldKey":"flight.arriveTerminal","name":"到达航站楼"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":287,"field":{"fieldKey":"flight.flightType","name":"机型"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":288,"field":{"fieldKey":"flight.duration","name":"飞行时长"},"enable":false,"require":false},{"fieldId":289,"field":{"fieldKey":"flight.directFlightFlag","name":"直飞、中转标记"},"enable":true,"require":true},{"fieldId":290,"field":{"fieldKey":"flight.transferLocation","name":"中转城市"},"enable":false,"require":false},{"fieldId":291,"field":{"fieldKey":"flight.transferTime","name":"中转时长"},"enable":true,"require":false},{"fieldId":292,"field":{"fieldKey":"flight.stopLocations","name":"经停城市"},"enable":false,"require":false},{"fieldId":293,"field":{"fieldKey":"flight.stopTime","name":"经停时长"},"enable":false,"require":false},{"fieldId":294,"field":{"fieldKey":"addFlight","name":"添加中转"},"enable":false,"require":false},{"fieldId":7491,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7492,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12923,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":2,"name":"航班"},"enable":true},{"activeTypeId":20,"fields":[{"fieldId":295,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":296,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":297,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":298,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":299,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":300,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":true,"require":true},{"fieldId":301,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":302,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":303,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T,F","enable":true}],"require":false},{"fieldId":304,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"3,19,66,5","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":305,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"1,2,3,5,6,7,11","enable":true},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"8","enable":false}],"require":true},{"fieldId":306,"field":{"fieldKey":"tourDailyPois.costInclude","name":"景点收费情况"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"景点收费可选范围","value":"I,E,F,N","enable":true}],"require":false},{"fieldId":307,"field":{"fieldKey":"poi.openTime","name":"开放时间"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":308,"field":{"fieldKey":"poi.takeTime","name":"推荐游览时长"},"enable":false,"require":false},{"fieldId":309,"field":{"fieldKey":"poi.address","name":"景点地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":310,"field":{"fieldKey":"tourDailyPois.images","name":"图片"},"enable":false,"require":false},{"fieldId":1371,"field":{"fieldKey":"selfFundedActivity.activityName","name":"自费项目"},"enable":true,"require":true},{"fieldId":1372,"field":{"fieldKey":"selfFundedActivity.activityDesc","name":"自费详情"},"enable":true,"require":true},{"fieldId":1373,"field":{"fieldKey":"selfFundedActivity.useListingPrice","name":"参考价格"},"enable":true,"require":true},{"fieldId":311,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":2126,"field":{"fieldKey":"tourDailyThemes.theme","name":"主题活动"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"主题可选范围","value":"43,44,1","enable":true}],"require":false},{"fieldId":7493,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7494,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12930,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":15009,"field":{"fieldKey":"poi.relateSystemTicket","name":"关联系统门票"},"enable":false,"require":false}],"activeType":{"key":3,"name":"景点"},"enable":true},{"activeTypeId":21,"fields":[{"fieldId":312,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":313,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":314,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":315,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":316,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":317,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":true,"require":true},{"fieldId":318,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":319,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":320,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"","enable":false}],"require":false},{"fieldId":321,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"5","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":322,"field":{"fieldKey":"poi.openTime","name":"开放时间"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":323,"field":{"fieldKey":"poi.address","name":"地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":324,"field":{"fieldKey":"tourDailyPois.images","name":"图片"},"enable":false,"require":false},{"fieldId":325,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":326,"field":{"fieldKey":"productsOnSale","name":"营业产品"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"100","enable":true}],"require":false},{"fieldId":7495,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7496,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12937,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":4,"name":"购物"},"enable":true},{"activeTypeId":22,"fields":[{"fieldId":327,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":328,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":329,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":330,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":331,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":332,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":true,"require":false},{"fieldId":333,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":334,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":335,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T,F","enable":true}],"require":false},{"fieldId":336,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"3,66,5,19","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":337,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"1,2,3,4","enable":true},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"8","enable":false}],"require":false},{"fieldId":338,"field":{"fieldKey":"tourDailyPois.costInclude","name":"景点收费情况"},"enable":false,"require":false},{"fieldId":339,"field":{"fieldKey":"poi.openTime","name":"开放时间"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":false}],"require":false},{"fieldId":340,"field":{"fieldKey":"poi.takeTime","name":"推荐游览时长"},"enable":false,"require":false},{"fieldId":341,"field":{"fieldKey":"poi.address","name":"景点地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":342,"field":{"fieldKey":"tourDailyPois.images","name":"图片"},"enable":false,"require":false},{"fieldId":343,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":true},{"fieldId":12944,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":7,"name":"自由活动"},"enable":true},{"activeTypeId":23,"fields":[{"fieldId":344,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":345,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":346,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":1961,"field":{"fieldKey":"directionType","name":"方向"},"enable":false,"require":false},{"fieldId":1962,"field":{"fieldKey":"targetPoi","name":"目的地"},"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"3,19","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":347,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":348,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":349,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"ranges":[{"rangeKey":"min","name":"最低时长限制","value":"0","enable":false}],"require":false},{"fieldId":350,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":351,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":352,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":true},{"fieldId":12951,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":8,"name":"交通"},"enable":true},{"activeTypeId":24,"fields":[{"fieldId":353,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":354,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":true},{"fieldId":355,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":356,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":true,"require":false},{"fieldId":357,"field":{"fieldKey":"distance","name":"距离"},"enable":true,"require":false},{"fieldId":358,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":true,"require":false},{"fieldId":359,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":360,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":361,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"4000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":true},{"fieldId":12958,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":9,"name":"其他"},"enable":true},{"activeTypeId":25,"fields":[{"fieldId":362,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":363,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":false},{"fieldId":364,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":false,"require":false},{"fieldId":365,"field":{"fieldKey":"distance","name":"距离"},"enable":false,"require":false},{"fieldId":366,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":367,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"","enable":false}],"require":false},{"fieldId":368,"field":{"fieldKey":"poi","name":"poi名称"},"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"","enable":false},{"rangeKey":"isCanSystem","name":"系统POI","value":"","enable":false},{"rangeKey":"poiTypes","name":"poi类型","value":"","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":369,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"","enable":false},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"","enable":false}],"require":false},{"fieldId":370,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":12965,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":10,"name":"课程"},"enable":false},{"activeTypeId":26,"fields":[{"fieldId":371,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":372,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":false},{"fieldId":373,"field":{"fieldKey":"distance","name":"距离"},"enable":false,"require":false},{"fieldId":374,"field":{"fieldKey":"driveTime","name":"行驶时长"},"enable":false,"require":false},{"fieldId":375,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":376,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"","enable":false}],"require":false},{"fieldId":377,"field":{"fieldKey":"poi","name":"poi名称"},"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"","enable":false},{"rangeKey":"isCanSystem","name":"系统POI","value":"","enable":false},{"rangeKey":"poiTypes","name":"poi类型","value":"","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":378,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"","enable":false},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"","enable":false}],"require":false},{"fieldId":379,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":12972,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":11,"name":"活动"},"enable":false},{"activeTypeId":27,"fields":[{"fieldId":380,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":381,"field":{"fieldKey":"takeoffTime","name":"出发时间"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"时间可选项","value":"N,D,M,A,E","enable":true}],"require":false},{"fieldId":382,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":383,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":false,"require":false},{"fieldId":384,"field":{"fieldKey":"distance","name":"距离"},"enable":false,"require":false},{"fieldId":385,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":386,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":387,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":388,"field":{"fieldKey":"tourDailyThemes.addTheme","name":"添加多主题"},"enable":false,"require":false},{"fieldId":389,"field":{"fieldKey":"tourDailyThemes.theme","name":"活动类型"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"主题可选范围","value":"","enable":false}],"require":false},{"fieldId":390,"field":{"fieldKey":"tourDailyThemes.location","name":"地点"},"enable":false,"require":false},{"fieldId":391,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"","enable":false},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"","enable":false}],"require":false},{"fieldId":392,"field":{"fieldKey":"tourDailyThemes.images","name":"图片"},"enable":false,"require":false},{"fieldId":393,"field":{"fieldKey":"poi","name":"poi名称"},"enable":false,"ranges":[{"rangeKey":"poiTypes","name":"poi类型","value":"","enable":false},{"rangeKey":"isCanHand","name":"自定义POI","value":"","enable":false},{"rangeKey":"isCanSystem","name":"使用系统POI","value":"","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":394,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T","enable":false}],"require":false},{"fieldId":395,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":1963,"field":{"fieldKey":"tourDailyThemes.activityName","name":"活动名称"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"100","enable":true}],"require":false},{"fieldId":7497,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7498,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12979,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":12,"name":"主题活动"},"enable":false},{"activeTypeId":28,"fields":[{"fieldId":396,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":397,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":398,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":false,"require":false},{"fieldId":399,"field":{"fieldKey":"distance","name":"距离"},"enable":false,"require":false},{"fieldId":400,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":401,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":402,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":403,"field":{"fieldKey":"train.trainNo","name":"车次号"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false}],"require":false},{"fieldId":404,"field":{"fieldKey":"train.trainType","name":"车型"},"enable":false,"require":false},{"fieldId":405,"field":{"fieldKey":"train.departureStation","name":"出发站"},"enable":false,"require":false},{"fieldId":406,"field":{"fieldKey":"train.arriveStation","name":"到达站"},"enable":false,"require":false},{"fieldId":407,"field":{"fieldKey":"train.departureTime","name":"出发时间"},"enable":false,"require":false},{"fieldId":408,"field":{"fieldKey":"train.arriveTime","name":"到达时间"},"enable":false,"require":false},{"fieldId":409,"field":{"fieldKey":"train.seatClass","name":"坐席"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"坐席可选范围","value":"","enable":false}],"require":false},{"fieldId":410,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":7499,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7500,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12986,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":14,"name":"火车"},"enable":false},{"activeTypeId":29,"fields":[{"fieldId":411,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":412,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":413,"field":{"fieldKey":"driveTime","name":"行驶时间"},"enable":false,"require":false},{"fieldId":414,"field":{"fieldKey":"distance","name":"距离"},"enable":false,"require":false},{"fieldId":415,"field":{"fieldKey":"takeTime","name":"花费时间"},"enable":false,"require":false},{"fieldId":416,"field":{"fieldKey":"intervalDeparture","name":"起点"},"enable":false,"require":false},{"fieldId":417,"field":{"fieldKey":"intervalDestination","name":"终点"},"enable":false,"require":false},{"fieldId":418,"field":{"fieldKey":"cars.model","name":"车型"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"车型可选范围","value":"","enable":false}],"require":false},{"fieldId":419,"field":{"fieldKey":"tourDailyCar.businessType","name":"服务类型"},"enable":false,"require":false},{"fieldId":420,"field":{"fieldKey":"tourDailyCar.departureLocation","name":"出发城市"},"enable":false,"require":false},{"fieldId":421,"field":{"fieldKey":"tourDailyCar.destinationLocation","name":"到达城市"},"enable":false,"require":false},{"fieldId":1385,"field":{"fieldKey":"tourDailyCar.airport","name":"机场"},"enable":false,"require":false},{"fieldId":1386,"field":{"fieldKey":"tourDailyCar.trainStation","name":"火车站"},"enable":false,"require":false},{"fieldId":1387,"field":{"fieldKey":"tourDailyCar.pickUpLocation","name":"上车点"},"enable":false,"require":false},{"fieldId":1388,"field":{"fieldKey":"tourDailyCar.dropOffLocation","name":"下车点"},"enable":false,"require":false},{"fieldId":422,"field":{"fieldKey":"cars.seatCount","name":"座位数"},"enable":false,"ranges":[{"rangeKey":"max","name":"最大数量","value":"","enable":false}],"require":false},{"fieldId":423,"field":{"fieldKey":"cars.baggageCount","name":"行李数"},"enable":false,"ranges":[{"rangeKey":"max","name":"最大数量","value":"","enable":false}],"require":false},{"fieldId":424,"field":{"fieldKey":"cars.images","name":"图片"},"enable":false,"ranges":[{"rangeKey":"max","name":"最大数量","value":"","enable":false}],"require":false},{"fieldId":425,"field":{"fieldKey":"cars.takeTime","name":"时长"},"enable":false,"require":false},{"fieldId":426,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":7501,"field":{"fieldKey":"specialGift","name":"特别赠送"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":7502,"field":{"fieldKey":"warmTips","name":"温馨提示"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false},{"fieldId":12993,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":15,"name":"用车"},"enable":false},{"activeTypeId":134,"fields":[{"fieldId":1964,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":1965,"field":{"fieldKey":"takeoffTime","name":"集合时间"},"enable":false,"require":false},{"fieldId":1966,"field":{"fieldKey":"tourDailyGather.gatherMode","name":"集合方式"},"enable":false,"require":false},{"fieldId":1967,"field":{"fieldKey":"tourDailyGather.pickUpRange","name":"上门范围"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"50","enable":true}],"require":false},{"fieldId":1968,"field":{"fieldKey":"tourDailyGather.overRangeType","name":"超范围说明类型"},"enable":false,"require":false},{"fieldId":1969,"field":{"fieldKey":"tourDailyGather.overRangeDesc","name":"超范围说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":1970,"field":{"fieldKey":"takeTime","name":"占用时间"},"enable":false,"require":false},{"fieldId":1971,"field":{"fieldKey":"description","name":"详细说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"1000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":1972,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T,F","enable":true}],"require":false},{"fieldId":1973,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"poiTypes","name":"poi类型","value":"2","enable":true},{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"使用系统POI","value":"T","enable":true},{"rangeKey":"showDefaultOptions","name":"是否出默认选项","value":"T","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":13000,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":19,"name":"集合"},"enable":false},{"activeTypeId":135,"fields":[{"fieldId":1974,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":1975,"field":{"fieldKey":"takeoffTime","name":"返程时间"},"enable":false,"require":false},{"fieldId":1976,"field":{"fieldKey":"tourDailyDismiss.dismissMode","name":"散团方式"},"enable":false,"require":false},{"fieldId":1977,"field":{"fieldKey":"poi","name":"poi名称"},"enable":true,"ranges":[{"rangeKey":"poiTypes","name":"poi类型","value":"2","enable":true},{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"使用系统POI","value":"T","enable":true},{"rangeKey":"showDefaultOptions","name":"是否出默认选项","value":"T","enable":false},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":1978,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T,F","enable":true}],"require":false},{"fieldId":1979,"field":{"fieldKey":"transportation","name":"交通方式"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"交通方式支持项","value":"","enable":false}],"require":false},{"fieldId":1980,"field":{"fieldKey":"tourDailyDismiss.sendBackRange","name":"送回范围"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"50","enable":true}],"require":false},{"fieldId":1981,"field":{"fieldKey":"tourDailyDismiss.rangeTemplateId","name":"接送范围模板"},"enable":false,"require":false},{"fieldId":1982,"field":{"fieldKey":"tourDailyDismiss.overRangeType","name":"超范围说明"},"enable":false,"require":false},{"fieldId":1983,"field":{"fieldKey":"tourDailyDismiss.overRangeDesc","name":"超范围说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":1984,"field":{"fieldKey":"takeTime","name":"占用时间"},"enable":false,"require":false},{"fieldId":1985,"field":{"fieldKey":"description","name":"详细说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"1000","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":13007,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":20,"name":"返程"},"enable":false},{"activeTypeId":136,"fields":[{"fieldId":1986,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":1987,"field":{"fieldKey":"takeoffTime","name":"时间"},"enable":false,"require":false},{"fieldId":1988,"field":{"fieldKey":"takeTime","name":"活动时长"},"enable":false,"ranges":[{"rangeKey":"min","name":"最低时长限制","value":"0","enable":false}],"require":false},{"fieldId":1989,"field":{"fieldKey":"tourDailyPois.groupType","name":"活动类型"},"enable":false,"require":false},{"fieldId":1990,"field":{"fieldKey":"tourDailyPois.orFlag","name":"poi与或"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"与、或","value":"T,F","enable":true}],"require":false},{"fieldId":1991,"field":{"fieldKey":"poi","name":"poi名称"},"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"3,19","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":false},{"fieldId":1992,"field":{"fieldKey":"tourDailyPois.costInclude","name":"费用是否包含"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"活动景点收费可选范围","value":"I,E,N","enable":false}],"require":false},{"fieldId":2127,"field":{"fieldKey":"tourDailyPois.suffixName","name":"poi后缀"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"suffixName可选范围","value":"1,2,3,4","enable":false},{"rangeKey":"defaultValue","name":"suffixName默认值","value":"4","enable":false}],"require":false},{"fieldId":1993,"field":{"fieldKey":"poi.cost","name":"poi费用参考"},"enable":true,"require":true},{"fieldId":1994,"field":{"fieldKey":"poi.costUnit","name":"费用单位"},"enable":false,"require":false},{"fieldId":1995,"field":{"fieldKey":"poi.address","name":"景点地址"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":false}],"require":false},{"fieldId":1996,"field":{"fieldKey":"description","name":"补充说明"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"","enable":false},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":2176,"field":{"fieldKey":"tourDailyThemes.theme","name":"主题活动"},"enable":false,"ranges":[{"rangeKey":"valueRange","name":"主题可选范围","value":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29.30,31,32,33,34,35","enable":false}],"require":false},{"fieldId":13014,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":21,"name":"游玩活动"},"enable":false},{"activeTypeId":137,"fields":[{"fieldId":1997,"field":{"fieldKey":"isCanCopy","name":"是否可以被复制"},"enable":false,"require":false},{"fieldId":1998,"field":{"fieldKey":"takeoffTime","name":"结束时间"},"enable":false,"require":false},{"fieldId":1999,"field":{"fieldKey":"description","name":"详细说明"},"enable":false,"ranges":[{"rangeKey":"defaultValue","name":"详细说明默认值","value":"","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false},{"fieldId":13021,"field":{"fieldKey":"communication","name":"待沟通内容"},"enable":false,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"500","enable":true}],"require":false}],"activeType":{"key":22,"name":"结束旅程"},"enable":false},{"activeTypeId":799,"fields":[{"fieldId":13028,"field":{"fieldKey":"poi","name":"poi名称"},"ranges":[{"rangeKey":"isCanHand","name":"自定义POI","value":"T","enable":true},{"rangeKey":"isCanSystem","name":"系统POI","value":"T","enable":true},{"rangeKey":"poiTypes","name":"poi类型","value":"3","enable":true},{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true}],"require":true},{"fieldId":13035,"field":{"fieldKey":"description","name":"补充说明"},"enable":true,"ranges":[{"rangeKey":"maxLen","name":"最大长度","value":"200","enable":true},{"rangeKey":"blackWord","name":"限制词","value":"","enable":false}],"require":false}],"activeType":{"key":23,"name":"住宿"},"enable":false}],"functions":[{"functionId":107,"function":{"functionKey":"collect","name":"收藏"},"enable":false},{"functionId":104,"function":{"functionKey":"order","name":"排序"},"enable":false},{"functionId":13,"function":{"functionKey":"import","name":"导入"},"enable":false},{"functionId":14,"function":{"functionKey":"clear","name":"清空"},"enable":true},{"functionId":15,"function":{"functionKey":"addDays","name":"新增天数"},"enable":false},{"functionId":16,"function":{"functionKey":"deleteDays","name":"删除天数"},"enable":false},{"functionId":17,"function":{"functionKey":"tourDailyLocations","name":"每日地点"},"enable":false},{"functionId":18,"function":{"functionKey":"hideFirstTourInterval","name":"隐藏第一个行程间距"},"enable":false},{"functionId":19,"function":{"functionKey":"calculateTourInterval","name":"自动计算行程间距的起点和终点"},"enable":false},{"functionId":20,"function":{"functionKey":"tourScore","name":"行程评分"},"enable":true},{"functionId":22,"function":{"functionKey":"selfFundedActivity","name":"自费活动"},"enable":true},{"functionId":75,"function":{"functionKey":"tourDailyLocationsReadonly","name":"每日地点不自动反推，只读"},"enable":false},{"functionId":21,"function":{"functionKey":"showHotelDefaultOption","name":"显示默认酒店"},"enable":true},{"functionId":118,"function":{"functionKey":"hotelCheck","name":"酒店达标项校验"},"enable":true},{"functionId":708,"function":{"functionKey":"pending","name":"可待定"},"enable":false},{"functionId":715,"function":{"functionKey":"useCar","name":"当天用车"},"enable":false},{"functionId":848,"function":{"functionKey":"batchSet","name":"批量设置"},"enable":true}],"themes":[{"themeId":17,"theme":{"key":43,"name":"徒步"},"fields":[{"fieldId":81,"field":{"fieldKey":"TrekAlternativeTransportation","name":"可替代徒步的交通"},"enable":true,"require":true},{"fieldId":82,"field":{"fieldKey":"TrekMileage","name":"徒步里程"},"enable":true,"require":true},{"fieldId":83,"field":{"fieldKey":"TrekTotalUpAltitude","name":"起点海拔"},"enable":true,"require":true},{"fieldId":84,"field":{"fieldKey":"TrekTotalDownAltitude","name":"终点海拔"},"enable":true,"require":true},{"fieldId":85,"field":{"fieldKey":"TrekMaximumAltitude","name":"途径最高海拔"},"enable":true,"require":true},{"fieldId":86,"field":{"fieldKey":"TrekEquipment","name":"所含装备"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"所含装备可选范围","value":"1,2,3,4,5,6,7,8,9,10","enable":true}],"require":false},{"fieldId":87,"field":{"fieldKey":"TrekHeavy","name":"是否重装"},"enable":true,"require":true},{"fieldId":88,"field":{"fieldKey":"TrekSupply","name":"途中是否有补给点"},"enable":true,"require":true},{"fieldId":89,"field":{"fieldKey":"TrekGuide","name":"户外向导配置"},"enable":true,"require":true},{"fieldId":90,"field":{"fieldKey":"TrekGuideProportion","name":"户外向导配比（向导：客人)"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"户外向导配比可选范围","value":"7,6,5,4,3,2,1","enable":true}],"require":true},{"fieldId":91,"field":{"fieldKey":"TrekGuideQualification","name":"户外向导资质"},"enable":true,"require":true},{"fieldId":200,"field":{"fieldKey":"PoiTagRange","name":"地点标签范围"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"地点标签范围","value":"2006,25831,65,24,11,703,25810,7,8,16,19,142,4841,20521,20549,20565,20572,28,32,140,602,20531,45,21,20,137,20571,20566,63,10,11,4836,17,703,147,148,755,37,25710,20631","enable":true}],"require":false}],"enable":true},{"themeId":18,"theme":{"key":44,"name":"登山"},"fields":[{"fieldId":92,"field":{"fieldKey":"MountaineeringAlternativeTransportation","name":"可替代登山的交通"},"enable":true,"require":true},{"fieldId":93,"field":{"fieldKey":"MountaineeringMileage","name":"登山里程"},"enable":true,"require":true},{"fieldId":94,"field":{"fieldKey":"MountaineeringTotalUpAltitude","name":"起点海拔"},"enable":true,"require":true},{"fieldId":95,"field":{"fieldKey":"MountaineeringTotalDownAltitude","name":"终点海拔"},"enable":true,"require":true},{"fieldId":96,"field":{"fieldKey":"MountaineeringMaximumAltitude","name":"途径最高海拔"},"enable":true,"require":true},{"fieldId":97,"field":{"fieldKey":"MountaineeringEquipment","name":"所含装备"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"所含装备可选范围","value":"1,2,3,4,5,6,7,8,9,10","enable":true}],"require":false},{"fieldId":98,"field":{"fieldKey":"MountaineeringHeavy","name":"是否重装"},"enable":true,"require":true},{"fieldId":99,"field":{"fieldKey":"MountaineeringSupply","name":"途中是否有补给点"},"enable":true,"require":true},{"fieldId":100,"field":{"fieldKey":"MountaineeringGuide","name":"户外向导配置"},"enable":true,"require":true},{"fieldId":101,"field":{"fieldKey":"MountaineeringGuideProportion","name":"户外向导配比（向导：客人)"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"户外向导配比可选范围","value":"7,6,5,4,3,2,1","enable":true}],"require":true},{"fieldId":102,"field":{"fieldKey":"MountaineeringGuideQualification","name":"户外向导资质"},"enable":true,"require":true},{"fieldId":201,"field":{"fieldKey":"PoiTagRange","name":"地点标签范围"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"地点标签范围","value":"2006,24,20572","enable":true}],"require":false}],"enable":true},{"themeId":19,"theme":{"key":31,"name":"越野自驾"},"fields":[{"fieldId":103,"field":{"fieldKey":"OffRoadSelfDrivingMileage","name":"驾驶里程"},"enable":false,"require":false},{"fieldId":104,"field":{"fieldKey":"OffRoadSelfDrivingHighestAltitude","name":"最高海拔"},"enable":false,"require":false},{"fieldId":105,"field":{"fieldKey":"OffRoadSelfDrivingLowestAltitude","name":"最低海拔"},"enable":false,"require":false},{"fieldId":106,"field":{"fieldKey":"OffRoadSelfDrivingMaximumAltitudeDrop","name":"最大落差"},"enable":false,"require":false}],"enable":false},{"themeId":20,"theme":{"key":1,"name":"滑雪"},"fields":[{"fieldId":107,"field":{"fieldKey":"SkiingTicketType","name":"雪票类型"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"雪票类型可选范围","value":"1,2,3","enable":true}],"require":true},{"fieldId":108,"field":{"fieldKey":"SkiingTeaching","name":"滑雪教学"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"滑雪教学可选范围","value":"1,2,3,4","enable":true}],"require":true},{"fieldId":109,"field":{"fieldKey":"SkiingCoachProportion","name":"教练配比(教练:客人)"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"教练配比可选范围","value":"1,2,3,4","enable":true}],"require":true},{"fieldId":110,"field":{"fieldKey":"SkiingTime","name":"教学时长"},"enable":true,"require":true},{"fieldId":111,"field":{"fieldKey":"SkiingEquipment","name":"所含雪具"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"所含雪具可选范围","value":"1,2,3,4,5,6,7,8","enable":true}],"require":false},{"fieldId":202,"field":{"fieldKey":"PoiTagRange","name":"地点标签范围"},"enable":true,"ranges":[{"rangeKey":"valueRange","name":"地点标签范围","value":"2011, 25821","enable":true}],"require":false}],"enable":true}]},"tourInfoId":0,"days":2,"inputLocale":"zh-CN","tourInfoScores":[{"typeName":{"key":"1","name":"交通"},"subtypeName":{"key":"1.1","name":"交通披露"},"fullScore":2,"weightScore":0,"isFullScore":false,"advice":"行程第1天要披露航班或交通哦~","remark":"-2"},{"typeName":{"key":"1","name":"交通"},"subtypeName":{"key":"1.2","name":"交通起始时间"},"fullScore":2,"weightScore":2,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"1","name":"交通"},"subtypeName":{"key":"1.3","name":"交通行驶距离或行驶时间"},"fullScore":2,"weightScore":2,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"2","name":"用餐"},"subtypeName":{"key":"2.1","name":"餐食披露"},"fullScore":6,"weightScore":1.5,"isFullScore":false,"advice":"第1,2天的三餐都要披露哦~","remark":"-2,-19"},{"typeName":{"key":"2","name":"用餐"},"subtypeName":{"key":"2.3","name":"非自理餐食餐标"},"fullScore":1,"weightScore":1,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"2","name":"用餐"},"subtypeName":{"key":"2.4","name":"非自理餐食起始时间"},"fullScore":1,"weightScore":1,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"2","name":"用餐"},"subtypeName":{"key":"2.5","name":"非自理餐食用餐时间"},"fullScore":1,"weightScore":1,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"3","name":"酒店"},"subtypeName":{"key":"3.1","name":"前往酒店时间"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"3","name":"酒店"},"subtypeName":{"key":"3.2","name":"酒店活动类别"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"3","name":"酒店"},"subtypeName":{"key":"3.3","name":"系统酒店录入"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"3","name":"酒店"},"subtypeName":{"key":"3.4","name":"酒店结构化录入"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"4","name":"景点"},"subtypeName":{"key":"4.1","name":"景点结构化"},"fullScore":10,"weightScore":0,"isFullScore":false,"advice":"第1,2天景点要披露结构化POI哦~","remark":"-2,-19"},{"typeName":{"key":"4","name":"景点"},"subtypeName":{"key":"4.2","name":"景点起始时间"},"fullScore":10,"weightScore":0,"isFullScore":false,"advice":"第1,2天景点要披露起始时间哦~","remark":"-2,-19"},{"typeName":{"key":"4","name":"景点"},"subtypeName":{"key":"4.3","name":"景点活动时间"},"fullScore":10,"weightScore":0,"isFullScore":false,"advice":"第1,2天景点要披露活动时间哦~","remark":"-2,-19"},{"typeName":{"key":"5","name":"购物"},"subtypeName":{"key":"5.1","name":"购物结构化"},"fullScore":8,"weightScore":8,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"5","name":"购物"},"subtypeName":{"key":"5.2","name":"购物起始时间"},"fullScore":1,"weightScore":1,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"5","name":"购物"},"subtypeName":{"key":"5.3","name":"购物活动时间"},"fullScore":1,"weightScore":1,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"6","name":"自由活动"},"subtypeName":{"key":"6.1","name":"自由活动起始时间"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"6","name":"自由活动"},"subtypeName":{"key":"6.2","name":"自由活动活动时间"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"7","name":"其他"},"subtypeName":{"key":"7.1","name":"时间精准度"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"7","name":"其他"},"subtypeName":{"key":"7.2","name":"景点结构化前后缀"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"干得漂亮！","remark":""},{"typeName":{"key":"7","name":"其他"},"subtypeName":{"key":"7.3","name":"其他类别"},"fullScore":5,"weightScore":5,"isFullScore":true,"advice":"产品第2天披露的其他类别太多了哦~","remark":"-19.-32"}],"fromTourInfoId":0,"aggregateScore":63.5,"aggregateScoreAdvice":"继续努力，您的搜索排序还能更好","isModify":true}',
  productTourInfo: {
    main: true,
    tourInfoId: 0,
    productId: "52504368",
    sort: 0,
    isNew: true,
  },
};

const save = {
  requestHeader: {
    locale: "zh-CN",
  },
  piCategoryId: 0,
  tourInfo: {
    tourInfoId: "283184460785565795",
    tourInfoName: null,
    tourInfoDescription: null,
    days: 2,
    referenceCount: null,
    fromTourInfoId: 0,
    inputLocale: "zh-CN",
    vendorId: null,
    aggregateScore: 63.5,
    aggregateScoreAdvice: "继续努力，您的搜索排序还能更好",
    tourInfoScores: [
      {
        tourInfoScoreId: null,
        typeName: {
          key: "1",
          name: "交通",
        },
        subtypeName: {
          key: "1.1",
          name: "交通披露",
        },
        fullScore: 2,
        weightScore: 0,
        isFullScore: false,
        advice: "行程第1天要披露航班或交通哦~",
        remark: "-2",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "1",
          name: "交通",
        },
        subtypeName: {
          key: "1.2",
          name: "交通起始时间",
        },
        fullScore: 2,
        weightScore: 2,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "1",
          name: "交通",
        },
        subtypeName: {
          key: "1.3",
          name: "交通行驶距离或行驶时间",
        },
        fullScore: 2,
        weightScore: 2,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "2",
          name: "用餐",
        },
        subtypeName: {
          key: "2.1",
          name: "餐食披露",
        },
        fullScore: 6,
        weightScore: 1.5,
        isFullScore: false,
        advice: "第1,2天的三餐都要披露哦~",
        remark: "-2,-19",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "2",
          name: "用餐",
        },
        subtypeName: {
          key: "2.3",
          name: "非自理餐食餐标",
        },
        fullScore: 1,
        weightScore: 1,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "2",
          name: "用餐",
        },
        subtypeName: {
          key: "2.4",
          name: "非自理餐食起始时间",
        },
        fullScore: 1,
        weightScore: 1,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "2",
          name: "用餐",
        },
        subtypeName: {
          key: "2.5",
          name: "非自理餐食用餐时间",
        },
        fullScore: 1,
        weightScore: 1,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "3",
          name: "酒店",
        },
        subtypeName: {
          key: "3.1",
          name: "前往酒店时间",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "3",
          name: "酒店",
        },
        subtypeName: {
          key: "3.2",
          name: "酒店活动类别",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "3",
          name: "酒店",
        },
        subtypeName: {
          key: "3.3",
          name: "系统酒店录入",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "3",
          name: "酒店",
        },
        subtypeName: {
          key: "3.4",
          name: "酒店结构化录入",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "4",
          name: "景点",
        },
        subtypeName: {
          key: "4.1",
          name: "景点结构化",
        },
        fullScore: 10,
        weightScore: 0,
        isFullScore: false,
        advice: "第1,2天景点要披露结构化POI哦~",
        remark: "-2,-19",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "4",
          name: "景点",
        },
        subtypeName: {
          key: "4.2",
          name: "景点起始时间",
        },
        fullScore: 10,
        weightScore: 0,
        isFullScore: false,
        advice: "第1,2天景点要披露起始时间哦~",
        remark: "-2,-19",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "4",
          name: "景点",
        },
        subtypeName: {
          key: "4.3",
          name: "景点活动时间",
        },
        fullScore: 10,
        weightScore: 0,
        isFullScore: false,
        advice: "第1,2天景点要披露活动时间哦~",
        remark: "-2,-19",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "5",
          name: "购物",
        },
        subtypeName: {
          key: "5.1",
          name: "购物结构化",
        },
        fullScore: 8,
        weightScore: 8,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "5",
          name: "购物",
        },
        subtypeName: {
          key: "5.2",
          name: "购物起始时间",
        },
        fullScore: 1,
        weightScore: 1,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "5",
          name: "购物",
        },
        subtypeName: {
          key: "5.3",
          name: "购物活动时间",
        },
        fullScore: 1,
        weightScore: 1,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "6",
          name: "自由活动",
        },
        subtypeName: {
          key: "6.1",
          name: "自由活动起始时间",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "6",
          name: "自由活动",
        },
        subtypeName: {
          key: "6.2",
          name: "自由活动活动时间",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "7",
          name: "其他",
        },
        subtypeName: {
          key: "7.1",
          name: "时间精准度",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "7",
          name: "其他",
        },
        subtypeName: {
          key: "7.2",
          name: "景点结构化前后缀",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "干得漂亮！",
        remark: "",
      },
      {
        tourInfoScoreId: null,
        typeName: {
          key: "7",
          name: "其他",
        },
        subtypeName: {
          key: "7.3",
          name: "其他类别",
        },
        fullScore: 5,
        weightScore: 5,
        isFullScore: true,
        advice: "产品第2天披露的其他类别太多了哦~",
        remark: "-19.-32",
      },
    ],
    hotelCheckResults: null,
    template: {
      templateId: 3,
      name: "跟团",
      activeTypes: [
        {
          activeTypeId: 17,
          fields: [
            {
              fieldId: 233,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 234,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 235,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 236,
              field: {
                fieldKey: "tourDailyDinner.cost",
                name: "餐标",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 237,
              field: {
                fieldKey: "tourDailyDinner.currency",
                name: "餐标货币",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 238,
              field: {
                fieldKey: "tourDailyDinner.includeAdult",
                name: "成人是否含餐",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 239,
              field: {
                fieldKey: "tourDailyDinner.includeChild",
                name: "儿童是否含餐",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 240,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 241,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 242,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 243,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 244,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 245,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 246,
              field: {
                fieldKey: "tourDailyDinner.dinnerType",
                name: "餐饮类型",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "餐饮类型可选范围",
                  value: "B,L,S,T,M",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 247,
              field: {
                fieldKey: "tourDailyDinner.costInclude",
                name: "餐饮收费",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "餐饮收费可选范围",
                  value: "I,E",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1960,
              field: {
                fieldKey: "tourDailyDinner.foodType",
                name: "菜品品类",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 248,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 249,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "2",
                  enable: true,
                },
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "使用系统POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "showDefaultOptions",
                  name: "是否出默认选项",
                  value: "T",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 250,
              field: {
                fieldKey: "poi.address",
                name: "地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 251,
              field: {
                fieldKey: "poi.openTime",
                name: "营业时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 252,
              field: {
                fieldKey: "poi.cost",
                name: "poi费用参考",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 253,
              field: {
                fieldKey: "poi.currency",
                name: "poi货币",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 254,
              field: {
                fieldKey: "tourDailyPois.images",
                name: "poi图片",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 7487,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7488,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12909,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 0,
            name: "餐饮",
          },
          enable: true,
        },
        {
          activeTypeId: 18,
          fields: [
            {
              fieldId: 255,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 256,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 257,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 258,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 259,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 260,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 261,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 262,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 263,
              field: {
                fieldKey: "hotel.location",
                name: "酒店城市",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 264,
              field: {
                fieldKey: "tourDailyHotels.hotelType",
                name: "酒店类别",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 265,
              field: {
                fieldKey: "hotel.hotelName",
                name: "酒店名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义酒店",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统酒店",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "showDefaultOptions",
                  name: "是否出默认选项",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "searchIdByGetHotelDetailById",
                  name: "搜索酒店id时是否走getHotelDetailById接口",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "自定义酒店名称长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 266,
              field: {
                fieldKey: "hotel.hotelAddress",
                name: "酒店地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 267,
              field: {
                fieldKey: "tourDailyHotels.images",
                name: "酒店图片",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "max",
                  name: "图片数量上限",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 268,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 269,
              field: {
                fieldKey: "costInclude",
                name: "是否含酒店",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 7489,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7490,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12916,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 1,
            name: "酒店",
          },
          enable: true,
        },
        {
          activeTypeId: 19,
          fields: [
            {
              fieldId: 270,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 271,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 272,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 273,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 274,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 275,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 276,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 277,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 278,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 279,
              field: {
                fieldKey: "flight.flightNo",
                name: "航班号",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 280,
              field: {
                fieldKey: "flight.subClass",
                name: "舱位",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 281,
              field: {
                fieldKey: "flight.departureTime",
                name: "出发时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 282,
              field: {
                fieldKey: "flight.departureAirport",
                name: "出发机场",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 283,
              field: {
                fieldKey: "flight.departureTerminal",
                name: "出发航站楼",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 284,
              field: {
                fieldKey: "flight.arriveTime",
                name: "到达时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 285,
              field: {
                fieldKey: "flight.arriveAirport",
                name: "到达机场",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 286,
              field: {
                fieldKey: "flight.arriveTerminal",
                name: "到达航站楼",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 287,
              field: {
                fieldKey: "flight.flightType",
                name: "机型",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 288,
              field: {
                fieldKey: "flight.duration",
                name: "飞行时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 289,
              field: {
                fieldKey: "flight.directFlightFlag",
                name: "直飞、中转标记",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 290,
              field: {
                fieldKey: "flight.transferLocation",
                name: "中转城市",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 291,
              field: {
                fieldKey: "flight.transferTime",
                name: "中转时长",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 292,
              field: {
                fieldKey: "flight.stopLocations",
                name: "经停城市",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 293,
              field: {
                fieldKey: "flight.stopTime",
                name: "经停时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 294,
              field: {
                fieldKey: "addFlight",
                name: "添加中转",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 7491,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7492,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12923,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 2,
            name: "航班",
          },
          enable: true,
        },
        {
          activeTypeId: 20,
          fields: [
            {
              fieldId: 295,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 296,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 297,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 298,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 299,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 300,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 301,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 302,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 303,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T,F",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 304,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "3,19,66,5",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 305,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "1,2,3,5,6,7,11",
                  enable: true,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "8",
                  enable: false,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 306,
              field: {
                fieldKey: "tourDailyPois.costInclude",
                name: "景点收费情况",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "景点收费可选范围",
                  value: "I,E,F,N",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 307,
              field: {
                fieldKey: "poi.openTime",
                name: "开放时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 308,
              field: {
                fieldKey: "poi.takeTime",
                name: "推荐游览时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 309,
              field: {
                fieldKey: "poi.address",
                name: "景点地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 310,
              field: {
                fieldKey: "tourDailyPois.images",
                name: "图片",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1371,
              field: {
                fieldKey: "selfFundedActivity.activityName",
                name: "自费项目",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 1372,
              field: {
                fieldKey: "selfFundedActivity.activityDesc",
                name: "自费详情",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 1373,
              field: {
                fieldKey: "selfFundedActivity.useListingPrice",
                name: "参考价格",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 311,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 2126,
              field: {
                fieldKey: "tourDailyThemes.theme",
                name: "主题活动",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "主题可选范围",
                  value: "43,44,1",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7493,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7494,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12930,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 15009,
              field: {
                fieldKey: "poi.relateSystemTicket",
                name: "关联系统门票",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 3,
            name: "景点",
          },
          enable: true,
        },
        {
          activeTypeId: 21,
          fields: [
            {
              fieldId: 312,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 313,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 314,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 315,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 316,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 317,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 318,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 319,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 320,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 321,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "5",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 322,
              field: {
                fieldKey: "poi.openTime",
                name: "开放时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 323,
              field: {
                fieldKey: "poi.address",
                name: "地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 324,
              field: {
                fieldKey: "tourDailyPois.images",
                name: "图片",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 325,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 326,
              field: {
                fieldKey: "productsOnSale",
                name: "营业产品",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "100",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7495,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7496,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12937,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 4,
            name: "购物",
          },
          enable: true,
        },
        {
          activeTypeId: 22,
          fields: [
            {
              fieldId: 327,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 328,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 329,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 330,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 331,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 332,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 333,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 334,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 335,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T,F",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 336,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "3,66,5,19",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 337,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "1,2,3,4",
                  enable: true,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "8",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 338,
              field: {
                fieldKey: "tourDailyPois.costInclude",
                name: "景点收费情况",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 339,
              field: {
                fieldKey: "poi.openTime",
                name: "开放时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 340,
              field: {
                fieldKey: "poi.takeTime",
                name: "推荐游览时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 341,
              field: {
                fieldKey: "poi.address",
                name: "景点地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 342,
              field: {
                fieldKey: "tourDailyPois.images",
                name: "图片",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 343,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 12944,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 7,
            name: "自由活动",
          },
          enable: true,
        },
        {
          activeTypeId: 23,
          fields: [
            {
              fieldId: 344,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 345,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 346,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1961,
              field: {
                fieldKey: "directionType",
                name: "方向",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1962,
              field: {
                fieldKey: "targetPoi",
                name: "目的地",
              },
              enable: null,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "3,19",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 347,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 348,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 349,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "min",
                  name: "最低时长限制",
                  value: "0",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 350,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 351,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 352,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 12951,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 8,
            name: "交通",
          },
          enable: true,
        },
        {
          activeTypeId: 24,
          fields: [
            {
              fieldId: 353,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 354,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 355,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 356,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 357,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 358,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: true,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 359,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 360,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 361,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "4000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 12958,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 9,
            name: "其他",
          },
          enable: true,
        },
        {
          activeTypeId: 25,
          fields: [
            {
              fieldId: 362,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 363,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 364,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 365,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 366,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 367,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 368,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: null,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 369,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 370,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12965,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 10,
            name: "课程",
          },
          enable: false,
        },
        {
          activeTypeId: 26,
          fields: [
            {
              fieldId: 371,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 372,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 373,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 374,
              field: {
                fieldKey: "driveTime",
                name: "行驶时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 375,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 376,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 377,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: null,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 378,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 379,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12972,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 11,
            name: "活动",
          },
          enable: false,
        },
        {
          activeTypeId: 27,
          fields: [
            {
              fieldId: 380,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 381,
              field: {
                fieldKey: "takeoffTime",
                name: "出发时间",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "时间可选项",
                  value: "N,D,M,A,E",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 382,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 383,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 384,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 385,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 386,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 387,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 388,
              field: {
                fieldKey: "tourDailyThemes.addTheme",
                name: "添加多主题",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 389,
              field: {
                fieldKey: "tourDailyThemes.theme",
                name: "活动类型",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "主题可选范围",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 390,
              field: {
                fieldKey: "tourDailyThemes.location",
                name: "地点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 391,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 392,
              field: {
                fieldKey: "tourDailyThemes.images",
                name: "图片",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 393,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "使用系统POI",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 394,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 395,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1963,
              field: {
                fieldKey: "tourDailyThemes.activityName",
                name: "活动名称",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "100",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7497,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7498,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12979,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 12,
            name: "主题活动",
          },
          enable: false,
        },
        {
          activeTypeId: 28,
          fields: [
            {
              fieldId: 396,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 397,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 398,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 399,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 400,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 401,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 402,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 403,
              field: {
                fieldKey: "train.trainNo",
                name: "车次号",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 404,
              field: {
                fieldKey: "train.trainType",
                name: "车型",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 405,
              field: {
                fieldKey: "train.departureStation",
                name: "出发站",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 406,
              field: {
                fieldKey: "train.arriveStation",
                name: "到达站",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 407,
              field: {
                fieldKey: "train.departureTime",
                name: "出发时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 408,
              field: {
                fieldKey: "train.arriveTime",
                name: "到达时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 409,
              field: {
                fieldKey: "train.seatClass",
                name: "坐席",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "坐席可选范围",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 410,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7499,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7500,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12986,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 14,
            name: "火车",
          },
          enable: false,
        },
        {
          activeTypeId: 29,
          fields: [
            {
              fieldId: 411,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 412,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 413,
              field: {
                fieldKey: "driveTime",
                name: "行驶时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 414,
              field: {
                fieldKey: "distance",
                name: "距离",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 415,
              field: {
                fieldKey: "takeTime",
                name: "花费时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 416,
              field: {
                fieldKey: "intervalDeparture",
                name: "起点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 417,
              field: {
                fieldKey: "intervalDestination",
                name: "终点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 418,
              field: {
                fieldKey: "cars.model",
                name: "车型",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "车型可选范围",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 419,
              field: {
                fieldKey: "tourDailyCar.businessType",
                name: "服务类型",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 420,
              field: {
                fieldKey: "tourDailyCar.departureLocation",
                name: "出发城市",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 421,
              field: {
                fieldKey: "tourDailyCar.destinationLocation",
                name: "到达城市",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1385,
              field: {
                fieldKey: "tourDailyCar.airport",
                name: "机场",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1386,
              field: {
                fieldKey: "tourDailyCar.trainStation",
                name: "火车站",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1387,
              field: {
                fieldKey: "tourDailyCar.pickUpLocation",
                name: "上车点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1388,
              field: {
                fieldKey: "tourDailyCar.dropOffLocation",
                name: "下车点",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 422,
              field: {
                fieldKey: "cars.seatCount",
                name: "座位数",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "max",
                  name: "最大数量",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 423,
              field: {
                fieldKey: "cars.baggageCount",
                name: "行李数",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "max",
                  name: "最大数量",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 424,
              field: {
                fieldKey: "cars.images",
                name: "图片",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "max",
                  name: "最大数量",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 425,
              field: {
                fieldKey: "cars.takeTime",
                name: "时长",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 426,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7501,
              field: {
                fieldKey: "specialGift",
                name: "特别赠送",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 7502,
              field: {
                fieldKey: "warmTips",
                name: "温馨提示",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 12993,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 15,
            name: "用车",
          },
          enable: false,
        },
        {
          activeTypeId: 134,
          fields: [
            {
              fieldId: 1964,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1965,
              field: {
                fieldKey: "takeoffTime",
                name: "集合时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1966,
              field: {
                fieldKey: "tourDailyGather.gatherMode",
                name: "集合方式",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1967,
              field: {
                fieldKey: "tourDailyGather.pickUpRange",
                name: "上门范围",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "50",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1968,
              field: {
                fieldKey: "tourDailyGather.overRangeType",
                name: "超范围说明类型",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1969,
              field: {
                fieldKey: "tourDailyGather.overRangeDesc",
                name: "超范围说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1970,
              field: {
                fieldKey: "takeTime",
                name: "占用时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1971,
              field: {
                fieldKey: "description",
                name: "详细说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "1000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1972,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T,F",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1973,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "2",
                  enable: true,
                },
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "使用系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "showDefaultOptions",
                  name: "是否出默认选项",
                  value: "T",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 13000,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 19,
            name: "集合",
          },
          enable: false,
        },
        {
          activeTypeId: 135,
          fields: [
            {
              fieldId: 1974,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1975,
              field: {
                fieldKey: "takeoffTime",
                name: "返程时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1976,
              field: {
                fieldKey: "tourDailyDismiss.dismissMode",
                name: "散团方式",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1977,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "2",
                  enable: true,
                },
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "使用系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "showDefaultOptions",
                  name: "是否出默认选项",
                  value: "T",
                  enable: false,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 1978,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T,F",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1979,
              field: {
                fieldKey: "transportation",
                name: "交通方式",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "交通方式支持项",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1980,
              field: {
                fieldKey: "tourDailyDismiss.sendBackRange",
                name: "送回范围",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "50",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1981,
              field: {
                fieldKey: "tourDailyDismiss.rangeTemplateId",
                name: "接送范围模板",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1982,
              field: {
                fieldKey: "tourDailyDismiss.overRangeType",
                name: "超范围说明",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1983,
              field: {
                fieldKey: "tourDailyDismiss.overRangeDesc",
                name: "超范围说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1984,
              field: {
                fieldKey: "takeTime",
                name: "占用时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1985,
              field: {
                fieldKey: "description",
                name: "详细说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "1000",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 13007,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 20,
            name: "返程",
          },
          enable: false,
        },
        {
          activeTypeId: 136,
          fields: [
            {
              fieldId: 1986,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1987,
              field: {
                fieldKey: "takeoffTime",
                name: "时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1988,
              field: {
                fieldKey: "takeTime",
                name: "活动时长",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "min",
                  name: "最低时长限制",
                  value: "0",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1989,
              field: {
                fieldKey: "tourDailyPois.groupType",
                name: "活动类型",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1990,
              field: {
                fieldKey: "tourDailyPois.orFlag",
                name: "poi与或",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "与、或",
                  value: "T,F",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1991,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: null,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "3,19",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1992,
              field: {
                fieldKey: "tourDailyPois.costInclude",
                name: "费用是否包含",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "活动景点收费可选范围",
                  value: "I,E,N",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 2127,
              field: {
                fieldKey: "tourDailyPois.suffixName",
                name: "poi后缀",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "suffixName可选范围",
                  value: "1,2,3,4",
                  enable: false,
                },
                {
                  rangeKey: "defaultValue",
                  name: "suffixName默认值",
                  value: "4",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1993,
              field: {
                fieldKey: "poi.cost",
                name: "poi费用参考",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 1994,
              field: {
                fieldKey: "poi.costUnit",
                name: "费用单位",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1995,
              field: {
                fieldKey: "poi.address",
                name: "景点地址",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 1996,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "",
                  enable: false,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 2176,
              field: {
                fieldKey: "tourDailyThemes.theme",
                name: "主题活动",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "主题可选范围",
                  value:
                    "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29.30,31,32,33,34,35",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 13014,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 21,
            name: "游玩活动",
          },
          enable: false,
        },
        {
          activeTypeId: 137,
          fields: [
            {
              fieldId: 1997,
              field: {
                fieldKey: "isCanCopy",
                name: "是否可以被复制",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1998,
              field: {
                fieldKey: "takeoffTime",
                name: "结束时间",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 1999,
              field: {
                fieldKey: "description",
                name: "详细说明",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "defaultValue",
                  name: "详细说明默认值",
                  value: "",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 13021,
              field: {
                fieldKey: "communication",
                name: "待沟通内容",
              },
              enable: false,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "500",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 22,
            name: "结束旅程",
          },
          enable: false,
        },
        {
          activeTypeId: 799,
          fields: [
            {
              fieldId: 13028,
              field: {
                fieldKey: "poi",
                name: "poi名称",
              },
              enable: null,
              ranges: [
                {
                  rangeKey: "isCanHand",
                  name: "自定义POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "isCanSystem",
                  name: "系统POI",
                  value: "T",
                  enable: true,
                },
                {
                  rangeKey: "poiTypes",
                  name: "poi类型",
                  value: "3",
                  enable: true,
                },
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 13035,
              field: {
                fieldKey: "description",
                name: "补充说明",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "maxLen",
                  name: "最大长度",
                  value: "200",
                  enable: true,
                },
                {
                  rangeKey: "blackWord",
                  name: "限制词",
                  value: "",
                  enable: false,
                },
              ],
              require: false,
              show: null,
            },
          ],
          activeType: {
            key: 23,
            name: "住宿",
          },
          enable: false,
        },
      ],
      functions: [
        {
          functionId: 107,
          function: {
            functionKey: "collect",
            name: "收藏",
          },
          enable: false,
        },
        {
          functionId: 104,
          function: {
            functionKey: "order",
            name: "排序",
          },
          enable: false,
        },
        {
          functionId: 13,
          function: {
            functionKey: "import",
            name: "导入",
          },
          enable: false,
        },
        {
          functionId: 14,
          function: {
            functionKey: "clear",
            name: "清空",
          },
          enable: true,
        },
        {
          functionId: 15,
          function: {
            functionKey: "addDays",
            name: "新增天数",
          },
          enable: false,
        },
        {
          functionId: 16,
          function: {
            functionKey: "deleteDays",
            name: "删除天数",
          },
          enable: false,
        },
        {
          functionId: 17,
          function: {
            functionKey: "tourDailyLocations",
            name: "每日地点",
          },
          enable: false,
        },
        {
          functionId: 18,
          function: {
            functionKey: "hideFirstTourInterval",
            name: "隐藏第一个行程间距",
          },
          enable: false,
        },
        {
          functionId: 19,
          function: {
            functionKey: "calculateTourInterval",
            name: "自动计算行程间距的起点和终点",
          },
          enable: false,
        },
        {
          functionId: 20,
          function: {
            functionKey: "tourScore",
            name: "行程评分",
          },
          enable: true,
        },
        {
          functionId: 22,
          function: {
            functionKey: "selfFundedActivity",
            name: "自费活动",
          },
          enable: true,
        },
        {
          functionId: 75,
          function: {
            functionKey: "tourDailyLocationsReadonly",
            name: "每日地点不自动反推，只读",
          },
          enable: false,
        },
        {
          functionId: 21,
          function: {
            functionKey: "showHotelDefaultOption",
            name: "显示默认酒店",
          },
          enable: true,
        },
        {
          functionId: 118,
          function: {
            functionKey: "hotelCheck",
            name: "酒店达标项校验",
          },
          enable: true,
        },
        {
          functionId: 708,
          function: {
            functionKey: "pending",
            name: "可待定",
          },
          enable: false,
        },
        {
          functionId: 715,
          function: {
            functionKey: "useCar",
            name: "当天用车",
          },
          enable: false,
        },
        {
          functionId: 848,
          function: {
            functionKey: "batchSet",
            name: "批量设置",
          },
          enable: true,
        },
      ],
      themes: [
        {
          themeId: 17,
          theme: {
            key: 43,
            name: "徒步",
          },
          fields: [
            {
              fieldId: 81,
              field: {
                fieldKey: "TrekAlternativeTransportation",
                name: "可替代徒步的交通",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 82,
              field: {
                fieldKey: "TrekMileage",
                name: "徒步里程",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 83,
              field: {
                fieldKey: "TrekTotalUpAltitude",
                name: "起点海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 84,
              field: {
                fieldKey: "TrekTotalDownAltitude",
                name: "终点海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 85,
              field: {
                fieldKey: "TrekMaximumAltitude",
                name: "途径最高海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 86,
              field: {
                fieldKey: "TrekEquipment",
                name: "所含装备",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "所含装备可选范围",
                  value: "1,2,3,4,5,6,7,8,9,10",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 87,
              field: {
                fieldKey: "TrekHeavy",
                name: "是否重装",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 88,
              field: {
                fieldKey: "TrekSupply",
                name: "途中是否有补给点",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 89,
              field: {
                fieldKey: "TrekGuide",
                name: "户外向导配置",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 90,
              field: {
                fieldKey: "TrekGuideProportion",
                name: "户外向导配比（向导：客人)",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "户外向导配比可选范围",
                  value: "7,6,5,4,3,2,1",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 91,
              field: {
                fieldKey: "TrekGuideQualification",
                name: "户外向导资质",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 200,
              field: {
                fieldKey: "PoiTagRange",
                name: "地点标签范围",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "地点标签范围",
                  value:
                    "2006,25831,65,24,11,703,25810,7,8,16,19,142,4841,20521,20549,20565,20572,28,32,140,602,20531,45,21,20,137,20571,20566,63,10,11,4836,17,703,147,148,755,37,25710,20631",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          enable: true,
        },
        {
          themeId: 18,
          theme: {
            key: 44,
            name: "登山",
          },
          fields: [
            {
              fieldId: 92,
              field: {
                fieldKey: "MountaineeringAlternativeTransportation",
                name: "可替代登山的交通",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 93,
              field: {
                fieldKey: "MountaineeringMileage",
                name: "登山里程",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 94,
              field: {
                fieldKey: "MountaineeringTotalUpAltitude",
                name: "起点海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 95,
              field: {
                fieldKey: "MountaineeringTotalDownAltitude",
                name: "终点海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 96,
              field: {
                fieldKey: "MountaineeringMaximumAltitude",
                name: "途径最高海拔",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 97,
              field: {
                fieldKey: "MountaineeringEquipment",
                name: "所含装备",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "所含装备可选范围",
                  value: "1,2,3,4,5,6,7,8,9,10",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 98,
              field: {
                fieldKey: "MountaineeringHeavy",
                name: "是否重装",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 99,
              field: {
                fieldKey: "MountaineeringSupply",
                name: "途中是否有补给点",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 100,
              field: {
                fieldKey: "MountaineeringGuide",
                name: "户外向导配置",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 101,
              field: {
                fieldKey: "MountaineeringGuideProportion",
                name: "户外向导配比（向导：客人)",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "户外向导配比可选范围",
                  value: "7,6,5,4,3,2,1",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 102,
              field: {
                fieldKey: "MountaineeringGuideQualification",
                name: "户外向导资质",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 201,
              field: {
                fieldKey: "PoiTagRange",
                name: "地点标签范围",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "地点标签范围",
                  value: "2006,24,20572",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          enable: true,
        },
        {
          themeId: 19,
          theme: {
            key: 31,
            name: "越野自驾",
          },
          fields: [
            {
              fieldId: 103,
              field: {
                fieldKey: "OffRoadSelfDrivingMileage",
                name: "驾驶里程",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 104,
              field: {
                fieldKey: "OffRoadSelfDrivingHighestAltitude",
                name: "最高海拔",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 105,
              field: {
                fieldKey: "OffRoadSelfDrivingLowestAltitude",
                name: "最低海拔",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
            {
              fieldId: 106,
              field: {
                fieldKey: "OffRoadSelfDrivingMaximumAltitudeDrop",
                name: "最大落差",
              },
              enable: false,
              ranges: null,
              require: false,
              show: null,
            },
          ],
          enable: false,
        },
        {
          themeId: 20,
          theme: {
            key: 1,
            name: "滑雪",
          },
          fields: [
            {
              fieldId: 107,
              field: {
                fieldKey: "SkiingTicketType",
                name: "雪票类型",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "雪票类型可选范围",
                  value: "1,2,3",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 108,
              field: {
                fieldKey: "SkiingTeaching",
                name: "滑雪教学",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "滑雪教学可选范围",
                  value: "1,2,3,4",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 109,
              field: {
                fieldKey: "SkiingCoachProportion",
                name: "教练配比(教练:客人)",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "教练配比可选范围",
                  value: "1,2,3,4",
                  enable: true,
                },
              ],
              require: true,
              show: null,
            },
            {
              fieldId: 110,
              field: {
                fieldKey: "SkiingTime",
                name: "教学时长",
              },
              enable: true,
              ranges: null,
              require: true,
              show: null,
            },
            {
              fieldId: 111,
              field: {
                fieldKey: "SkiingEquipment",
                name: "所含雪具",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "所含雪具可选范围",
                  value: "1,2,3,4,5,6,7,8",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
            {
              fieldId: 202,
              field: {
                fieldKey: "PoiTagRange",
                name: "地点标签范围",
              },
              enable: true,
              ranges: [
                {
                  rangeKey: "valueRange",
                  name: "地点标签范围",
                  value: "2011, 25821",
                  enable: true,
                },
              ],
              require: false,
              show: null,
            },
          ],
          enable: true,
        },
      ],
    },
    tourDailyDescriptions: [
      {
        tourDailyDescriptionId: null,
        orderDay: 1,
        dailyDescription: "d1",
        tourDailyLocations: [],
        tourDailyInfos: [
          {
            tourDailyInfoId: null,
            takeoffTime: {
              key: "",
              name: "14:00",
            },
            activeType: {
              key: 3,
              name: "景点",
            },
            distance: null,
            driveTime: null,
            transportation: {
              key: null,
              name: null,
            },
            directionType: {
              key: null,
              name: null,
            },
            takeTime: 60,
            description: null,
            productsOnSale: null,
            specialGift: null,
            warmTips: null,
            sort: 1,
            costInclude: null,
            tourDailyHotels: [],
            tourDailyTrains: [],
            tourDailyCar: {
              businessType: null,
              departureLocation: null,
              destinationLocation: null,
              airport: null,
              trainStation: null,
              pickUpLocation: null,
              dropOffLocation: null,
              cars: null,
            },
            tourDailyFlights: [],
            tourDailyPois: [
              {
                tourDailyPoiId: null,
                poi: {
                  poiId: 13228641,
                  poiName: "重庆两江游",
                  isPublished: true,
                  poiType: {
                    key: 66,
                    name: "活动",
                  },
                  district: {
                    districtId: 158,
                    districtName: "重庆",
                    districtType: "City",
                    parents: [
                      {
                        districtId: 110000,
                        districtName: "中国",
                        districtType: "Country",
                        parents: null,
                      },
                      {
                        districtId: 120001,
                        districtName: "亚洲",
                        districtType: "Continent",
                        parents: null,
                      },
                    ],
                  },
                  location: {
                    globalId: 4,
                    name: "重庆",
                    categoryId: 3,
                    type: "base",
                    code: null,
                    parents: null,
                  },
                  openTime: "全年 12:00-22:00开放",
                  address: "重庆市渝中区洪崖洞旅游客运码头",
                  minTakeTime: 0,
                  maxTakeTime: 0,
                  cost: null,
                  currency: {
                    currencyCode: null,
                  },
                  costUnit: {
                    key: 1,
                    name: "人",
                  },
                  redPoi: false,
                  mapType: null,
                  longitude: 106.582999,
                  latitude: 29.56859,
                  ggLongitude: 106.5765414,
                  ggLatitude: 29.5623781,
                  inMainLand: true,
                  tags: [
                    {
                      tagId: 7093,
                      tagName: "乘船游览",
                      tagType: 66,
                      tagLevel: 2,
                    },
                    {
                      tagId: 27,
                      tagName: "观光路线",
                      tagType: 66,
                      tagLevel: 1,
                    },
                  ],
                  inShoppingBlacklist: false,
                  inShoppingWhitelist: null,
                  childPoiIds: [98180287, 69571118],
                  parentPoiIds: null,
                  invaildInfoDto: {
                    poiId: null,
                    poiName: null,
                    poiStatus: null,
                    mergeToPoiId: null,
                    mergeToPoiName: null,
                    poiTempStartDate: null,
                    poiTempEndDate: null,
                  },
                  openTimeDetailDto: {
                    hasFormatTime: true,
                    openStatus: "0",
                    formatTimeDtos: [
                      {
                        rule: null,
                        openDateRange: [],
                        openWeekRange: ["1", "2", "3", "4", "5", "6", "7"],
                        openTimeRange: [],
                        allYear: true,
                        openAllDay: false,
                        closeAllDay: false,
                      },
                    ],
                  },
                  parentTags: [],
                  poiLocation: {
                    locationId: 454,
                    locationDistrictId: 2015198,
                    locationName: "Yuzhong District",
                  },
                  sightZones: [],
                  ticketType: {
                    key: 1,
                    name: "收费",
                  },
                  relateSystemTicket: {
                    key: "F",
                    name: null,
                  },
                },
                sort: 1,
                orFlag: true,
                suffixName: {
                  key: 5,
                  name: "含首道门票",
                },
                costInclude: {
                  key: "",
                  name: null,
                },
                images: [],
                refId: null,
                parentId: null,
                poiSelfFundedActivities: [],
                groupType: {
                  key: null,
                  name: null,
                },
                groupSort: null,
              },
            ],
            tourDailyDinner: {
              tourDailyDinnerId: null,
              dinnerType: null,
              includeAdult: null,
              includeChild: null,
              costInclude: null,
              cost: null,
              currency: null,
              foodType: null,
              refId: null,
              parentId: null,
            },
            tourDailyThemes: [
              {
                tourDailyThemeId: null,
                sort: 1,
                theme: {
                  key: null,
                  name: null,
                },
                activityName: "",
                location: {
                  globalId: null,
                  name: null,
                  categoryId: null,
                  type: null,
                  code: null,
                  parents: null,
                },
                images: [],
                themeFields: [],
                refId: null,
                parentId: null,
              },
            ],
            tourDailyGather: null,
            tourDailyDismiss: null,
            tourDailyDistricts: null,
            refId: null,
            parentId: null,
            communication: null,
            customStatus: null,
          },
          {
            tourDailyInfoId: null,
            takeoffTime: {
              key: "",
              name: "20:00",
            },
            activeType: {
              key: 1,
              name: "酒店",
            },
            distance: null,
            driveTime: null,
            transportation: {
              key: null,
              name: null,
            },
            directionType: {
              key: null,
              name: null,
            },
            takeTime: null,
            description: null,
            productsOnSale: null,
            specialGift: null,
            warmTips: null,
            sort: 2,
            costInclude: true,
            tourDailyHotels: [
              {
                tourDailyHotelId: null,
                hotel: {
                  hotelId: 386932,
                  hotelName: "重庆喜来登大酒店",
                  hotelAddress: "南滨路78号",
                  hotelLevel: {
                    name: "豪华型",
                  },
                  hotelStar: {
                    value: 5,
                    name: "5星",
                    starType: 1,
                  },
                  district: {
                    districtId: 158,
                    districtName: "重庆",
                    districtType: "City",
                    parents: [
                      {
                        districtId: 110000,
                        districtName: "中国",
                        districtType: "Country",
                        parents: null,
                      },
                      {
                        districtId: 120001,
                        districtName: "亚洲",
                        districtType: "Continent",
                        parents: null,
                      },
                    ],
                  },
                  location: {
                    globalId: 4,
                    name: "重庆",
                    categoryId: 3,
                    type: "base",
                    code: null,
                    parents: null,
                  },
                  hotelRating: null,
                  hotelAreaRating: null,
                  hotelScore: 4.5,
                  active: true,
                  longitude: 106.593429,
                  latitude: 29.549337,
                  ggLongitude: "106.58692507783626",
                  ggLatitude: "29.543280784308493",
                  inMainLand: true,
                  biTag: {
                    goodHotel: "T",
                    mediumHotel: "F",
                  },
                },
                sort: 1,
                hotelType: {
                  key: 1,
                  name: "酒店",
                },
                images: [],
                refId: null,
                parentId: null,
              },
            ],
            tourDailyTrains: [],
            tourDailyCar: {
              businessType: null,
              departureLocation: null,
              destinationLocation: null,
              airport: null,
              trainStation: null,
              pickUpLocation: null,
              dropOffLocation: null,
              cars: null,
            },
            tourDailyFlights: [],
            tourDailyPois: [],
            tourDailyDinner: {
              tourDailyDinnerId: null,
              dinnerType: null,
              includeAdult: null,
              includeChild: null,
              costInclude: null,
              cost: null,
              currency: null,
              foodType: null,
              refId: null,
              parentId: null,
            },
            tourDailyThemes: [],
            tourDailyGather: null,
            tourDailyDismiss: null,
            tourDailyDistricts: null,
            refId: null,
            parentId: null,
            communication: null,
            customStatus: null,
          },
        ],
        refId: null,
        parentId: null,
        seaCruise: null,
        useCar: {
          key: "N",
          name: null,
        },
      },
      {
        tourDailyDescriptionId: null,
        orderDay: 2,
        dailyDescription: "d2",
        tourDailyLocations: [],
        tourDailyInfos: [
          {
            tourDailyInfoId: null,
            takeoffTime: {
              key: "",
              name: "10:00",
            },
            activeType: {
              key: 9,
              name: "其它",
            },
            distance: null,
            driveTime: null,
            transportation: {
              key: null,
              name: null,
            },
            directionType: {
              key: null,
              name: null,
            },
            takeTime: null,
            description: "回归自己的家",
            productsOnSale: null,
            specialGift: null,
            warmTips: null,
            sort: 1,
            costInclude: null,
            tourDailyHotels: [],
            tourDailyTrains: [],
            tourDailyCar: {
              businessType: null,
              departureLocation: null,
              destinationLocation: null,
              airport: null,
              trainStation: null,
              pickUpLocation: null,
              dropOffLocation: null,
              cars: null,
            },
            tourDailyFlights: [],
            tourDailyPois: [],
            tourDailyDinner: {
              tourDailyDinnerId: null,
              dinnerType: null,
              includeAdult: null,
              includeChild: null,
              costInclude: null,
              cost: null,
              currency: null,
              foodType: null,
              refId: null,
              parentId: null,
            },
            tourDailyThemes: [],
            tourDailyGather: null,
            tourDailyDismiss: null,
            tourDailyDistricts: null,
            refId: null,
            parentId: null,
            communication: null,
            customStatus: null,
          },
        ],
        refId: null,
        parentId: null,
        seaCruise: null,
        useCar: {
          key: "N",
          name: null,
        },
      },
    ],
    tourInfoFavorites: null,
    extensions: null,
  },
  businessData: "{}",
  contentType: "json",
};

// fetch("https://online.ctrip.com/restapi/soa2/15638/checkTourDaily?_fxpcqlniredt=09031056310749994837&_fxpcqlniredt=09031056310749994837", {
//     "headers": {
//       "accept": "*/*",
//       "accept-language": "zh-CN,zh;q=0.9",
//       "cache-control": "no-cache",
//       "content-type": "application/json",
//       "cookieorigin": "https://vbooking.ctrip.com",
//       "pragma": "no-cache",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "x-ctx-locale": "zh-CN",
//       "x-tt-core": "1"
//     },
//     "referrer": "https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=52514125&from=vbk",
//     "referrerPolicy": "no-referrer-when-downgrade",
//     "body": "{\"contentType\":\"json\",\"head\":{\"cid\":\"09031056310749994837\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"saveType\":8,\"tourDaily\":\"{\\\"tourDailyDescriptions\\\":[{\\\"tourDailyDescriptionId\\\":null,\\\"orderDay\\\":1,\\\"dailyDescription\\\":\\\"asd\\\",\\\"useCar\\\":{\\\"key\\\":\\\"N\\\"},\\\"tourDailyLocations\\\":[],\\\"tourDailyInfos\\\":[{\\\"activeType\\\":{\\\"key\\\":3,\\\"name\\\":\\\"景点\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeTime\\\":60,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"12:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[{\\\"tourDailyPoiId\\\":null,\\\"poi\\\":{\\\"poiId\\\":13228641,\\\"poiName\\\":\\\"重庆两江游\\\",\\\"poiType\\\":{\\\"key\\\":66,\\\"name\\\":\\\"活动\\\"},\\\"district\\\":{\\\"districtId\\\":158,\\\"districtName\\\":\\\"重庆\\\",\\\"districtType\\\":\\\"City\\\",\\\"parents\\\":[{\\\"districtId\\\":110000,\\\"districtName\\\":\\\"中国\\\",\\\"districtType\\\":\\\"Country\\\"},{\\\"districtId\\\":120001,\\\"districtName\\\":\\\"亚洲\\\",\\\"districtType\\\":\\\"Continent\\\"}]},\\\"location\\\":{\\\"globalId\\\":4,\\\"name\\\":\\\"重庆\\\",\\\"categoryId\\\":3,\\\"type\\\":\\\"base\\\"},\\\"openTime\\\":\\\"全年 12:00-22:00开放\\\",\\\"address\\\":\\\"重庆市渝中区洪崖洞旅游客运码头\\\",\\\"minTakeTime\\\":120,\\\"maxTakeTime\\\":60,\\\"currency\\\":{},\\\"redPoi\\\":false,\\\"costUnit\\\":{\\\"key\\\":1,\\\"name\\\":\\\"人\\\"},\\\"tags\\\":[{\\\"tagId\\\":7093,\\\"tagName\\\":\\\"乘船游览\\\",\\\"tagType\\\":66,\\\"tagLevel\\\":2},{\\\"tagId\\\":27,\\\"tagName\\\":\\\"观光路线\\\",\\\"tagType\\\":66,\\\"tagLevel\\\":1}],\\\"parentTags\\\":[],\\\"inShoppingBlacklist\\\":false,\\\"poiLocation\\\":{\\\"locationId\\\":454,\\\"locationDistrictId\\\":2015198,\\\"locationName\\\":\\\"Yuzhong District\\\"},\\\"sightZones\\\":[],\\\"invaildInfoDto\\\":{},\\\"openTimeDetailDto\\\":{\\\"hasFormatTime\\\":true,\\\"openStatus\\\":\\\"2\\\",\\\"formatTimeDtos\\\":[{\\\"openDateRange\\\":[],\\\"openWeekRange\\\":[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\",\\\"6\\\",\\\"7\\\"],\\\"openTimeRange\\\":[],\\\"allYear\\\":true,\\\"openAllDay\\\":false,\\\"closeAllDay\\\":false}]},\\\"relateSystemTicket\\\":{\\\"key\\\":\\\"F\\\"},\\\"isPublished\\\":true,\\\"longitude\\\":106.582999,\\\"latitude\\\":29.56859,\\\"ggLongitude\\\":106.5765414,\\\"ggLatitude\\\":29.5623781,\\\"inMainLand\\\":true,\\\"childPoiIds\\\":[98180287,69571118],\\\"ticketType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"收费\\\"},\\\"asyncValidateStatus\\\":\\\"success\\\"},\\\"sort\\\":1,\\\"orFlag\\\":true,\\\"suffixName\\\":{\\\"key\\\":5,\\\"name\\\":\\\"含首道门票\\\"},\\\"images\\\":[],\\\"costInclude\\\":{\\\"key\\\":\\\"\\\"},\\\"poiSelfFundedActivities\\\":[],\\\"groupType\\\":{}}],\\\"tourDailyThemes\\\":[{\\\"tourDailyThemeId\\\":null,\\\"theme\\\":{},\\\"activityName\\\":\\\"\\\",\\\"images\\\":[],\\\"location\\\":{},\\\"themeFields\\\":[],\\\"sort\\\":1}],\\\"tourDailyDinner\\\":{},\\\"sort\\\":1,\\\"directionType\\\":{}},{\\\"activeType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"20:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[{\\\"tourDailyHotelId\\\":null,\\\"hotel\\\":{\\\"hotelId\\\":396484,\\\"hotelName\\\":\\\"重庆富力艾美酒店\\\",\\\"hotelAddress\\\":\\\"江南大道10号万达广场内\\\",\\\"hotelLevel\\\":{\\\"name\\\":\\\"豪华型\\\"},\\\"hotelStar\\\":{\\\"value\\\":5,\\\"name\\\":\\\"5星\\\",\\\"starType\\\":1},\\\"location\\\":{\\\"globalId\\\":4,\\\"name\\\":\\\"重庆\\\",\\\"categoryId\\\":3,\\\"type\\\":\\\"base\\\"},\\\"hotelScore\\\":4.6,\\\"active\\\":true,\\\"district\\\":{\\\"districtId\\\":158,\\\"districtName\\\":\\\"重庆\\\",\\\"districtType\\\":\\\"City\\\",\\\"parents\\\":[{\\\"districtId\\\":110000,\\\"districtName\\\":\\\"中国\\\",\\\"districtType\\\":\\\"Country\\\"},{\\\"districtId\\\":120001,\\\"districtName\\\":\\\"亚洲\\\",\\\"districtType\\\":\\\"Continent\\\"}]},\\\"longitude\\\":106.57664625272,\\\"latitude\\\":29.530725267493,\\\"ggLongitude\\\":\\\"106.57021789830692\\\",\\\"ggLatitude\\\":\\\"29.524448314560995\\\",\\\"inMainLand\\\":true,\\\"biTag\\\":{\\\"goodHotel\\\":\\\"T\\\",\\\"mediumHotel\\\":\\\"F\\\"}},\\\"hotelType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"images\\\":[],\\\"sort\\\":1}],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[],\\\"tourDailyThemes\\\":[],\\\"tourDailyDinner\\\":{},\\\"sort\\\":2,\\\"costInclude\\\":true,\\\"directionType\\\":{}}],\\\"collapse\\\":false,\\\"mode\\\":\\\"view\\\"},{\\\"tourDailyDescriptionId\\\":null,\\\"orderDay\\\":2,\\\"dailyDescription\\\":\\\"2\\\",\\\"useCar\\\":{\\\"key\\\":\\\"N\\\"},\\\"tourDailyLocations\\\":[],\\\"tourDailyInfos\\\":[{\\\"activeType\\\":{\\\"key\\\":9,\\\"name\\\":\\\"其它\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeTime\\\":0,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"12:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[],\\\"tourDailyThemes\\\":[],\\\"tourDailyDinner\\\":{},\\\"sort\\\":1,\\\"description\\\":\\\"返程\\\",\\\"directionType\\\":{}}],\\\"collapse\\\":false,\\\"mode\\\":\\\"view\\\"}],\\\"template\\\":{\\\"templateId\\\":3,\\\"name\\\":\\\"跟团\\\",\\\"activeTypes\\\":[{\\\"activeTypeId\\\":17,\\\"fields\\\":[{\\\"fieldId\\\":233,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":234,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":235,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":236,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.cost\\\",\\\"name\\\":\\\"餐标\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":237,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.currency\\\",\\\"name\\\":\\\"餐标货币\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":238,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.includeAdult\\\",\\\"name\\\":\\\"成人是否含餐\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":239,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.includeChild\\\",\\\"name\\\":\\\"儿童是否含餐\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":240,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":241,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":242,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":243,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":244,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":245,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":246,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.dinnerType\\\",\\\"name\\\":\\\"餐饮类型\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"餐饮类型可选范围\\\",\\\"value\\\":\\\"B,L,S,T,M\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":247,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.costInclude\\\",\\\"name\\\":\\\"餐饮收费\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"餐饮收费可选范围\\\",\\\"value\\\":\\\"I,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1960,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.foodType\\\",\\\"name\\\":\\\"菜品品类\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":248,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":249,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":250,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":251,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"营业时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":252,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.cost\\\",\\\"name\\\":\\\"poi费用参考\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":253,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.currency\\\",\\\"name\\\":\\\"poi货币\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":254,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"poi图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7487,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7488,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12909,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":0,\\\"name\\\":\\\"餐饮\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":18,\\\"fields\\\":[{\\\"fieldId\\\":255,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":256,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":257,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":258,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":259,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":260,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":261,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":262,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":263,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.location\\\",\\\"name\\\":\\\"酒店城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":264,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyHotels.hotelType\\\",\\\"name\\\":\\\"酒店类别\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":265,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.hotelName\\\",\\\"name\\\":\\\"酒店名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义酒店\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统酒店\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"searchIdByGetHotelDetailById\\\",\\\"name\\\":\\\"搜索酒店id时是否走getHotelDetailById接口\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"自定义酒店名称长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":266,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.hotelAddress\\\",\\\"name\\\":\\\"酒店地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":267,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyHotels.images\\\",\\\"name\\\":\\\"酒店图片\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"图片数量上限\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":268,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":269,\\\"field\\\":{\\\"fieldKey\\\":\\\"costInclude\\\",\\\"name\\\":\\\"是否含酒店\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7489,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7490,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12916,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":19,\\\"fields\\\":[{\\\"fieldId\\\":270,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":271,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":272,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":273,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":274,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":275,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":276,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":277,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":278,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":279,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.flightNo\\\",\\\"name\\\":\\\"航班号\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":280,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.subClass\\\",\\\"name\\\":\\\"舱位\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":281,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":282,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureAirport\\\",\\\"name\\\":\\\"出发机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":283,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureTerminal\\\",\\\"name\\\":\\\"出发航站楼\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":284,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveTime\\\",\\\"name\\\":\\\"到达时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":285,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveAirport\\\",\\\"name\\\":\\\"到达机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":286,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveTerminal\\\",\\\"name\\\":\\\"到达航站楼\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":287,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.flightType\\\",\\\"name\\\":\\\"机型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":288,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.duration\\\",\\\"name\\\":\\\"飞行时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":289,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.directFlightFlag\\\",\\\"name\\\":\\\"直飞、中转标记\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":290,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.transferLocation\\\",\\\"name\\\":\\\"中转城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":291,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.transferTime\\\",\\\"name\\\":\\\"中转时长\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":292,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.stopLocations\\\",\\\"name\\\":\\\"经停城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":293,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.stopTime\\\",\\\"name\\\":\\\"经停时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":294,\\\"field\\\":{\\\"fieldKey\\\":\\\"addFlight\\\",\\\"name\\\":\\\"添加中转\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7491,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7492,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12923,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":2,\\\"name\\\":\\\"航班\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":20,\\\"fields\\\":[{\\\"fieldId\\\":295,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":296,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":297,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":298,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":299,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":300,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":301,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":302,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":303,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":304,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19,66,5\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":305,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,5,6,7,11\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"8\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":306,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"景点收费情况\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"景点收费可选范围\\\",\\\"value\\\":\\\"I,E,F,N\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":307,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":308,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.takeTime\\\",\\\"name\\\":\\\"推荐游览时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":309,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":310,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1371,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.activityName\\\",\\\"name\\\":\\\"自费项目\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1372,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.activityDesc\\\",\\\"name\\\":\\\"自费详情\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1373,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.useListingPrice\\\",\\\"name\\\":\\\"参考价格\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":311,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2126,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"43,44,1\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7493,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7494,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12930,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":15009,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.relateSystemTicket\\\",\\\"name\\\":\\\"关联系统门票\\\"},\\\"enable\\\":false,\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":3,\\\"name\\\":\\\"景点\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":21,\\\"fields\\\":[{\\\"fieldId\\\":312,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":313,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":314,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":315,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":316,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":317,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":318,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":319,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":320,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":321,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"5\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":322,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":323,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":324,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":325,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":326,\\\"field\\\":{\\\"fieldKey\\\":\\\"productsOnSale\\\",\\\"name\\\":\\\"营业产品\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"100\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7495,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7496,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12937,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":4,\\\"name\\\":\\\"购物\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":22,\\\"fields\\\":[{\\\"fieldId\\\":327,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":328,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":329,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":330,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":331,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":332,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":333,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":334,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":335,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":336,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,66,5,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":337,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"8\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":338,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"景点收费情况\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":339,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":340,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.takeTime\\\",\\\"name\\\":\\\"推荐游览时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":341,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":342,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":343,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12944,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":7,\\\"name\\\":\\\"自由活动\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":23,\\\"fields\\\":[{\\\"fieldId\\\":344,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":345,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":346,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1961,\\\"field\\\":{\\\"fieldKey\\\":\\\"directionType\\\",\\\"name\\\":\\\"方向\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1962,\\\"field\\\":{\\\"fieldKey\\\":\\\"targetPoi\\\",\\\"name\\\":\\\"目的地\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":347,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":348,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":349,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"min\\\",\\\"name\\\":\\\"最低时长限制\\\",\\\"value\\\":\\\"0\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":350,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":351,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":352,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12951,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":8,\\\"name\\\":\\\"交通\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":24,\\\"fields\\\":[{\\\"fieldId\\\":353,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":354,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":355,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":356,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":357,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":358,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":359,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":360,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":361,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12958,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":9,\\\"name\\\":\\\"其他\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":25,\\\"fields\\\":[{\\\"fieldId\\\":362,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":363,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":364,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":365,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":366,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":367,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":368,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":369,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":370,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":12965,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":10,\\\"name\\\":\\\"课程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":26,\\\"fields\\\":[{\\\"fieldId\\\":371,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":372,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":373,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":374,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":375,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":376,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":377,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":378,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":379,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":12972,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":11,\\\"name\\\":\\\"活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":27,\\\"fields\\\":[{\\\"fieldId\\\":380,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":381,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":382,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":383,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":384,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":385,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":386,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":387,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":388,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.addTheme\\\",\\\"name\\\":\\\"添加多主题\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":389,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"活动类型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":390,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.location\\\",\\\"name\\\":\\\"地点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":391,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":392,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":393,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":394,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":395,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1963,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.activityName\\\",\\\"name\\\":\\\"活动名称\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"100\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7497,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7498,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12979,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":12,\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":28,\\\"fields\\\":[{\\\"fieldId\\\":396,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":397,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":398,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":399,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":400,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":401,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":402,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":403,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.trainNo\\\",\\\"name\\\":\\\"车次号\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":404,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.trainType\\\",\\\"name\\\":\\\"车型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":405,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.departureStation\\\",\\\"name\\\":\\\"出发站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":406,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.arriveStation\\\",\\\"name\\\":\\\"到达站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":407,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.departureTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":408,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.arriveTime\\\",\\\"name\\\":\\\"到达时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":409,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.seatClass\\\",\\\"name\\\":\\\"坐席\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"坐席可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":410,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":7499,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7500,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12986,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":14,\\\"name\\\":\\\"火车\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":29,\\\"fields\\\":[{\\\"fieldId\\\":411,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":412,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":413,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":414,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":415,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":416,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":417,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":418,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.model\\\",\\\"name\\\":\\\"车型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"车型可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":419,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.businessType\\\",\\\"name\\\":\\\"服务类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":420,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.departureLocation\\\",\\\"name\\\":\\\"出发城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":421,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.destinationLocation\\\",\\\"name\\\":\\\"到达城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1385,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.airport\\\",\\\"name\\\":\\\"机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1386,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.trainStation\\\",\\\"name\\\":\\\"火车站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1387,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.pickUpLocation\\\",\\\"name\\\":\\\"上车点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1388,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.dropOffLocation\\\",\\\"name\\\":\\\"下车点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":422,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.seatCount\\\",\\\"name\\\":\\\"座位数\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":423,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.baggageCount\\\",\\\"name\\\":\\\"行李数\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":424,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":425,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.takeTime\\\",\\\"name\\\":\\\"时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":426,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":7501,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7502,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12993,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":15,\\\"name\\\":\\\"用车\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":134,\\\"fields\\\":[{\\\"fieldId\\\":1964,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1965,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"集合时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1966,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.gatherMode\\\",\\\"name\\\":\\\"集合方式\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1967,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.pickUpRange\\\",\\\"name\\\":\\\"上门范围\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"50\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1968,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.overRangeType\\\",\\\"name\\\":\\\"超范围说明类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1969,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.overRangeDesc\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1970,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"占用时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1971,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"1000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1972,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1973,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":13000,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":19,\\\"name\\\":\\\"集合\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":135,\\\"fields\\\":[{\\\"fieldId\\\":1974,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1975,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"返程时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1976,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.dismissMode\\\",\\\"name\\\":\\\"散团方式\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1977,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":1978,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1979,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1980,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.sendBackRange\\\",\\\"name\\\":\\\"送回范围\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"50\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1981,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.rangeTemplateId\\\",\\\"name\\\":\\\"接送范围模板\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1982,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.overRangeType\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1983,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.overRangeDesc\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1984,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"占用时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1985,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"1000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13007,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":20,\\\"name\\\":\\\"返程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":136,\\\"fields\\\":[{\\\"fieldId\\\":1986,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1987,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1988,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"活动时长\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"min\\\",\\\"name\\\":\\\"最低时长限制\\\",\\\"value\\\":\\\"0\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1989,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.groupType\\\",\\\"name\\\":\\\"活动类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1990,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1991,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1992,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"费用是否包含\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"活动景点收费可选范围\\\",\\\"value\\\":\\\"I,E,N\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2127,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"4\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1993,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.cost\\\",\\\"name\\\":\\\"poi费用参考\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1994,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.costUnit\\\",\\\"name\\\":\\\"费用单位\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1995,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1996,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2176,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29.30,31,32,33,34,35\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13014,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":21,\\\"name\\\":\\\"游玩活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":137,\\\"fields\\\":[{\\\"fieldId\\\":1997,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1998,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"结束时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1999,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"详细说明默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13021,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":22,\\\"name\\\":\\\"结束旅程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":799,\\\"fields\\\":[{\\\"fieldId\\\":13028,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":13035,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":23,\\\"name\\\":\\\"住宿\\\"},\\\"enable\\\":false}],\\\"functions\\\":[{\\\"functionId\\\":107,\\\"function\\\":{\\\"functionKey\\\":\\\"collect\\\",\\\"name\\\":\\\"收藏\\\"},\\\"enable\\\":false},{\\\"functionId\\\":104,\\\"function\\\":{\\\"functionKey\\\":\\\"order\\\",\\\"name\\\":\\\"排序\\\"},\\\"enable\\\":false},{\\\"functionId\\\":13,\\\"function\\\":{\\\"functionKey\\\":\\\"import\\\",\\\"name\\\":\\\"导入\\\"},\\\"enable\\\":false},{\\\"functionId\\\":14,\\\"function\\\":{\\\"functionKey\\\":\\\"clear\\\",\\\"name\\\":\\\"清空\\\"},\\\"enable\\\":true},{\\\"functionId\\\":15,\\\"function\\\":{\\\"functionKey\\\":\\\"addDays\\\",\\\"name\\\":\\\"新增天数\\\"},\\\"enable\\\":false},{\\\"functionId\\\":16,\\\"function\\\":{\\\"functionKey\\\":\\\"deleteDays\\\",\\\"name\\\":\\\"删除天数\\\"},\\\"enable\\\":false},{\\\"functionId\\\":17,\\\"function\\\":{\\\"functionKey\\\":\\\"tourDailyLocations\\\",\\\"name\\\":\\\"每日地点\\\"},\\\"enable\\\":false},{\\\"functionId\\\":18,\\\"function\\\":{\\\"functionKey\\\":\\\"hideFirstTourInterval\\\",\\\"name\\\":\\\"隐藏第一个行程间距\\\"},\\\"enable\\\":false},{\\\"functionId\\\":19,\\\"function\\\":{\\\"functionKey\\\":\\\"calculateTourInterval\\\",\\\"name\\\":\\\"自动计算行程间距的起点和终点\\\"},\\\"enable\\\":false},{\\\"functionId\\\":20,\\\"function\\\":{\\\"functionKey\\\":\\\"tourScore\\\",\\\"name\\\":\\\"行程评分\\\"},\\\"enable\\\":true},{\\\"functionId\\\":22,\\\"function\\\":{\\\"functionKey\\\":\\\"selfFundedActivity\\\",\\\"name\\\":\\\"自费活动\\\"},\\\"enable\\\":true},{\\\"functionId\\\":75,\\\"function\\\":{\\\"functionKey\\\":\\\"tourDailyLocationsReadonly\\\",\\\"name\\\":\\\"每日地点不自动反推，只读\\\"},\\\"enable\\\":false},{\\\"functionId\\\":21,\\\"function\\\":{\\\"functionKey\\\":\\\"showHotelDefaultOption\\\",\\\"name\\\":\\\"显示默认酒店\\\"},\\\"enable\\\":true},{\\\"functionId\\\":118,\\\"function\\\":{\\\"functionKey\\\":\\\"hotelCheck\\\",\\\"name\\\":\\\"酒店达标项校验\\\"},\\\"enable\\\":true},{\\\"functionId\\\":708,\\\"function\\\":{\\\"functionKey\\\":\\\"pending\\\",\\\"name\\\":\\\"可待定\\\"},\\\"enable\\\":false},{\\\"functionId\\\":715,\\\"function\\\":{\\\"functionKey\\\":\\\"useCar\\\",\\\"name\\\":\\\"当天用车\\\"},\\\"enable\\\":false},{\\\"functionId\\\":848,\\\"function\\\":{\\\"functionKey\\\":\\\"batchSet\\\",\\\"name\\\":\\\"批量设置\\\"},\\\"enable\\\":true}],\\\"themes\\\":[{\\\"themeId\\\":17,\\\"theme\\\":{\\\"key\\\":43,\\\"name\\\":\\\"徒步\\\"},\\\"fields\\\":[{\\\"fieldId\\\":81,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekAlternativeTransportation\\\",\\\"name\\\":\\\"可替代徒步的交通\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":82,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekMileage\\\",\\\"name\\\":\\\"徒步里程\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":83,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekTotalUpAltitude\\\",\\\"name\\\":\\\"起点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":84,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekTotalDownAltitude\\\",\\\"name\\\":\\\"终点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":85,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekMaximumAltitude\\\",\\\"name\\\":\\\"途径最高海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":86,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekEquipment\\\",\\\"name\\\":\\\"所含装备\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含装备可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":87,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekHeavy\\\",\\\"name\\\":\\\"是否重装\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":88,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekSupply\\\",\\\"name\\\":\\\"途中是否有补给点\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":89,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuide\\\",\\\"name\\\":\\\"户外向导配置\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":90,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuideProportion\\\",\\\"name\\\":\\\"户外向导配比（向导：客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"户外向导配比可选范围\\\",\\\"value\\\":\\\"7,6,5,4,3,2,1\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":91,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuideQualification\\\",\\\"name\\\":\\\"户外向导资质\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":200,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2006,25831,65,24,11,703,25810,7,8,16,19,142,4841,20521,20549,20565,20572,28,32,140,602,20531,45,21,20,137,20571,20566,63,10,11,4836,17,703,147,148,755,37,25710,20631\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true},{\\\"themeId\\\":18,\\\"theme\\\":{\\\"key\\\":44,\\\"name\\\":\\\"登山\\\"},\\\"fields\\\":[{\\\"fieldId\\\":92,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringAlternativeTransportation\\\",\\\"name\\\":\\\"可替代登山的交通\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":93,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringMileage\\\",\\\"name\\\":\\\"登山里程\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":94,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringTotalUpAltitude\\\",\\\"name\\\":\\\"起点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":95,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringTotalDownAltitude\\\",\\\"name\\\":\\\"终点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":96,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringMaximumAltitude\\\",\\\"name\\\":\\\"途径最高海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":97,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringEquipment\\\",\\\"name\\\":\\\"所含装备\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含装备可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":98,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringHeavy\\\",\\\"name\\\":\\\"是否重装\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":99,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringSupply\\\",\\\"name\\\":\\\"途中是否有补给点\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":100,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuide\\\",\\\"name\\\":\\\"户外向导配置\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":101,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuideProportion\\\",\\\"name\\\":\\\"户外向导配比（向导：客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"户外向导配比可选范围\\\",\\\"value\\\":\\\"7,6,5,4,3,2,1\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":102,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuideQualification\\\",\\\"name\\\":\\\"户外向导资质\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":201,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2006,24,20572\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true},{\\\"themeId\\\":19,\\\"theme\\\":{\\\"key\\\":31,\\\"name\\\":\\\"越野自驾\\\"},\\\"fields\\\":[{\\\"fieldId\\\":103,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingMileage\\\",\\\"name\\\":\\\"驾驶里程\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":104,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingHighestAltitude\\\",\\\"name\\\":\\\"最高海拔\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":105,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingLowestAltitude\\\",\\\"name\\\":\\\"最低海拔\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":106,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingMaximumAltitudeDrop\\\",\\\"name\\\":\\\"最大落差\\\"},\\\"enable\\\":false,\\\"require\\\":false}],\\\"enable\\\":false},{\\\"themeId\\\":20,\\\"theme\\\":{\\\"key\\\":1,\\\"name\\\":\\\"滑雪\\\"},\\\"fields\\\":[{\\\"fieldId\\\":107,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTicketType\\\",\\\"name\\\":\\\"雪票类型\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"雪票类型可选范围\\\",\\\"value\\\":\\\"1,2,3\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":108,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTeaching\\\",\\\"name\\\":\\\"滑雪教学\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"滑雪教学可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":109,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingCoachProportion\\\",\\\"name\\\":\\\"教练配比(教练:客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"教练配比可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":110,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTime\\\",\\\"name\\\":\\\"教学时长\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":111,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingEquipment\\\",\\\"name\\\":\\\"所含雪具\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含雪具可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":202,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2011, 25821\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true}]},\\\"tourInfoId\\\":0,\\\"days\\\":2,\\\"inputLocale\\\":\\\"zh-CN\\\",\\\"tourInfoScores\\\":[],\\\"fromTourInfoId\\\":0,\\\"aggregateScore\\\":0,\\\"isModify\\\":true}\",\"productTourInfo\":{\"main\":true,\"tourInfoId\":0,\"productId\":\"52514125\",\"sort\":0,\"isNew\":true}}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "include"
//   });

//   fetch("https://online.ctrip.com/restapi/soa2/15638/checkTourDaily?_fxpcqlniredt=09031056310749994837&_fxpcqlniredt=09031056310749994837", {
//     "headers": {
//       "accept": "*/*",
//       "accept-language": "zh-CN,zh;q=0.9",
//       "cache-control": "no-cache",
//       "content-type": "application/json",
//       "cookieorigin": "https://vbooking.ctrip.com",
//       "pragma": "no-cache",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "x-ctx-locale": "zh-CN",
//       "x-tt-core": "1"
//     },
//     "referrer": "https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=52514125&from=vbk",
//     "referrerPolicy": "no-referrer-when-downgrade",
//     "body": "{\"contentType\":\"json\",\"head\":{\"cid\":\"09031056310749994837\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"saveType\":3,\"tourDaily\":\"{\\\"tourDailyDescriptions\\\":[{\\\"tourDailyDescriptionId\\\":null,\\\"orderDay\\\":1,\\\"dailyDescription\\\":\\\"asd\\\",\\\"useCar\\\":{\\\"key\\\":\\\"N\\\"},\\\"tourDailyLocations\\\":[],\\\"tourDailyInfos\\\":[{\\\"activeType\\\":{\\\"key\\\":3,\\\"name\\\":\\\"景点\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeTime\\\":60,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"12:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[{\\\"tourDailyPoiId\\\":null,\\\"poi\\\":{\\\"poiId\\\":13228641,\\\"poiName\\\":\\\"重庆两江游\\\",\\\"poiType\\\":{\\\"key\\\":66,\\\"name\\\":\\\"活动\\\"},\\\"district\\\":{\\\"districtId\\\":158,\\\"districtName\\\":\\\"重庆\\\",\\\"districtType\\\":\\\"City\\\",\\\"parents\\\":[{\\\"districtId\\\":110000,\\\"districtName\\\":\\\"中国\\\",\\\"districtType\\\":\\\"Country\\\"},{\\\"districtId\\\":120001,\\\"districtName\\\":\\\"亚洲\\\",\\\"districtType\\\":\\\"Continent\\\"}]},\\\"location\\\":{\\\"globalId\\\":4,\\\"name\\\":\\\"重庆\\\",\\\"categoryId\\\":3,\\\"type\\\":\\\"base\\\"},\\\"openTime\\\":\\\"全年 12:00-22:00开放\\\",\\\"address\\\":\\\"重庆市渝中区洪崖洞旅游客运码头\\\",\\\"minTakeTime\\\":120,\\\"maxTakeTime\\\":60,\\\"currency\\\":{},\\\"redPoi\\\":false,\\\"costUnit\\\":{\\\"key\\\":1,\\\"name\\\":\\\"人\\\"},\\\"tags\\\":[{\\\"tagId\\\":7093,\\\"tagName\\\":\\\"乘船游览\\\",\\\"tagType\\\":66,\\\"tagLevel\\\":2},{\\\"tagId\\\":27,\\\"tagName\\\":\\\"观光路线\\\",\\\"tagType\\\":66,\\\"tagLevel\\\":1}],\\\"parentTags\\\":[],\\\"inShoppingBlacklist\\\":false,\\\"poiLocation\\\":{\\\"locationId\\\":454,\\\"locationDistrictId\\\":2015198,\\\"locationName\\\":\\\"Yuzhong District\\\"},\\\"sightZones\\\":[],\\\"invaildInfoDto\\\":{},\\\"openTimeDetailDto\\\":{\\\"hasFormatTime\\\":true,\\\"openStatus\\\":\\\"2\\\",\\\"formatTimeDtos\\\":[{\\\"openDateRange\\\":[],\\\"openWeekRange\\\":[\\\"1\\\",\\\"2\\\",\\\"3\\\",\\\"4\\\",\\\"5\\\",\\\"6\\\",\\\"7\\\"],\\\"openTimeRange\\\":[],\\\"allYear\\\":true,\\\"openAllDay\\\":false,\\\"closeAllDay\\\":false}]},\\\"relateSystemTicket\\\":{\\\"key\\\":\\\"F\\\"},\\\"isPublished\\\":true,\\\"longitude\\\":106.582999,\\\"latitude\\\":29.56859,\\\"ggLongitude\\\":106.5765414,\\\"ggLatitude\\\":29.5623781,\\\"inMainLand\\\":true,\\\"childPoiIds\\\":[98180287,69571118],\\\"ticketType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"收费\\\"},\\\"asyncValidateStatus\\\":\\\"success\\\"},\\\"sort\\\":1,\\\"orFlag\\\":true,\\\"suffixName\\\":{\\\"key\\\":5,\\\"name\\\":\\\"含首道门票\\\"},\\\"images\\\":[],\\\"costInclude\\\":{\\\"key\\\":\\\"\\\"},\\\"poiSelfFundedActivities\\\":[],\\\"groupType\\\":{}}],\\\"tourDailyThemes\\\":[{\\\"tourDailyThemeId\\\":null,\\\"theme\\\":{},\\\"activityName\\\":\\\"\\\",\\\"images\\\":[],\\\"location\\\":{},\\\"themeFields\\\":[],\\\"sort\\\":1}],\\\"tourDailyDinner\\\":{},\\\"sort\\\":1,\\\"directionType\\\":{}},{\\\"activeType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"20:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[{\\\"tourDailyHotelId\\\":null,\\\"hotel\\\":{\\\"hotelId\\\":396484,\\\"hotelName\\\":\\\"重庆富力艾美酒店\\\",\\\"hotelAddress\\\":\\\"江南大道10号万达广场内\\\",\\\"hotelLevel\\\":{\\\"name\\\":\\\"豪华型\\\"},\\\"hotelStar\\\":{\\\"value\\\":5,\\\"name\\\":\\\"5星\\\",\\\"starType\\\":1},\\\"location\\\":{\\\"globalId\\\":4,\\\"name\\\":\\\"重庆\\\",\\\"categoryId\\\":3,\\\"type\\\":\\\"base\\\"},\\\"hotelScore\\\":4.6,\\\"active\\\":true,\\\"district\\\":{\\\"districtId\\\":158,\\\"districtName\\\":\\\"重庆\\\",\\\"districtType\\\":\\\"City\\\",\\\"parents\\\":[{\\\"districtId\\\":110000,\\\"districtName\\\":\\\"中国\\\",\\\"districtType\\\":\\\"Country\\\"},{\\\"districtId\\\":120001,\\\"districtName\\\":\\\"亚洲\\\",\\\"districtType\\\":\\\"Continent\\\"}]},\\\"longitude\\\":106.57664625272,\\\"latitude\\\":29.530725267493,\\\"ggLongitude\\\":\\\"106.57021789830692\\\",\\\"ggLatitude\\\":\\\"29.524448314560995\\\",\\\"inMainLand\\\":true,\\\"biTag\\\":{\\\"goodHotel\\\":\\\"T\\\",\\\"mediumHotel\\\":\\\"F\\\"}},\\\"hotelType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"images\\\":[],\\\"sort\\\":1}],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[],\\\"tourDailyThemes\\\":[],\\\"tourDailyDinner\\\":{},\\\"sort\\\":2,\\\"costInclude\\\":true,\\\"directionType\\\":{}}],\\\"collapse\\\":false,\\\"mode\\\":\\\"view\\\"},{\\\"tourDailyDescriptionId\\\":null,\\\"orderDay\\\":2,\\\"dailyDescription\\\":\\\"2\\\",\\\"useCar\\\":{\\\"key\\\":\\\"N\\\"},\\\"tourDailyLocations\\\":[],\\\"tourDailyInfos\\\":[{\\\"activeType\\\":{\\\"key\\\":9,\\\"name\\\":\\\"其它\\\"},\\\"tourDailyInfoId\\\":null,\\\"takeTime\\\":0,\\\"takeoffTime\\\":{\\\"key\\\":\\\"\\\",\\\"name\\\":\\\"12:00\\\"},\\\"transportation\\\":{},\\\"tourDailyHotels\\\":[],\\\"tourDailyImages\\\":[],\\\"tourDailyTrains\\\":[],\\\"tourDailyCar\\\":{},\\\"tourDailyFlights\\\":[],\\\"tourDailyPois\\\":[],\\\"tourDailyThemes\\\":[],\\\"tourDailyDinner\\\":{},\\\"sort\\\":1,\\\"description\\\":\\\"返程\\\",\\\"directionType\\\":{}}],\\\"collapse\\\":false,\\\"mode\\\":\\\"view\\\"}],\\\"template\\\":{\\\"templateId\\\":3,\\\"name\\\":\\\"跟团\\\",\\\"activeTypes\\\":[{\\\"activeTypeId\\\":17,\\\"fields\\\":[{\\\"fieldId\\\":233,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":234,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":235,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":236,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.cost\\\",\\\"name\\\":\\\"餐标\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":237,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.currency\\\",\\\"name\\\":\\\"餐标货币\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":238,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.includeAdult\\\",\\\"name\\\":\\\"成人是否含餐\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":239,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.includeChild\\\",\\\"name\\\":\\\"儿童是否含餐\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":240,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":241,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":242,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":243,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":244,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":245,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":246,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.dinnerType\\\",\\\"name\\\":\\\"餐饮类型\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"餐饮类型可选范围\\\",\\\"value\\\":\\\"B,L,S,T,M\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":247,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.costInclude\\\",\\\"name\\\":\\\"餐饮收费\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"餐饮收费可选范围\\\",\\\"value\\\":\\\"I,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1960,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDinner.foodType\\\",\\\"name\\\":\\\"菜品品类\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":248,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":249,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":250,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":251,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"营业时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":252,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.cost\\\",\\\"name\\\":\\\"poi费用参考\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":253,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.currency\\\",\\\"name\\\":\\\"poi货币\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":254,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"poi图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7487,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7488,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12909,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":0,\\\"name\\\":\\\"餐饮\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":18,\\\"fields\\\":[{\\\"fieldId\\\":255,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":256,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":257,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":258,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":259,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":260,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":261,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":262,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":263,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.location\\\",\\\"name\\\":\\\"酒店城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":264,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyHotels.hotelType\\\",\\\"name\\\":\\\"酒店类别\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":265,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.hotelName\\\",\\\"name\\\":\\\"酒店名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义酒店\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统酒店\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"searchIdByGetHotelDetailById\\\",\\\"name\\\":\\\"搜索酒店id时是否走getHotelDetailById接口\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"自定义酒店名称长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":266,\\\"field\\\":{\\\"fieldKey\\\":\\\"hotel.hotelAddress\\\",\\\"name\\\":\\\"酒店地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":267,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyHotels.images\\\",\\\"name\\\":\\\"酒店图片\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"图片数量上限\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":268,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":269,\\\"field\\\":{\\\"fieldKey\\\":\\\"costInclude\\\",\\\"name\\\":\\\"是否含酒店\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7489,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7490,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12916,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":1,\\\"name\\\":\\\"酒店\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":19,\\\"fields\\\":[{\\\"fieldId\\\":270,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":271,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":272,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":273,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":274,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":275,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":276,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":277,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":278,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":279,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.flightNo\\\",\\\"name\\\":\\\"航班号\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":280,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.subClass\\\",\\\"name\\\":\\\"舱位\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":281,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":282,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureAirport\\\",\\\"name\\\":\\\"出发机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":283,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.departureTerminal\\\",\\\"name\\\":\\\"出发航站楼\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":284,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveTime\\\",\\\"name\\\":\\\"到达时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":285,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveAirport\\\",\\\"name\\\":\\\"到达机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":286,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.arriveTerminal\\\",\\\"name\\\":\\\"到达航站楼\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":287,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.flightType\\\",\\\"name\\\":\\\"机型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":288,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.duration\\\",\\\"name\\\":\\\"飞行时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":289,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.directFlightFlag\\\",\\\"name\\\":\\\"直飞、中转标记\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":290,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.transferLocation\\\",\\\"name\\\":\\\"中转城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":291,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.transferTime\\\",\\\"name\\\":\\\"中转时长\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":292,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.stopLocations\\\",\\\"name\\\":\\\"经停城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":293,\\\"field\\\":{\\\"fieldKey\\\":\\\"flight.stopTime\\\",\\\"name\\\":\\\"经停时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":294,\\\"field\\\":{\\\"fieldKey\\\":\\\"addFlight\\\",\\\"name\\\":\\\"添加中转\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":7491,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7492,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12923,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":2,\\\"name\\\":\\\"航班\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":20,\\\"fields\\\":[{\\\"fieldId\\\":295,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":296,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":297,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":298,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":299,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":300,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":301,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":302,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":303,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":304,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19,66,5\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":305,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,5,6,7,11\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"8\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":306,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"景点收费情况\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"景点收费可选范围\\\",\\\"value\\\":\\\"I,E,F,N\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":307,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":308,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.takeTime\\\",\\\"name\\\":\\\"推荐游览时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":309,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":310,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1371,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.activityName\\\",\\\"name\\\":\\\"自费项目\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1372,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.activityDesc\\\",\\\"name\\\":\\\"自费详情\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1373,\\\"field\\\":{\\\"fieldKey\\\":\\\"selfFundedActivity.useListingPrice\\\",\\\"name\\\":\\\"参考价格\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":311,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2126,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"43,44,1\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7493,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7494,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12930,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":15009,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.relateSystemTicket\\\",\\\"name\\\":\\\"关联系统门票\\\"},\\\"enable\\\":false,\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":3,\\\"name\\\":\\\"景点\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":21,\\\"fields\\\":[{\\\"fieldId\\\":312,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":313,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":314,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":315,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":316,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":317,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":318,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":319,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":320,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":321,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"5\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":322,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":323,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":324,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":325,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":326,\\\"field\\\":{\\\"fieldKey\\\":\\\"productsOnSale\\\",\\\"name\\\":\\\"营业产品\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"100\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7495,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7496,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12937,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":4,\\\"name\\\":\\\"购物\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":22,\\\"fields\\\":[{\\\"fieldId\\\":327,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":328,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":329,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":330,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":331,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":332,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":333,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":334,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":335,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":336,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,66,5,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":337,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"8\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":338,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"景点收费情况\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":339,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.openTime\\\",\\\"name\\\":\\\"开放时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":340,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.takeTime\\\",\\\"name\\\":\\\"推荐游览时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":341,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":342,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":343,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12944,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":7,\\\"name\\\":\\\"自由活动\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":23,\\\"fields\\\":[{\\\"fieldId\\\":344,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":345,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":346,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1961,\\\"field\\\":{\\\"fieldKey\\\":\\\"directionType\\\",\\\"name\\\":\\\"方向\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1962,\\\"field\\\":{\\\"fieldKey\\\":\\\"targetPoi\\\",\\\"name\\\":\\\"目的地\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":347,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":348,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":349,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"min\\\",\\\"name\\\":\\\"最低时长限制\\\",\\\"value\\\":\\\"0\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":350,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":351,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":352,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12951,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":8,\\\"name\\\":\\\"交通\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":24,\\\"fields\\\":[{\\\"fieldId\\\":353,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":354,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":355,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":356,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":357,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":358,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":true,\\\"require\\\":false},{\\\"fieldId\\\":359,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":360,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":361,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"4000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":true},{\\\"fieldId\\\":12958,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":9,\\\"name\\\":\\\"其他\\\"},\\\"enable\\\":true},{\\\"activeTypeId\\\":25,\\\"fields\\\":[{\\\"fieldId\\\":362,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":363,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":364,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":365,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":366,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":367,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":368,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":369,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":370,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":12965,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":10,\\\"name\\\":\\\"课程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":26,\\\"fields\\\":[{\\\"fieldId\\\":371,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":372,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":373,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":374,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":375,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":376,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":377,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":378,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":379,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":12972,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":11,\\\"name\\\":\\\"活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":27,\\\"fields\\\":[{\\\"fieldId\\\":380,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":381,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"时间可选项\\\",\\\"value\\\":\\\"N,D,M,A,E\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":382,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":383,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":384,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":385,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":386,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":387,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":388,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.addTheme\\\",\\\"name\\\":\\\"添加多主题\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":389,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"活动类型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":390,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.location\\\",\\\"name\\\":\\\"地点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":391,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":392,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":393,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":394,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":395,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1963,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.activityName\\\",\\\"name\\\":\\\"活动名称\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"100\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7497,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7498,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12979,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":12,\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":28,\\\"fields\\\":[{\\\"fieldId\\\":396,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":397,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":398,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":399,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":400,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":401,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":402,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":403,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.trainNo\\\",\\\"name\\\":\\\"车次号\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":404,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.trainType\\\",\\\"name\\\":\\\"车型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":405,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.departureStation\\\",\\\"name\\\":\\\"出发站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":406,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.arriveStation\\\",\\\"name\\\":\\\"到达站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":407,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.departureTime\\\",\\\"name\\\":\\\"出发时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":408,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.arriveTime\\\",\\\"name\\\":\\\"到达时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":409,\\\"field\\\":{\\\"fieldKey\\\":\\\"train.seatClass\\\",\\\"name\\\":\\\"坐席\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"坐席可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":410,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":7499,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7500,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12986,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":14,\\\"name\\\":\\\"火车\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":29,\\\"fields\\\":[{\\\"fieldId\\\":411,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":412,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":413,\\\"field\\\":{\\\"fieldKey\\\":\\\"driveTime\\\",\\\"name\\\":\\\"行驶时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":414,\\\"field\\\":{\\\"fieldKey\\\":\\\"distance\\\",\\\"name\\\":\\\"距离\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":415,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"花费时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":416,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDeparture\\\",\\\"name\\\":\\\"起点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":417,\\\"field\\\":{\\\"fieldKey\\\":\\\"intervalDestination\\\",\\\"name\\\":\\\"终点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":418,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.model\\\",\\\"name\\\":\\\"车型\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"车型可选范围\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":419,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.businessType\\\",\\\"name\\\":\\\"服务类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":420,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.departureLocation\\\",\\\"name\\\":\\\"出发城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":421,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.destinationLocation\\\",\\\"name\\\":\\\"到达城市\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1385,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.airport\\\",\\\"name\\\":\\\"机场\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1386,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.trainStation\\\",\\\"name\\\":\\\"火车站\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1387,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.pickUpLocation\\\",\\\"name\\\":\\\"上车点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1388,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyCar.dropOffLocation\\\",\\\"name\\\":\\\"下车点\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":422,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.seatCount\\\",\\\"name\\\":\\\"座位数\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":423,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.baggageCount\\\",\\\"name\\\":\\\"行李数\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":424,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.images\\\",\\\"name\\\":\\\"图片\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"max\\\",\\\"name\\\":\\\"最大数量\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":425,\\\"field\\\":{\\\"fieldKey\\\":\\\"cars.takeTime\\\",\\\"name\\\":\\\"时长\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":426,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":7501,\\\"field\\\":{\\\"fieldKey\\\":\\\"specialGift\\\",\\\"name\\\":\\\"特别赠送\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":7502,\\\"field\\\":{\\\"fieldKey\\\":\\\"warmTips\\\",\\\"name\\\":\\\"温馨提示\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":12993,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":15,\\\"name\\\":\\\"用车\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":134,\\\"fields\\\":[{\\\"fieldId\\\":1964,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1965,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"集合时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1966,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.gatherMode\\\",\\\"name\\\":\\\"集合方式\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1967,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.pickUpRange\\\",\\\"name\\\":\\\"上门范围\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"50\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1968,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.overRangeType\\\",\\\"name\\\":\\\"超范围说明类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1969,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyGather.overRangeDesc\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1970,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"占用时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1971,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"1000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1972,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1973,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":13000,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":19,\\\"name\\\":\\\"集合\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":135,\\\"fields\\\":[{\\\"fieldId\\\":1974,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1975,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"返程时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1976,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.dismissMode\\\",\\\"name\\\":\\\"散团方式\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1977,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"2\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"使用系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"showDefaultOptions\\\",\\\"name\\\":\\\"是否出默认选项\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":1978,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1979,\\\"field\\\":{\\\"fieldKey\\\":\\\"transportation\\\",\\\"name\\\":\\\"交通方式\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"交通方式支持项\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1980,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.sendBackRange\\\",\\\"name\\\":\\\"送回范围\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"50\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1981,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.rangeTemplateId\\\",\\\"name\\\":\\\"接送范围模板\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1982,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.overRangeType\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1983,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyDismiss.overRangeDesc\\\",\\\"name\\\":\\\"超范围说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1984,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"占用时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1985,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"1000\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13007,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":20,\\\"name\\\":\\\"返程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":136,\\\"fields\\\":[{\\\"fieldId\\\":1986,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1987,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1988,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeTime\\\",\\\"name\\\":\\\"活动时长\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"min\\\",\\\"name\\\":\\\"最低时长限制\\\",\\\"value\\\":\\\"0\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1989,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.groupType\\\",\\\"name\\\":\\\"活动类型\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1990,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.orFlag\\\",\\\"name\\\":\\\"poi与或\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"与、或\\\",\\\"value\\\":\\\"T,F\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1991,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3,19\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":1992,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.costInclude\\\",\\\"name\\\":\\\"费用是否包含\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"活动景点收费可选范围\\\",\\\"value\\\":\\\"I,E,N\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2127,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyPois.suffixName\\\",\\\"name\\\":\\\"poi后缀\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"suffixName可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"suffixName默认值\\\",\\\"value\\\":\\\"4\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1993,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.cost\\\",\\\"name\\\":\\\"poi费用参考\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":1994,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.costUnit\\\",\\\"name\\\":\\\"费用单位\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1995,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi.address\\\",\\\"name\\\":\\\"景点地址\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":1996,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":2176,\\\"field\\\":{\\\"fieldKey\\\":\\\"tourDailyThemes.theme\\\",\\\"name\\\":\\\"主题活动\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"主题可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29.30,31,32,33,34,35\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13014,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":21,\\\"name\\\":\\\"游玩活动\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":137,\\\"fields\\\":[{\\\"fieldId\\\":1997,\\\"field\\\":{\\\"fieldKey\\\":\\\"isCanCopy\\\",\\\"name\\\":\\\"是否可以被复制\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1998,\\\"field\\\":{\\\"fieldKey\\\":\\\"takeoffTime\\\",\\\"name\\\":\\\"结束时间\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":1999,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"详细说明\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"defaultValue\\\",\\\"name\\\":\\\"详细说明默认值\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false},{\\\"fieldId\\\":13021,\\\"field\\\":{\\\"fieldKey\\\":\\\"communication\\\",\\\"name\\\":\\\"待沟通内容\\\"},\\\"enable\\\":false,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"500\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":22,\\\"name\\\":\\\"结束旅程\\\"},\\\"enable\\\":false},{\\\"activeTypeId\\\":799,\\\"fields\\\":[{\\\"fieldId\\\":13028,\\\"field\\\":{\\\"fieldKey\\\":\\\"poi\\\",\\\"name\\\":\\\"poi名称\\\"},\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"isCanHand\\\",\\\"name\\\":\\\"自定义POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"isCanSystem\\\",\\\"name\\\":\\\"系统POI\\\",\\\"value\\\":\\\"T\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"poiTypes\\\",\\\"name\\\":\\\"poi类型\\\",\\\"value\\\":\\\"3\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":13035,\\\"field\\\":{\\\"fieldKey\\\":\\\"description\\\",\\\"name\\\":\\\"补充说明\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"maxLen\\\",\\\"name\\\":\\\"最大长度\\\",\\\"value\\\":\\\"200\\\",\\\"enable\\\":true},{\\\"rangeKey\\\":\\\"blackWord\\\",\\\"name\\\":\\\"限制词\\\",\\\"value\\\":\\\"\\\",\\\"enable\\\":false}],\\\"require\\\":false}],\\\"activeType\\\":{\\\"key\\\":23,\\\"name\\\":\\\"住宿\\\"},\\\"enable\\\":false}],\\\"functions\\\":[{\\\"functionId\\\":107,\\\"function\\\":{\\\"functionKey\\\":\\\"collect\\\",\\\"name\\\":\\\"收藏\\\"},\\\"enable\\\":false},{\\\"functionId\\\":104,\\\"function\\\":{\\\"functionKey\\\":\\\"order\\\",\\\"name\\\":\\\"排序\\\"},\\\"enable\\\":false},{\\\"functionId\\\":13,\\\"function\\\":{\\\"functionKey\\\":\\\"import\\\",\\\"name\\\":\\\"导入\\\"},\\\"enable\\\":false},{\\\"functionId\\\":14,\\\"function\\\":{\\\"functionKey\\\":\\\"clear\\\",\\\"name\\\":\\\"清空\\\"},\\\"enable\\\":true},{\\\"functionId\\\":15,\\\"function\\\":{\\\"functionKey\\\":\\\"addDays\\\",\\\"name\\\":\\\"新增天数\\\"},\\\"enable\\\":false},{\\\"functionId\\\":16,\\\"function\\\":{\\\"functionKey\\\":\\\"deleteDays\\\",\\\"name\\\":\\\"删除天数\\\"},\\\"enable\\\":false},{\\\"functionId\\\":17,\\\"function\\\":{\\\"functionKey\\\":\\\"tourDailyLocations\\\",\\\"name\\\":\\\"每日地点\\\"},\\\"enable\\\":false},{\\\"functionId\\\":18,\\\"function\\\":{\\\"functionKey\\\":\\\"hideFirstTourInterval\\\",\\\"name\\\":\\\"隐藏第一个行程间距\\\"},\\\"enable\\\":false},{\\\"functionId\\\":19,\\\"function\\\":{\\\"functionKey\\\":\\\"calculateTourInterval\\\",\\\"name\\\":\\\"自动计算行程间距的起点和终点\\\"},\\\"enable\\\":false},{\\\"functionId\\\":20,\\\"function\\\":{\\\"functionKey\\\":\\\"tourScore\\\",\\\"name\\\":\\\"行程评分\\\"},\\\"enable\\\":true},{\\\"functionId\\\":22,\\\"function\\\":{\\\"functionKey\\\":\\\"selfFundedActivity\\\",\\\"name\\\":\\\"自费活动\\\"},\\\"enable\\\":true},{\\\"functionId\\\":75,\\\"function\\\":{\\\"functionKey\\\":\\\"tourDailyLocationsReadonly\\\",\\\"name\\\":\\\"每日地点不自动反推，只读\\\"},\\\"enable\\\":false},{\\\"functionId\\\":21,\\\"function\\\":{\\\"functionKey\\\":\\\"showHotelDefaultOption\\\",\\\"name\\\":\\\"显示默认酒店\\\"},\\\"enable\\\":true},{\\\"functionId\\\":118,\\\"function\\\":{\\\"functionKey\\\":\\\"hotelCheck\\\",\\\"name\\\":\\\"酒店达标项校验\\\"},\\\"enable\\\":true},{\\\"functionId\\\":708,\\\"function\\\":{\\\"functionKey\\\":\\\"pending\\\",\\\"name\\\":\\\"可待定\\\"},\\\"enable\\\":false},{\\\"functionId\\\":715,\\\"function\\\":{\\\"functionKey\\\":\\\"useCar\\\",\\\"name\\\":\\\"当天用车\\\"},\\\"enable\\\":false},{\\\"functionId\\\":848,\\\"function\\\":{\\\"functionKey\\\":\\\"batchSet\\\",\\\"name\\\":\\\"批量设置\\\"},\\\"enable\\\":true}],\\\"themes\\\":[{\\\"themeId\\\":17,\\\"theme\\\":{\\\"key\\\":43,\\\"name\\\":\\\"徒步\\\"},\\\"fields\\\":[{\\\"fieldId\\\":81,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekAlternativeTransportation\\\",\\\"name\\\":\\\"可替代徒步的交通\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":82,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekMileage\\\",\\\"name\\\":\\\"徒步里程\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":83,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekTotalUpAltitude\\\",\\\"name\\\":\\\"起点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":84,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekTotalDownAltitude\\\",\\\"name\\\":\\\"终点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":85,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekMaximumAltitude\\\",\\\"name\\\":\\\"途径最高海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":86,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekEquipment\\\",\\\"name\\\":\\\"所含装备\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含装备可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":87,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekHeavy\\\",\\\"name\\\":\\\"是否重装\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":88,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekSupply\\\",\\\"name\\\":\\\"途中是否有补给点\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":89,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuide\\\",\\\"name\\\":\\\"户外向导配置\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":90,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuideProportion\\\",\\\"name\\\":\\\"户外向导配比（向导：客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"户外向导配比可选范围\\\",\\\"value\\\":\\\"7,6,5,4,3,2,1\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":91,\\\"field\\\":{\\\"fieldKey\\\":\\\"TrekGuideQualification\\\",\\\"name\\\":\\\"户外向导资质\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":200,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2006,25831,65,24,11,703,25810,7,8,16,19,142,4841,20521,20549,20565,20572,28,32,140,602,20531,45,21,20,137,20571,20566,63,10,11,4836,17,703,147,148,755,37,25710,20631\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true},{\\\"themeId\\\":18,\\\"theme\\\":{\\\"key\\\":44,\\\"name\\\":\\\"登山\\\"},\\\"fields\\\":[{\\\"fieldId\\\":92,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringAlternativeTransportation\\\",\\\"name\\\":\\\"可替代登山的交通\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":93,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringMileage\\\",\\\"name\\\":\\\"登山里程\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":94,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringTotalUpAltitude\\\",\\\"name\\\":\\\"起点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":95,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringTotalDownAltitude\\\",\\\"name\\\":\\\"终点海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":96,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringMaximumAltitude\\\",\\\"name\\\":\\\"途径最高海拔\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":97,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringEquipment\\\",\\\"name\\\":\\\"所含装备\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含装备可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8,9,10\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":98,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringHeavy\\\",\\\"name\\\":\\\"是否重装\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":99,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringSupply\\\",\\\"name\\\":\\\"途中是否有补给点\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":100,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuide\\\",\\\"name\\\":\\\"户外向导配置\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":101,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuideProportion\\\",\\\"name\\\":\\\"户外向导配比（向导：客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"户外向导配比可选范围\\\",\\\"value\\\":\\\"7,6,5,4,3,2,1\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":102,\\\"field\\\":{\\\"fieldKey\\\":\\\"MountaineeringGuideQualification\\\",\\\"name\\\":\\\"户外向导资质\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":201,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2006,24,20572\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true},{\\\"themeId\\\":19,\\\"theme\\\":{\\\"key\\\":31,\\\"name\\\":\\\"越野自驾\\\"},\\\"fields\\\":[{\\\"fieldId\\\":103,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingMileage\\\",\\\"name\\\":\\\"驾驶里程\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":104,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingHighestAltitude\\\",\\\"name\\\":\\\"最高海拔\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":105,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingLowestAltitude\\\",\\\"name\\\":\\\"最低海拔\\\"},\\\"enable\\\":false,\\\"require\\\":false},{\\\"fieldId\\\":106,\\\"field\\\":{\\\"fieldKey\\\":\\\"OffRoadSelfDrivingMaximumAltitudeDrop\\\",\\\"name\\\":\\\"最大落差\\\"},\\\"enable\\\":false,\\\"require\\\":false}],\\\"enable\\\":false},{\\\"themeId\\\":20,\\\"theme\\\":{\\\"key\\\":1,\\\"name\\\":\\\"滑雪\\\"},\\\"fields\\\":[{\\\"fieldId\\\":107,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTicketType\\\",\\\"name\\\":\\\"雪票类型\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"雪票类型可选范围\\\",\\\"value\\\":\\\"1,2,3\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":108,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTeaching\\\",\\\"name\\\":\\\"滑雪教学\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"滑雪教学可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":109,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingCoachProportion\\\",\\\"name\\\":\\\"教练配比(教练:客人)\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"教练配比可选范围\\\",\\\"value\\\":\\\"1,2,3,4\\\",\\\"enable\\\":true}],\\\"require\\\":true},{\\\"fieldId\\\":110,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingTime\\\",\\\"name\\\":\\\"教学时长\\\"},\\\"enable\\\":true,\\\"require\\\":true},{\\\"fieldId\\\":111,\\\"field\\\":{\\\"fieldKey\\\":\\\"SkiingEquipment\\\",\\\"name\\\":\\\"所含雪具\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"所含雪具可选范围\\\",\\\"value\\\":\\\"1,2,3,4,5,6,7,8\\\",\\\"enable\\\":true}],\\\"require\\\":false},{\\\"fieldId\\\":202,\\\"field\\\":{\\\"fieldKey\\\":\\\"PoiTagRange\\\",\\\"name\\\":\\\"地点标签范围\\\"},\\\"enable\\\":true,\\\"ranges\\\":[{\\\"rangeKey\\\":\\\"valueRange\\\",\\\"name\\\":\\\"地点标签范围\\\",\\\"value\\\":\\\"2011, 25821\\\",\\\"enable\\\":true}],\\\"require\\\":false}],\\\"enable\\\":true}]},\\\"tourInfoId\\\":0,\\\"days\\\":2,\\\"inputLocale\\\":\\\"zh-CN\\\",\\\"tourInfoScores\\\":[],\\\"fromTourInfoId\\\":0,\\\"aggregateScore\\\":0,\\\"isModify\\\":true}\",\"productTourInfo\":{\"main\":true,\"tourInfoId\":0,\"productId\":\"52514125\",\"sort\":0,\"isNew\":true}}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "include"
//   });


//   fetch("https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json", {
//     "headers": {
//       "accept": "*/*",
//       "accept-language": "zh-CN,zh;q=0.9",
//       "cache-control": "no-cache",
//       "content-type": "application/json;charset=UTF-8",
//       "cookieorigin": "https://vbooking.ctrip.com",
//       "pragma": "no-cache",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       "x-ctx-locale": "zh-CN",
//       "x-tt-core": "1"
//     },
//     "referrer": "https://vbooking.ctrip.com/ivbk/vendor/tourdays?productid=52514125&from=vbk",
//     "referrerPolicy": "no-referrer-when-downgrade",
//     "body": "{\"requestHeader\":{\"locale\":\"zh-CN\"},\"piCategoryId\":0,\"tourInfo\":{\"tourInfoId\":\"283276033108836445\",\"tourInfoName\":null,\"tourInfoDescription\":null,\"days\":2,\"referenceCount\":null,\"fromTourInfoId\":0,\"inputLocale\":\"zh-CN\",\"vendorId\":null,\"aggregateScore\":0,\"aggregateScoreAdvice\":null,\"tourInfoScores\":[],\"hotelCheckResults\":null,\"template\":{\"templateId\":3,\"name\":\"跟团\",\"activeTypes\":[{\"activeTypeId\":17,\"fields\":[{\"fieldId\":233,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":234,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":235,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":236,\"field\":{\"fieldKey\":\"tourDailyDinner.cost\",\"name\":\"餐标\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":237,\"field\":{\"fieldKey\":\"tourDailyDinner.currency\",\"name\":\"餐标货币\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":238,\"field\":{\"fieldKey\":\"tourDailyDinner.includeAdult\",\"name\":\"成人是否含餐\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":239,\"field\":{\"fieldKey\":\"tourDailyDinner.includeChild\",\"name\":\"儿童是否含餐\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":240,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":241,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":242,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":243,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":244,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":245,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":246,\"field\":{\"fieldKey\":\"tourDailyDinner.dinnerType\",\"name\":\"餐饮类型\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"餐饮类型可选范围\",\"value\":\"B,L,S,T,M\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":247,\"field\":{\"fieldKey\":\"tourDailyDinner.costInclude\",\"name\":\"餐饮收费\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"餐饮收费可选范围\",\"value\":\"I,E\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1960,\"field\":{\"fieldKey\":\"tourDailyDinner.foodType\",\"name\":\"菜品品类\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":248,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":249,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"2\",\"enable\":true},{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanSystem\",\"name\":\"使用系统POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"showDefaultOptions\",\"name\":\"是否出默认选项\",\"value\":\"T\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":250,\"field\":{\"fieldKey\":\"poi.address\",\"name\":\"地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":251,\"field\":{\"fieldKey\":\"poi.openTime\",\"name\":\"营业时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":252,\"field\":{\"fieldKey\":\"poi.cost\",\"name\":\"poi费用参考\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":253,\"field\":{\"fieldKey\":\"poi.currency\",\"name\":\"poi货币\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":254,\"field\":{\"fieldKey\":\"tourDailyPois.images\",\"name\":\"poi图片\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":7487,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7488,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12909,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":0,\"name\":\"餐饮\"},\"enable\":true},{\"activeTypeId\":18,\"fields\":[{\"fieldId\":255,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":256,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":257,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":258,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":259,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":260,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":261,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":262,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":263,\"field\":{\"fieldKey\":\"hotel.location\",\"name\":\"酒店城市\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":264,\"field\":{\"fieldKey\":\"tourDailyHotels.hotelType\",\"name\":\"酒店类别\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":265,\"field\":{\"fieldKey\":\"hotel.hotelName\",\"name\":\"酒店名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义酒店\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统酒店\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"showDefaultOptions\",\"name\":\"是否出默认选项\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"searchIdByGetHotelDetailById\",\"name\":\"搜索酒店id时是否走getHotelDetailById接口\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"自定义酒店名称长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":266,\"field\":{\"fieldKey\":\"hotel.hotelAddress\",\"name\":\"酒店地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":267,\"field\":{\"fieldKey\":\"tourDailyHotels.images\",\"name\":\"酒店图片\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"max\",\"name\":\"图片数量上限\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":268,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":269,\"field\":{\"fieldKey\":\"costInclude\",\"name\":\"是否含酒店\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":7489,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7490,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12916,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":1,\"name\":\"酒店\"},\"enable\":true},{\"activeTypeId\":19,\"fields\":[{\"fieldId\":270,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":271,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":272,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":273,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":274,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":275,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":276,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":277,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":278,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":279,\"field\":{\"fieldKey\":\"flight.flightNo\",\"name\":\"航班号\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":280,\"field\":{\"fieldKey\":\"flight.subClass\",\"name\":\"舱位\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":281,\"field\":{\"fieldKey\":\"flight.departureTime\",\"name\":\"出发时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":282,\"field\":{\"fieldKey\":\"flight.departureAirport\",\"name\":\"出发机场\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":283,\"field\":{\"fieldKey\":\"flight.departureTerminal\",\"name\":\"出发航站楼\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":284,\"field\":{\"fieldKey\":\"flight.arriveTime\",\"name\":\"到达时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":285,\"field\":{\"fieldKey\":\"flight.arriveAirport\",\"name\":\"到达机场\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":286,\"field\":{\"fieldKey\":\"flight.arriveTerminal\",\"name\":\"到达航站楼\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":287,\"field\":{\"fieldKey\":\"flight.flightType\",\"name\":\"机型\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":288,\"field\":{\"fieldKey\":\"flight.duration\",\"name\":\"飞行时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":289,\"field\":{\"fieldKey\":\"flight.directFlightFlag\",\"name\":\"直飞、中转标记\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":290,\"field\":{\"fieldKey\":\"flight.transferLocation\",\"name\":\"中转城市\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":291,\"field\":{\"fieldKey\":\"flight.transferTime\",\"name\":\"中转时长\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":292,\"field\":{\"fieldKey\":\"flight.stopLocations\",\"name\":\"经停城市\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":293,\"field\":{\"fieldKey\":\"flight.stopTime\",\"name\":\"经停时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":294,\"field\":{\"fieldKey\":\"addFlight\",\"name\":\"添加中转\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":7491,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7492,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12923,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":2,\"name\":\"航班\"},\"enable\":true},{\"activeTypeId\":20,\"fields\":[{\"fieldId\":295,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":296,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":297,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":298,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":299,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":300,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":301,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":302,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":303,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T,F\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":304,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"3,19,66,5\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":305,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"1,2,3,5,6,7,11\",\"enable\":true},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"8\",\"enable\":false}],\"require\":true,\"show\":null},{\"fieldId\":306,\"field\":{\"fieldKey\":\"tourDailyPois.costInclude\",\"name\":\"景点收费情况\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"景点收费可选范围\",\"value\":\"I,E,F,N\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":307,\"field\":{\"fieldKey\":\"poi.openTime\",\"name\":\"开放时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":308,\"field\":{\"fieldKey\":\"poi.takeTime\",\"name\":\"推荐游览时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":309,\"field\":{\"fieldKey\":\"poi.address\",\"name\":\"景点地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":310,\"field\":{\"fieldKey\":\"tourDailyPois.images\",\"name\":\"图片\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1371,\"field\":{\"fieldKey\":\"selfFundedActivity.activityName\",\"name\":\"自费项目\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":1372,\"field\":{\"fieldKey\":\"selfFundedActivity.activityDesc\",\"name\":\"自费详情\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":1373,\"field\":{\"fieldKey\":\"selfFundedActivity.useListingPrice\",\"name\":\"参考价格\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":311,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":2126,\"field\":{\"fieldKey\":\"tourDailyThemes.theme\",\"name\":\"主题活动\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"主题可选范围\",\"value\":\"43,44,1\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7493,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7494,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12930,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":15009,\"field\":{\"fieldKey\":\"poi.relateSystemTicket\",\"name\":\"关联系统门票\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null}],\"activeType\":{\"key\":3,\"name\":\"景点\"},\"enable\":true},{\"activeTypeId\":21,\"fields\":[{\"fieldId\":312,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":313,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":314,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":315,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":316,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":317,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":318,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":319,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":320,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":321,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"5\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":322,\"field\":{\"fieldKey\":\"poi.openTime\",\"name\":\"开放时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":323,\"field\":{\"fieldKey\":\"poi.address\",\"name\":\"地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":324,\"field\":{\"fieldKey\":\"tourDailyPois.images\",\"name\":\"图片\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":325,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":326,\"field\":{\"fieldKey\":\"productsOnSale\",\"name\":\"营业产品\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"100\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7495,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7496,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12937,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":4,\"name\":\"购物\"},\"enable\":true},{\"activeTypeId\":22,\"fields\":[{\"fieldId\":327,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":328,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":329,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":330,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":331,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":332,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":333,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":334,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":335,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T,F\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":336,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"3,66,5,19\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":337,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"1,2,3,4\",\"enable\":true},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"8\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":338,\"field\":{\"fieldKey\":\"tourDailyPois.costInclude\",\"name\":\"景点收费情况\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":339,\"field\":{\"fieldKey\":\"poi.openTime\",\"name\":\"开放时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":340,\"field\":{\"fieldKey\":\"poi.takeTime\",\"name\":\"推荐游览时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":341,\"field\":{\"fieldKey\":\"poi.address\",\"name\":\"景点地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":342,\"field\":{\"fieldKey\":\"tourDailyPois.images\",\"name\":\"图片\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":343,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":true,\"show\":null},{\"fieldId\":12944,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":7,\"name\":\"自由活动\"},\"enable\":true},{\"activeTypeId\":23,\"fields\":[{\"fieldId\":344,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":345,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":346,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1961,\"field\":{\"fieldKey\":\"directionType\",\"name\":\"方向\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1962,\"field\":{\"fieldKey\":\"targetPoi\",\"name\":\"目的地\"},\"enable\":null,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"3,19\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":347,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":348,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":349,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"min\",\"name\":\"最低时长限制\",\"value\":\"0\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":350,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":351,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":352,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":true,\"show\":null},{\"fieldId\":12951,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":8,\"name\":\"交通\"},\"enable\":true},{\"activeTypeId\":24,\"fields\":[{\"fieldId\":353,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":354,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":355,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":356,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":357,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":358,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":true,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":359,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":360,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":361,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"4000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":true,\"show\":null},{\"fieldId\":12958,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":9,\"name\":\"其他\"},\"enable\":true},{\"activeTypeId\":25,\"fields\":[{\"fieldId\":362,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":363,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":364,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":365,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":366,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":367,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":368,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":null,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":369,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":370,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":12965,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":10,\"name\":\"课程\"},\"enable\":false},{\"activeTypeId\":26,\"fields\":[{\"fieldId\":371,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":372,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":373,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":374,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":375,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":376,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":377,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":null,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":378,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":379,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":12972,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":11,\"name\":\"活动\"},\"enable\":false},{\"activeTypeId\":27,\"fields\":[{\"fieldId\":380,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":381,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"出发时间\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"时间可选项\",\"value\":\"N,D,M,A,E\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":382,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":383,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":384,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":385,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":386,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":387,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":388,\"field\":{\"fieldKey\":\"tourDailyThemes.addTheme\",\"name\":\"添加多主题\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":389,\"field\":{\"fieldKey\":\"tourDailyThemes.theme\",\"name\":\"活动类型\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"主题可选范围\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":390,\"field\":{\"fieldKey\":\"tourDailyThemes.location\",\"name\":\"地点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":391,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":392,\"field\":{\"fieldKey\":\"tourDailyThemes.images\",\"name\":\"图片\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":393,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"isCanSystem\",\"name\":\"使用系统POI\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":394,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":395,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1963,\"field\":{\"fieldKey\":\"tourDailyThemes.activityName\",\"name\":\"活动名称\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"100\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7497,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7498,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12979,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":12,\"name\":\"主题活动\"},\"enable\":false},{\"activeTypeId\":28,\"fields\":[{\"fieldId\":396,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":397,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":398,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":399,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":400,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":401,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":402,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":403,\"field\":{\"fieldKey\":\"train.trainNo\",\"name\":\"车次号\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":404,\"field\":{\"fieldKey\":\"train.trainType\",\"name\":\"车型\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":405,\"field\":{\"fieldKey\":\"train.departureStation\",\"name\":\"出发站\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":406,\"field\":{\"fieldKey\":\"train.arriveStation\",\"name\":\"到达站\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":407,\"field\":{\"fieldKey\":\"train.departureTime\",\"name\":\"出发时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":408,\"field\":{\"fieldKey\":\"train.arriveTime\",\"name\":\"到达时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":409,\"field\":{\"fieldKey\":\"train.seatClass\",\"name\":\"坐席\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"坐席可选范围\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":410,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":7499,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7500,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12986,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":14,\"name\":\"火车\"},\"enable\":false},{\"activeTypeId\":29,\"fields\":[{\"fieldId\":411,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":412,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":413,\"field\":{\"fieldKey\":\"driveTime\",\"name\":\"行驶时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":414,\"field\":{\"fieldKey\":\"distance\",\"name\":\"距离\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":415,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"花费时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":416,\"field\":{\"fieldKey\":\"intervalDeparture\",\"name\":\"起点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":417,\"field\":{\"fieldKey\":\"intervalDestination\",\"name\":\"终点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":418,\"field\":{\"fieldKey\":\"cars.model\",\"name\":\"车型\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"车型可选范围\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":419,\"field\":{\"fieldKey\":\"tourDailyCar.businessType\",\"name\":\"服务类型\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":420,\"field\":{\"fieldKey\":\"tourDailyCar.departureLocation\",\"name\":\"出发城市\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":421,\"field\":{\"fieldKey\":\"tourDailyCar.destinationLocation\",\"name\":\"到达城市\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1385,\"field\":{\"fieldKey\":\"tourDailyCar.airport\",\"name\":\"机场\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1386,\"field\":{\"fieldKey\":\"tourDailyCar.trainStation\",\"name\":\"火车站\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1387,\"field\":{\"fieldKey\":\"tourDailyCar.pickUpLocation\",\"name\":\"上车点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1388,\"field\":{\"fieldKey\":\"tourDailyCar.dropOffLocation\",\"name\":\"下车点\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":422,\"field\":{\"fieldKey\":\"cars.seatCount\",\"name\":\"座位数\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"max\",\"name\":\"最大数量\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":423,\"field\":{\"fieldKey\":\"cars.baggageCount\",\"name\":\"行李数\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"max\",\"name\":\"最大数量\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":424,\"field\":{\"fieldKey\":\"cars.images\",\"name\":\"图片\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"max\",\"name\":\"最大数量\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":425,\"field\":{\"fieldKey\":\"cars.takeTime\",\"name\":\"时长\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":426,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":7501,\"field\":{\"fieldKey\":\"specialGift\",\"name\":\"特别赠送\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":7502,\"field\":{\"fieldKey\":\"warmTips\",\"name\":\"温馨提示\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":12993,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":15,\"name\":\"用车\"},\"enable\":false},{\"activeTypeId\":134,\"fields\":[{\"fieldId\":1964,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1965,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"集合时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1966,\"field\":{\"fieldKey\":\"tourDailyGather.gatherMode\",\"name\":\"集合方式\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1967,\"field\":{\"fieldKey\":\"tourDailyGather.pickUpRange\",\"name\":\"上门范围\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"50\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1968,\"field\":{\"fieldKey\":\"tourDailyGather.overRangeType\",\"name\":\"超范围说明类型\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1969,\"field\":{\"fieldKey\":\"tourDailyGather.overRangeDesc\",\"name\":\"超范围说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1970,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"占用时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1971,\"field\":{\"fieldKey\":\"description\",\"name\":\"详细说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"1000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1972,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T,F\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1973,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"2\",\"enable\":true},{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"使用系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"showDefaultOptions\",\"name\":\"是否出默认选项\",\"value\":\"T\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":13000,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":19,\"name\":\"集合\"},\"enable\":false},{\"activeTypeId\":135,\"fields\":[{\"fieldId\":1974,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1975,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"返程时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1976,\"field\":{\"fieldKey\":\"tourDailyDismiss.dismissMode\",\"name\":\"散团方式\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1977,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"2\",\"enable\":true},{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"使用系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"showDefaultOptions\",\"name\":\"是否出默认选项\",\"value\":\"T\",\"enable\":false},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":1978,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T,F\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1979,\"field\":{\"fieldKey\":\"transportation\",\"name\":\"交通方式\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"交通方式支持项\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1980,\"field\":{\"fieldKey\":\"tourDailyDismiss.sendBackRange\",\"name\":\"送回范围\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"50\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1981,\"field\":{\"fieldKey\":\"tourDailyDismiss.rangeTemplateId\",\"name\":\"接送范围模板\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1982,\"field\":{\"fieldKey\":\"tourDailyDismiss.overRangeType\",\"name\":\"超范围说明\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1983,\"field\":{\"fieldKey\":\"tourDailyDismiss.overRangeDesc\",\"name\":\"超范围说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1984,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"占用时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1985,\"field\":{\"fieldKey\":\"description\",\"name\":\"详细说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"1000\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":13007,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":20,\"name\":\"返程\"},\"enable\":false},{\"activeTypeId\":136,\"fields\":[{\"fieldId\":1986,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1987,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1988,\"field\":{\"fieldKey\":\"takeTime\",\"name\":\"活动时长\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"min\",\"name\":\"最低时长限制\",\"value\":\"0\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1989,\"field\":{\"fieldKey\":\"tourDailyPois.groupType\",\"name\":\"活动类型\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1990,\"field\":{\"fieldKey\":\"tourDailyPois.orFlag\",\"name\":\"poi与或\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"与、或\",\"value\":\"T,F\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1991,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":null,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"3,19\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":1992,\"field\":{\"fieldKey\":\"tourDailyPois.costInclude\",\"name\":\"费用是否包含\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"活动景点收费可选范围\",\"value\":\"I,E,N\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":2127,\"field\":{\"fieldKey\":\"tourDailyPois.suffixName\",\"name\":\"poi后缀\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"suffixName可选范围\",\"value\":\"1,2,3,4\",\"enable\":false},{\"rangeKey\":\"defaultValue\",\"name\":\"suffixName默认值\",\"value\":\"4\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1993,\"field\":{\"fieldKey\":\"poi.cost\",\"name\":\"poi费用参考\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":1994,\"field\":{\"fieldKey\":\"poi.costUnit\",\"name\":\"费用单位\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1995,\"field\":{\"fieldKey\":\"poi.address\",\"name\":\"景点地址\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":1996,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"\",\"enable\":false},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":2176,\"field\":{\"fieldKey\":\"tourDailyThemes.theme\",\"name\":\"主题活动\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"主题可选范围\",\"value\":\"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29.30,31,32,33,34,35\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":13014,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":21,\"name\":\"游玩活动\"},\"enable\":false},{\"activeTypeId\":137,\"fields\":[{\"fieldId\":1997,\"field\":{\"fieldKey\":\"isCanCopy\",\"name\":\"是否可以被复制\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1998,\"field\":{\"fieldKey\":\"takeoffTime\",\"name\":\"结束时间\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":1999,\"field\":{\"fieldKey\":\"description\",\"name\":\"详细说明\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"defaultValue\",\"name\":\"详细说明默认值\",\"value\":\"\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null},{\"fieldId\":13021,\"field\":{\"fieldKey\":\"communication\",\"name\":\"待沟通内容\"},\"enable\":false,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"500\",\"enable\":true}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":22,\"name\":\"结束旅程\"},\"enable\":false},{\"activeTypeId\":799,\"fields\":[{\"fieldId\":13028,\"field\":{\"fieldKey\":\"poi\",\"name\":\"poi名称\"},\"enable\":null,\"ranges\":[{\"rangeKey\":\"isCanHand\",\"name\":\"自定义POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"isCanSystem\",\"name\":\"系统POI\",\"value\":\"T\",\"enable\":true},{\"rangeKey\":\"poiTypes\",\"name\":\"poi类型\",\"value\":\"3\",\"enable\":true},{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":13035,\"field\":{\"fieldKey\":\"description\",\"name\":\"补充说明\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"maxLen\",\"name\":\"最大长度\",\"value\":\"200\",\"enable\":true},{\"rangeKey\":\"blackWord\",\"name\":\"限制词\",\"value\":\"\",\"enable\":false}],\"require\":false,\"show\":null}],\"activeType\":{\"key\":23,\"name\":\"住宿\"},\"enable\":false}],\"functions\":[{\"functionId\":107,\"function\":{\"functionKey\":\"collect\",\"name\":\"收藏\"},\"enable\":false},{\"functionId\":104,\"function\":{\"functionKey\":\"order\",\"name\":\"排序\"},\"enable\":false},{\"functionId\":13,\"function\":{\"functionKey\":\"import\",\"name\":\"导入\"},\"enable\":false},{\"functionId\":14,\"function\":{\"functionKey\":\"clear\",\"name\":\"清空\"},\"enable\":true},{\"functionId\":15,\"function\":{\"functionKey\":\"addDays\",\"name\":\"新增天数\"},\"enable\":false},{\"functionId\":16,\"function\":{\"functionKey\":\"deleteDays\",\"name\":\"删除天数\"},\"enable\":false},{\"functionId\":17,\"function\":{\"functionKey\":\"tourDailyLocations\",\"name\":\"每日地点\"},\"enable\":false},{\"functionId\":18,\"function\":{\"functionKey\":\"hideFirstTourInterval\",\"name\":\"隐藏第一个行程间距\"},\"enable\":false},{\"functionId\":19,\"function\":{\"functionKey\":\"calculateTourInterval\",\"name\":\"自动计算行程间距的起点和终点\"},\"enable\":false},{\"functionId\":20,\"function\":{\"functionKey\":\"tourScore\",\"name\":\"行程评分\"},\"enable\":true},{\"functionId\":22,\"function\":{\"functionKey\":\"selfFundedActivity\",\"name\":\"自费活动\"},\"enable\":true},{\"functionId\":75,\"function\":{\"functionKey\":\"tourDailyLocationsReadonly\",\"name\":\"每日地点不自动反推，只读\"},\"enable\":false},{\"functionId\":21,\"function\":{\"functionKey\":\"showHotelDefaultOption\",\"name\":\"显示默认酒店\"},\"enable\":true},{\"functionId\":118,\"function\":{\"functionKey\":\"hotelCheck\",\"name\":\"酒店达标项校验\"},\"enable\":true},{\"functionId\":708,\"function\":{\"functionKey\":\"pending\",\"name\":\"可待定\"},\"enable\":false},{\"functionId\":715,\"function\":{\"functionKey\":\"useCar\",\"name\":\"当天用车\"},\"enable\":false},{\"functionId\":848,\"function\":{\"functionKey\":\"batchSet\",\"name\":\"批量设置\"},\"enable\":true}],\"themes\":[{\"themeId\":17,\"theme\":{\"key\":43,\"name\":\"徒步\"},\"fields\":[{\"fieldId\":81,\"field\":{\"fieldKey\":\"TrekAlternativeTransportation\",\"name\":\"可替代徒步的交通\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":82,\"field\":{\"fieldKey\":\"TrekMileage\",\"name\":\"徒步里程\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":83,\"field\":{\"fieldKey\":\"TrekTotalUpAltitude\",\"name\":\"起点海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":84,\"field\":{\"fieldKey\":\"TrekTotalDownAltitude\",\"name\":\"终点海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":85,\"field\":{\"fieldKey\":\"TrekMaximumAltitude\",\"name\":\"途径最高海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":86,\"field\":{\"fieldKey\":\"TrekEquipment\",\"name\":\"所含装备\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"所含装备可选范围\",\"value\":\"1,2,3,4,5,6,7,8,9,10\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":87,\"field\":{\"fieldKey\":\"TrekHeavy\",\"name\":\"是否重装\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":88,\"field\":{\"fieldKey\":\"TrekSupply\",\"name\":\"途中是否有补给点\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":89,\"field\":{\"fieldKey\":\"TrekGuide\",\"name\":\"户外向导配置\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":90,\"field\":{\"fieldKey\":\"TrekGuideProportion\",\"name\":\"户外向导配比（向导：客人)\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"户外向导配比可选范围\",\"value\":\"7,6,5,4,3,2,1\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":91,\"field\":{\"fieldKey\":\"TrekGuideQualification\",\"name\":\"户外向导资质\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":200,\"field\":{\"fieldKey\":\"PoiTagRange\",\"name\":\"地点标签范围\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"地点标签范围\",\"value\":\"2006,25831,65,24,11,703,25810,7,8,16,19,142,4841,20521,20549,20565,20572,28,32,140,602,20531,45,21,20,137,20571,20566,63,10,11,4836,17,703,147,148,755,37,25710,20631\",\"enable\":true}],\"require\":false,\"show\":null}],\"enable\":true},{\"themeId\":18,\"theme\":{\"key\":44,\"name\":\"登山\"},\"fields\":[{\"fieldId\":92,\"field\":{\"fieldKey\":\"MountaineeringAlternativeTransportation\",\"name\":\"可替代登山的交通\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":93,\"field\":{\"fieldKey\":\"MountaineeringMileage\",\"name\":\"登山里程\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":94,\"field\":{\"fieldKey\":\"MountaineeringTotalUpAltitude\",\"name\":\"起点海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":95,\"field\":{\"fieldKey\":\"MountaineeringTotalDownAltitude\",\"name\":\"终点海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":96,\"field\":{\"fieldKey\":\"MountaineeringMaximumAltitude\",\"name\":\"途径最高海拔\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":97,\"field\":{\"fieldKey\":\"MountaineeringEquipment\",\"name\":\"所含装备\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"所含装备可选范围\",\"value\":\"1,2,3,4,5,6,7,8,9,10\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":98,\"field\":{\"fieldKey\":\"MountaineeringHeavy\",\"name\":\"是否重装\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":99,\"field\":{\"fieldKey\":\"MountaineeringSupply\",\"name\":\"途中是否有补给点\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":100,\"field\":{\"fieldKey\":\"MountaineeringGuide\",\"name\":\"户外向导配置\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":101,\"field\":{\"fieldKey\":\"MountaineeringGuideProportion\",\"name\":\"户外向导配比（向导：客人)\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"户外向导配比可选范围\",\"value\":\"7,6,5,4,3,2,1\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":102,\"field\":{\"fieldKey\":\"MountaineeringGuideQualification\",\"name\":\"户外向导资质\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":201,\"field\":{\"fieldKey\":\"PoiTagRange\",\"name\":\"地点标签范围\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"地点标签范围\",\"value\":\"2006,24,20572\",\"enable\":true}],\"require\":false,\"show\":null}],\"enable\":true},{\"themeId\":19,\"theme\":{\"key\":31,\"name\":\"越野自驾\"},\"fields\":[{\"fieldId\":103,\"field\":{\"fieldKey\":\"OffRoadSelfDrivingMileage\",\"name\":\"驾驶里程\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":104,\"field\":{\"fieldKey\":\"OffRoadSelfDrivingHighestAltitude\",\"name\":\"最高海拔\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":105,\"field\":{\"fieldKey\":\"OffRoadSelfDrivingLowestAltitude\",\"name\":\"最低海拔\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null},{\"fieldId\":106,\"field\":{\"fieldKey\":\"OffRoadSelfDrivingMaximumAltitudeDrop\",\"name\":\"最大落差\"},\"enable\":false,\"ranges\":null,\"require\":false,\"show\":null}],\"enable\":false},{\"themeId\":20,\"theme\":{\"key\":1,\"name\":\"滑雪\"},\"fields\":[{\"fieldId\":107,\"field\":{\"fieldKey\":\"SkiingTicketType\",\"name\":\"雪票类型\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"雪票类型可选范围\",\"value\":\"1,2,3\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":108,\"field\":{\"fieldKey\":\"SkiingTeaching\",\"name\":\"滑雪教学\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"滑雪教学可选范围\",\"value\":\"1,2,3,4\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":109,\"field\":{\"fieldKey\":\"SkiingCoachProportion\",\"name\":\"教练配比(教练:客人)\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"教练配比可选范围\",\"value\":\"1,2,3,4\",\"enable\":true}],\"require\":true,\"show\":null},{\"fieldId\":110,\"field\":{\"fieldKey\":\"SkiingTime\",\"name\":\"教学时长\"},\"enable\":true,\"ranges\":null,\"require\":true,\"show\":null},{\"fieldId\":111,\"field\":{\"fieldKey\":\"SkiingEquipment\",\"name\":\"所含雪具\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"所含雪具可选范围\",\"value\":\"1,2,3,4,5,6,7,8\",\"enable\":true}],\"require\":false,\"show\":null},{\"fieldId\":202,\"field\":{\"fieldKey\":\"PoiTagRange\",\"name\":\"地点标签范围\"},\"enable\":true,\"ranges\":[{\"rangeKey\":\"valueRange\",\"name\":\"地点标签范围\",\"value\":\"2011, 25821\",\"enable\":true}],\"require\":false,\"show\":null}],\"enable\":true}]},\"tourDailyDescriptions\":[{\"tourDailyDescriptionId\":null,\"orderDay\":1,\"dailyDescription\":\"asd\",\"tourDailyLocations\":[],\"tourDailyInfos\":[{\"tourDailyInfoId\":null,\"takeoffTime\":{\"key\":\"\",\"name\":\"12:00\"},\"activeType\":{\"key\":3,\"name\":\"景点\"},\"distance\":null,\"driveTime\":null,\"transportation\":{\"key\":null,\"name\":null},\"directionType\":{\"key\":null,\"name\":null},\"takeTime\":60,\"description\":null,\"productsOnSale\":null,\"specialGift\":null,\"warmTips\":null,\"sort\":1,\"costInclude\":null,\"tourDailyHotels\":[],\"tourDailyTrains\":[],\"tourDailyCar\":{\"businessType\":null,\"departureLocation\":null,\"destinationLocation\":null,\"airport\":null,\"trainStation\":null,\"pickUpLocation\":null,\"dropOffLocation\":null,\"cars\":null},\"tourDailyFlights\":[],\"tourDailyPois\":[{\"tourDailyPoiId\":null,\"poi\":{\"poiId\":13228641,\"poiName\":\"重庆两江游\",\"isPublished\":true,\"poiType\":{\"key\":66,\"name\":\"活动\"},\"district\":{\"districtId\":158,\"districtName\":\"重庆\",\"districtType\":\"City\",\"parents\":[{\"districtId\":110000,\"districtName\":\"中国\",\"districtType\":\"Country\",\"parents\":null},{\"districtId\":120001,\"districtName\":\"亚洲\",\"districtType\":\"Continent\",\"parents\":null}]},\"location\":{\"globalId\":4,\"name\":\"重庆\",\"categoryId\":3,\"type\":\"base\",\"code\":null,\"parents\":null},\"openTime\":\"全年 12:00-22:00开放\",\"address\":\"重庆市渝中区洪崖洞旅游客运码头\",\"minTakeTime\":0,\"maxTakeTime\":0,\"cost\":null,\"currency\":{\"currencyCode\":null},\"costUnit\":{\"key\":1,\"name\":\"人\"},\"redPoi\":false,\"mapType\":null,\"longitude\":106.582999,\"latitude\":29.56859,\"ggLongitude\":106.5765414,\"ggLatitude\":29.5623781,\"inMainLand\":true,\"tags\":[{\"tagId\":7093,\"tagName\":\"乘船游览\",\"tagType\":66,\"tagLevel\":2},{\"tagId\":27,\"tagName\":\"观光路线\",\"tagType\":66,\"tagLevel\":1}],\"inShoppingBlacklist\":false,\"inShoppingWhitelist\":null,\"childPoiIds\":[98180287,69571118],\"parentPoiIds\":null,\"invaildInfoDto\":{\"poiId\":null,\"poiName\":null,\"poiStatus\":null,\"mergeToPoiId\":null,\"mergeToPoiName\":null,\"poiTempStartDate\":null,\"poiTempEndDate\":null},\"openTimeDetailDto\":{\"hasFormatTime\":true,\"openStatus\":\"2\",\"formatTimeDtos\":[{\"rule\":null,\"openDateRange\":[],\"openWeekRange\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\"],\"openTimeRange\":[],\"allYear\":true,\"openAllDay\":false,\"closeAllDay\":false}]},\"parentTags\":[],\"poiLocation\":{\"locationId\":454,\"locationDistrictId\":2015198,\"locationName\":\"Yuzhong District\"},\"sightZones\":[],\"ticketType\":{\"key\":1,\"name\":\"收费\"},\"relateSystemTicket\":{\"key\":\"F\",\"name\":null}},\"sort\":1,\"orFlag\":true,\"suffixName\":{\"key\":5,\"name\":\"含首道门票\"},\"costInclude\":{\"key\":\"\",\"name\":null},\"images\":[],\"refId\":null,\"parentId\":null,\"poiSelfFundedActivities\":[],\"groupType\":{\"key\":null,\"name\":null},\"groupSort\":null}],\"tourDailyDinner\":{\"tourDailyDinnerId\":null,\"dinnerType\":null,\"includeAdult\":null,\"includeChild\":null,\"costInclude\":null,\"cost\":null,\"currency\":null,\"foodType\":null,\"refId\":null,\"parentId\":null},\"tourDailyThemes\":[{\"tourDailyThemeId\":null,\"sort\":1,\"theme\":{\"key\":null,\"name\":null},\"activityName\":\"\",\"location\":{\"globalId\":null,\"name\":null,\"categoryId\":null,\"type\":null,\"code\":null,\"parents\":null},\"images\":[],\"themeFields\":[],\"refId\":null,\"parentId\":null}],\"tourDailyGather\":null,\"tourDailyDismiss\":null,\"tourDailyDistricts\":null,\"refId\":null,\"parentId\":null,\"communication\":null,\"customStatus\":null},{\"tourDailyInfoId\":null,\"takeoffTime\":{\"key\":\"\",\"name\":\"20:00\"},\"activeType\":{\"key\":1,\"name\":\"酒店\"},\"distance\":null,\"driveTime\":null,\"transportation\":{\"key\":null,\"name\":null},\"directionType\":{\"key\":null,\"name\":null},\"takeTime\":null,\"description\":null,\"productsOnSale\":null,\"specialGift\":null,\"warmTips\":null,\"sort\":2,\"costInclude\":true,\"tourDailyHotels\":[{\"tourDailyHotelId\":null,\"hotel\":{\"hotelId\":396484,\"hotelName\":\"重庆富力艾美酒店\",\"hotelAddress\":\"江南大道10号万达广场内\",\"hotelLevel\":{\"name\":\"豪华型\"},\"hotelStar\":{\"value\":5,\"name\":\"5星\",\"starType\":1},\"district\":{\"districtId\":158,\"districtName\":\"重庆\",\"districtType\":\"City\",\"parents\":[{\"districtId\":110000,\"districtName\":\"中国\",\"districtType\":\"Country\",\"parents\":null},{\"districtId\":120001,\"districtName\":\"亚洲\",\"districtType\":\"Continent\",\"parents\":null}]},\"location\":{\"globalId\":4,\"name\":\"重庆\",\"categoryId\":3,\"type\":\"base\",\"code\":null,\"parents\":null},\"hotelRating\":null,\"hotelAreaRating\":null,\"hotelScore\":4.6,\"active\":true,\"longitude\":106.57664625272,\"latitude\":29.530725267493,\"ggLongitude\":\"106.57021789830692\",\"ggLatitude\":\"29.524448314560995\",\"inMainLand\":true,\"biTag\":{\"goodHotel\":\"T\",\"mediumHotel\":\"F\"}},\"sort\":1,\"hotelType\":{\"key\":1,\"name\":\"酒店\"},\"images\":[],\"refId\":null,\"parentId\":null}],\"tourDailyTrains\":[],\"tourDailyCar\":{\"businessType\":null,\"departureLocation\":null,\"destinationLocation\":null,\"airport\":null,\"trainStation\":null,\"pickUpLocation\":null,\"dropOffLocation\":null,\"cars\":null},\"tourDailyFlights\":[],\"tourDailyPois\":[],\"tourDailyDinner\":{\"tourDailyDinnerId\":null,\"dinnerType\":null,\"includeAdult\":null,\"includeChild\":null,\"costInclude\":null,\"cost\":null,\"currency\":null,\"foodType\":null,\"refId\":null,\"parentId\":null},\"tourDailyThemes\":[],\"tourDailyGather\":null,\"tourDailyDismiss\":null,\"tourDailyDistricts\":null,\"refId\":null,\"parentId\":null,\"communication\":null,\"customStatus\":null}],\"refId\":null,\"parentId\":null,\"seaCruise\":null,\"useCar\":{\"key\":\"N\",\"name\":null}},{\"tourDailyDescriptionId\":null,\"orderDay\":2,\"dailyDescription\":\"2\",\"tourDailyLocations\":[],\"tourDailyInfos\":[{\"tourDailyInfoId\":null,\"takeoffTime\":{\"key\":\"\",\"name\":\"12:00\"},\"activeType\":{\"key\":9,\"name\":\"其它\"},\"distance\":null,\"driveTime\":null,\"transportation\":{\"key\":null,\"name\":null},\"directionType\":{\"key\":null,\"name\":null},\"takeTime\":0,\"description\":\"返程\",\"productsOnSale\":null,\"specialGift\":null,\"warmTips\":null,\"sort\":1,\"costInclude\":null,\"tourDailyHotels\":[],\"tourDailyTrains\":[],\"tourDailyCar\":{\"businessType\":null,\"departureLocation\":null,\"destinationLocation\":null,\"airport\":null,\"trainStation\":null,\"pickUpLocation\":null,\"dropOffLocation\":null,\"cars\":null},\"tourDailyFlights\":[],\"tourDailyPois\":[],\"tourDailyDinner\":{\"tourDailyDinnerId\":null,\"dinnerType\":null,\"includeAdult\":null,\"includeChild\":null,\"costInclude\":null,\"cost\":null,\"currency\":null,\"foodType\":null,\"refId\":null,\"parentId\":null},\"tourDailyThemes\":[],\"tourDailyGather\":null,\"tourDailyDismiss\":null,\"tourDailyDistricts\":null,\"refId\":null,\"parentId\":null,\"communication\":null,\"customStatus\":null}],\"refId\":null,\"parentId\":null,\"seaCruise\":null,\"useCar\":{\"key\":\"N\",\"name\":null}}],\"tourInfoFavorites\":null,\"extensions\":null},\"businessData\":\"{}\",\"contentType\":\"json\"}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "include"
//   });