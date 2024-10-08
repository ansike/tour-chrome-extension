import {
  getProductTourInfoList,
  getTourDaily,
} from "../../scripts/getProductBaseInfo";
import { checkTourDaily } from "../../scripts/saveTourDailyDetail";

const template = {
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
          require: false,
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
        },
        {
          fieldId: 236,
          field: {
            fieldKey: "tourDailyDinner.cost",
            name: "餐标",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 237,
          field: {
            fieldKey: "tourDailyDinner.currency",
            name: "餐标货币",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 238,
          field: {
            fieldKey: "tourDailyDinner.includeAdult",
            name: "成人是否含餐",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 239,
          field: {
            fieldKey: "tourDailyDinner.includeChild",
            name: "儿童是否含餐",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 241,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 242,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 243,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 244,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 245,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1960,
          field: {
            fieldKey: "tourDailyDinner.foodType",
            name: "菜品品类",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 252,
          field: {
            fieldKey: "poi.cost",
            name: "poi费用参考",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 253,
          field: {
            fieldKey: "poi.currency",
            name: "poi货币",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 254,
          field: {
            fieldKey: "tourDailyPois.images",
            name: "poi图片",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 258,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 259,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 260,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 261,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 262,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 263,
          field: {
            fieldKey: "hotel.location",
            name: "酒店城市",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 264,
          field: {
            fieldKey: "tourDailyHotels.hotelType",
            name: "酒店类别",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 269,
          field: {
            fieldKey: "costInclude",
            name: "是否含酒店",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 274,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 275,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 276,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 277,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 278,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 280,
          field: {
            fieldKey: "flight.subClass",
            name: "舱位",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 281,
          field: {
            fieldKey: "flight.departureTime",
            name: "出发时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 282,
          field: {
            fieldKey: "flight.departureAirport",
            name: "出发机场",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 284,
          field: {
            fieldKey: "flight.arriveTime",
            name: "到达时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 285,
          field: {
            fieldKey: "flight.arriveAirport",
            name: "到达机场",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 288,
          field: {
            fieldKey: "flight.duration",
            name: "飞行时长",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 289,
          field: {
            fieldKey: "flight.directFlightFlag",
            name: "直飞、中转标记",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 290,
          field: {
            fieldKey: "flight.transferLocation",
            name: "中转城市",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 291,
          field: {
            fieldKey: "flight.transferTime",
            name: "中转时长",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 292,
          field: {
            fieldKey: "flight.stopLocations",
            name: "经停城市",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 293,
          field: {
            fieldKey: "flight.stopTime",
            name: "经停时长",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 294,
          field: {
            fieldKey: "addFlight",
            name: "添加中转",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 298,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 299,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 300,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 301,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 302,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
              value: "F",
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
              value: "3,19,66",
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
        },
        {
          fieldId: 308,
          field: {
            fieldKey: "poi.takeTime",
            name: "推荐游览时长",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 310,
          field: {
            fieldKey: "tourDailyPois.images",
            name: "图片",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1371,
          field: {
            fieldKey: "selfFundedActivity.activityName",
            name: "自费项目",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 1372,
          field: {
            fieldKey: "selfFundedActivity.activityDesc",
            name: "自费详情",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 1373,
          field: {
            fieldKey: "selfFundedActivity.useListingPrice",
            name: "参考价格",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 15009,
          field: {
            fieldKey: "poi.relateSystemTicket",
            name: "关联系统门票",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 315,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 316,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 317,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 318,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 319,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
              value: "F",
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
        },
        {
          fieldId: 324,
          field: {
            fieldKey: "tourDailyPois.images",
            name: "图片",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 330,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 331,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 332,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 333,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 334,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 338,
          field: {
            fieldKey: "tourDailyPois.costInclude",
            name: "景点收费情况",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 340,
          field: {
            fieldKey: "poi.takeTime",
            name: "推荐游览时长",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 342,
          field: {
            fieldKey: "tourDailyPois.images",
            name: "图片",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 1961,
          field: {
            fieldKey: "directionType",
            name: "方向",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1962,
          field: {
            fieldKey: "targetPoi",
            name: "目的地",
          },
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
        },
        {
          fieldId: 347,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 348,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
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
        },
        {
          fieldId: 350,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 351,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 356,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 357,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 358,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: true,
          require: false,
        },
        {
          fieldId: 359,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 360,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 364,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 365,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 366,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 368,
          field: {
            fieldKey: "poi",
            name: "poi名称",
          },
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
          require: false,
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
        },
        {
          fieldId: 373,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 374,
          field: {
            fieldKey: "driveTime",
            name: "行驶时长",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 375,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 377,
          field: {
            fieldKey: "poi",
            name: "poi名称",
          },
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
          require: false,
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
        },
        {
          fieldId: 383,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 384,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 385,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 386,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 387,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 388,
          field: {
            fieldKey: "tourDailyThemes.addTheme",
            name: "添加多主题",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 390,
          field: {
            fieldKey: "tourDailyThemes.location",
            name: "地点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 392,
          field: {
            fieldKey: "tourDailyThemes.images",
            name: "图片",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 398,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 399,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 400,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 401,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 402,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 404,
          field: {
            fieldKey: "train.trainType",
            name: "车型",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 405,
          field: {
            fieldKey: "train.departureStation",
            name: "出发站",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 406,
          field: {
            fieldKey: "train.arriveStation",
            name: "到达站",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 407,
          field: {
            fieldKey: "train.departureTime",
            name: "出发时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 408,
          field: {
            fieldKey: "train.arriveTime",
            name: "到达时间",
          },
          enable: false,
          require: false,
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
          require: false,
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
        },
        {
          fieldId: 413,
          field: {
            fieldKey: "driveTime",
            name: "行驶时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 414,
          field: {
            fieldKey: "distance",
            name: "距离",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 415,
          field: {
            fieldKey: "takeTime",
            name: "花费时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 416,
          field: {
            fieldKey: "intervalDeparture",
            name: "起点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 417,
          field: {
            fieldKey: "intervalDestination",
            name: "终点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 419,
          field: {
            fieldKey: "tourDailyCar.businessType",
            name: "服务类型",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 420,
          field: {
            fieldKey: "tourDailyCar.departureLocation",
            name: "出发城市",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 421,
          field: {
            fieldKey: "tourDailyCar.destinationLocation",
            name: "到达城市",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1385,
          field: {
            fieldKey: "tourDailyCar.airport",
            name: "机场",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1386,
          field: {
            fieldKey: "tourDailyCar.trainStation",
            name: "火车站",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1387,
          field: {
            fieldKey: "tourDailyCar.pickUpLocation",
            name: "上车点",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1388,
          field: {
            fieldKey: "tourDailyCar.dropOffLocation",
            name: "下车点",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 425,
          field: {
            fieldKey: "cars.takeTime",
            name: "时长",
          },
          enable: false,
          require: false,
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
          require: false,
        },
        {
          fieldId: 1965,
          field: {
            fieldKey: "takeoffTime",
            name: "集合时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1966,
          field: {
            fieldKey: "tourDailyGather.gatherMode",
            name: "集合方式",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1968,
          field: {
            fieldKey: "tourDailyGather.overRangeType",
            name: "超范围说明类型",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1970,
          field: {
            fieldKey: "takeTime",
            name: "占用时间",
          },
          enable: false,
          require: false,
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
          require: false,
        },
        {
          fieldId: 1975,
          field: {
            fieldKey: "takeoffTime",
            name: "返程时间",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1976,
          field: {
            fieldKey: "tourDailyDismiss.dismissMode",
            name: "散团方式",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1981,
          field: {
            fieldKey: "tourDailyDismiss.rangeTemplateId",
            name: "接送范围模板",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 1982,
          field: {
            fieldKey: "tourDailyDismiss.overRangeType",
            name: "超范围说明",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1984,
          field: {
            fieldKey: "takeTime",
            name: "占用时间",
          },
          enable: false,
          require: false,
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
          require: false,
        },
        {
          fieldId: 1987,
          field: {
            fieldKey: "takeoffTime",
            name: "时间",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1989,
          field: {
            fieldKey: "tourDailyPois.groupType",
            name: "活动类型",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 1991,
          field: {
            fieldKey: "poi",
            name: "poi名称",
          },
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
        },
        {
          fieldId: 1993,
          field: {
            fieldKey: "poi.cost",
            name: "poi费用参考",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 1994,
          field: {
            fieldKey: "poi.costUnit",
            name: "费用单位",
          },
          enable: false,
          require: false,
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
          require: false,
        },
        {
          fieldId: 1998,
          field: {
            fieldKey: "takeoffTime",
            name: "结束时间",
          },
          enable: false,
          require: false,
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
          require: true,
        },
        {
          fieldId: 82,
          field: {
            fieldKey: "TrekMileage",
            name: "徒步里程",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 83,
          field: {
            fieldKey: "TrekTotalUpAltitude",
            name: "起点海拔",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 84,
          field: {
            fieldKey: "TrekTotalDownAltitude",
            name: "终点海拔",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 85,
          field: {
            fieldKey: "TrekMaximumAltitude",
            name: "途径最高海拔",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 87,
          field: {
            fieldKey: "TrekHeavy",
            name: "是否重装",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 88,
          field: {
            fieldKey: "TrekSupply",
            name: "途中是否有补给点",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 89,
          field: {
            fieldKey: "TrekGuide",
            name: "户外向导配置",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 91,
          field: {
            fieldKey: "TrekGuideQualification",
            name: "户外向导资质",
          },
          enable: true,
          require: true,
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
          require: true,
        },
        {
          fieldId: 93,
          field: {
            fieldKey: "MountaineeringMileage",
            name: "登山里程",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 94,
          field: {
            fieldKey: "MountaineeringTotalUpAltitude",
            name: "起点海拔",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 95,
          field: {
            fieldKey: "MountaineeringTotalDownAltitude",
            name: "终点海拔",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 96,
          field: {
            fieldKey: "MountaineeringMaximumAltitude",
            name: "途径最高海拔",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 98,
          field: {
            fieldKey: "MountaineeringHeavy",
            name: "是否重装",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 99,
          field: {
            fieldKey: "MountaineeringSupply",
            name: "途中是否有补给点",
          },
          enable: true,
          require: true,
        },
        {
          fieldId: 100,
          field: {
            fieldKey: "MountaineeringGuide",
            name: "户外向导配置",
          },
          enable: true,
          require: true,
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
        },
        {
          fieldId: 102,
          field: {
            fieldKey: "MountaineeringGuideQualification",
            name: "户外向导资质",
          },
          enable: true,
          require: true,
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
          require: false,
        },
        {
          fieldId: 104,
          field: {
            fieldKey: "OffRoadSelfDrivingHighestAltitude",
            name: "最高海拔",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 105,
          field: {
            fieldKey: "OffRoadSelfDrivingLowestAltitude",
            name: "最低海拔",
          },
          enable: false,
          require: false,
        },
        {
          fieldId: 106,
          field: {
            fieldKey: "OffRoadSelfDrivingMaximumAltitudeDrop",
            name: "最大落差",
          },
          enable: false,
          require: false,
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
        },
        {
          fieldId: 110,
          field: {
            fieldKey: "SkiingTime",
            name: "教学时长",
          },
          enable: true,
          require: true,
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
        },
      ],
      enable: true,
    },
  ],
};
export const saveTourDaily = async (
  productId: string | number,
  products: any[],
) => {
  const productTours = await Promise.all(
    products.map((pro) => getTourDaily(pro.baseInfo.productId)),
  );
  const firstCity = products[0].nameAreas[0].pOIDistrictName;
  const lastCity = products[products.length - 1].nameAreas[0].pOIDistrictName;
  const tourDailyHotels =
    productTours[0].tourDaily.tourInfo.tourDailyDescriptions[0].tourDailyInfos.find(
      (it) => it.activeType.name === "酒店",
    ).tourDailyHotels;

  const firstDay = calcFirstDay(firstCity, tourDailyHotels);
  const lastDay = calcLastDay(lastCity);
  const middleTourDailyDescriptions = [];
  productTours.forEach((it, idx) => {
    if (idx > 0) {
      const from = products[idx - 1].nameAreas[0].pOIDistrictName;
      const to = products[idx].nameAreas[0].pOIDistrictName;
      const tourDailyHotels = productTours[
        idx
      ].tourDaily.tourInfo.tourDailyDescriptions[0].tourDailyInfos.find(
        (it) => it.activeType.name === "酒店",
      ).tourDailyHotels;
      const transTour = calcTransDay(from, to, tourDailyHotels);
      middleTourDailyDescriptions.push(transTour);
    }
    middleTourDailyDescriptions.push(
      ...it.tourDaily.tourInfo.tourDailyDescriptions,
    );
  });

  const tourDailyDescriptions = [
    firstDay,
    ...middleTourDailyDescriptions,
    lastDay,
  ];

  tourDailyDescriptions.forEach((it, idx) => {
    it.orderDay = idx + 1;
    it.tourDailyDescriptionId = null;
    it.refId = null;
    it.tourDailyInfos.forEach((info) => {
      info.refId = null;
      info.tourDailyInfoId = null;
      info.tourDailyPois.forEach((poi) => {
        poi.tourDailyPoiId = null;
        poi.refId = null;
        //   景点类型不能是无
        if (poi.suffixName.key === 8) {
          poi.suffixName = { key: 1, name: "外观" };
        //   poi.suffixName = { key: 7, name: '不含门票' };
        }
      });
    });
  });

  const newTourDailyText = JSON.stringify({ tourDailyDescriptions });
  let productTourInfo = {
    main: true,
    tourInfoId: 0,
    productId,
    sort: 0,
    isNew: true,
    days: tourDailyDescriptions.length,
    fromTourInfoId: 0,
    // aggregateScore: 0,
    referenceCount: 0,
    template: template,
    tourDailyDescriptions: tourDailyDescriptions,
  } as any;

  let tourInfoList = await getProductTourInfoList(productId);
  console.log(tourInfoList);
  if (tourInfoList.tourInfos[0]?.tourInfoId) {
    productTourInfo = {
      ...productTourInfo,
      ...tourInfoList.tourInfos[0],
    };
  }

  const tourDailyText8 = await checkTourDaily(
    productTourInfo,
    newTourDailyText,
    8,
  );
  const caclTourInfo = await calculateTourInfoScore(productTourInfo);
  productTourInfo.aggregateScore = caclTourInfo.tourInfo.aggregateScore;

  const tourDailyText3 = await checkTourDaily(
    productTourInfo,
    tourDailyText8,
    3,
  );
  const newTourDaily = JSON.parse(tourDailyText3);
  productTourInfo.auditTourInfoId = newTourDaily.tourInfoId;
  productTourInfo.auditTourInfoStatus = 1;

  newTourDaily.tourInfoScores = caclTourInfo.tourInfo.tourInfoScores;
  newTourDaily.aggregateScore = caclTourInfo.tourInfo.aggregateScore;

  await saveTourDailyDetail(newTourDaily);

  await saveProductTourInfo(productTourInfo);
};

const calcFirstDay = (city, hotels) => {
  const firstDay = {
    tourDailyDescriptionId: null,
    orderDay: 1,
    dailyDescription: `【抵达${city}】自由活动【专车接机/站】`,
    tourDailyLocations: [],
    tourDailyInfos: [
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "D",
          name: "全天",
        },
        activeType: {
          key: 8,
          name: "交通",
        },
        distance: 200,
        driveTime: 120,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: 1,
          name: "前往",
        },
        takeTime: 0,
        description: `今日各地贵宾根据自选航班/火车，抵达${city}。我们将全天24小时在机场/火车站/市区内指定地点，由专车迎接您开启本次行程\n【温馨提示】：\n1、本产品不含导游，旅行管家将于出发前3天向您致电，与您沟通出游的注意事项，请尽量保持手机畅通。\n2、请携带实际出行人身份证或其它有效证件，以便顺利乘机及入住酒店。3、如您乘坐火车前往，建议提前1小时以上到达火车站，以便换票及等车。乘坐飞机建议提前2小时以上到达机场以便值机及行李托运。\n4、酒店入住时间正常为14:00，如遇到提前抵达无法提前入住情况，可行李寄存。\n5、若误机、改签等原因导致长时间无法会合司机的，请主动联系司机或旅行管家告知相关情况，以便做好协调安排。\n6、今日专车司机送您至酒店办理入住手续后请自行在${city}游玩。`,
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 1,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847890",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "12:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 60,
        description: "",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 2,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "L",
            name: "午餐",
          },
          includeAdult: {
            key: "E",
            name: "费用自理",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032759230550",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847891",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "D",
          name: "全天",
        },
        activeType: {
          key: 7,
          name: "自由活动",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description: "请根据您的到达时间自由安排活动；",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 3,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847892",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "18:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description: "",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 4,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "S",
            name: "晚餐",
          },
          includeAdult: {
            key: "E",
            name: "费用自理",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032759230551",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847893",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "20:30",
        },
        activeType: {
          key: 1,
          name: "酒店",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description:
          "【温馨提示】\n1、贵宾可在下单时点击“更多酒店”及“更多房型”来查阅各种酒店及房型选择，点击房型名称，详细查看关于房型、面积、早餐、加床及退订政策等内容。如需酒店早餐，请选择带早餐的房型。\n2.到达酒店后，请自行到前台办理入住手续，如有疑问可咨询酒店前台或致电私人管家。\n3.、依酒店规定，当天14点后方可办理入住；若您抵达较早，可将行李寄存于前台，自行前往周边景点或餐厅。\n4、若入住酒店时需支付房卡押金，请您自理，退房查房后，如无问题酒店会原路退还给您（退房时间一般是中午12点），入住期间如有消费请看清价格后再消费。",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 5,
        costInclude: true,
        tourDailyHotels: hotels,
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
        tourDailyDistricts: [],
        refId: "282465019712847874",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
    ],
    refId: "282465019714961419",
    parentId: null,
    seaCruise: false,
    useCar: {
      key: "N",
      name: null,
    },
  };
  return firstDay;
};
const calcLastDay = (city) => {
  const lastDay = {
    tourDailyDescriptionId: null,
    orderDay: 4,
    dailyDescription: `【${city}-返程】返回温馨的家【专车送机/站】`,
    tourDailyLocations: [],
    tourDailyInfos: [
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "D",
          name: "全天",
        },
        activeType: {
          key: 8,
          name: "交通",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: 1,
          name: "前往",
        },
        takeTime: 0,
        description: "全天路程",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 1,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465039296053303",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "08:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 60,
        description:
          "酒店含早，根据所选床位赠送，不吃不退，儿童不占床，不含餐；\n【温馨提示】\n1、如出发较早。您可提前通知酒店前台，要求打包早餐；\n2、出行人不占床位则无法赠送早餐，需要您自行在入住酒店根据标准现补早餐费用；\n3、房型请注意选择含早餐房型，如无早餐房型，需自费",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 2,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "B",
            name: "早餐",
          },
          includeAdult: {
            key: "I",
            name: "费用包含",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032761344108",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465039296053304",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "12:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 60,
        description: "",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 4,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "L",
            name: "午餐",
          },
          includeAdult: {
            key: "E",
            name: "费用自理",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032761344109",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465039296053306",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "A",
          name: "下午",
        },
        activeType: {
          key: 8,
          name: "交通",
        },
        distance: 0,
        driveTime: 90,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: 1,
          name: "前往",
        },
        takeTime: 0,
        description: "请根据时间预订返程交通；\n返回温馨的家",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 6,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465039298166799",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
    ],
    refId: "282465019714961422",
    parentId: null,
    seaCruise: false,
    useCar: {
      key: "N",
      name: null,
    },
  };
  return lastDay;
};
const calcTransDay = (from, to, hotels) => {
  return {
    tourDailyDescriptionId: null,
    orderDay: 4,
    dailyDescription: `【${from}-${to}】乘坐交通抵达${to}【专车接送机/站】`,
    tourDailyLocations: [],
    tourDailyInfos: [
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "D",
          name: "全天",
        },
        activeType: {
          key: 8,
          name: "交通",
        },
        distance: 200,
        driveTime: 120,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: 1,
          name: "前往",
        },
        takeTime: 0,
        description: `今日各地贵宾根据自选航班/火车，抵达${to}。我们将全天24小时在机场/火车站/市区内指定地点，由专车迎接您开启本次行程\n【温馨提示】：\n1、本产品不含导游，旅行管家将于出发前3天向您致电，与您沟通出游的注意事项，请尽量保持手机畅通。\n2、请携带实际出行人身份证或其它有效证件，以便顺利乘机及入住酒店。3、如您乘坐火车前往，建议提前1小时以上到达火车站，以便换票及等车。乘坐飞机建议提前2小时以上到达机场以便值机及行李托运。\n4、酒店入住时间正常为14:00，如遇到提前抵达无法提前入住情况，可行李寄存。\n5、若误机、改签等原因导致长时间无法会合司机的，请主动联系司机或旅行管家告知相关情况，以便做好协调安排。\n6、今日专车司机送您至酒店办理入住手续后请自行在${to}游玩。`,
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 1,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847890",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "12:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 60,
        description: "",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 2,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "L",
            name: "午餐",
          },
          includeAdult: {
            key: "E",
            name: "费用自理",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032759230550",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847891",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: "D",
          name: "全天",
        },
        activeType: {
          key: 7,
          name: "自由活动",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description: "请根据您的到达时间自由安排活动；",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 3,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847892",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "18:00",
        },
        activeType: {
          key: 0,
          name: "餐饮",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description: "",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 4,
        costInclude: false,
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
              poiId: 0,
              poiName: null,
              isPublished: null,
              poiType: {
                key: null,
                name: null,
              },
              district: null,
              location: null,
              openTime: null,
              address: null,
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
              longitude: null,
              latitude: null,
              ggLongitude: null,
              ggLatitude: null,
              inMainLand: null,
              tags: [],
              inShoppingBlacklist: null,
              inShoppingWhitelist: null,
              childPoiIds: null,
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
                hasFormatTime: null,
                openStatus: null,
                formatTimeDtos: null,
              },
              parentTags: [],
              poiLocation: null,
              sightZones: [],
              ticketType: null,
              relateSystemTicket: {
                key: "F",
                name: "否",
              },
            },
            sort: 1,
            orFlag: true,
            suffixName: {
              key: null,
              name: null,
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
          dinnerType: {
            key: "S",
            name: "晚餐",
          },
          includeAdult: {
            key: "E",
            name: "费用自理",
          },
          includeChild: {
            key: "E",
            name: "费用自理",
          },
          costInclude: {
            key: "",
            name: null,
          },
          cost: 0,
          currency: {
            currencyCode: "CNY",
          },
          foodType: {
            key: null,
            name: null,
          },
          refId: "282465032759230551",
          parentId: null,
        },
        tourDailyThemes: [],
        tourDailyGather: null,
        tourDailyDismiss: null,
        tourDailyDistricts: [],
        refId: "282465019712847893",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
      {
        tourDailyInfoId: null,
        takeoffTime: {
          key: null,
          name: "20:30",
        },
        activeType: {
          key: 1,
          name: "酒店",
        },
        distance: 0,
        driveTime: 0,
        transportation: {
          key: null,
          name: null,
        },
        directionType: {
          key: null,
          name: null,
        },
        takeTime: 0,
        description:
          "【温馨提示】\n1、贵宾可在下单时点击“更多酒店”及“更多房型”来查阅各种酒店及房型选择，点击房型名称，详细查看关于房型、面积、早餐、加床及退订政策等内容。如需酒店早餐，请选择带早餐的房型。\n2.到达酒店后，请自行到前台办理入住手续，如有疑问可咨询酒店前台或致电私人管家。\n3.、依酒店规定，当天14点后方可办理入住；若您抵达较早，可将行李寄存于前台，自行前往周边景点或餐厅。\n4、若入住酒店时需支付房卡押金，请您自理，退房查房后，如无问题酒店会原路退还给您（退房时间一般是中午12点），入住期间如有消费请看清价格后再消费。",
        productsOnSale: "",
        specialGift: "",
        warmTips: "",
        sort: 5,
        costInclude: true,
        tourDailyHotels: hotels,
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
        tourDailyDistricts: [],
        refId: "282465019712847874",
        parentId: null,
        communication: "",
        customStatus: 0,
      },
    ],
    refId: "282465019714961422",
    parentId: null,
    seaCruise: false,
    useCar: {
      key: "N",
      name: null,
    },
  };
};

export const saveProductTourInfo = async (productTourInfo) => {
  const result = await fetch(
    "https://online.ctrip.com/restapi/soa2/15638/saveProductTourInfo?_fxpcqlniredt=09031178210202430147&_fxpcqlniredt=09031178210202430147",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json",
        cookieorigin: "https://vbooking.ctrip.com",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify({
        contentType: "json",
        head: {
          cid: "09031178210202430147",
          ctok: "",
          cver: "1.0",
          lang: "01",
          sid: "8888",
          syscode: "09",
          auth: "",
          extension: [],
        },
        tourInfo: productTourInfo,
        saveType: 3,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );

  return await result.json();
};

export const saveTourDailyDetail = async (tourInfo) => {
  const res = await fetch(
    "https://online.ctrip.com/restapi/soa2/20049/saveTourDailyDetail.json",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "content-type": "application/json;charset=UTF-8",
        cookieorigin: "https://vbooking.ctrip.com",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify({
        requestHeader: {
          locale: "zh-CN",
        },
        piCategoryId: 0,
        tourInfo,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  return res.json();
};

export const calculateTourInfoScore = async (tourInfo) => {
  const res = await fetch(
    "https://online.ctrip.com/restapi/soa2/20049/calculateTourInfoScore",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        cookieorigin: "https://vbooking.ctrip.com",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-ctx-locale": "zh-CN",
        "x-tt-core": "1",
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: JSON.stringify({
        businessData: "{}",
        contentType: "json",
        requestHeader: { locale: "zh-CN" },
        tourInfo,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    },
  );
  return res.json();
};
