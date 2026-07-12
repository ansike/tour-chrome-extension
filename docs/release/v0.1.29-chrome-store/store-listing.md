# Chrome Web Store Listing — Tour Helper v0.1.29

Two language tabs must be filled in the Dashboard. Copy values from the table below. Character limits: name ≤ 45, short_description ≤ 132, description ≤ 16000.

## English (default tab)

| Field | Value |
| --- | --- |
| Name | Tour Helper |
| Short description | Streamline Ctrip tour-product creation, transfer, and car-resource setup for travel-agency operators. |
| Detailed description | ```
Tour Helper is an in-browser assistant for travel-agency operators who manage tour products on Ctrip (vacations.ctrip.com, vbooking.ctrip.com, online.ctrip.com).

Key features:

• Product creation — automate the long-form Ctrip product-creation flow with auto-filled fields, retry on transient failures, and a draggable floating ball overlay for quick access.
• Product transfer — copy an existing tour product to another operator account, with batch audit reporting to the operator backend (atdtour.com).
• Car-resource batch setup — create car resources and resource groups in batch.
• Cross-account utilities — copy payment spots, hotel info, and daily titles between vendor pages.

The extension reads DOM from the Ctrip pages you visit and stores an authentication token locally (chrome.storage) only when you log in via the popup. It does not sell, share, or transmit your data to any third party.

See PRIVACY.md for the full privacy policy.
``` |
| Category | Productivity |
| Language | English |

## 中文（次要 tab）

| Field | Value |
| --- | --- |
| 名称 | Tour Helper - 旅行助手 |
| 简短描述 | 为旅行社运营人员简化携程旅游产品的创建、跨账号复制与车资源批量配置。 |
| 详细描述 | ```
Tour Helper 是面向携程旅行社运营人员的浏览器助手，覆盖携程度假（vacations.ctrip.com）、后台下单（vbooking.ctrip.com）、online 子域上的旅游产品管理场景。

主要功能：

• 产品创建 —— 自动填充表单、失败自动重试、可拖拽悬浮球快捷入口，覆盖携程长流程产品创建。
• 产品跨账号复制 —— 在不同旅行社账号之间复制既有旅游产品，并支持向运营方后端（atdtour.com）批量上报审计。
• 车资源批量配置 —— 批量创建车资源及资源分组。
• 跨账号小工具 —— 在供应商后台页面之间复制付款节点、酒店信息、行程标题。

插件仅在你访问携程相关页面时读取其 DOM 用于实现功能；登录后 token 仅存储在本地 chrome.storage，不会出售、共享或传输给任何第三方。

完整隐私政策请见 PRIVACY.md。
``` |
| 类别 | 效率 |
| 语言 | 中文 (简体) |

## Source of truth

The JSON files in this directory are machine-readable sources:

- `store-listing.en.json`
- `store-listing.zh.json`

If a Dashboard value ever disagrees with these files, update the JSON first, then re-embed it here.
