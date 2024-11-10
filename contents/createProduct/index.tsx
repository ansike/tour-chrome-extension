import { Dropdown, type MenuProps } from "antd";
import cssText from "data-text:./style.css";
import { type PlasmoCSConfig } from "plasmo";

import CombinationProduct from "./components/CombinationProduct";
import CreateCarResource from "./components/CreateCarResource";
import CreateSubProduct from "./components/CreateSubProduct";
import DuplicateProduct from "./components/DuplicateProduct";
import SplitProduct from "./components/SplitProduct";

const HOST_ID = "tour-helper-shadow-host";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const CreateProduct = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const isAdmin = queryParams.get("admin");
  const items: MenuProps["items"] = [
    {
      key: "SPLIT_PRODUCT",
      label: <SplitProduct />,
    },
    {
      key: "COMBINATION_PRODUCT",
      label: <CombinationProduct />,
    },
    {
      key: "CREATE_SUB_PRODUCT",
      label: <CreateSubProduct />,
    },
    {
      key: "DUPLICATE_PRODUCT",
      label: <DuplicateProduct />,
    },
    ...(isAdmin === "1"
      ? [
          {
            key: "CREATE_CAR_RESOURCE",
            label: <CreateCarResource />,
          },
        ]
      : []),
  ];

  return (
    <div id="tour-helper-container">
      <Dropdown menu={{ items }} placement="topRight">
        <div
          className="p-8"
          style={{
            background: "#1677ff",
            color: "white",
            fontSize: 12,
            cursor: "pointer",
            borderRadius: "100%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "auto",
          }}>
          <span>Tour helper</span>
        </div>
      </Dropdown>
    </div>
  );
};

export const config: PlasmoCSConfig = {
  matches: ["https://vbooking.ctrip.com/*"],
};
export const getShadowHostId = () => HOST_ID;

export const getPortalRoot = () => {
  return document.body;
};

export default CreateProduct;
