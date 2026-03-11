import { useState } from "react"
import { Button, DatePicker, message, Modal } from "antd"
import copy from "copy-to-clipboard"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
} from "plasmo"
import { generateDates } from "./util"

const copyDailyTitle = () => {
  const [curDate, setCurDate] = useState<any>()
  const [visible, setVisible] = useState<boolean>(false)
  const [messageApi, contextHolder2] = message.useMessage()
  const dayTexts = (Array.from(document.querySelectorAll('.day_txt')) || []).map((node) => node?.innerText);
  const arrayDates = generateDates(curDate?.toDate(), dayTexts.length);

  return (
    <>
      {contextHolder2}
      <Modal title="请检查日程" open={visible} cancelText="取消" okText="复制" onOk={() => {
        const datesStr = dayTexts.map((text, idx) => {
          const date = arrayDates[idx];
          return `【${date ? date + ' ' : ''}D${idx + 1}】${text}`;
        }).join('\n');
        copy(datesStr);
        messageApi.open({
          type: "success",
          content: `copy success`
        })
      }} onCancel={() => { setVisible(false) }}>
        <div>
          <div>

            <span>选择日期&nbsp;&nbsp;</span>
            <DatePicker placeholder="选择日期" value={curDate} onChange={(val) => {
              setCurDate(val)
            }} />
          </div>
          <div style={{ height: 20 }}></div>
          {dayTexts.map((text, idx) => {
            const date = arrayDates[idx];
            return <p key={idx}>【{date ? date + ' ' : ''}D{idx + 1}】{text}</p>
          })}
        </div>
      </Modal>
      <Button
        style={{
          background: "#1677ff",
          color: "white",
          border: 0,
          borderRadius: 6,
          fontSize: 12,
          padding: "8px 16px",
          cursor: "pointer",
          marginTop: 20
        }}
        onClick={() => setVisible(true)}>
        复制行程标题
      </Button>
    </>
  )
}

export const config: PlasmoCSConfig = {
  matches: ["https://vacations.ctrip.com/travel/detail/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector("#js_itinerary_daily .itinerary_sub_title")

export default copyDailyTitle