import { Button, Drawer, Flex, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";

import { getProductsDetail } from "../scripts/getProductDetail";
import { combinationProduct } from "./util";

type CreateModalProps = {};
message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});

const CombinationProduct = (props: CreateModalProps) => {
  const [form] = useForm();
  const queryParams = new URLSearchParams(window.location.search);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onFinish = async (value) => {
    const { productIds } = value;
    if (productIds.find((item) => item === "")) {
      message.error("所有的产品ID都不能为空");
      return;
    }

    setLoading(true);
    try {
      console.log(productIds);
      const products = await getProductsDetail(productIds);
      setProducts(products);
      const d = await combinationProduct(products);
      console.log(d);

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
      <span onClick={() => setIsModalOpen(true)}>组合产品</span>
      <div>
        <Drawer
          title="组合产品"
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
            <div>
              <strong>产品信息：</strong>
              <span>
                输入产品ID，点击【开始生成】基于产品ID组合成不同的产品线路
              </span>
            </div>
            <Flex gap={16}>
              <Form
                onFinish={onFinish}
                form={form}
                initialValues={{ productIds: ["51434908", "51393762"] }}>
                <Form.List name="productIds">
                  {(fields, { add, remove }) => {
                    return (
                      <>
                        {fields.map((field, idx) => {
                          return (
                            <Form.Item
                              {...field}
                              label={`产品${idx + 1} ID`}
                              required
                              // rules={[
                              //   {
                              //     message: "请输入产品ID",
                              //     required: true,
                              //   },
                              // ]}
                              key={idx}>
                              <Input placeholder="请输入产品ID" />
                            </Form.Item>
                          );
                        })}
                        <Form.Item label="">
                          <Button
                            onClick={() => {
                              add("");
                            }}
                            type="dashed">
                            增加产品
                          </Button>
                          <Button
                            style={{ marginLeft: 20 }}
                            onClick={() => {
                              remove(fields.length - 1);
                            }}
                            type="dashed">
                            删除产品
                          </Button>
                          <Button
                            style={{ marginLeft: 20 }}
                            type="primary"
                            htmlType="submit">
                            开始生成
                          </Button>
                        </Form.Item>
                      </>
                    );
                  }}
                </Form.List>
              </Form>
            </Flex>
            {products.map((item, idx) => {
              return (
                <div key={item.baseInfo.productId}>
                  <div>
                    <strong>
                      产品{idx + 1}：{item.baseInfo.productId} &nbsp;
                    </strong>
                    <span>{item?.baseInfo.name}</span>
                  </div>
                  <div>
                    <strong>产品信息：</strong>
                    <span></span>
                  </div>
                </div>
              );
            })}
          </Flex>
        </Drawer>
      </div>
    </>
  );
};

export default CombinationProduct;
