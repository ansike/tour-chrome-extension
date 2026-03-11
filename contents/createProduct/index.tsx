import { Dropdown, type MenuProps, message, Tooltip } from "antd";
import { LockOutlined } from "@ant-design/icons";
import cssText from "data-text:./style.css";
import { type PlasmoCSConfig } from "plasmo";
import { useState, useEffect } from "react";

import CombinationProduct from "./components/CombinationProduct";
import CreateCarResource from "./components/CreateCarResource";
import CreateSubProduct from "./components/CreateSubProduct";
import DuplicateProduct from "./components/DuplicateProduct";
import SplitProduct from "./components/SplitProduct";
import DumpProduct from "./components/DumpProduct";
import ProductTransfer from "./components/ProductTransfer";
import { isLoggedIn } from "../../lib/auth";

const HOST_ID = "tour-helper-shadow-host";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const ProtectedMenuItem = ({ 
  label,
  children, 
  isAuthenticated 
}: { 
  label: string;
  children: React.ReactNode; 
  isAuthenticated: boolean;
}) => {
  if (isAuthenticated) {
    return <>{children}</>;
  }
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    message.warning("此功能需要登录，请点击扩展图标登录");
  };
  
  return (
    <Tooltip title="需要登录">
      <span 
        onClick={handleClick} 
        onMouseDown={(e) => e.stopPropagation()}
        style={{ color: "#999", cursor: "not-allowed", display: "flex", alignItems: "center", gap: 4 }}
      >
        <LockOutlined />
        {label}
      </span>
    </Tooltip>
  );
};

const CreateProduct = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isLoggedIn();
      setIsAuthenticated(loggedIn);
    };
    checkAuth();
    
    const handleStorageChange = () => {
      checkAuth();
    };
    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

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
    {
      key: "DUMP_PRODUCT",
      label: (
        <ProtectedMenuItem label="导出产品数据" isAuthenticated={isAuthenticated}>
          <DumpProduct />
        </ProtectedMenuItem>
      ),
    },
    {
      key: "PRODUCT_TRANSFER",
      label: (
        <ProtectedMenuItem label="跨账号复制" isAuthenticated={isAuthenticated}>
          <ProductTransfer />
        </ProtectedMenuItem>
      ),
    },
    ...(isAdmin === "1"
      ? [
          {
            key: "CREATE_CAR_RESOURCE",
            label: (
              <ProtectedMenuItem label="创建用车资源" isAuthenticated={isAuthenticated}>
                <CreateCarResource />
              </ProtectedMenuItem>
            ),
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
