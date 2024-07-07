import { Button, message } from 'antd'
import { type PlasmoCSConfig } from 'plasmo'
import styleText from 'data-text:./style.css'
import { saveSaleControlInfo } from './scripts/saveSaleControlInfo'
import { saveProductBaseInfo } from './scripts/saveProductBaseInfo'

const CreateProduct = () => {
  const [messageApi, contextHolder] = message.useMessage()

  const event = async () => {
    const controlInfo = await saveSaleControlInfo();
    console.log(controlInfo.productId);
    // saveProductBaseInfo({

    // });
    messageApi.open({
      type: 'success',
      content: `start create project`
    })
  }

  return (
    <div id='plasmo-container'>
      {contextHolder}
      <div
        style={{
          background: '#1677ff',
          color: 'white',
          fontSize: 12,
          padding: '8px',
          cursor: 'pointer',
          borderRadius:'100%',
          width: '40px',
          height: '40px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          pointerEvents:'auto'
        }}
        onClick={event}
      >
        <span >
          Tour helper
        </span>
      </div>
    </div>
  )
}

export const config: PlasmoCSConfig = {
  matches: ['https://vbooking.ctrip.com/*']
}

export const getPortalRoot = () => {
  return document.body
}

export const getStyle = () => {
  const style = document.createElement('style')
  style.textContent = styleText
  return style
}

export default CreateProduct
