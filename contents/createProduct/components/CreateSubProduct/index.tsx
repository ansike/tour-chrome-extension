import { CheckCircleTwoTone } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Flex,
  Input,
  message,
  Progress,
} from "antd";
import React, { useState } from "react";

import { getProductDetail } from "../scripts/getProductDetail";
import { subProductCategories } from "../SplitProduct/constant";
import { useAirportSelect } from "../useAirportSelect";
import { createSubProductFn, createSubProductStepFns } from "../util";

type CreateModalProps = {};
message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});
const CreateSubProduct = (props: CreateModalProps) => {
  const queryParams = new URLSearchParams(window.location.search);
  const [productId, setProductId] = useState(
    queryParams.get("productid") || queryParams.get("productId"),
  );
  const [productInfo, setProductInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { arrivalAirport, departureAirport, dom } = useAirportSelect();
  
  const createSubProduct = async () => {
    if (!productId) {
      message.error("请输入产品ID");
      return;
    }
    setLoading(true);
    try {
      const { baseInfo, parentChilren } = await getProductDetail(productId);
      // 如果有父产品，说明当前为子产品不符合输入要求。
      if (parentChilren?.parentProductId) {
        setLoading(false);
        return message.error("当前的产品为子产品，请输入正确的母产品ID");
      }

      if (arrivalAirport) {
        subProductCategories.forEach((item) => {
          if (item.enter?.flight) {
            item.enter.flight.systemFlight.arrivalAirport = arrivalAirport;
          }
          if (item.leave?.flight) {
            item.leave.flight.systemFlight.departureAirport = departureAirport;
          }
        });
      }

      await createSubProductFn(
        {
          ...baseInfo,
          subProducts: JSON.parse(JSON.stringify(subProductCategories)),
        },
        (_, product) => {
          setProductInfo((prev) => ({ ...prev, ...baseInfo, ...product }));
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

  return (
    <>
      <span onClick={() => setIsModalOpen(true)}>创建子产品</span>
      <div>
        <Drawer
          title="创建子产品"
          width={900}
          open={isModalOpen}
          onClose={handleCancel}
          maskClosable={false}
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
                开始创建
              </Button>
            </Flex>
            <div>
              <strong>产品信息：</strong>
              <span>
                {productInfo?.name ||
                  "输入产品ID，点击【开始创建】按钮创建当前产品的子产品 "}
              </span>
            </div>
            {dom}
            <div style={{ fontSize: 14, marginTop: 10 }}>
              <span
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>
                子产品：
              </span>
              {productInfo?.subProducts?.map((pro) => {
                return (
                  <div
                    key={pro.productId}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}>
                    {pro.lineDescription} | &nbsp;
                    {pro.step === createSubProductStepFns.length ? (
                      <>
                        <span style={{ marginRight: 10 }}>
                          {pro.productId || ""}
                        </span>
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                      </>
                    ) : (
                      <>
                        <span style={{ marginRight: 10 }}>
                          {pro.productId || ""}
                        </span>
                        <Progress
                          style={{ width: 120, display: "inline-block" }}
                          size="small"
                          percent={Math.floor(
                            (pro.step / createSubProductStepFns.length) * 100,
                          )}
                        />
                      </>
                    )}
                    <br />
                  </div>
                );
              })}
            </div>
          </Flex>
        </Drawer>
      </div>
    </>
  );
};

export default CreateSubProduct;
