import { Button, message, Modal } from "antd"
import copy from "copy-to-clipboard"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
} from "plasmo"

const copyDailyTitle = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [messageApi, contextHolder2] = message.useMessage()

  const event = (e) => {
    const dayTexts = Array.from(document.querySelectorAll('.day_txt')).map((node, idx) => `D${idx + 1} ${node?.innerText}`);
    const dailyStr = dayTexts.join('\n');
    modal.info({
      width: 600,
      title: '请检查日程',
      content: (
        <div>
          {dayTexts.map((text, idx) => {
            return <p>{text}</p>
          })}
        </div>
      ),
      onOk() {
        console.log("当前行程所有的景点：", dailyStr)
        copy(dailyStr)
        messageApi.open({
          type: "success",
          content: `copy success`
        })
      },
    });
  }

  return (
    <>
      {contextHolder}
      {contextHolder2}
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
        onClick={event}>
        复制行程标题
      </Button>
    </>
  )
}

export const config: PlasmoCSConfig = {
  matches: ["https://vacations.ctrip.com/travel/detail/**/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector("#js_itinerary_daily .itinerary_sub_title .email_print")

export default copyDailyTitle