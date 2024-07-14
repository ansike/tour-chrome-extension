import React, { useRef, useState } from 'react'
import { Button, Card, Drawer, Flex, Input, Modal, message } from 'antd'
import { getProductDetail } from '~/contents/createProduct/scripts/getProductDetail'
import { getTourDaily, type TourDailyDescription, type TourInfo } from '~/contents/createProduct/scripts/getProductBaseInfo'
import type { TourDay } from './interface'
import Tour from './Tour'
// import { splitProduct } from './util'

// import cssText from 'data-text:~/contents/createProduct/style.css'

// export const getStyle = () => {
//   const style = document.createElement('style')
//   style.textContent = cssText
//   return style
// }

type CreateModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (bool: boolean) => void
}
const CreateModal = (props: CreateModalProps) => {
  const { isModalOpen, setIsModalOpen } = props
  const queryParams = new URLSearchParams(window.location.search)
  const [productId, setProductId] = useState(
    queryParams.get('productid') || queryParams.get('productId')
  )
  const [messageApi, contextHolder] = message.useMessage()
  const [productInfo, setProductInfo] = useState<any>();
  const [tourDay, setTourDay] = useState<TourDay[]>([]);
  const tourInfoRef = useRef<TourInfo>();

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  /**
   * 由豆包生成
   * @param arr 
   * @returns 
   */
  function permuteWithDeletions(list: TourDailyDescription[] = []): TourDay[] {
    if (list.length <= 3) {
      return [{
        id: list.map(v => v.orderDay).join('-'),
        status: 'init',
        routes: list
      }]
    }
    const first = list.shift();
    const last = list.pop();
    const results: TourDailyDescription[][] = [];

    let count = 0;
    // for (; count < arr.length; count++) {
    const subCombinations = generateSubCombinations(list, count);
    for (const subCombination of subCombinations) {
      const permutations = generatePermutations(subCombination);
      results.push(...permutations);
    }
    // }

    return results.map(val => [first, ...val, last]).map((val, i) => ({
      id: val.map(v => v.orderDay).join('-'),
      status: 'init',
      routes: val.map((v, i) => ({ ...v, orderDay: i + 1 }))
    }));

    function generateSubCombinations(arr: TourDailyDescription[], count: number): TourDailyDescription[][] {
      const combinations: TourDailyDescription[][] = [];

      const choose = (combination: TourDailyDescription[], start: number) => {
        if (combination.length === arr.length - count) {
          combinations.push([...combination]);
          return;
        }

        for (let i = start; i < arr.length; i++) {
          combination.push(arr[i]);
          choose(combination, i + 1);
          combination.pop();
        }
      };

      choose([], 0);

      return combinations;
    }

    function generatePermutations(arr: TourDailyDescription[]): TourDailyDescription[][] {
      if (arr.length === 0) return [[]];
      const result: TourDailyDescription[][] = [];
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const subPermutations = generatePermutations(remaining);
        for (const subPermutation of subPermutations) {
          result.push([current, ...subPermutation]);
        }
      }
      return result;
    }
  }

  const getProduct = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }
    const [{ baseInfo }, { tourDaily }] = await Promise.all([getProductDetail(productId), getTourDaily(productId)])
    tourInfoRef.current = tourDaily.tourInfo;
    setProductInfo(baseInfo)
    const routes = permuteWithDeletions([...(tourDaily.tourInfo.tourDailyDescriptions || [])])
    console.log('路线组合', routes);
    setTourDay(routes)
  }

  const updateTourDayStatus = (id: string, option: { status?: string, productId?: string }) => {
    const { status = 'init', productId } = option;
    setTourDay(val => val.map(v => ({
      ...v,
      status: v.id === id ? status : v.status,
      productId: v.productId ? v.productId : v.id === id ? (productId || '') : v.productId
    })))
  }

  console.log({ tourDay });

  return (
    <div>
      {contextHolder}
      <Drawer
        title='分裂产品'
        width={800}
        open={isModalOpen}
        onClose={handleCancel}
        maskClosable={false}
        footer={
          <Flex justify='flex-end' gap={16}>
            <Button onClick={handleCancel}>取消</Button>
            <Button type='primary' onClick={handleOk}>保存</Button>
          </Flex>
        }
      >
        <Flex vertical gap={16}>
          <Flex gap={16}>
            <Input
              placeholder='输入产品 ID'
              value={productId}
              onChange={v => setProductId(v.target.value?.replace(/\s+/, ''))}
            />
            <Button type='primary' onClick={getProduct}>
              分裂当前产品
            </Button>
          </Flex>
          <div>
            <strong>产品信息：</strong>
            <span>{productInfo?.name || '-'}</span>
          </div>
          {tourDay.length > 0 && (
            <Card>
              {
                tourDay.map(val => {
                  return (
                    <Card.Grid key={val.id} style={{ width: '25%', padding: 0 }}>
                      <Tour
                        productId={productId}
                        data={val}
                        updateTourDayStatus={updateTourDayStatus}
                        tourDailyDescriptions={val.routes}
                      />
                    </Card.Grid>
                  )
                })
              }
            </Card>
          )}
        </Flex>
      </Drawer>
    </div>
  )
}

export default CreateModal
