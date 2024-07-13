import React, { useState } from 'react';
import { Button, Steps, message, type StepProps } from 'antd';

import { getProductDetail } from '../scripts/getProductDetail';
import { getTourDaily } from '../scripts/getProductBaseInfo';

type ProductStepsProps = {
  productId: string
}

const ProductSteps = (props: ProductStepsProps) => {
  const { productId } = props
  const [current, setCurrent] = useState(1);
  const [productInfo, setProductInfo] = useState(false);
  const [messageApi, contextHolder] = message.useMessage()
  const [stepItems, setStepItems] = useState<StepProps[]>([
    {
      title: '销售控制',
      status: 'wait'
    },
    {
      title: '产品信息',
      status: 'wait'
    },
    {
      title: '产品图文',
      status: 'wait'
    },
    {
      title: '行程描述',
      status: 'wait'
    },
    {
      title: '套餐管理',
      status: 'wait'
    },
    {
      title: '价格库存班期',
      status: 'wait'
    },
    {
      title: '资源配置',
      status: 'wait'
    },
    {
      title: '条款维护',
      status: 'wait'
    }
  ])

  const split = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }
    const { baseInfo } = await getProductDetail(productId)
    setProductInfo(baseInfo)

    const tour = await getTourDaily(productId);
    // console.log(tour.tourInfo)

    // await splitProduct();
    // TODO 分裂产品
    // const { baseInfo } = await getProductDetail(productId)
    // setProductInfo(baseInfo)
  }

  console.log({productInfo});

  return (
    <div style={{ marginTop: '20px' }}>
      {contextHolder}
      <Button type='primary' onClick={split}>
        分裂产品
      </Button>
      <Steps
        style={{marginTop: '20px'}}
        current={current}
        direction="vertical"
        items={stepItems}
      />
    </div>
  )
}

export default ProductSteps
