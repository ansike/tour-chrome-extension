import { Button, Table, Tag, Upload, message, Tooltip } from 'antd';
import { CopyOutlined, UploadOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import type { ImportItem, ProductData } from './types';
import {
  parseCsvFile,
  parseCsvFromString,
  parseCsvFromUrl,
  DEBUG_SAMPLE_CSV,
} from './utils/csvImport';
import { createProductFromData } from './apis/createProduct';
import { exportResultsToCsv } from './utils/csvExport';

interface ImportTabProps {
  /** 调试时使用内置示例 CSV，不依赖网络 */
  useBuiltInSample?: boolean;
  /** 或指定 CSV URL 拉取，留空则跳过 */
  defaultFileUrl?: string;
}

const ImportTab: React.FC<ImportTabProps> = ({
  useBuiltInSample,
  defaultFileUrl,
}) => {
  const [importItems, setImportItems] = useState<ImportItem[]>([]);
  const [importing, setImporting] = useState(false);
  const [parsedProducts, setParsedProducts] = useState<ProductData[]>([]);
  const [loadingDefault, setLoadingDefault] = useState(false);

  useEffect(() => {
    if (!useBuiltInSample && !defaultFileUrl?.trim()) return;
    setLoadingDefault(true);

    const applyResult = (result: Awaited<ReturnType<typeof parseCsvFromString>>) => {
      if (result.products.length > 0) {
        setParsedProducts(result.products);
        setImportItems(
          result.products.map((p) => ({
            sourceProductId: p.productId,
            productName: p.productName,
            status: 'pending' as const,
            retryCount: 0,
          }))
        );
        message.success(`已加载 ${result.products.length} 个产品`);
      }
      if (result.errors.length > 0) {
        for (const err of result.errors.slice(0, 3)) {
          message.error(`行 ${err.row}: ${err.message}`);
        }
      }
    };

    const load = async () => {
      if (defaultFileUrl?.trim()) {
        const res = await parseCsvFromUrl(defaultFileUrl.trim());
        if (res.products.length > 0) {
          applyResult(res);
          return;
        }
      }
      if (useBuiltInSample) {
        applyResult(await parseCsvFromString(DEBUG_SAMPLE_CSV));
      }
    };

    load()
      .catch(() => message.error('默认文件加载失败'))
      .finally(() => setLoadingDefault(false));
  }, [useBuiltInSample, defaultFileUrl]);

  const handleFileUpload = async (file: File) => {
    const result = await parseCsvFile(file);

    if (result.errors.length > 0) {
      for (const err of result.errors.slice(0, 3)) {
        message.error(`行 ${err.row}: ${err.message}`);
      }
    }

    if (result.products.length > 0) {
      setParsedProducts(result.products);
      setImportItems(
        result.products.map((p) => ({
          sourceProductId: p.productId,
          productName: p.productName,
          status: 'pending' as const,
          retryCount: 0,
        }))
      );
      message.success(`成功解析 ${result.products.length} 个产品`);
    }

    return false;
  };

  const handleStartImport = async () => {
    if (parsedProducts.length === 0) {
      message.warning('请先上传 CSV 文件');
      return;
    }

    setImporting(true);

    for (let i = 0; i < parsedProducts.length; i++) {
      const product = parsedProducts[i];

      setImportItems((prev) =>
        prev.map((it, idx) =>
          idx === i ? { ...it, status: 'importing' as const, stage: '开始' } : it
        )
      );

      console.log('product', product);
      const result = await createProductFromData(product, (stage) => {
        setImportItems((prev) =>
          prev.map((it, idx) => (idx === i ? { ...it, stage } : it))
        );
      });

      if (!result.success && result.errorMessage) {
        message.error(`产品 ${product.productName} 导入失败: ${result.errorMessage}`);
      }
      setImportItems((prev) =>
        prev.map((it, idx) =>
          idx === i
            ? {
                ...it,
                newProductId: result.newProductId,
                status: result.success
                  ? ('success' as const)
                  : result.newProductId
                  ? ('partial' as const)
                  : ('failed' as const),
                stage: result.stage,
                errorMessage: result.errorMessage,
              }
            : it
        )
      );

      await new Promise((r) => setTimeout(r, 500 + Math.random() * 500));
    }

    setImporting(false);
    message.success('导入完成');
  };

  const handleCopyNewProductIds = () => {
    const ids = importItems
      .map((it) => it.newProductId?.trim())
      .filter((id): id is string => Boolean(id));
    if (ids.length === 0) {
      message.warning('暂无新产品 ID 可复制');
      return;
    }
    copy(ids.join(','));
    message.success(
      ids.length === 1 ? '已复制新产品 ID' : `已复制 ${ids.length} 个新产品 ID`
    );
  };

  const handleDownloadResult = () => {
    const results = importItems.map((it) => ({
      sourceProductId: it.sourceProductId,
      productName: it.productName,
      newProductId: it.newProductId || '',
      status: it.status,
      stage: it.stage || '',
      retryCount: it.retryCount || 0,
      errorMessage: it.errorMessage || '',
    }));

    exportResultsToCsv(results);
    message.success('结果 CSV 已下载');
  };

  const columns = [
    {
      title: '原产品 ID',
      dataIndex: 'sourceProductId',
      key: 'sourceProductId',
      width: 120,
    },
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      width: 200,
      ellipsis: true,
    },
    {
      title: '新产品 ID',
      dataIndex: 'newProductId',
      key: 'newProductId',
      width: 150,
      render: (id: string) =>
        id ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <a
              href={`https://vbooking.ctrip.com/ivbk/vendor/baseInfoMerge?productId=${id}&from=vbk`}
              target="_blank"
              rel="noreferrer"
            >
              {id}
            </a>
            <Tooltip title="复制 ID">
              <Button
                type="text"
                size="small"
                icon={<CopyOutlined />}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copy(id);
                  message.success('已复制新产品 ID');
                }}
                aria-label="复制新产品 ID"
              />
            </Tooltip>
          </span>
        ) : (
          '--'
        ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: ImportItem['status'], record: ImportItem) => {
        const statusMap = {
          pending: { color: 'default', text: '等待' },
          importing: { color: 'processing', text: '导入中' },
          success: { color: 'success', text: '成功' },
          partial: { color: 'warning', text: '部分成功' },
          failed: { color: 'error', text: '失败' },
        };
        const { color, text } = statusMap[status];
        return (
          <Tooltip title={record.errorMessage}>
            <Tag color={color}>{text}</Tag>
          </Tooltip>
        );
      },
    },
    {
      title: '阶段',
      dataIndex: 'stage',
      key: 'stage',
      width: 150,
      render: (stage: string) => stage || '--',
    },
  ];

  const successCount = importItems.filter(
    (it) => it.status === 'success' || it.status === 'partial'
  ).length;
  const canDownload = importItems.some(
    (it) => it.status === 'success' || it.status === 'partial' || it.status === 'failed'
  );
  const canCopyNewIds = importItems.some((it) => Boolean(it.newProductId?.trim()));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Upload
          accept=".csv,.xlsx,.xls"
          showUploadList={false}
          beforeUpload={handleFileUpload}
          disabled={importing}
        >
          <Button icon={<UploadOutlined />} disabled={importing}>
            上传 CSV 文件
          </Button>
        </Upload>

        <Button
          type="primary"
          onClick={handleStartImport}
          loading={importing}
          disabled={parsedProducts.length === 0}
        >
          开始导入
        </Button>

        <Button onClick={handleDownloadResult} disabled={!canDownload || importing}>
          下载结果 CSV
        </Button>

        <Button
          icon={<CopyOutlined />}
          onClick={handleCopyNewProductIds}
          disabled={!canCopyNewIds}
        >
          复制新产品 ID
        </Button>
      </div>

      {parsedProducts.length > 0 && (
        <div style={{ color: '#666' }}>已解析 {parsedProducts.length} 个产品</div>
      )}

      {importItems.length > 0 && (
        <div>
          <div style={{ marginBottom: 8 }}>
            导入进度：{successCount} / {importItems.length}
          </div>
          <Table
            dataSource={importItems}
            columns={columns}
            rowKey="sourceProductId"
            size="small"
            pagination={false}
            scroll={{ y: 300 }}
          />
        </div>
      )}
    </div>
  );
};

export default ImportTab;
