const STORAGE_KEY = 'product_transfer_last_import_v1';

export interface LastProductTransferImportSnapshot {
  logId: number;
  /** 导入产生的新产品 ID -> 原产品 ID */
  newToSource: Record<string, string>;
}

export async function saveLastProductTransferImport(
  logId: number,
  items: Array<{ sourceProductId: string; newProductId?: string }>,
): Promise<void> {
  const newToSource: Record<string, string> = {};
  for (const it of items) {
    const nid = it.newProductId?.trim();
    if (nid) newToSource[nid] = it.sourceProductId;
  }
  const snapshot: LastProductTransferImportSnapshot = { logId, newToSource };
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY]: snapshot }, () => resolve());
  });
}

export async function loadLastProductTransferImport(): Promise<LastProductTransferImportSnapshot | null> {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY], (r) => {
      const v = r[STORAGE_KEY] as LastProductTransferImportSnapshot | undefined;
      if (v && typeof v.logId === 'number' && v.newToSource && typeof v.newToSource === 'object') {
        resolve(v);
      } else {
        resolve(null);
      }
    });
  });
}
