import type { StepProps } from "antd"

// 创建步骤配置常量
export const CreateStepConstant = {
  "DUPLICATE_PRODUCT": '复制产品',
  "SALE_CONTROL": '销售控制',
  "PRODUCT_INFO": '产品信息',
  "PRODUCT_RICHTEXT": '产品图文',
  "DAILY_INFO": '行程描述',
  "PACKAGE_MANAGE": '套餐管理',
  "PRICE_INVENTORY_SCHEDULE": '价格库存班期',
  "RESOURCE": '资源配置',
  "CLAUSE": '条款维护',
  "ACTIVE_PRODUCT": '激活产品',
  "TRAFFIC_LINE": '线路及交通',
}

export const StepsConfMap: StepProps[] = Object.keys(CreateStepConstant).map(it => {
  return {
    title: CreateStepConstant[it],
    status: 'wait',
    description: ''
  }
})

const flight = {
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

const train = {
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


// 子产品线路分类
export const subProductCategories = [
  {
    step: 0,
    transitionType: 'hasAirport',
    lineDescription: '飞机往返',
    enter: { flight: JSON.parse(JSON.stringify(flight)) },
    leave: { flight: JSON.parse(JSON.stringify(flight)) },
    clauses: [
      {
        "clauseItemId": 3035,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "往返",
            "elementCode": "A"
          },
          {
            "componentCode": "traffic2",
            "value": "机票",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic3",
            "value": "（已含机建、燃油税）"
          }
        ]
      }
    ]
  },
  {
    step: 0,
    transitionType: 'hasTrain',
    lineDescription: '火车往返',
    enter: { train: JSON.parse(JSON.stringify(train)) },
    leave: { train: JSON.parse(JSON.stringify(train)) },
    clauses: [
      {
        "clauseItemId": 10081,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "往返",
            "elementCode": "A"
          },
          {
            "componentCode": "traffic1",
            "value": "火车票",
            "elementCode": "A"
          }
        ]
      },
      {
        "clauseItemId": 10071,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "儿童是否含火车票，以您在填写订单时选择的儿童年龄为准"
          }
        ]
      }
    ]
  },
  {
    step: 0,
    transitionType: 'hasAirport',
    lineDescription: '单飞机进',
    enter: { flight: JSON.parse(JSON.stringify(flight)) },
    leave: {},
    clauses: [
      {
        "clauseItemId": 3035,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "去程",
            "elementCode": "C"
          },
          {
            "componentCode": "traffic2",
            "value": "机票",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic3",
            "value": "（已含机建、燃油税）"
          }
        ]
      },
    ]
  },
  {
    step: 0,
    transitionType: 'hasTrain',
    lineDescription: '单火车进',
    enter: { train: JSON.parse(JSON.stringify(train)) },
    leave: {},
    clauses: [
      {
        "clauseItemId": 10081,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "去程",
            "elementCode": "B"
          },
          {
            "componentCode": "traffic1",
            "value": "火车票",
            "elementCode": "A"
          }
        ]
      },
      {
        "clauseItemId": 10071,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "儿童是否含火车票，以您在填写订单时选择的儿童年龄为准"
          }
        ]
      }
    ]
  },
  {
    step: 0,
    transitionType: 'hasAirport',
    lineDescription: '单飞机出',
    enter: {},
    leave: { flight: JSON.parse(JSON.stringify(flight)) },
    clauses: [
      {
        "clauseItemId": 3035,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "回程",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic2",
            "value": "机票",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic3",
            "value": "（已含机建、燃油税）"
          }
        ]
      },
    ]
  },
  {
    step: 0,
    transitionType: 'hasTrain',
    lineDescription: '单火车出',
    enter: {},
    leave: { train: JSON.parse(JSON.stringify(train)) },
    clauses: [
      {
        "clauseItemId": 10081,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "回程",
            "elementCode": "C"
          },
          {
            "componentCode": "traffic1",
            "value": "火车票",
            "elementCode": "A"
          }
        ]
      },
      {
        "clauseItemId": 10071,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "儿童是否含火车票，以您在填写订单时选择的儿童年龄为准"
          }
        ]
      }
    ]
  },
  {
    step: 0,
    transitionType: 'both',
    lineDescription: '飞机进火车出',
    enter: { flight: JSON.parse(JSON.stringify(flight)) },
    leave: { train: JSON.parse(JSON.stringify(train)) },
    clauses: [
      {
        "clauseItemId": 3035,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "去程",
            "elementCode": "C"
          },
          {
            "componentCode": "traffic2",
            "value": "机票",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic3",
            "value": "（已含机建、燃油税）"
          }
        ]
      },
      {
        "clauseItemId": 10081,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "回程",
            "elementCode": "C"
          },
          {
            "componentCode": "traffic1",
            "value": "火车票",
            "elementCode": "A"
          }
        ]
      },
      {
        "clauseItemId": 10071,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "儿童是否含火车票，以您在填写订单时选择的儿童年龄为准"
          }
        ]
      }
    ]
  },
  {
    step: 0,
    transitionType: 'both',
    lineDescription: '火车进飞机出',
    enter: { train: JSON.parse(JSON.stringify(train)) },
    leave: { flight: JSON.parse(JSON.stringify(flight)) },
    clauses: [
      {
        "clauseItemId": 3035,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "回程",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic2",
            "value": "机票",
            "elementCode": "D"
          },
          {
            "componentCode": "traffic3",
            "value": "（已含机建、燃油税）"
          }
        ]
      },
      {
        "clauseItemId": 10081,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "去程",
            "elementCode": "B"
          },
          {
            "componentCode": "traffic1",
            "value": "火车票",
            "elementCode": "A"
          }
        ]
      },
      {
        "clauseItemId": 10071,
        "secondClassTypeId": 86,
        "elementDtos": [
          {
            "componentCode": "traffic0",
            "value": "儿童是否含火车票，以您在填写订单时选择的儿童年龄为准"
          }
        ]
      }
    ]
  },
]