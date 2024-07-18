import React, { useEffect, useState } from 'react'
import { Button, Card, Drawer, Flex, Input, Modal, message } from 'antd'
import { getProductDetail } from '~/contents/createProduct/scripts/getProductDetail'
import { getTourDaily, type TourDailyDescription, type TourInfo } from '~/contents/createProduct/scripts/getProductBaseInfo'
import type { TourDay } from './interface'
import Tour from './Tour'
import { downloadXslx } from './util'

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
  const [originRoute, setOriginRoute] = useState<TourDailyDescription[]>([]);
  const [routes, setRoutes] = useState<TourDay[]>([]);
  const [loading, setLoading] = useState(false);

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
        status: 'wait',
        routes: list,
        currentStep: 0
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
      status: 'wait',
      routes: val.map((v, i) => ({ ...v, orderDay: i + 1 })),
      currentStep: 0
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
    try {
      setLoading(true);
      const [{ baseInfo }, { tourDaily }] = await Promise.all([getProductDetail(productId), getTourDaily(productId)])
      setProductInfo(baseInfo)
      const _originRoutes = tourDaily.tourInfo.tourDailyDescriptions || [];
      setOriginRoute(_originRoutes);
      const routes = permuteWithDeletions([..._originRoutes])
      console.log('路线组合', routes);
      setRoutes(routes.slice(1));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const updateTourDayStatus = (id: string, option: Partial<Omit<TourDay, 'id' | 'routes'>>) => {
    setRoutes(val => val.map(v => {
      if (v.id === id) {
        return ({ ...v, ...option })
      }
      return v;
    }))
  }

  useEffect(() => {
    const data = routes.reduce<{ running: TourDay[]; wait: TourDay[] }>((pre, cur) => {
      if (cur.status === 'running') {
        pre.running.push(cur);
      }
      if (cur.status === 'wait') {
        pre.wait.push(cur);
      }
      return pre;
    }, { running: [], wait: [] });

    if (data.running.length < 2 && data.wait.length > 0) {
      const task = data.wait.shift();
      updateTourDayStatus(task.id, { status: 'running' })
    }
  }, [routes])

  const isLoading = routes.some(route => ['running', 'wait'].includes(route?.status));

  return (
    <div>
      {contextHolder}
      <Drawer
        title='分裂产品'
        width={800}
        open={isModalOpen}
        onClose={handleCancel}
        maskClosable={false}
        zIndex={1000000000000}
        footer={
          <Flex justify='flex-end' gap={16}>
            <Button onClick={handleCancel}>取消</Button>
            <Button type='primary' onClick={handleOk}>确认</Button>
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
            <Button type='primary' loading={loading} disabled={isLoading} onClick={getProduct}>
              分裂当前产品
            </Button>
            <Button type='primary' disabled={isLoading || !routes.length} onClick={() => {
              downloadXslx(routes, productId)
            }}>
              下载数据
            </Button>
          </Flex>
          <div>
            <strong>产品信息：</strong>
            <span>{productInfo?.name || '输入产品ID，点击【分裂当前产品】按钮分裂当前产品 '}</span>
          </div>
          {
            originRoute.length > 0 && (
              <div>
                {
                  originRoute.map(route => {
                    return (
                      <div key={route.orderDay}>
                        <strong>{`D${route.orderDay}: `}</strong>
                        {route.dailyDescription}
                      </div>
                    )
                  })
                }
              </div>
            )
          }
          {routes.length > 0 && (
            <Card>
              {
                routes.map(val => {
                  return (
                    <Card.Grid key={val.id} style={{ width: '25%', padding: 0 }}>
                      <Tour
                        productId={productId}
                        data={val}
                        updateTourDayStatus={updateTourDayStatus}/>
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