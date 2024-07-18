import { useEffect, useState } from 'react'
import { Button, Progress } from 'antd'
import { TourDay } from './interface'
import { productDuplicate } from '~/contents/createProduct/scripts/productDuplicate'
import { saveSaleControlInfo } from '../scripts/saveSaleControlInfo'
import { saveProduct } from '../scripts/saveProductBaseInfo'
import { saveProductRichText } from '../scripts/savedescriptioninfo'
import { saveTourDailyDetail } from '../scripts/saveTourDailyDetail'
import { savePackage } from '../scripts/savePackageItem'
import { savePriceInventory } from '../scripts/savePriceInventory'
import { saveProductResource } from '../scripts/saveProductMaintainType'
import { saveLineInfo } from '../scripts/saveLineInfo'
import { updateResourceActive } from '../scripts/updateResourceActive'
import { saveClauses } from '../scripts/saveClauses'

interface TourProps {
  productId: string
  data: TourDay
  updateTourDayStatus: (
    id: string,
    option: Partial<Omit<TourDay, 'id' | 'routes'>>
  ) => void
}

const Tour = (props: TourProps) => {
  const { productId, data, updateTourDayStatus } = props
  const [stepLength, setStepLength] = useState<number>()

  const doJob = async (fn: () => any, data: TourDay, title: string) => {
    try {
      const info = await fn()
      console.log('==', title, info)
      updateTourDayStatus(data.id, {
        currentStep: data.currentStep + 1,
        info: title,
        productId: data.currentStep === 0 ? info.newProductId : data.productId
      })
      return info
    } catch (error) {
      updateTourDayStatus(data.id, {
        status: 'failed',
        info: title
      })
      return error
    }
  }

  type StepFn = (data: TourDay, productId: string) => Promise<any>

  useEffect(() => {
    const finish = async (data: TourDay) => {
      updateTourDayStatus(data.id, { status: 'succeed', info: '创建完成' })
    }

    const stepsMap: StepFn[] = [
      (data, productId) =>
        doJob(() => productDuplicate(productId), data, '复制产品'),
      (data, productId) =>
        doJob(() => saveSaleControlInfo(data.productId), data, '销售控制'),
      (data, productId) =>
        doJob(() => saveProduct(data.productId), data, '产品信息'),
      (data, productId) =>
        doJob(() => saveProductRichText(data.productId), data, '产品图文'),
      (data, productId) =>
        doJob(
          () => saveTourDailyDetail(data.productId, data.routes),
          data,
          '行程描述'
        ),
      (data, productId) =>
        doJob(() => savePackage(data.productId), data, '套餐管理'),
      (data, productId) =>
        doJob(
          () => savePriceInventory(productId, data.productId),
          data,
          '价格库存班期'
        ),
      (data, productId) =>
        doJob(
          () => saveProductResource(productId, data.productId),
          data,
          '资源配置'
        ),
      (data, productId) =>
        doJob(() => saveClauses(data.productId), data, '条款维护'),
      (data, productId) =>
        doJob(() => saveLineInfo(data.productId), data, '线路及交通'),
      (data, productId) =>
        doJob(() => updateResourceActive(data.productId), data, '激活产品'),
      (data, productId) => finish(data)
    ]

    setStepLength(stepsMap.length)
    if (
      productId &&
      data.status === 'running' &&
      data.currentStep < stepsMap.length
    ) {
      stepsMap[data.currentStep](data, productId)
    }
  }, [productId, data])

  return (
    <div style={{ padding: '8px 16px' }}>
      {data?.id}
      <div>
        <div>
          {data?.productId ? data?.productId + ' | ' : ''}
          {data?.info}
        </div>
        <div>
          <Progress
            percent={Math.floor((data?.currentStep + 1) / stepLength* 100)}
            size="small"
          />
        </div>
      </div>
      {data?.status === 'failed' && (
        <Button
          onClick={() => {
            updateTourDayStatus(data.id, { status: 'wait' })
          }}
        >
          重试
        </Button>
      )}
    </div>
  )
}

export default Tour
