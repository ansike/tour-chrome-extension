import type { PlasmoCSConfig } from "plasmo"
console.log("hello world")
const name = "安思科"

function checkBusinessName() {
  const businessName = Array.from(
    document.querySelectorAll(".ant-form-item-label")
  )
    .find(
      (it) => it.querySelector("span")?.innerText.includes("供应商产品名称")
    )
    ?.nextSibling?.querySelector("input")?.value
  if (!businessName.includes(name)) {
    console.error(
      `供应商名字不合法，预期是 TL-A-${name}，实际是${businessName}`
    )
  } else {
    console.log("供应商产品名称检查通过", businessName)
  }
}

checkBusinessName()


// 获取某一天的所有酒店 ID
// Array.from(document.querySelectorAll('.ant-form')[0].querySelectorAll('.ant-select-selection-selected-value')).map(e=>e.innerText.split('/')[1])

 
export const config: PlasmoCSConfig = {
  matches: ["https://vbooking.ctrip.com/ivbk/vendor/baseInfoMerge*"],
  world: "MAIN"
}