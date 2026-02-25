import { Modal, Tabs } from 'antd';
import React, { useState } from 'react';
import { DEBUG_IMPORT_FILE_URL, isImportDebugMode } from '../../constant';
import ExportTab from './ExportTab';
import ImportTab from './ImportTab';

interface ProductTransferProps {}

const ProductTransfer: React.FC<ProductTransferProps> = () => {
  const [open, setOpen] = useState(isImportDebugMode());

  return (
    <>
      <span onClick={() => setOpen(true)}>跨账号复制</span>
      <Modal
        title="产品跨账号复制"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={800}
        destroyOnClose
      >
        <Tabs
          defaultActiveKey={isImportDebugMode() ? 'import' : 'export'}
          items={[
            {
              key: 'export',
              label: '导出',
              children: <ExportTab />,
            },
            {
              key: 'import',
              label: '导入',
              children: (
                <ImportTab
                  useBuiltInSample={isImportDebugMode()}
                  defaultFileUrl={
                    isImportDebugMode() ? DEBUG_IMPORT_FILE_URL : undefined
                  }
                />
              ),
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default ProductTransfer;
