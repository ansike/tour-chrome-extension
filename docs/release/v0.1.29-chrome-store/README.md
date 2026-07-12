# Chrome Web Store 提交手册 — Tour Helper v0.1.29

本手册假定你已经：

- 拥有 Google 账号并支付过一次性 $5 注册费
- 在 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/) 启用了 2FA
- 在仓库根目录准备好 `chrome-mv3-prod-0.1.29.zip`（来自 Task 10）
- 把商店素材（图标 / 截图）放到 `docs/release/v0.1.29-chrome-store/assets/` 下（来自 Task 4）

## 1. 新建 Item

- 进入 Dashboard
- 点 **New Item**
- 上传 `chrome-mv3-prod-0.1.29.zip`
- 系统会自动解析 manifest 中的 `name`、`version`、`permissions`

## 2. Store listing 标签

按 `store-listing.md` 填字段。两个 language tab 都填：

- **English** tab：照英文 JSON / 英文表格填
- **中文（简体）** tab：照中文 JSON / 中文表格填

## 3. Privacy 标签

### 3.1 Privacy practices → Data usage 问卷

打开 `privacy-questionnaire.md`，按表格勾选。

### 3.2 Privacy policy URL

填 raw GitHub 链接：

```
https://raw.githubusercontent.com/ansike/tour-chrome-extension/product/PRIVACY.md
```

如果发布分支不是 `product`，替换中间那段。如果 raw URL 被 Dashboard 拒绝，再换 GitHub Pages 或自有域名。

## 4. Permissions 标签

打开 `manifest-review.md`，把 "Justification" 列逐条粘贴进 Dashboard 对应输入框。

特别注意：

- 不要为 `$EXTENSION_DEV_HOST_*` 写披露 —— 它们已被 Plasmo 在 build 时去掉
- `scripting` 与 `sidePanel` 是 Plasmo MV3 自动加的，理由可直接用 `manifest-review.md` 里的

## 5. 上传素材

切到 Store listing → **Store assets** 区域：

| 类型 | 文件 |
| --- | --- |
| Icon | `docs/release/v0.1.29-chrome-store/assets/icon-128.png` |
| Screenshots | `assets/screenshot-1.png` ... `screenshot-3.png` |
| Promo small (可选) | `assets/promo-small.png` |
| Marquee (可选) | `assets/marquee.png` |

## 6. Submit for review

- 点 **Submit for review**
- 状态变为 "In review"

### 预期时间

- 新扩展首次审核：1-3 工作日
- 已上架扩展的版本更新：通常 < 24 小时

### 驳回回退

- Dashboard 与开发者邮箱会收到驳回原因
- 常见原因：Privacy policy 链接不可达、permission 用途说明不充分、single purpose 不清晰
- 按反馈修正后再次 Submit（不需要重新上传 zip，除非改了代码）

## 7. 发布后

- 在 Dashboard 等待 "Published"
- 把 Chrome 扩展 ID 记到团队 wiki（如有）
- 在 ChangeLog.md 增加 0.1.29 条目（不在本计划范围内）
