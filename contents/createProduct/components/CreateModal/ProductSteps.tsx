import { Flex, Steps, message, type StepProps } from 'antd'
import React, { useEffect, useState } from 'react';

import { productDuplicate } from '~contents/createProduct/components/scripts/productDuplicate';
import { StepsConfMap, CreateStepConstant } from '~/contents/createProduct/CreateModal/constant';
import { saveSaleControlInfo } from '~contents/createProduct/components/scripts/saveSaleControlInfo';
import { saveProduct } from '~contents/createProduct/components/scripts/saveProductBaseInfo';
import { saveProductRichText } from '~contents/createProduct/components/scripts/savedescriptioninfo';
import { savePackage } from '~contents/createProduct/components/scripts/savePackageItem';
import { saveProductResource } from '~/contents/createProduct/scripts/saveProductMaintainType';
import type { TourDay } from "./interface";
import { savePriceInventory } from '~contents/createProduct/components/scripts/savePriceInventory';
// import { saveLineInfo } from '../scripts/saveLineInfo';
import { updateResourceActive } from '../scripts/updateResourceActive';
import { saveClauses } from '~contents/createProduct/components/scripts/saveClauses';

import { saveTourDailyDetail } from '../scripts/saveTourDailyDetail';
import { formatData } from '../util';

type ProductStepsProps = {
  data: TourDay;
  productId: string;
  tourDailyDescriptions: any[];
  updateTourDayStatus: (id: string, option: {status?: string, productId?: string}) => void;
  setDownloadData:(data:any) => void
}

const ProductSteps = (props: ProductStepsProps) => {
  const { data, productId, tourDailyDescriptions, updateTourDayStatus, setDownloadData} = props
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
      console.log('==', title, info);

      setStepItems((prev) => {
        const step = prev.find(it => it.title === title)
        step.status = 'finish';
        step.description = `${title} success: ${JSON.stringify(info)}`;
        return prev;
      })

      setCurrent(prev=>{
        const next = prev+1;
        updateTourDayStatus(data.id, {status: `${next+1}/${stepItems.length} [${title}]`});
        return next
      });

      return info;
    } catch (error) {
      setStepItems((prev) => {
        prev.find(it => it.title === title).status = 'error';
        return prev;
      })

      console.log(`${title} error`, error);
      updateTourDayStatus(data.id, {status:`${current+1}/${stepItems.length} ${title} error ${error}`});
      return;
    }
  }

  const split = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }

    const product = await doJob(() => {
      return productDuplicate(productId);
    }, CreateStepConstant.DUPLICATE_PRODUCT);
    
    const newProductId= product.newProductId

    setDownloadData(prev => {
      const newArray =  formatData(newProductId, data)
      return [...prev, newArray]
    })

    updateTourDayStatus(data.id, {productId: newProductId});

    const sale = await doJob(()=>{
      return saveSaleControlInfo(newProductId);
    }, CreateStepConstant.SALE_CONTROL);

    const productInfo = await doJob(()=>{
        return saveProduct(newProductId);
      },  CreateStepConstant.PRODUCT_INFO);

    const richText = await doJob(()=>{
      return saveProductRichText(newProductId);
    },  CreateStepConstant.PRODUCT_RICHTEXT);

    const dailyInfo = await doJob(() => {
      return saveTourDailyDetail(newProductId, tourDailyDescriptions);
    }, CreateStepConstant.DAILY_INFO);

    const packageRes = await doJob(()=>{
      return savePackage(newProductId);
    },  CreateStepConstant.PACKAGE_MANAGE);
    
    const priceInventory = await doJob(() => {
      return savePriceInventory(productId, newProductId);
    }, CreateStepConstant.PRICE_INVENTORY_SCHEDULE)
    
    const resource = await doJob(()=>{
      return saveProductResource(productId, newProductId);
    },  CreateStepConstant.RESOURCE);

    const clause = await doJob(() => {
      return saveClauses(newProductId);
    }, CreateStepConstant.CLAUSE)
    
    // console.log(clause);


    // const newProductId = '48474013'
    // const childProduct = await doJob(() => {
    //   return saveLineInfo(newProductId);
    // }, CreateStepConstant.TRAFFIC_LINE)


    // 设置产品生效
    const activeProduct = await doJob(() => {
      return updateResourceActive(newProductId);
    }, CreateStepConstant.ACTIVE_PRODUCT)
    console.log('active ->', activeProduct)
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
