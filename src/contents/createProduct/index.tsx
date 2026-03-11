import { Dropdown, type MenuProps } from "antd";
import cssText from "data-text:./style.css";
import { type PlasmoCSConfig } from "plasmo";
import { useState, useEffect, useRef, useCallback } from "react";

import CombinationProduct from "~src/components/CombinationProduct";
import CreateCarResource from "~src/components/CreateCarResource";
import CreateSubProduct from "~src/components/CreateSubProduct";
import DuplicateProduct from "~src/components/DuplicateProduct";
import SplitProduct from "~src/components/SplitProduct";
import DumpProduct from "~src/components/DumpProduct";
import ProductTransfer from "~src/components/ProductTransfer";
import { isLoggedIn } from "~src/lib/auth";

const HOST_ID = "tour-helper-shadow-host";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const CreateProduct = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 60, y: window.innerHeight / 2 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null);
  const hasDragged = useRef(false);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    hasDragged.current = false;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };
  }, [position]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragRef.current) return;
    
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;
    
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      hasDragged.current = true;
    }
    
    const newX = Math.max(0, Math.min(window.innerWidth - 40, dragRef.current.startPosX + deltaX));
    const newY = Math.max(0, Math.min(window.innerHeight - 40, dragRef.current.startPosY + deltaY));
    
    setPosition({ x: newX, y: newY });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragRef.current = null;
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);
  
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
    ...(isAuthenticated
      ? [
          {
            key: "DUMP_PRODUCT",
            label: <DumpProduct />,
          },
          {
            key: "PRODUCT_TRANSFER",
            label: <ProductTransfer />,
          },
        ]
      : []),
    ...(isAdmin === "1" && isAuthenticated
      ? [
          {
            key: "CREATE_CAR_RESOURCE",
            label: <CreateCarResource />,
          },
        ]
      : []),
  ];

  return (
    <div 
      id="tour-helper-container"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 2147483647,
      }}
    >
      <Dropdown 
        menu={{ items }} 
        placement="topRight"
        trigger={hasDragged.current ? [] : ["click"]}
      >
        <div
          onMouseDown={handleMouseDown}
          style={{
            background: "#1677ff",
            color: "white",
            fontSize: 12,
            cursor: isDragging ? "grabbing" : "grab",
            borderRadius: "100%",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            pointerEvents: "auto",
            userSelect: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
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
