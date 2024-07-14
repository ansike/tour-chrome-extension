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
  "TERM": '条款维护',
  "TRAFFIC_LINE": '线路及交通',
  "ACTIVE_PRODUCT": '激活产品'
}

export const StepsConfMap: StepProps[] = Object.keys(CreateStepConstant).map(it=>{
  return {
    title: CreateStepConstant[it],
    status: 'wait',
    description: ''
  }
})