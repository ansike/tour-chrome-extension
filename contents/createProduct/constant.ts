// 价格间隔
export const PRICE_STEP = 50;

// 携程价格的比率
export const PRICE_RATE = 1.087083333333;

// TODO 从接口中获取
export const getSaleControlInfoDto = async () => {
  return {
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
  }
}

export const TRANSTORT_TYPE = {
  FLIGHT: "1",
  TRAIN: "2",
  CAR: "3",
}

export const venderId = 1431565

export const flight = {
  "systemFlight": {
    "flightEarliesTimeUnlimited": true,
    "flightLatestTime": "",
    "sameAirportTransferLimited": "F",
    "airRouteMode": "N",
    "flightLatestTimeUnlimited": true,
    "minTransitTime": "0000",
    "maxTransitTime": "0000",
    "details": [],
    "arrivalAirport": "",
    "departureAirport": "",
  },
  "autoMatch": false,
  "isIncludeManualFlight": "F",
  "isIncludeSystemFlight": "T",
  "isAutoMatchingManualFlight": "T"
}

export const train = {
  "systemTrain": {
    "trainType": "1,2",
    "trainCabinClass": "商务座,特等座,一等座,二等座,动卧,高级软卧,软卧,硬卧,一等卧,二等卧,软座,硬座",
    "startStation": {
      "label": "0",
      "value": "不指定"
    },
    "startStations": [],
    "destinationStation": {
      "label": "0",
      "value": "不指定"
    },
    "destinationStations": [],
    "grabTickets": "2",
    "trainEarliesTimeUnlimited": true,
    "latestDepartureTimeUnlimited": true,
    "earliestArrivalUnlimited": true,
    "trainLatestTimeUnlimited": true,
    "trainLatestDays": null,
    "trainLatestTime": "",
    "details": [
      {
        "trips": "",
        "ruleType": "I"
      },
      {
        "trips": "",
        "ruleType": "E"
      }
    ]
  },
  "isIncludeSystemTrain": "T"
}

export const pmRcmdItems = [
  {
    "id": 813966091,
    "pmRcmdCategoryId": 7,
    "rcmdDesc": "从古老的文化遗产到现代的艺术中心，让你的旅程充满发现与惊喜。专车服务，让旅途更加轻松自在",
    "url": "",
    "addInfoDetailCode": "1603698211541024829"
  },
  {
    "id": 813966092,
    "pmRcmdCategoryId": 9,
    "rcmdDesc": "畅享当地特色美食，感受味蕾的奇妙之旅。传统与现代交织的商圈，独特设计与多样风格。",
    "url": "",
    "addInfoDetailCode": "1603698211541024830"
  },
  {
    "id": 813966093,
    "pmRcmdCategoryId": 6,
    "rcmdDesc": "全程专车服务，从接站入住到每日的旅行安排，无需担心交通问题，专注享受每一处的美景与趣味。",
    "url": "",
    "addInfoDetailCode": "1603698211541090411"
  }
]

export const carType = [
  {
    label: '经济5座',
    carIds: [2654, 2688, 1928],
    carName: "经济5座：金杯S70/金杯S50 等同级车",
    maxPersonQuantity: 3,
    start: 100,
    end: 30000
  },
  {
    label: '舒适5座',
    carIds: [4729, 1929, 1922, 1951],
    carName: "舒适5座：丰田bZ4X/奔驰GLB 等同级车",
    maxPersonQuantity: 4,
    start: 100,
    end: 30000
  },
  {
    label: '商务7座',
    carIds: [4594, 2076, 5196],
    carName: "商务7座：丰田塞纳/丰田普瑞维亚 等同级车",
    maxPersonQuantity: 6,
    start: 44950,
    end: 55500
  },
  {
    label: '商务9座',
    carIds: [7274, 4378, 4343],
    carName: "商务9座：现代韩版 斯塔利亚/现代Grand Starex 11 Seater 等同级车",
    maxPersonQuantity: 8,
    start: 66450,
    end: 68750
  },
  {
    label: '12座中巴',
    carIds: [4199, 4208, 4268],
    carName: "12座中巴：丰田海狮12座/丰田考斯特12座 等同级车",
    maxPersonQuantity: 11,
    start: 44250,
    end: 70000
  },
  {
    label: '14座中巴',
    carIds: [2678, 4243, 4310],
    carName: "14座中巴：金杯大海狮/奔驰凌特14座 等同级车",
    maxPersonQuantity: 13,
    start: 44200,
    end: 70000
  },
  {
    label: '19座中巴',
    carIds: [4246, 4307, 4212, 4272, 4293],
    carName: "19座中巴：奔驰凌特19座/江铃考斯特19座 等同级车",
    maxPersonQuantity: 18,
    start: 28300,
    end: 70000
  },
];
// export const carType = [
//   {
//     label: '经济5座',
//     carIds: [2654, 2688, 1928],
//     carName: "经济5座：金杯S70/金杯S50 等同级车",
//     maxPersonQuantity: 3,
//     start: 100,
//     end: 30000
//   },
//   {
//     label: '舒适5座',
//     carIds: [4729, 1929, 1922, 1951],
//     carName: "舒适5座：丰田bZ4X/奔驰GLB 等同级车",
//     maxPersonQuantity: 4,
//     start: 100,
//     end: 30000
//   },
//   {
//     label: '商务7座',
//     carIds: [4594, 2076, 5196],
//     carName: "商务7座：丰田塞纳/丰田普瑞维亚 等同级车",
//     maxPersonQuantity: 6,
//     start: 200,
//     end: 55500
//   },
//   {
//     label: '商务9座',
//     carIds: [7274, 4378, 4343],
//     carName: "商务9座：现代韩版 斯塔利亚/现代Grand Starex 11 Seater 等同级车",
//     maxPersonQuantity: 8,
//     start: 300,
//     end: 68750
//   },
//   {
//     label: '12座中巴',
//     carIds: [4199, 4208, 4268],
//     carName: "12座中巴：丰田海狮12座/丰田考斯特12座 等同级车",
//     maxPersonQuantity: 11,
//     start: 300,
//     end: 70000
//   },
//   {
//     label: '14座中巴',
//     carIds: [2678, 4243, 4310],
//     carName: "14座中巴：金杯大海狮/奔驰凌特14座 等同级车",
//     maxPersonQuantity: 13,
//     start: 300,
//     end: 70000
//   },
//   {
//     label: '19座中巴',
//     carIds: [4246, 4307, 4212, 4272, 4293],
//     carName: "19座中巴：奔驰凌特19座/江铃考斯特19座 等同级车",
//     maxPersonQuantity: 18,
//     start: 300,
//     end: 70000
//   },
// ];