import {
  Button,
  Checkbox,
  Drawer,
  Flex,
  message,
  Progress,
  Radio,
} from "antd";
import React, { useState } from "react";

import { dataType, regions } from "./constant";
import { dumpData } from "./utils";

type DumpProductProps = {};
message.config({
  getContainer() {
    return document.getElementsByClassName("ant-drawer")[0] as HTMLElement;
  },
});

const DumpProduct = (props: DumpProductProps) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["河南"]);
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>([
    "飙升",
    "最高",
  ]);
  const [selectedType, setSelectedType] = useState<string>("part");
  const [dumpDataList, setDumpDataList] = useState<{
    idx: number;
    region: string;
    dataType: string;
    status: string;
  }[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDump = async () => {
    console.log("selectedRegions", selectedRegions);
    console.log("selectedDataTypes", selectedDataTypes);
    await dumpData(selectedRegions, selectedDataTypes, (data) => {
      setDumpDataList([...data]);
    });
  };

  console.log("dumpDataList", dumpDataList);
  return (
    <>
      <span onClick={() => setIsModalOpen(true)}>导出产品数据</span>
      <Drawer
        title="导出产品数据"
        width={900}
        open={isModalOpen}
        onClose={handleCancel}
        maskClosable={false}
        getContainer={() => document.querySelector("#tour-helper-container")}
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
            <span>选择区域：</span>
            <Radio.Group
              value={selectedType}
              options={[
                { label: "全部", value: "all" },
                { label: "部分", value: "part" },
              ]}
              onChange={(e) => {
                setSelectedType(e.target.value);
                if (e.target.value === "all") {
                  setSelectedRegions(regions);
                } else {
                  setSelectedRegions([]);
                }
              }}
            />
          </Flex>
          <Flex gap={16}>
            <Checkbox.Group
              value={selectedRegions}
              onChange={(v) => setSelectedRegions(v)}
              options={regions.map((region) => ({
                label: region,
                value: region,
              }))}
            />
          </Flex>
          <Flex gap={16}>
            <Checkbox.Group
              value={selectedDataTypes}
              onChange={(v) => setSelectedDataTypes(v)}
              options={dataType.map((item) => ({
                label: item,
                value: item,
              }))}
            />
          </Flex>

          <Flex gap={16}>
            <Button type="primary" onClick={handleDump}>
              导出
            </Button>
          </Flex>
          <Flex gap={16} vertical>
            {dumpDataList.map((item) => (
              <div key={item.idx}>
                {item.region}-{item.dataType}: {item.status}
              </div>
            ))}
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};

export default DumpProduct;
