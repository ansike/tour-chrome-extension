import React, { useState } from 'react'
import { Button, Input, Modal, message } from 'antd'
import { getProductDetail } from '~/contents/createProduct/scripts/getProductDetail'

// import cssText from 'data-text:~/contents/createProduct/style.css'

// export const getStyle = () => {
//   const style = document.createElement('style')
//   style.textContent = cssText
//   return style
// }

type CreateModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (bool: boolean) => void
}
const CreateModal = (props: CreateModalProps) => {
  const { isModalOpen, setIsModalOpen } = props
  const queryParams = new URLSearchParams(window.location.search)
  const [productId, setProductId] = useState(queryParams.get('productid'))
  const [messageApi, contextHolder] = message.useMessage()
  const [productInfo, setProductInfo] = useState(false)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const getProduct = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }
    const { baseInfo } = await getProductDetail(productId)
    setProductInfo(baseInfo)
  }

  const splitProduct = async () => {
    if (!productId) {
      return messageApi.info('请输入产品ID')
    }
    // TODO 分裂产品
    // const { baseInfo } = await getProductDetail(productId)
    // setProductInfo(baseInfo)
  }

  return (
    <div>
      {contextHolder}
      <Modal
        width={600}
        title='分裂产品'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'inline-flex',
              justifyContent: 'space-between',
              width: '500px'
            }}
          >
            <Input
              style={{ marginRight: '40px' }}
              value={productId}
              onChange={v => setProductId(v.target.value?.replace(/\s+/,''))}
            />
            <Button type='primary' onClick={getProduct}>
              获取产品信息
            </Button>
            <Button type='primary' onClick={splitProduct}>
              复制产品
            </Button>
          </div>
          <div style={{ display: 'flex', marginTop: '30px', minHeight: '300px' }}>
            <div>
              <span>产品信息：</span>
              <span>{productInfo?.name||'--'}</span>
            </div>
            {/*  */}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CreateModal
