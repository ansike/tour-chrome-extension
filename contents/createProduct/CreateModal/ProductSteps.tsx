import { Button, Flex, Steps, message, type StepProps } from 'antd'
import React, { useEffect, useState } from 'react';

import { getProductDetail } from '~/contents/createProduct/scripts/getProductDetail';
import { getTourDaily } from '~/contents/createProduct/scripts/getProductBaseInfo';
import { productDuplicate } from '~/contents/createProduct/scripts/productDuplicate';
import { StepsConfMap, CreateStepConstant } from '~/contents/createProduct/CreateModal/constant';
import { saveSaleControlInfo } from '~/contents/createProduct/scripts/saveSaleControlInfo';
import { saveProduct } from '~/contents/createProduct/scripts/saveProductBaseInfo';
import { saveProductRichText } from '~/contents/createProduct/scripts/savedescriptioninfo';
import type { TourDay } from "./interface";


type ProductStepsProps = {
  data: TourDay;
  productId: string;
  tourDailyDescriptions: any[];
  updateTourDayStatus: (id: string, status: string) => void;
}

const ProductSteps = (props: ProductStepsProps) => {
  const { data, productId, tourDailyDescriptions, updateTourDayStatus } = props
  const [current, setCurrent] = useState(0);
  const [messageApi, contextHolder] = message.useMessage()
  const [stepItems, setStepItems] = useState<StepProps[]>(StepsConfMap)

  useEffect(()=>{
    if(productId){
      split();
    }
  },[productId])

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

      setCurrent(prev=>{
        const next = prev+1;
        updateTourDayStatus(data.id, `${next+1}/${stepItems.length} [${title}]`);
        return next
      });

      return info;
    } catch (error) {
      setStepItems((prev)=>{
        prev.find(it=>it.title===title).status = 'error';
        return prev;
      })

      console.log(`${title} error`, error);
      updateTourDayStatus(data.id, `${current+1}/${stepItems.length} ${title} error ${error}`);
      return;
    }
  }

  useEffect(()=>{
    if(productId){
      split();
    }
  },[productId])

  const split = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }

    const product = await doJob(()=>{
      return productDuplicate(productId);
    }, CreateStepConstant.DUPLICATE_PRODUCT);
    console.log('newProductId', product.newProductId);
    const newProductId=product.newProductId

    // const newProductId="48406430"
    
    const sale = await doJob(()=>{
      return saveSaleControlInfo(newProductId);
    },  CreateStepConstant.SALE_CONTROL);

    const productInfo = await doJob(()=>{
        return saveProduct(newProductId);
      },  CreateStepConstant.PRODUCT_INFO);

    // const newProductId="48407172"

    const richText = await doJob(()=>{
      return saveProductRichText(newProductId);
    },  CreateStepConstant.PRODUCT_RICHTEXT);

    console.log(richText);
    
  }
  
  return (
    <Flex vertical>
      {contextHolder}
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
