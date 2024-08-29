import { CheckCircleTwoTone } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useEffect, useState } from "react";

import { productDuplicate } from "~contents/createProduct/components/scripts/productDuplicate";

import { saveClauses } from "../scripts/saveClauses";
import { saveProductRichText } from "../scripts/savedescriptioninfo";
import { savePackage } from "../scripts/savePackageItem";
import { savePriceInventory } from "../scripts/savePriceInventory";
import { saveProduct } from "../scripts/saveProductBaseInfo";
import { saveProductResource } from "../scripts/saveProductResource";
import { saveSaleControlInfo } from "../scripts/saveSaleControlInfo";
import { saveTourDailyDetail } from "../scripts/saveTourDailyDetail";
import { updateResourceActive } from "../scripts/updateResourceActive";
import { createProduct, createSubProductStepFns } from "../util";
import type { TourDay } from "./interface";

interface TourProps {
  productId: string;
  data: TourDay;
  updateTourDayStatus: (
    id: string,
    option: Partial<Omit<TourDay, "id" | "routes">>,
  ) => void;
}

const Tour = (props: TourProps) => {
  const { productId, data, updateTourDayStatus } = props;
  const [stepLength, setStepLength] = useState<number>();

  const doJob = async (fn: () => any, data: TourDay, title: string) => {
    try {
      const info = await fn();
      console.log("==", title, info);
      updateTourDayStatus(data.id, {
        currentStep: data.currentStep + 1,
        title: title,
        productId: data.currentStep === 0 ? info?.newProductId : data.productId,
      });
      return info;
    } catch (error) {
      updateTourDayStatus(data.id, {
        status: "failed",
        title: title,
        info: error.message,
      });
      console.error(`step: ${data.currentStep}`, error);
      return error;
    }
  };

  type StepFn = (data: TourDay, productId: string) => Promise<any>;

  useEffect(() => {
    const finish = async (data: TourDay) => {
      updateTourDayStatus(data.id, { status: "succeed", info: "创建完成" });
    };

    const stepsMap: StepFn[] = [
      (data, productId) =>
        doJob(() => productDuplicate(productId), data, "复制产品"),
      (data, productId) =>
        doJob(() => saveSaleControlInfo(data.productId), data, "销售控制"),
      (data, productId) =>
        doJob(() => saveProduct(data.productId), data, "产品信息"),
      (data, productId) =>
        doJob(() => saveProductRichText(data.productId), data, "产品图文"),
      (data, productId) =>
        doJob(
          () => saveTourDailyDetail(data.productId, data.routes),
          data,
          "行程描述",
        ),
      (data, productId) =>
        doJob(() => savePackage(data.productId), data, "套餐管理"),
      (data, productId) =>
        doJob(
          () => savePriceInventory(productId, data.productId),
          data,
          "价格库存班期",
        ),
      (data, productId) =>
        doJob(
          () => saveProductResource(productId, data.productId),
          data,
          "资源配置",
        ),
      (data, productId) =>
        doJob(() => saveClauses(data.productId), data, "条款维护"),
      (data, productId) =>
        doJob(() => updateResourceActive(data.productId), data, "激活母产品"),

      // -------------------- 创建子产品 --------------------
      (data, productId) =>
        doJob(
          () => createProduct(data, updateTourDayStatus),
          data,
          "创建子产品",
        ),

      (data, productId) => finish(data),
    ];

    setStepLength(stepsMap.length);
    if (
      productId &&
      data.status === "running" &&
      data.currentStep < stepsMap.length
    ) {
      stepsMap[data.currentStep](data, productId);
    }
  }, [productId, data]);

  if (!data) return null;

  return (
    <div style={{ padding: "8px 16px" }}>
      <div>分裂顺序：{data?.id}</div>
      <div>
        <div>
          {data?.productId ? data?.productId + " | " : ""}
          {data?.title}
        </div>
        <div style={{ fontSize: 11, marginTop: 10 }}>
          <span style={{ fontWeight: "bold", fontSize: 13 }}>子产品：</span>
          {data?.subProducts.map((pro) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
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
                      percent={Math.floor((pro.step / createSubProductStepFns.length) * 100)}
                    />
                  </>
                )}
                <br />
              </div>
            );
          })}
        </div>
        <div>
          <Progress
            percent={Math.floor(((data?.currentStep + 1) / stepLength) * 100)}
            size="small"
          />
        </div>
      </div>
      {data?.status === "failed" && (
        <>
          <div style={{ color: "red" }}>错误：{data.info}</div>
          <Button
            onClick={() => {
              updateTourDayStatus(data.id, { status: "wait" });
            }}>
            重试
          </Button>
        </>
      )}
    </div>
  );
};

export default Tour;
