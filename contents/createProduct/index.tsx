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
  const [isModalOpen, setIsModalOpen] = useState(true);

  const event = async () => {
    setIsModalOpen(true);
  }

  return (
    <div id='plasmo-container'>
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
      {isModalOpen && <CreateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
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
