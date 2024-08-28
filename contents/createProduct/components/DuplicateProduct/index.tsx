import { Button, Drawer, Flex, Input, message, Progress } from "antd";
import React, { useState } from "react";

import { getTourDaily } from "../scripts/getProductBaseInfo";
import { getProductDetail } from "../scripts/getProductDetail";
import { duplicateProduct } from "../util";

type DuplicateProductProps = {};
message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});

const DuplicateProduct = (props: DuplicateProductProps) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [productId, setProductId] = useState(
    queryParams.get("productid") || queryParams.get("productId"),
  );
  const [productInfo, setProductInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createSubProduct = async () => {
    if (!productId) {
      message.error("请输入产品ID");
      return;
    }
    setLoading(true);
    try {
      const [{ baseInfo }, { tourDaily }] = await Promise.all([
        getProductDetail(productId),
        getTourDaily(productId),
      ]);

      await duplicateProduct(
        { ...baseInfo, routes: tourDaily.tourInfo.tourDailyDescriptions },
        (product) => {
          setProductInfo(product);
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("productInfo", productInfo);
  return (
    <>
      <span onClick={() => setIsModalOpen(true)}>复制产品</span>
      <div>
        <Drawer
          title="复制产品"
          width={900}
          open={isModalOpen}
          onClose={handleCancel}
          maskClosable={false}
          zIndex={10000}
          footer={
            <Flex justify="flex-end" gap={16}>
              <Button onClick={handleCancel}>取消</Button>
              <Button type="primary" onClick={handleOk}>
                确认
              </Button>
            </Flex>
          }>
          <Flex vertical gap={16}>
            <Flex gap={16}>
              <Input
                placeholder="输入产品 ID"
                value={productId}
                onChange={(v) =>
                  setProductId(v.target.value?.replace(/\s+/, ""))
                }
              />
              <Button
                type="primary"
                loading={loading}
                onClick={createSubProduct}>
                开始复制
              </Button>
            </Flex>
            <div>
              <strong>产品信息：</strong>
              <span>
                {productInfo?.name ||
                  "输入产品ID，点击【开始复制】按钮复制当前产品 "}
              </span>
            </div>

            <div style={{ fontSize: 14, marginTop: 10 }}>
              <div>新产品ID：{productInfo?.newProductId}</div>
              <Progress
                percent={Math.floor(
                  (productInfo?.current / productInfo?.total) * 100,
                )}
                size="small"
              />
            </div>
          </Flex>
        </Drawer>
      </div>
    </>
  );
};

export default DuplicateProduct;
