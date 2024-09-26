import {
  Button,
  Drawer,
  Flex,
  Form,
  InputNumber,
  message,
  Progress,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { useEffect, useState } from "react";

import { carType, PRICE_STEP } from "~contents/createProduct/constant";

import { getAllCarResource } from "./utils/getAllCarResource";
import { searchProviderContactCardList } from "./utils/searchProviderContactCardList";
import { createCarResource, downloadCarResources, downloadXslx } from "./utils/util";

message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});
const CreateCarResource = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState<
    {
      label: string;
      total?: number;
      step?: number;
      items: string[];
      start?: number;
      end?: number;
    }[]
  >([
    // {
    //   label: "5座",
    //   items: ["1", "2", "3", "4"],
    //   start: 100,
    //   end: 250,
    // },
    // {
    //   label: "7座",
    //   items: ["1", "2", "3", "4"],
    //   start: 200,
    //   end: 250,
    // },
  ]);

  useEffect(() => {
    searchUserList();
  }, []);

  const onFinish = async () => {
    try {
      const { userId, cars } = await form.validateFields();

      const notMatch = cars.find((v) => {
        return v.start % PRICE_STEP !== 0 || v.end % PRICE_STEP !== 0;
      });

      console.log(notMatch);
      if (notMatch) {
        return message.error(
          `起始价格和结束价格必须是${PRICE_STEP}的倍数: ${notMatch.label}`,
        );
      }

      setData(
        cars.map((v) => {
          return {
            ...v,
            total: (v.end - v.start) / PRICE_STEP + 1,
          };
        }),
      );

      const user = userList.find((it) => it.value === userId);

      // 设置3个并发，避免请求速度太快，接口错误
      for (let i = 0; i < cars.length; i += 4) {
        await Promise.all(
          cars.slice(i, i + 4).map(async (car) => {
            await createCarResource(car, user, (item) => {
              setData((prev) => {
                return prev.map((v) => {
                  if (v.label === car.label) {
                    return {
                      ...v,
                      items: [...(v.items || []), item.resourceId],
                    };
                  }
                  return v;
                });
              });
            });
          }),
        );
      }

      console.log(cars);
      setLoading(true);
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

  const download = () => {
    downloadXslx(data);
  };

  const searchUserList = async (val = "") => {
    const { contactCardList } = await searchProviderContactCardList(val);

    setUserList(
      contactCardList.map((it) => {
        return {
          ...it,
          label: it.name,
          value: it.contactCardId,
        };
      }),
    );
  };

  const getCarResource = async () => {
    const { userId } = await form.validateFields();
    const user = userList.find((it) => it.value === userId);
    const res = await getAllCarResource(user);
    downloadCarResources(res);
  };

  // const formatDatePrice = () => {
  //   //
  // };

  return (
    <>
      <span onClick={() => setIsModalOpen(true)}>创建用车资源</span>
      <div>
        <Drawer
          title="创建用车资源"
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
          <Flex vertical gap={12}>
            <Flex vertical gap={12}>
              <Form form={form} layout="inline">
                <Form.List name="cars" initialValue={carType}>
                  {(fields) => {
                    return (
                      <>
                        {fields.map(({ key, name }, idx) => {
                          const conf = carType[idx];
                          return (
                            <Form.Item
                              label={conf.label}
                              key={key}
                              style={{ width: 220, marginRight: 20 }}>
                              <Flex>
                                <Form.Item
                                  style={{ marginBottom: "24px" }}
                                  name={[name, "start"]}
                                  required
                                  rules={[
                                    {
                                      required: true,
                                      message: "起始价格必填",
                                    },
                                  ]}>
                                  <InputNumber
                                    min={100}
                                    step={PRICE_STEP}
                                    placeholder="起始价格"
                                  />
                                </Form.Item>
                                <Form.Item
                                  style={{ marginBottom: "24px" }}
                                  name={[name, "end"]}
                                  required
                                  rules={[
                                    {
                                      required: true,
                                      message: "终止价格必填",
                                    },
                                  ]}>
                                  <InputNumber
                                    min={100}
                                    step={PRICE_STEP}
                                    placeholder="终止价格"
                                  />
                                </Form.Item>
                              </Flex>
                            </Form.Item>
                          );
                        })}
                      </>
                    );
                  }}
                </Form.List>
                <Form.Item
                  name="userId"
                  label="联系人"
                  required
                  rules={[{ required: true, message: "请选择联系人" }]}>
                  <Select
                    style={{ width: 200 }}
                    options={userList}
                    showSearch
                    allowClear
                    onSearch={searchUserList}
                    placeholder="请搜索选择用户"></Select>
                </Form.Item>
              </Form>
              <div>
                <Button loading={loading} type="primary" onClick={onFinish}>
                  开始生成
                </Button>
                <Button
                  style={{ marginLeft: 20 }}
                  type="primary"
                  onClick={getCarResource}>
                  获取所有用车资源
                </Button>
                {/* <Button
                  style={{ marginLeft: 20 }}
                  type="primary"
                  onClick={formatDatePrice}>
                  格式化节假日价格
                </Button> */}
                <Button
                  style={{ marginLeft: 20 }}
                  type="primary"
                  loading={loading}
                  onClick={download}>
                  下载数据
                </Button>
              </div>
            </Flex>
            <Flex vertical gap={10}>
              {data.length > 0 ? (
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 10,
                  }}>
                  生成结果
                </span>
              ) : null}
              <Flex gap={4} style={{ overflowX: "scroll" }}>
                {data.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <span style={{ fontWeight: "bold" }}>{item.label}</span>
                      &nbsp;|&nbsp;
                      <span style={{ fontWeight: "bold" }}>
                        {item?.items?.length || 0}/{item.total}
                      </span>
                      <br />
                      <Progress
                        percent={(item?.items?.length / item.total) * 100}
                        showInfo={false}
                      />
                      <div
                        style={{
                          width: 160,
                          height: 500,
                          overflow: "auto",
                        }}>
                        {(item?.items || []).map((v, idx) => {
                          return (
                            <div key={idx}>
                              <span>{v}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </Drawer>
      </div>
    </>
  );
};

export default CreateCarResource;
