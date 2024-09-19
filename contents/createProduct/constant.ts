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
      "key": "0",
      "value": "不指定"
    },
    "startStations": [],
    "destinationStation": {
      "key": "0",
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
