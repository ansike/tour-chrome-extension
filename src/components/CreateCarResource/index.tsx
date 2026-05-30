import {
  Button,
  Checkbox,
  Drawer,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Progress,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import React, { type CSSProperties, useEffect, useRef, useState } from "react";

import { carType, PRICE_STEP } from "~src/constant";

import { getVendorId } from "../scripts/getVendorId";
import { getDefaultEditStartDate } from "./utils/editDatePrice";
import { buildExistingResourceKey, buildExistingResourceMap } from "./utils/history";
import {
  createCarResourceGroupsFromRows,
  type ResourceGroupResult,
  type ResourceGroupSummary,
} from "./utils/resourceGroup";
import { searchProviderContactCardList } from "./utils/searchProviderContactCardList";
import {
  collectExistingCarResourceRows,
  createCarResourcesByPrices,
  downloadCarResourceWorkbook,
} from "./utils/util";

message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});

const sectionStyle: CSSProperties = {
  border: "1px solid #e8edf5",
  borderRadius: 8,
  padding: 16,
  background: "#fff",
};

const sectionHeaderStyle: CSSProperties = {
  color: "#10264a",
  fontSize: 15,
  fontWeight: 700,
  marginBottom: 14,
};

const carGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "14px 16px",
};

const carPriceItemStyle: CSSProperties = {
  minWidth: 0,
  border: "1px solid #eef2f7",
  borderRadius: 8,
  padding: 12,
  background: "#fafcff",
};

const carTitleStyle: CSSProperties = {
  color: "#1f2d3d",
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 10,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const fieldGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "220px 320px 180px",
  gap: "12px 20px",
  alignItems: "end",
};

const dateGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "220px 220px",
  gap: "12px 20px",
  alignItems: "end",
};

const actionBarStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
};

const productCategoryOptions = [
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "26", value: 26 },
];

const productPatternOptions = [
  { label: "自由行", value: 2 },
  { label: "私家团", value: 4 },
  { label: "跟团游", value: 1 },
  { label: "半自助游", value: 3 },
];

const saleModeOptions = [
  { label: "P", value: "P" },
];

const initialCarValues = carType.map((item) => ({
  ...item,
  enabled: true,
}));

const CreateCarResource = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [vendorId, setVendorId] = useState<string | number>("");
  const [createdRows, setCreatedRows] = useState<any[]>([]);
  const [groupResults, setGroupResults] = useState<ResourceGroupResult[]>([]);
  const [groupSummary, setGroupSummary] = useState<ResourceGroupSummary | null>(null);
  const [data, setData] = useState<
    {
      label: string;
      total?: number;
      step?: number;
      processed?: number;
      success?: number;
      reused?: number;
      created?: number;
      failed?: number;
      recentItems?: string[];
      start?: number;
      end?: number;
    }[]
  >([
    // {
    //   label: "5座",
    //   processed: 4,
    //   start: 100,
    //   end: 250,
    // },
    // {
    //   label: "7座",
    //   processed: 4,
    //   start: 200,
    //   end: 250,
    // },
  ]);
  const createdRowsRef = useRef<any[]>([]);
  const progressFlushTimerRef = useRef<number | null>(null);

  useEffect(() => {
    initFormData();
    return () => {
      if (progressFlushTimerRef.current != null) {
        window.clearTimeout(progressFlushTimerRef.current);
      }
    };
  }, []);

  const initFormData = async () => {
    try {
      const currentVendorId = await getVendorId();
      setVendorId(currentVendorId);
      form.setFieldsValue({
        cars: initialCarValues,
        vendorId: currentVendorId,
        editStartDate: getDefaultEditStartDate(),
        editEndDate: "2030-07-12",
        productCategories: [9, 10],
        productPatterns: [2, 4],
        saleModes: ["P"],
      });
      await searchUserList("", true);
    } catch (error) {
      console.error(error);
      message.error(error instanceof Error ? error.message : "初始化用车资源信息失败");
    }
  };

  const onFinish = async () => {
    try {
      setLoading(true);
      const {
        userId,
        cars,
        productCategories,
        productPatterns,
        saleModes,
        editStartDate,
        editEndDate,
      } = await form.validateFields();
      const selectedCars = cars
        .filter((car) => car.enabled !== false)
        .map((car) => ({
          ...car,
          productCategories,
          productPatterns,
          saleModes,
        }));
      if (selectedCars.length === 0) {
        message.error("请至少选择一个车型");
        return;
      }

      const incomplete = selectedCars.find((v) => v.start == null || v.end == null);
      if (incomplete) {
        return message.error(`请填写${incomplete.label}的起始价格和结束价格`);
      }

      const invalidRange = selectedCars.find((v) => Number(v.start) > Number(v.end));
      if (invalidRange) {
        return message.error(`${invalidRange.label}的起始价格不能大于结束价格`);
      }

      const notMatch = selectedCars.find((v) => {
        return v.start % PRICE_STEP !== 0 || v.end % PRICE_STEP !== 0;
      });

      console.log(notMatch);
      if (notMatch) {
        return message.error(
          `起始价格和结束价格必须是${PRICE_STEP}的倍数: ${notMatch.label}`,
        );
      }

      setData(
        selectedCars.map((v) => {
          return {
            ...v,
            total: (v.end - v.start) / PRICE_STEP + 1,
            processed: 0,
            success: 0,
            reused: 0,
            created: 0,
            failed: 0,
            recentItems: [],
          };
        }),
      );

      const user = userList.find((it) => it.value === userId);
      if (!user) {
        message.error("请选择有效的预订联系人");
        return;
      }
      const currentVendorId = vendorId || await getVendorId();
      createdRowsRef.current = [];
      setCreatedRows([]);
      setGroupResults([]);
      setGroupSummary(null);
      const allCreatedRows = [];
      message.loading({ content: "正在拉取历史用车资源...", key: "car-resource-history", duration: 0 });
      const existingResourceMap = await buildExistingResourceMap(user, selectedCars);
      const reuseDetail = selectedCars
        .map((car) => {
          let count = 0;
          for (let price = Number(car.start); price <= Number(car.end); price += PRICE_STEP) {
            if (existingResourceMap.has(buildExistingResourceKey(car.label || car.carName, price))) {
              count += 1;
            }
          }
          return `${car.label} ${count}`;
        })
        .join("，");
      message.success({
        content: `历史资源匹配完成：${existingResourceMap.size} 条可复用（${reuseDetail}）`,
        key: "car-resource-history",
      });

      const pushCreatedRow = (item) => {
        createdRowsRef.current.push(item);
        scheduleProgressFlush();
      };
      const missingTasks = [];
      for (const car of selectedCars) {
        const { rows, missingPrices } = collectExistingCarResourceRows(car, existingResourceMap);
        rows.forEach(pushCreatedRow);
        allCreatedRows.push(...rows);
        if (missingPrices.length) {
          missingTasks.push({ car, missingPrices });
        }
      }
      flushProgress();

      // 设置4个车型并发，避免请求速度太快，接口错误
      for (let i = 0; i < missingTasks.length; i += 4) {
        await Promise.all(
          missingTasks.slice(i, i + 4).map(async ({ car, missingPrices }) => {
            const rows = await createCarResourcesByPrices(car, user, missingPrices, pushCreatedRow, currentVendorId, {
              startDate: editStartDate,
              endDate: editEndDate,
            });
            allCreatedRows.push(...rows);
          }),
        );
      }

      createdRowsRef.current = allCreatedRows;
      flushProgress();
      setCreatedRows(allCreatedRows);
      await runCreateResourceGroups(allCreatedRows, true);

      console.log(selectedCars);
    } catch (error) {
      console.log(error);
      message.error(error instanceof Error ? error.message : "创建用车资源失败");
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
    downloadCarResourceWorkbook(createdRows, groupResults);
  };

  const scheduleProgressFlush = () => {
    if (progressFlushTimerRef.current != null) {
      return;
    }
    progressFlushTimerRef.current = window.setTimeout(() => {
      progressFlushTimerRef.current = null;
      flushProgress();
    }, 500);
  };

  const flushProgress = () => {
    const rows = createdRowsRef.current;
    setCreatedRows([...rows]);
    setData((prev) =>
      prev.map((item) => {
        const currentRows = rows.filter((row) => row.label === item.label);
        return {
          ...item,
          processed: currentRows.length,
          success: currentRows.filter((row) => row.createStatus === "success").length,
          reused: currentRows.filter((row) => row.priceStatus === "history").length,
          created: currentRows.filter((row) => row.priceStatus === "success").length,
          failed: currentRows.filter((row) => row.createStatus === "failed").length,
          recentItems: currentRows
            .slice(-5)
            .map((row) => {
              const source = row.priceStatus === "history" ? "复用" : "新建";
              return row.resourceId
                ? `${row.resourceId}(${source})`
                : `${row.price} ${row.error || "failed"}`;
            }),
        };
      }),
    );
  };

  const runCreateResourceGroups = async (rows = createdRows, silentWhenEmpty = false) => {
    try {
      const validRows = rows.filter((row) => row.resourceId && row.createStatus === "success");
      if (!validRows.length) {
        if (!silentWhenEmpty) {
          message.error("请先生成用车资源，再创建资源组");
        }
        return;
      }

      setGroupResults([]);
      setGroupSummary(null);
      const { definitions, results, summary } = await createCarResourceGroupsFromRows(
        validRows,
        (result, currentSummary) => {
          setGroupResults((prev) => [...prev, result]);
          setGroupSummary(currentSummary);
        },
      );
      setGroupResults(results);
      setGroupSummary(summary);
      if (!definitions.length) {
        message.warning("当前资源不足 4 个车型可组合，已跳过资源组生产");
      } else {
        message.success(`资源组生产完成：${summary.createdGroupTotal}/${summary.expectedGroupTotal}`);
      }
    } catch (error) {
      console.error(error);
      message.error(error instanceof Error ? error.message : "创建资源组失败");
    }
  };

  const setAllCarEnabled = (enabled: boolean) => {
    const cars = form.getFieldValue("cars") || initialCarValues;
    form.setFieldValue(
      "cars",
      cars.map((car) => ({
        ...car,
        enabled,
      })),
    );
  };

  const selectOnlyCar = (targetIndex: number) => {
    const cars = form.getFieldValue("cars") || initialCarValues;
    form.setFieldValue(
      "cars",
      cars.map((car, index) => ({
        ...car,
        enabled: index === targetIndex,
      })),
    );
  };

  const searchUserList = async (val = "", selectFirst = false) => {
    const selectedUserId = form.getFieldValue("userId");
    const { contactCardList = [] } = await searchProviderContactCardList(
      val,
      0,
      selectedUserId ? [Number(selectedUserId)] : [],
    );

    const options = contactCardList.map((it) => {
        return {
          ...it,
          label: it.name,
          value: it.contactCardId,
        };
      });
    setUserList(options);
    if (selectFirst && options.length > 0 && !form.getFieldValue("userId")) {
      form.setFieldValue("userId", options[0].value);
    }
  };

  return (
    <>
      <span onClick={() => setIsModalOpen(true)}>创建用车资源</span>
      <div>
        <Drawer
          title={
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#10264a" }}>
                创建用车资源
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: "#667085" }}>
                批量生成车辆资源，并对已生成资源同步假日日期价格
              </div>
            </div>
          }
          width={1040}
          open={isModalOpen}
          onClose={handleCancel}
          maskClosable={false}
          styles={{ body: { background: "#f6f8fb", padding: 20 } }}
          footer={
            <Flex justify="flex-end" gap={16}>
              <Button onClick={handleCancel}>取消</Button>
              <Button type="primary" onClick={handleOk}>
                确认
              </Button>
            </Flex>
          }>
          <Flex vertical gap={16}>
            <Form form={form} layout="vertical">
              <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>车型价格范围</div>
                <Flex gap={8} style={{ marginBottom: 12 }}>
                  <Button size="small" onClick={() => setAllCarEnabled(true)}>
                    全选车型
                  </Button>
                  <Button size="small" onClick={() => setAllCarEnabled(false)}>
                    清空车型
                  </Button>
                </Flex>
                <Form.List name="cars" initialValue={initialCarValues}>
                  {(fields) => {
                    return (
                      <div style={carGridStyle}>
                        {fields.map(({ key, name }, idx) => {
                          const conf = carType[idx];
                          return (
                            <div key={key} style={carPriceItemStyle}>
                              <Flex justify="space-between" align="center" style={{ marginBottom: 10 }}>
                                <Form.Item
                                  name={[name, "enabled"]}
                                  valuePropName="checked"
                                  style={{ marginBottom: 0 }}>
                                  <Checkbox>
                                    <span style={carTitleStyle} title={conf.carName}>
                                      {conf.label}
                                    </span>
                                  </Checkbox>
                                </Form.Item>
                                <Button
                                  size="small"
                                  type="link"
                                  style={{ padding: 0 }}
                                  onClick={() => selectOnlyCar(idx)}>
                                  仅此车型
                                </Button>
                              </Flex>
                              <Flex gap={8}>
                                <Form.Item
                                  style={{ flex: 1, marginBottom: 0 }}
                                  name={[name, "start"]}>
                                  <InputNumber
                                    addonBefore="起"
                                    controls={false}
                                    min={100}
                                    step={PRICE_STEP}
                                    style={{ width: "100%" }}
                                  />
                                </Form.Item>
                                <Form.Item
                                  style={{ flex: 1, marginBottom: 0 }}
                                  name={[name, "end"]}>
                                  <InputNumber
                                    addonBefore="止"
                                    controls={false}
                                    min={100}
                                    step={PRICE_STEP}
                                    style={{ width: "100%" }}
                                  />
                                </Form.Item>
                              </Flex>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </Form.List>
              </div>

              <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>基础信息</div>
                <div style={fieldGridStyle}>
                  <Form.Item name="vendorId" label="供应商ID" style={{ marginBottom: 0 }}>
                    <Input disabled placeholder="自动获取" />
                  </Form.Item>
                  <Form.Item
                    name="userId"
                    label="预订联系人"
                    required
                    rules={[{ required: true, message: "请选择联系人" }]}
                    style={{ marginBottom: 0 }}>
                    <Select
                      options={userList}
                      showSearch
                      allowClear
                      onSearch={searchUserList}
                      placeholder="搜索并选择联系人"
                    />
                  </Form.Item>
                  <Form.Item
                    name="productCategories"
                    label="产品类型"
                    rules={[{ required: true, message: "请选择产品类型" }]}
                    style={{ marginBottom: 0 }}>
                    <Select mode="multiple" options={productCategoryOptions} />
                  </Form.Item>
                  <Form.Item
                    name="productPatterns"
                    label="产品形态"
                    rules={[{ required: true, message: "请选择产品形态" }]}
                    style={{ marginBottom: 0 }}>
                    <Select mode="multiple" options={productPatternOptions} />
                  </Form.Item>
                  <Form.Item
                    name="saleModes"
                    label="销售模式"
                    rules={[{ required: true, message: "请选择销售模式" }]}
                    style={{ marginBottom: 0 }}>
                    <Select mode="multiple" options={saleModeOptions} />
                  </Form.Item>
                </div>
              </div>

              <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>日期价格</div>
                <div style={dateGridStyle}>
                  <Form.Item
                    name="editStartDate"
                    label="改价开始"
                    rules={[{ required: true, message: "请输入开始日期" }]}
                    style={{ marginBottom: 0 }}>
                    <Input placeholder="YYYY-MM-DD" />
                  </Form.Item>
                  <Form.Item
                    name="editEndDate"
                    label="改价结束"
                    rules={[{ required: true, message: "请输入结束日期" }]}
                    style={{ marginBottom: 0 }}>
                    <Input placeholder="YYYY-MM-DD" />
                  </Form.Item>
                </div>
              </div>

              <div style={sectionStyle}>
                <div style={sectionHeaderStyle}>操作</div>
                <div style={actionBarStyle}>
                  <Button loading={loading} type="primary" onClick={onFinish}>
                    一键生成资源和资源组
                  </Button>
                  <Button
                    disabled={loading || (createdRows.length === 0 && groupResults.length === 0)}
                    onClick={download}>
                    下载结果
                  </Button>
                </div>
              </div>
            </Form>

            <div style={sectionStyle}>
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
              <Flex gap={12} style={{ overflowX: "auto", paddingBottom: 4 }}>
                {data.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        minWidth: 150,
                        border: "1px solid #eef2f7",
                        borderRadius: 8,
                        padding: 12,
                        background: "#fafcff",
                      }}>
                      <Flex justify="space-between" align="center">
                        <span style={{ fontWeight: 700 }}>{item.label}</span>
                        <span style={{ color: "#667085", fontSize: 12 }}>
                          {item.processed || 0}/{item.total}
                        </span>
                      </Flex>
                      <Progress
                        percent={item.total ? ((item.processed || 0) / item.total) * 100 : 0}
                        showInfo={false}
                      />
                      <div
                        style={{
                          width: "100%",
                          minHeight: 82,
                          overflow: "auto",
                          marginTop: 8,
                          color: "#475467",
                          fontSize: 12,
                        }}>
                        <div>成功：{item.success || 0}</div>
                        <div>复用历史：{item.reused || 0}</div>
                        <div>新建：{item.created || 0}</div>
                        <div>失败：{item.failed || 0}</div>
                        {(item.recentItems || []).length > 0 ? (
                          <div style={{ marginTop: 6 }}>
                            最近：{(item.recentItems || []).join("、")}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </Flex>
              {createdRows.length > 0 ? (
                <div style={{ marginTop: 12, color: "#475467" }}>
                  资源记录：{createdRows.filter((row) => row.createStatus === "success").length}/
                  {createdRows.length} 成功，
                  复用 {createdRows.filter((row) => row.priceStatus === "history").length}，
                  新建 {createdRows.filter((row) => row.priceStatus === "success").length}
                </div>
              ) : null}
              {groupSummary ? (
                <div style={{ marginTop: 8, color: "#475467" }}>
                  资源组记录：{groupSummary.createdGroupTotal}/{groupSummary.expectedGroupTotal} 完成，
                  失败 {groupSummary.failedGroupTotal}
                </div>
              ) : null}
              {groupResults.length > 0 ? (
                <div
                  style={{
                    maxHeight: 180,
                    overflow: "auto",
                    marginTop: 8,
                    color: "#475467",
                    fontSize: 12,
                  }}>
                  {groupResults.slice(-30).map((item, idx) => (
                    <div key={`${item.resourceGroupName}-${idx}`}>
                      {item.resourceGroupId || "-"} | {item.resourceGroupName} | {item.status}
                      {item.error ? ` | ${item.error}` : ""}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Flex>
        </Drawer>
      </div>
    </>
  );
};

export default CreateCarResource;
