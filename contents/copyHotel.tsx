import { useEffect } from "react"
import { Button, message } from "antd"
import copy from "copy-to-clipboard"
import type { PlasmoCSConfig, PlasmoGetInlineAnchorList } from "plasmo"

function findParent(node, targetParent) {
  let parent = node.parentNode

  while (parent !== null) {
    if (parent.className?.includes(targetParent)) {
      return parent
    }

    parent = parent.parentNode || parent.host
  }
  return null // 如果未找到目标父节点，返回 null
}

const copyHotel = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const event = (e) => {
    const node = e.currentTarget
    const parent = findParent(node, "tripDescribe__td-day-card--")
    const lists = Array.from(
      parent.querySelectorAll(".ant-select-selection-selected-value")
    ).map((e) => e.innerText.split("/")[1])
    const idStrs = lists.join(",")
    console.log("当前酒店IDs：", idStrs)
    copy(idStrs)
    messageApi.open({
      type: "success",
      content: `copy success ${idStrs}`
    })
  }
  
  return (
    <>
      {contextHolder}
      <Button
        style={{
          background: "#1677ff",
          color: "white",
          border: 0,
          borderRadius: 6,
          fontSize: 12,
          padding: "4px 10px",
          cursor: "pointer"
        }}
        onClick={event}>
        复制酒店ID
      </Button>
    </>
  )
}

export const config: PlasmoCSConfig = {
  matches: ["https://vbooking.ctrip.com/ivbk/vendor/tourdays*"]
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const divElements = document.querySelectorAll(
    ".ant-form div[class^='tripDescribe__td-flex-']"
  )
  const filteredElements = Array.from(divElements).filter((element) => {
    return element?.innerText === "酒店"
  })

  return filteredElements
}

function sleep(time: number) {
  return Promise.resolve((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}
export default copyHotel
