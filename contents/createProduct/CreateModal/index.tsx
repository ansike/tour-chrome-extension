import { Button, Card, Drawer, Flex, Input, message, Modal } from "antd";
import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";

import {
  getTourDaily,
  type TourDailyDescription,
} from "~/contents/createProduct/scripts/getProductBaseInfo";
import { getProductDetail } from "~/contents/createProduct/scripts/getProductDetail";

import type { TourDay } from "./interface";
import Tour from "./Tour";
import { downloadXslx, permuteWithDeletions } from "./util";

type CreateModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
};

const CreateModal = (props: CreateModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const queryParams = new URLSearchParams(window.location.search);
  const [productId, setProductId] = useState(
    queryParams.get("productid") || queryParams.get("productId"),
  );
  const [messageApi, contextHolder] = message.useMessage();
  const [productInfo, setProductInfo] = useState<any>();
  const [originRoute, setOriginRoute] = useState<TourDailyDescription[]>([]);
  const [routes, setRoutes] = useState<TourDay[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 获取产品信息，开始分裂线路
  const getProduct = async () => {
    if (!productId) {
      return messageApi.info("请输入产品ID");
    }
    try {
      setLoading(true);
      const [{ baseInfo }, { tourDaily }] = await Promise.all([
        getProductDetail(productId),
        getTourDaily(productId),
      ]);
      setProductInfo(baseInfo);
      const _originRoutes = tourDaily.tourInfo.tourDailyDescriptions || [];
      setOriginRoute(_originRoutes);
      const routes = permuteWithDeletions([..._originRoutes]);
      console.log("路线组合", routes);
      setRoutes(routes.slice(0,1));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateTourDayStatus = (
    id: string,
    option: Partial<Omit<TourDay, "id" | "routes">>,
  ) => {
    setRoutes((val) =>
      val.map((v) => {
        if (v.id === id) {
          return { ...v, ...option };
        }
        return v;
      }),
    );
  };

  useEffect(() => {
    const data = routes.reduce<{ running: TourDay[]; wait: TourDay[] }>(
      (pre, cur) => {
        if (cur.status === "running") {
          pre.running.push(cur);
        }
        if (cur.status === "wait") {
          pre.wait.push(cur);
        }
        return pre;
      },
      { running: [], wait: [] },
    );

    if (data.running.length < 2 && data.wait.length > 0) {
      const task = data.wait.shift();
      updateTourDayStatus(task.id, { status: "running" });
    }
  }, [routes]);

  const isLoading = routes.some((route) =>
    ["running", "wait"].includes(route?.status),
  );

  return (
    <div>
      <Drawer
        title="分裂产品"
        width={800}
        open={isModalOpen}
        onClose={handleCancel}
        maskClosable={false}
        zIndex={1000000000000}
        footer={
          <Flex justify="flex-end" gap={16}>
            <Button onClick={handleCancel}>取消</Button>
            <Button type="primary" onClick={handleOk}>
              确认
            </Button>
          </Flex>
        }>
        {contextHolder}
        <Flex vertical gap={16}>
          <Flex gap={16}>
            <Input
              placeholder="输入产品 ID"
              value={productId}
              onChange={(v) => setProductId(v.target.value?.replace(/\s+/, ""))}
            />
            <Button
              type="primary"
              loading={loading}
              disabled={isLoading}
              onClick={getProduct}>
              分裂当前产品
            </Button>
            <Button
              type="primary"
              // disabled={isLoading || !routes.length}
              onClick={() => {
                const datesStr = routes
                  .map((route) => route.productId)
                  .join(",");
                copy(datesStr);
                messageApi.open({
                  type: "success",
                  content: `copy success`,
                });
              }}>
              复制分裂的产品ID
            </Button>
            <Button
              type="primary"
              disabled={isLoading || !routes.length}
              onClick={() => {
                downloadXslx(routes, productId);
              }}>
              下载数据
            </Button>
          </Flex>
          <div>
            <strong>产品信息：</strong>
            <span>
              {productInfo?.name ||
                "输入产品ID，点击【分裂当前产品】按钮分裂当前产品 "}
            </span>
          </div>
          {originRoute.length > 0 && (
            <div>
              {originRoute.map((route) => {
                return (
                  <div key={route.orderDay}>
                    <strong>{`D${route.orderDay}: `}</strong>
                    {route.dailyDescription}
                  </div>
                );
              })}
            </div>
          )}
          {routes.length > 0 && (
            <Card>
              {routes.map((val) => {
                return (
                  <Card.Grid key={val.id} style={{ width: "25%", padding: 0 }}>
                    <Tour
                      productId={productId}
                      data={val}
                      updateTourDayStatus={updateTourDayStatus}
                    />
                  </Card.Grid>
                );
              })}
            </Card>
          )}
        </Flex>
      </Drawer>
    </div>
  );
};

export default CreateModal;
