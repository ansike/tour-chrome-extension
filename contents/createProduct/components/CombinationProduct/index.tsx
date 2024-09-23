import { Button, Drawer, Flex, Form, Input, message, Progress } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";

import { getProductsDetail } from "../scripts/getProductDetail";
import Transmission from "./Transmission";
import { combinationProduct, fns, permutationProducts } from "./util";

message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});

const CombinationProduct = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<
    { key: string; currentStep?: number; productId?: string }[]
  >([]);

  const getProductsInfo = async () => {
    try {
      const { products } = await form.validateFields();
      const productIds = products.map((item) => item.productId);
      const productObjs = await getProductsDetail(productIds);
      const allProducts = permutationProducts(productObjs);
      return allProducts;
    } catch (error) {
      console.log(error);
      message.error(error.message);
    }
  };

  const onFinish = async (value) => {
    const { products, subTitle } = value;
    setLoading(true);
    try {
      const productObjs = await getProductsInfo();

      productObjs.forEach((item) => {
        item.forEach((element, idx) => {
          element.transmission = products[idx].transmission;
          element.productId = products[idx].productId;
          element.price = products[idx].price;
        });
      });
      console.log("组合中", productObjs);
      setData(
        productObjs.map((product) => ({
          currentStep: 0,
          key: product.map((item) => item.productId).join("-"),
        })),
      );
      await Promise.all(
        productObjs.map((product, idx) =>
          combinationProduct(product, subTitle, (item) => {
            setData((d) => {
              return d.map((i, j) => {
                if (idx === j) {
                  return {
                    ...i,
                    ...item,
                  };
                }
                return i;
              });
            });
          }),
        ),
      );
      console.log("组合成功");
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

  console.log("data", data);

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
            <Flex gap={24}>
              <Form
                style={{ width: 400 }}
                onFinish={onFinish}
                form={form}
                initialValues={{
                  products: [
                    { productId: "" },
                  ],
                  // products: [
                  //   { productId: "51434908" },
                  //   { productId: "51393762" },
                  // ],
                }}>
                <Form.List name="products">
                  {(fields, { add, remove }) => {
                    return (
                      <>
                        {fields.map(({ key, name }, idx) => {
                          return (
                            <div key={key}>
                              <Form.Item
                                style={{ marginBottom: "24px" }}
                                name={[name, "productId"]}
                                label={`产品${key} ID`}
                                required
                                rules={[
                                  {
                                    required: true,
                                    message: "产品ID必填",
                                  },
                                ]}>
                                <Input placeholder="请输入产品ID" />
                              </Form.Item>
                              {idx !== fields.length - 1 && (
                                <Transmission name={name} form={form} />
                              )}
                            </div>
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
                        </Form.Item>
                      </>
                    );
                  }}
                </Form.List>
                <Form.Item
                  name="subTitle"
                  label="副标题"
                  style={{ marginBottom: "24px" }}
                  required
                  rules={[
                    {
                      required: true,
                      message: "新产品副标题必填",
                    },
                  ]}>
                  <Input placeholder="请输入新产品的副标题" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={getProductsInfo}>
                    获取产品信息
                  </Button>
                  <Button
                    style={{ marginLeft: 20 }}
                    loading={loading}
                    type="primary"
                    htmlType="submit">
                    开始生成
                  </Button>
                </Form.Item>
              </Form>
            </Flex>
            {data.map((product, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <strong>
                      产品{idx + 1}：{product?.productId} &nbsp;
                    </strong>
                    <br />
                    <span>{product?.key}</span>
                    <br />
                    <Progress
                      percent={Math.floor(
                        (product?.currentStep / fns.length) * 100,
                      )}
                      size="small"
                    />
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
