import { Button, message } from "antd"
import copy from "copy-to-clipboard"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetStyle } from "plasmo"
import { useEffect } from "react"
import { createProductApi } from "./apis/api"

function getAllSpots() {
  return Array.from(
    document.querySelectorAll("div[class^=tripDescribe__td-day-card-hd--]")
  )
    .filter((dom) => {
      return (
        dom.querySelector("div[class*=tripDescribe__card-title--]")
          ?.innerText === "景点"
      )
    })
    .map((dom) => dom?.nextSibling)
    .map((dom) => dom?.querySelectorAll("div[class*=td-clego-form-custom]"))
    .reduce((prev, cur) => {
      prev.push(...cur)
      return prev
    }, [])
    .map((dom) => {
      const name = dom.querySelector("input").value
      const type = dom.querySelector(
        ".ant-select-selection-selected-value"
      ).innerText
      return {
        name,
        type
      }
    })
}

const createProduct = () => {
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    createProductApi()
  }, [])

  // const event = (e) => {
  //   const spots = getAllSpots()
  //   const paySpots = spots
  //     .filter((spot) => spot.type === "含首道门票" || spot.type === "已含门票")
  //     .map((spot) => spot.name.split("/")[0])
  //   const spotStr = paySpots.join("、")
  //   console.log("当前行程所有的景点：", spotStr)
  //   copy(spotStr)
  //   messageApi.open({
  //     type: "success",
  //     content: `copy success ${spotStr}`
  //   })
  // }
  return (
    <div style={{display:'inline-block'}}>
      {contextHolder}
      <Button
        style={{
          background: "#1677ff",
          color: "white",
          border: 0,
          borderRadius: 6,
          fontSize: 12,
          padding: "8px 16px",
          cursor: "pointer"
        }}
        // onClick={event}
        >
        创建产品
      </Button>
    </div>
  )
}

export const config: PlasmoCSConfig = {
  matches: ["https://vbooking.ctrip.com/product/input/productListMerge*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector(".list-button-group-batch")


export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = `
    p {
      background-color: yellow;
    }
    #plasmo-shadow-container{
      display: inline-block
    }
  `
  return style
}
export default createProduct
