import { Button, Checkbox, Input, Table, Tag, message } from 'antd';
import React, { useState, useRef } from 'react';
import type { ExportItem, ProductData } from './types';
import { extractFullProduct } from './apis/extractProduct';
import { exportProductsToCsv } from './utils/csvExport';
import { getVendorId } from '../scripts/getVendorId';
import { submitProductTransferExportLog } from '~src/lib/api';
import { loadLastProductTransferImport } from '~src/lib/productTransferAuditStorage';
import { extractVbkAccount } from './utils/vbkAccount';

const { TextArea } = Input;

interface ExportTabProps {}

const ExportTab: React.FC<ExportTabProps> = () => {
  const [productIds, setProductIds] = useState('');
  const [exportItems, setExportItems] = useState<ExportItem[]>([]);
  const [exporting, setExporting] = useState(false);
  const [exportedData, setExportedData] = useState<ProductData[]>([]);
  const [linkLastImport, setLinkLastImport] = useState(true);
  const accountIdRef = useRef<string>('');

  const parseProductIds = (input: string): string[] => {
    const ids = input
      .split(/[,\n\s]+/)
      .map((id) => id.trim())
      .filter((id) => id && /^\d+$/.test(id));
    return [...new Set(ids)];
  };

  const handleStartExport = async () => {
    const ids = parseProductIds(productIds);
    if (ids.length === 0) {
      message.error('请输入有效的产品 ID');
      return;
    }

    const items: ExportItem[] = ids.map((id) => ({
      productId: id,
      productName: '--',
      status: 'pending' as const,
    }));

    setExportItems(items);
    setExporting(true);
    setExportedData([]);

    try {
      accountIdRef.current = await getVendorId();
    } catch (e) {
      console.warn('获取账号 ID 失败:', e);
      accountIdRef.current = 'unknown';
    }

    const results: ProductData[] = [];
    let rows: ExportItem[] = items.map((x) => ({ ...x }));

    for (let i = 0; i < rows.length; i++) {
      const item = rows[i];

      rows = rows.map((it, idx) =>
        idx === i ? { ...it, status: 'extracting' as const } : it
      );
      setExportItems([...rows]);

      try {
        const data = await extractFullProduct(item.productId);
        results.push(data);

        rows = rows.map((it, idx) =>
          idx === i
            ? {
                ...it,
                status: 'success' as const,
                productName: data.productName,
                data,
              }
            : it
        );
        setExportItems([...rows]);
      } catch (error) {
        rows = rows.map((it, idx) =>
          idx === i
            ? {
                ...it,
                status: 'failed' as const,
                errorMessage: (error as Error).message,
              }
            : it
        );
        setExportItems([...rows]);
      }

      await new Promise((r) => setTimeout(r, 300 + Math.random() * 500));
    }

    setExportedData(results);
    setExporting(false);

    if (results.length > 0) {
      message.success(`成功提取 ${results.length} 个产品数据`);
    }

    void (async () => {
      const snap = linkLastImport ? await loadLastProductTransferImport() : null;
      const vbkAccount = await extractVbkAccount();
      const vendorId = accountIdRef.current || 'unknown';
      const payloadItems: Record<string, unknown>[] = rows.map((it) => {
        const row: Record<string, unknown> = {
          productId: it.productId,
          productName: it.productName,
          status: it.status,
          errorMessage: it.errorMessage ?? '',
        };
        if (snap && snap.newToSource[it.productId] != null) {
          row.importNewProductId = it.productId;
          row.importSourceProductId = snap.newToSource[it.productId];
        }
        return row;
      });
      await submitProductTransferExportLog({
        vendorId,
        vbkAccount: vbkAccount || 'unknown',
        items: payloadItems,
        relatedImportLogId: snap?.logId ?? null,
      });
    })();
  };

  const handleDownloadCsv = async () => {
    if (exportedData.length === 0) {
      message.warning('没有可导出的数据');
      return;
    }

    try {
      await exportProductsToCsv(exportedData, accountIdRef.current);
      message.success('CSV 文件已下载');
    } catch (error) {
      message.error(`导出失败: ${(error as Error).message}`);
    }
  };

  const columns = [
    {
      title: '产品 ID',
      dataIndex: 'productId',
      key: 'productId',
      width: 120,
    },
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: ExportItem['status'], record: ExportItem) => {
        const statusMap = {
          pending: { color: 'default', text: '等待' },
          extracting: { color: 'processing', text: '提取中...' },
          success: { color: 'success', text: '完成' },
          failed: { color: 'error', text: '失败' },
        };
        const { color, text } = statusMap[status];
        return (
          <Tag color={color} title={record.errorMessage}>
            {text}
          </Tag>
        );
      },
    },
  ];

  const successCount = exportItems.filter((it) => it.status === 'success').length;
  const canDownload = exportedData.length > 0 && !exporting;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8 }}>产品 ID（多个用逗号或换行分隔）：</div>
        <TextArea
          rows={4}
          placeholder="例如：&#10;69245637&#10;69245638&#10;69245639"
          value={productIds}
          onChange={(e) => setProductIds(e.target.value)}
          disabled={exporting}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <Button type="primary" onClick={handleStartExport} loading={exporting}>
          开始导出
        </Button>
        <Button onClick={handleDownloadCsv} disabled={!canDownload}>
          下载 CSV
        </Button>
        <Checkbox
          checked={linkLastImport}
          onChange={(e) => setLinkLastImport(e.target.checked)}
          disabled={exporting}
        >
          关联最近一次导入记录（上报服务端）
        </Checkbox>
      </div>

      {exportItems.length > 0 && (
        <div>
          <div style={{ marginBottom: 8 }}>
            导出进度：{successCount} / {exportItems.length}
          </div>
          <Table
            dataSource={exportItems}
            columns={columns}
            rowKey="productId"
            size="small"
            pagination={false}
            scroll={{ y: 300 }}
          />
        </div>
      )}
    </div>
  );
};

export default ExportTab;
