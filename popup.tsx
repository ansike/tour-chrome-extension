import { version } from "package.json";
import { useEffect } from "react";

function IndexPopup() {
  useEffect(() => {
    console.log(document.title);
    console.log(window);

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status === "complete") {
        console.log("页面加载完成:", tab.url);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 200,
        height: 200,
        padding: 16,
        paddingBottom: 0,
      }}>
      <h1>tour helper</h1>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <br />
        <a href="https://test-c2x1zzjx4rou.feishu.cn/docx/CHHVdMWPBorPDnxrLBDck6nanLd" target="__blank">
          Tour Helper 安装文档
        </a>
      </div>
      <p style={{ color: "#ccc", textAlign: "center" }}>version:{version}</p>
    </div>
  );
}

export default IndexPopup;
