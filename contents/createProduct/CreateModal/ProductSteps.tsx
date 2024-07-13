import React, { useEffect, useState } from 'react';
import { Button, Flex, Steps, message, type StepProps } from 'antd'

import { getProductDetail } from '~/contents/createProduct/scripts/getProductDetail';
import { getTourDaily } from '~/contents/createProduct/scripts/getProductBaseInfo';
import { productDuplicate } from '~/contents/createProduct/scripts/productDuplicate';
import { StepsConfMap, CreateStepConstant } from '~/contents/createProduct/CreateModal/constant';
import { saveSaleControlInfo } from '~/contents/createProduct/scripts/saveSaleControlInfo';
import { saveProduct } from '~/contents/createProduct/scripts/saveProductBaseInfo';
import { saveProductRichText } from '~/contents/createProduct/scripts/savedescriptioninfo';

type ProductStepsProps = {
  productId: string;
  tourDailyDescriptions: any[];
}

const ProductSteps = (props: ProductStepsProps) => {
  const { productId, tourDailyDescriptions } = props
  const [current, setCurrent] = useState(0);
  const [messageApi, contextHolder] = message.useMessage()
  const [stepItems, setStepItems] = useState<StepProps[]>(StepsConfMap)

  // useEffect(()=>{

  // },[productId, ])

  const doJob = async (fn: () => any, title: string) => {
    try {
      const info = await fn();
      console.log('==',title, info);

      setStepItems((prev)=>{
        const step = prev.find(it=>it.title===title)
        step.status = 'finish';
        step.description = `${title} success: ${JSON.stringify(info)}`;
        return prev;
      })
      setCurrent(prev=>prev+1);
      return info;
    } catch (error) {
      setStepItems((prev)=>{
        prev.find(it=>it.title===title).status = 'error';
        return prev;
      })

      console.log(`${title} error`, error);
      return;
    }
  }

  useEffect(()=>{
    if(productId){
      split();
    }
  },[productId])

  const split = async () => {
    // if (!productId) {
    //   return messageApi.info('请输入产品ID')
    // }

    const product = await doJob(()=>{
      return productDuplicate(productId);
    }, CreateStepConstant.DUPLICATE_PRODUCT);
    console.log(product.newProductId);
    const newProductId=product.newProductId

    // const newProductId="48406430"
    
    const sale = await doJob(()=>{
      return saveSaleControlInfo(newProductId);
    },  CreateStepConstant.SALE_CONTROL);

    const productInfo = await doJob(()=>{
        return saveProduct(newProductId);
      },  CreateStepConstant.PRODUCT_INFO);
    console.log(productInfo);

    // const newProductId="48407172"

    const richText = await doJob(()=>{
      return saveProductRichText(newProductId);
    },  CreateStepConstant.PRODUCT_RICHTEXT);

    console.log(richText);
    
    
  }
  
  return (
    <Flex vertical>
      {contextHolder}
      {/* <Button type='primary' onClick={split}>
        分裂产品
      </Button> */}
      <Steps
        style={{ display: 'none' }}
        current={current}
        direction="vertical"
        items={stepItems}
      />
    </Flex>
  )
}

export default ProductSteps
