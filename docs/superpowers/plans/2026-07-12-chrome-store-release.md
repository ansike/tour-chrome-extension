# Tour Helper v0.1.29 Chrome Web Store 发布实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在仓库内产出 v0.1.29 Chrome Web Store 发布所需的所有物料（构建产物、文案、隐私声明、商店素材目录、提交手册），使人类操作者能在 Chrome Web Store Dashboard 一步步完成提交。

**Architecture:** 仓库内落地新增目录 `docs/release/v0.1.29-chrome-store/`，按字段分散文案与披露理由；按机器可读（JSON）+ 人类可读（MD）双份存储；以 Plasmo build 产物 `chrome-mv3-prod-0.1.29.zip` 作为上传给 Chrome 的二进制；以 `PRIVACY.md` 作为 CWS Privacy 标签的 raw 链接源。

**Tech Stack:** Plasmo 0.84.x (Manifest V3 Chrome Extension), npm/pnpm, zip CLI, GitHub raw URL 隐私声明.

## Global Constraints

- 版本号严格为 `0.1.29`，由 `package.json` 中 `version` 字段控制；Plasmo 会写入生成的 `manifest.json`。
- 不修改 `package.json` 中 `host_permissions` / `permissions` / `web_accessible_resources`（已与用户确认"原样发布"）。
- 不调用 Chrome Web Store Publish API（边界已锁定：打包 + 提交手册，不含自动提交）。
- 不修改 `src/**` 任何源码（仅配置与新文件）。
- 新增文件路径前缀：
  - 仓库根 `PRIVACY.md`
  - 仓库根 `chrome-mv3-prod-0.1.29.zip`（不进 git）
  - `docs/release/v0.1.29-chrome-store/`
- `.gitignore` 增补：忽略用户后续提供的二进制截图（`docs/release/**/assets/*.png`）。

---

### Task 1: 版本号 bump 至 0.1.29

**Files:**
- Modify: `package.json:4`

**Interfaces:**
- Produces: `package.json.version === "0.1.29"`，进而影响 Plasmo 后续 build 出的 `manifest.json` 的 `version` 字段。

- [ ] **Step 1: 修改 `package.json` 中 version 字段**

把第 4 行 `"version": "0.1.28"` 改为 `"version": "0.1.29"`。

- [ ] **Step 2: 校验**

```bash
grep '"version"' package.json
```
Expected: `"version": "0.1.29",` 出现且仅出现一次。

- [ ] **Step 3: 提交**

```bash
git add package.json
git commit -m "chore(release): bump version to 0.1.29"
```

---

### Task 2: 增补 `.gitignore` 规则

**Files:**
- Modify: `.gitignore`

**Interfaces:**
- Produces: 用户后续提供的 PNG 截图不会被 `git add .` 误提交。

- [ ] **Step 1: 追加 ignore 规则**

在 `.gitignore` 末尾追加：

```
# release artifacts (out-of-git)
chrome-mv3-prod-*.zip

# user-provided store screenshots
docs/release/**/assets/*.png
```

- [ ] **Step 2: 校验**

```bash
tail -5 .gitignore
```
Expected: 看到上面追加的两行。

- [ ] **Step 3: 提交**

```bash
git add .gitignore
git commit -m "chore(release): ignore store zip and user screenshots"
```

---

### Task 3: 写 `PRIVACY.md`（仓库根）

**Files:**
- Create: `PRIVACY.md`

**Interfaces:**
- Produces: GitHub raw URL（后续在提交手册 Task 10 中使用）：
  - `https://raw.githubusercontent.com/<owner>/<repo>/<branch>/PRIVACY.md`
  - 此处 owner=ansike、repo=tour-chrome-extension、branch=product

- [ ] **Step 1: 写 PRIVACY.md**

文件内容（直接写入）：

```markdown
# Privacy Policy — Tour Helper Chrome Extension

Last updated: 2026-07-12

Tour Helper ("the extension") is a Chrome browser extension that helps travel-agency operators manage products and orders on Ctrip and the operator's own backend at https://www.atdtour.com. This page describes what data the extension accesses and how it is used.

## Data we access

- **Website content you are viewing**: when you open a Ctrip product or order page (vacations.ctrip.com, vbooking.ctrip.com, online.ctrip.com), the extension reads the DOM of that page solely to provide its in-page features (product copy, batch operations, account-config lookup).
- **Authentication token**: if you choose to log in via the extension popup, the token returned by the backend (https://www.atdtour.com) is stored locally in your browser via `chrome.storage.local`. The extension never transmits this token to any third party.

## Data we do NOT access

- Location
- Health information
- Financial or payment information
- Personal communications
- Browsing history outside the Ctrip and atdtour.com domains listed above

## How we use data

The data above is used exclusively to provide the extension's features. It is processed locally in your browser and is sent to the operator's backend (https://www.atdtour.com) only when you trigger a feature that requires backend communication (login, batch audit report, product transfer). It is never sold, never transferred to third parties, and never used for advertising or any purpose unrelated to the extension's functionality.

## Data retention

The authentication token is stored locally in `chrome.storage.local` and remains on your device until you clear the extension's storage or uninstall the extension.

## Children's privacy

The extension is not directed at children under 13 and we do not knowingly collect data from children.

## Changes to this policy

Material changes will be reflected by an updated "Last updated" date above. Continued use of the extension after a change indicates acceptance of the updated policy.

## Contact

If you have questions about this policy, contact: ansike@qq.com
```

- [ ] **Step 2: 校验**

```bash
ls -la PRIVACY.md && head -5 PRIVACY.md
```
Expected: 文件存在且前 5 行显示标题与日期。

- [ ] **Step 3: 提交**

```bash
git add PRIVACY.md
git commit -m "docs: add PRIVACY.md for chrome web store review"
```

---

### Task 4: 创建发布目录骨架

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/assets/README.md`
- Create: `docs/release/v0.1.29-chrome-store/.gitkeep`（占位，assets 目录非空）

**Interfaces:**
- Produces: 后续任务写入 `docs/release/v0.1.29-chrome-store/` 下文件时目录已就绪。

- [ ] **Step 1: 创建目录**

```bash
mkdir -p docs/release/v0.1.29-chrome-store/assets
touch docs/release/v0.1.29-chrome-store/.gitkeep
```

- [ ] **Step 2: 写 `assets/README.md`**

文件内容：

```markdown
# Store Asset Specifications

Drop the actual image files into this directory. They are ignored by git (see `.gitignore`) — you keep them locally, and the upload to Chrome Web Store happens via the Dashboard, not via git.

## Required

| File | Size | Format | Notes |
| --- | --- | --- | --- |
| `icon-128.png` | 128×128 | PNG, no transparency | Store icon. If you only have `assets/icon.png` (512×512), downscale. |
| `screenshot-1.png` | 1280×800 or 640×400 | PNG or JPEG | First screenshot. |
| `screenshot-2.png` | 1280×800 or 640×400 | PNG or JPEG | Second screenshot. |
| `screenshot-3.png` | 1280×800 or 640×400 | PNG or JPEG | Third screenshot. CWS allows up to 5; 3 is the minimum recommended. |

## Optional

| File | Size | Notes |
| --- | --- | --- |
| `promo-small.png` | 440×280 | Small promotional tile. |
| `marquee.png` | 1400×560 | Featured promotional marquee (requires special CWS promotion approval). |

## Tips

- Show the extension's main features in action (popup, sidepanel, in-page UI).
- Avoid screenshotting sensitive customer data; use test accounts.
- Keep file sizes reasonable (< 1 MB each) — CWS accepts up to a few MB but smaller loads faster in the listing.
```

- [ ] **Step 3: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/.gitkeep docs/release/v0.1.29-chrome-store/assets/README.md
git commit -m "docs(release): scaffold v0.1.29 store asset directory"
```

---

### Task 5: 起草商店文案（中英双语 JSON）

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/store-listing.en.json`
- Create: `docs/release/v0.1.29-chrome-store/store-listing.zh.json`

**Interfaces:**
- Produces: 字段值由 Task 6 的 `store-listing.md` 汇总；这两份 JSON 是机器可读源。

- [ ] **Step 1: 写英文 JSON `store-listing.en.json`**

```json
{
  "name": "Tour Helper",
  "short_description": "Streamline Ctrip tour-product creation, transfer, and car-resource setup for travel-agency operators.",
  "description": "Tour Helper is an in-browser assistant for travel-agency operators who manage tour products on Ctrip (vacations.ctrip.com, vbooking.ctrip.com, online.ctrip.com).\n\nKey features:\n\n• Product creation — automate the long-form Ctrip product-creation flow with auto-filled fields, retry on transient failures, and a draggable floating ball overlay for quick access.\n• Product transfer — copy an existing tour product to another operator account, with batch audit reporting to the operator backend (atdtour.com).\n• Car-resource batch setup — create car resources and resource groups in batch.\n• Cross-account utilities — copy payment spots, hotel info, and daily titles between vendor pages.\n\nThe extension reads DOM from the Ctrip pages you visit and stores an authentication token locally (chrome.storage) only when you log in via the popup. It does not sell, share, or transmit your data to any third party.\n\nSee PRIVACY.md for the full privacy policy.",
  "category": "Productivity",
  "language": "en"
}
```

- [ ] **Step 2: 写中文 JSON `store-listing.zh.json`**

```json
{
  "name": "Tour Helper - 旅行助手",
  "short_description": "为旅行社运营人员简化携程旅游产品的创建、跨账号复制与车资源批量配置。",
  "description": "Tour Helper 是面向携程旅行社运营人员的浏览器助手，覆盖携程度假（vacations.ctrip.com）、后台下单（vbooking.ctrip.com）、online 子域上的旅游产品管理场景。\n\n主要功能：\n\n• 产品创建 —— 自动填充表单、失败自动重试、可拖拽悬浮球快捷入口，覆盖携程长流程产品创建。\n• 产品跨账号复制 —— 在不同旅行社账号之间复制既有旅游产品，并支持向运营方后端（atdtour.com）批量上报审计。\n• 车资源批量配置 —— 批量创建车资源及资源分组。\n• 跨账号小工具 —— 在供应商后台页面之间复制付款节点、酒店信息、行程标题。\n\n插件仅在你访问携程相关页面时读取其 DOM 用于实现功能；登录后 token 仅存储在本地 chrome.storage，不会出售、共享或传输给任何第三方。\n\n完整隐私政策请见 PRIVACY.md。",
  "category": "Productivity",
  "language": "zh-CN"
}
```

- [ ] **Step 3: JSON 语法校验**

```bash
node -e "JSON.parse(require('fs').readFileSync('docs/release/v0.1.29-chrome-store/store-listing.en.json')); JSON.parse(require('fs').readFileSync('docs/release/v0.1.29-chrome-store/store-listing.zh.json')); console.log('ok')"
```
Expected: `ok`

- [ ] **Step 4: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/store-listing.en.json docs/release/v0.1.29-chrome-store/store-listing.zh.json
git commit -m "docs(release): bilingual store listing copy for v0.1.29"
```

---

### Task 6: 写 `store-listing.md`（人类可读汇总）

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/store-listing.md`

**Interfaces:**
- Consumes: `store-listing.en.json` 与 `store-listing.zh.json` 字段值（人工核对用）。
- Produces: Dashboard 提交时复制粘贴字段值的源头。

- [ ] **Step 1: 写汇总文档**

文件内容：

```markdown
# Chrome Web Store Listing — Tour Helper v0.1.29

Two language tabs must be filled in the Dashboard. Copy values from the table below. Character limits: name ≤ 45, short_description ≤ 132, description ≤ 16000.

## English (default tab)

| Field | Value |
| --- | --- |
| Name | Tour Helper |
| Short description | Streamline Ctrip tour-product creation, transfer, and car-resource setup for travel-agency operators. |
| Detailed description | (copy from `store-listing.en.json` → `description`) |
| Category | Productivity |
| Language | English |

## 中文（次要 tab）

| Field | Value |
| --- | --- |
| 名称 | Tour Helper - 旅行助手 |
| 简短描述 | 为旅行社运营人员简化携程旅游产品的创建、跨账号复制与车资源批量配置。 |
| 详细描述 | (copy from `store-listing.zh.json` → `description`) |
| 类别 | 效率 |
| 语言 | 中文 (简体) |

## Source of truth

The JSON files in this directory are machine-readable sources:

- `store-listing.en.json`
- `store-listing.zh.json`

If a Dashboard value ever disagrees with these files, update the JSON first, then this MD.
```

- [ ] **Step 2: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/store-listing.md
git commit -m "docs(release): human-readable store listing summary"
```

---

### Task 7: 写 `manifest-review.md`（host_permissions / permissions 披露）

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/manifest-review.md`

**Interfaces:**
- Produces: Chrome Web Store Dashboard 的 "Permissions" 标签中每条目的用途说明（CWS 要求每条披露 1-2 句）。

- [ ] **Step 1: 写文档**

文件内容：

```markdown
# Manifest Permissions Disclosure — v0.1.29

When filling the Dashboard's "Permissions" tab, copy the "Justification" column for each entry. Source: `package.json` → `manifest.*` blocks.

## host_permissions

| URL pattern | Justification (English) |
| --- | --- |
| `https://vacations.ctrip.com/*` | Core feature: the extension injects UI on the Ctrip vacations detail/edit pages to automate product creation, copy daily titles, and read product data. |
| `https://vbooking.ctrip.com/*` | Core feature: the extension injects UI on the Ctrip vendor booking pages to support product creation, payment-spot copy, hotel info copy, and order-side operations. |
| `https://online.ctrip.com/*` | Account info lookup: the extension reads the operator's Ctrip online-session account configuration to know which account is active. |
| `https://www.atdtour.com/*` | Backend API: the extension calls the operator's own backend (https://www.atdtour.com) for login authentication and batch audit reporting on product-transfer operations. |

## permissions

| Permission | Justification (English) |
| --- | --- |
| `storage` | Store the authentication token returned by the backend and minor user preferences locally via `chrome.storage.local`. |
| `scripting` | (auto-added by Plasmo MV3) required to inject content scripts declaratively into matched pages. |
| `sidePanel` | (auto-added by Plasmo MV3) required to open the extension's side panel UI on user action. |

## web_accessible_resources

| Resource | Justification (English) |
| --- | --- |
| `assets/products_export_20260224_0941.csv` | Pre-bundled CSV used by the ExportTab feature to actively download exported product data when the user clicks the export button. |

## Note on dev-only placeholders

`$EXTENSION_DEV_HOST_LOCALHOST` and `$EXTENSION_DEV_HOST_LOOPBACK` are referenced in the source `package.json` but are NOT present in the production-built `manifest.json`. Plasmo strips them during `plasmo build` because no values are defined for them in the production environment. No disclosure is needed for them.
```

- [ ] **Step 2: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/manifest-review.md
git commit -m "docs(release): manifest permissions disclosure for v0.1.29"
```

---

### Task 8: 写 `privacy-questionnaire.md`（Data Usage 问卷填写草稿）

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/privacy-questionnaire.md`

**Interfaces:**
- Produces: Dashboard 的 "Privacy practices" 标签中 "Data usage" 问卷每题的勾选结果与一句话说明。

- [ ] **Step 1: 写文档**

文件内容：

```markdown
# Chrome Web Store Data Usage Questionnaire — v0.1.29

Chrome Web Store requires every extension to disclose data practices. Fill the Dashboard's "Privacy practices" → "Data usage" questionnaire using the answers below.

## Single-purpose check

The extension's single purpose is: **help travel-agency operators manage Ctrip tour products (create, edit, transfer, batch car-resource setup) via in-page automation.**

All features serve this single purpose. ✓

## Data types

| Question | Answer | Reason |
| --- | --- | --- |
| Personally identifiable info (PII) | **Yes** | Login returns a user-id-bearing token stored locally. |
| Health info | No | |
| Financial or payment info | No | |
| Authentication info | **Yes** | Token from backend login, stored in `chrome.storage.local`. |
| Personal communications | No | |
| Location | No | |
| Web history | No | |
| Website content (user activity) | **Yes** | DOM read on Ctrip and atdtour.com pages for in-page features. |

## Handling

| Question | Answer |
| --- | --- |
| Data sold to third parties | No |
| Data transferred to third parties | No |
| Data used for purposes unrelated to the extension's single purpose | No |

## Privacy policy URL

Use the raw GitHub URL for `PRIVACY.md` on the branch you'll publish from. If the publish branch is `product`:

```
https://raw.githubusercontent.com/ansike/tour-chrome-extension/product/PRIVACY.md
```

(If you publish from a different branch or fork, replace `ansike/tour-chrome-extension` and `product` accordingly.)
```

- [ ] **Step 2: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/privacy-questionnaire.md
git commit -m "docs(release): privacy questionnaire draft for v0.1.29"
```

---

### Task 9: 重新 build Plasmo 产物

**Files:**
- Modify (generated, not in git): `build/chrome-mv3-prod/manifest.json`

**Interfaces:**
- Consumes: `package.json` `version: 0.1.29`（来自 Task 1）。
- Produces: `build/chrome-mv3-prod/manifest.json` 含 `version: "0.1.29"` 与新域名 `https://www.atdtour.com/*`。

- [ ] **Step 1: 清理旧 prod build**

```bash
rm -rf build/chrome-mv3-prod
```

- [ ] **Step 2: 运行生产 build**

```bash
npm run build
```
Expected: 进程以 `0` 退出；控制台显示 `Finished...` 字样与 `build/chrome-mv3-prod/` 路径。

- [ ] **Step 3: 校验 manifest 内容**

```bash
grep -E '"version"|"name"' build/chrome-mv3-prod/manifest.json
```
Expected: 看到 `"version":"0.1.29"` 与 `"name":"Tour Helper"`。

```bash
grep -E 'EXTENSION_DEV|askfuture|atdtour' build/chrome-mv3-prod/manifest.json
```
Expected: 只看到 `atdtour`，没有 `EXTENSION_DEV` 也没有 `askfuture`。

- [ ] **Step 4: 不提交（产物不进 git）**

```bash
git status
```
Expected: 看不到 `build/chrome-mv3-prod/manifest.json` 的变更（已在 `.gitignore`）。

---

### Task 10: 打包发布 zip

**Files:**
- Create (not in git): `chrome-mv3-prod-0.1.29.zip`

**Interfaces:**
- Consumes: `build/chrome-mv3-prod/` 内容。
- Produces: 上传给 Chrome Web Store 的二进制。

- [ ] **Step 1: 打 zip**

```bash
cd build/chrome-mv3-prod && zip -r ../../chrome-mv3-prod-0.1.29.zip . && cd ../..
```

- [ ] **Step 2: 校验 zip**

```bash
unzip -l chrome-mv3-prod-0.1.29.zip | head -20
```
Expected: 顶部出现 `manifest.json`，并且文件数 > 0。

```bash
unzip -p chrome-mv3-prod-0.1.29.zip manifest.json | grep -E '"version"|"host_permissions"|"permissions"' | head -5
```
Expected: `"version":"0.1.29"`；`host_permissions` 含 `atdtour.com`；`permissions` 含 `storage`。

- [ ] **Step 3: 校验 zip 未被 git 跟踪**

```bash
git status
```
Expected: `chrome-mv3-prod-0.1.29.zip` 不出现在 untracked 列表里（已被 `.gitignore` 忽略）。

---

### Task 11: 写提交手册 `README.md`

**Files:**
- Create: `docs/release/v0.1.29-chrome-store/README.md`

**Interfaces:**
- Consumes: Task 5–8 生成的字段值；Task 10 生成的 zip 路径；Task 3 生成的 PRIVACY.md raw URL。
- Produces: 用户一步步在 Dashboard 操作时对照的清单。

- [ ] **Step 1: 写手册**

文件内容：

````markdown
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
````

- [ ] **Step 2: 提交**

```bash
git add docs/release/v0.1.29-chrome-store/README.md
git commit -m "docs(release): chrome web store submission guide for v0.1.29"
```

---

### Task 12: 发布前的端到端验证

**Files:** (no changes)

- [ ] **Step 1: 校验发布 zip 的 manifest**

```bash
unzip -p chrome-mv3-prod-0.1.29.zip manifest.json | python3 -m json.tool > /tmp/m.json
grep -E '"version"|"host_permissions"|"permissions"' /tmp/m.json
```
Expected:
- `"version": "0.1.29"`
- `host_permissions` 含 `atdtour.com`，不含 `askfuture.online`，不含 `EXTENSION_DEV`
- `permissions` 含 `storage`

- [ ] **Step 2: 校验 PRIVACY.md raw URL 可达**

```bash
curl -sI https://raw.githubusercontent.com/ansike/tour-chrome-extension/product/PRIVACY.md | head -1
```
Expected: `HTTP/2 200`

- [ ] **Step 3: 校验文案一致性**

```bash
node -e "const en=JSON.parse(require('fs').readFileSync('docs/release/v0.1.29-chrome-store/store-listing.en.json'));const zh=JSON.parse(require('fs').readFileSync('docs/release/v0.1.29-chrome-store/store-listing.zh.json'));console.log(en.short_description.length, zh.short_description.length); console.log('name:', en.name, '|', zh.name);"
```
Expected: 两个 short_description 长度都 ≤ 132；两个 name 都打印出来。

- [ ] **Step 4: 列出最终交付物**

```bash
ls -la PRIVACY.md chrome-mv3-prod-0.1.29.zip docs/release/v0.1.29-chrome-store/
```
Expected:
- `PRIVACY.md` 存在
- `chrome-mv3-prod-0.1.29.zip` 存在（git status 不显示）
- 子目录含 `README.md`、`store-listing.md`、两份 `store-listing.*.json`、`manifest-review.md`、`privacy-questionnaire.md`、`assets/`

---

## Self-Review

**Spec coverage:**
- §1–2 背景与目标 → Task 1, 4
- §3 版本号 → Task 1
- §4 PRIVACY.md → Task 3
- §5 商店文案 → Task 5, 6
- §6 manifest 披露 → Task 7
- §7 隐私问卷 → Task 8
- §8 发布包产出 → Task 9, 10
- §9 提交手册 → Task 11
- §10 不做的事 → 计划全文遵守（不改 src、不动 CI、不自动提交）
- §11 风险 → 已纳入 Task 9 Step 3、Task 11 §6
- §12 验证 → Task 12

**Placeholder scan:** 全部命令与文件内容完整，无 "TODO/TBD/类似 Task N/实现 later" 字样。

**Type consistency:** Task 之间没有相互引用类型 / 函数 / 接口 —— 本计划纯文档 + 命令行交付，跨任务仅靠文件路径传递。