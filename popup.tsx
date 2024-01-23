import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  useEffect(() => {
    console.log(document.title)
    console.log(window)

    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if (changeInfo.status === 'complete') {
        console.log('页面加载完成:', tab.url);
      }
    });
  }, [])

  return (
    <div
      style={{
        padding: 16
      }}>
      hello world
      <br />
      {document.title}
    </div>
  )
}

export default IndexPopup
