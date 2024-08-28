import { Dropdown, type MenuProps } from "antd";
import cssText from "data-text:./style.css";
import { type PlasmoCSConfig } from "plasmo";
import { useState } from "react";

import CreateModal from "./components/CreateModal";
import CreateSubProduct from "./components/CreateSubProduct";
import DuplicateProduct from "./components/DuplicateProduct";

const HOST_ID = "tour-helper-shadow-host";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const CreateProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "SPLIT_PRODUCT",
      label: <span onClick={() => setIsModalOpen(true)}>分裂产品</span>,
    },
    {
      key: "CREATE_SUB_PRODUCT",
      label: <CreateSubProduct />,
    },
    {
      key: "DUPLICATE_PRODUCT",
      label: <DuplicateProduct />,
    },
  ];

  return (
    <div id="tour-helper-container">
      <Dropdown
        // getPopupContainer={() => {
        //   return document.querySelector(`#${HOST_ID}`).shadowRoot.querySelector("#plasmo-shadow-container");
        // }}
        menu={{ items }}
        placement="topRight">
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

      {isModalOpen && (
        <CreateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
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
