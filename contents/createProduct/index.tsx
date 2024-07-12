import { Button, message } from 'antd'
import { type PlasmoCSConfig } from 'plasmo'
import CreateModal from './CreateModal'
import { useState } from 'react'
import cssText from "data-text:./style.css"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const CreateProduct = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const event = async () => {
    setIsModalOpen(true);
    // const controlInfo = await saveSaleControlInfo();

    // 48165125
    // console.log(controlInfo.productId);
    // const productId = 48165125
    // // saveProductBaseInfo({

    // // });
    
    // messageApi.open({
    //   type: 'success',
    //   content: `start create project`
    // })
  }

  return (
    <div id='plasmo-container'>
      {contextHolder}
      <div
        className="p-8"
        style={{
          background: '#1677ff',
          color: 'white',
          fontSize: 12,
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
      <CreateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  )
}

export const config: PlasmoCSConfig = {
  matches: ['https://vbooking.ctrip.com/*']
}

export const getPortalRoot = () => {
  return document.body
}

export default CreateProduct
