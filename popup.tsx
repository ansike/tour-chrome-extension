import { useEffect, useState } from "react"

function IndexPopup() {

  useEffect(() => {
    console.log(document.title)
    console.log(window)

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status === "complete") {
        console.log("页面加载完成:", tab.url)
      }
    })
  }, [])

  return (
    <div
      style={{
        width: 200,
        height: 200,
        padding: 16
      }}>
      <h1>tour helper</h1>
      <div>
        <br />
        <a href="https://test-c2x1zzjx4rou.feishu.cn/docx/CHHVdMWPBorPDnxrLBDck6nanLd">
          Tour Helper 安装文档
        </a>
        THIS is aa
      </div>
    </div>
  )
}

export default IndexPopup
