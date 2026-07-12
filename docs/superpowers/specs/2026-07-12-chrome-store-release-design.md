# Chrome Web Store 发布设计 — Tour Helper v0.1.29

日期：2026-07-12
范围：打包 + 提交步骤指导（不包含自动提交）

## 1. 背景与目标

`tour-chrome-extension` 是一个基于 Plasmo 的 Manifest V3 Chrome 扩展（`package.json` `name: tour-helper`，当前 `version: 0.1.28`）。本次目标是把它的新版本发布到 Chrome Web Store。

边界（与用户已确认）：
- **做**：在仓库中产出新版发布 zip、商店文案（中英文）、隐私声明、商店素材目录结构、逐字段的 Chrome Web Store Dashboard 提交手册。
- **不做**：调用 Chrome Web Store Publish API 自动提交；不写 CI 自动发布；不提交 PR / Tag。

新版本号：`0.1.29`（与 `main` / `product` 分支当前 `0.1.28` 的 patch bump，符合本次多条 feat/fix 累积发布）。

## 2. 仓库内的交付物布局

```
repo-root/
├── PRIVACY.md                                   # 新增；隐私声明
├── README.md                                    # 不动（Plasmo 模板）
├── chrome-mv3-prod-0.1.29.zip                   # 新增；上传到 CWS 的产物
└── docs/
    └── release/
        └── v0.1.29-chrome-store/
            ├── README.md                        # 提交手册（一步步点鼠标）
            ├── store-listing.md                 # 商店字段值（中英）
            ├── store-listing.en.json            # 机器可读英文文案
            ├── store-listing.zh.json            # 机器可读中文文案
            ├── manifest-review.md               # manifest 三处 host/permissions 的逐条披露理由
            ├── privacy-questionnaire.md         # 隐私问卷填写草稿
            └── assets/                          # 占位；用户后续把图标/截图放进来
                ├── README.md                    # 规格说明（128x128 / 1280x800 等）
                ├── icon-128.png                 # 由用户提供或从 assets/icon.png 缩小
                ├── screenshot-1.png             # 由用户提供
                ├── screenshot-2.png             # 由用户提供
                ├── screenshot-3.png             # 由用户提供
                ├── promo-small.png              # 可选 440x280
                └── marquee.png                  # 可选 1400x560
```

不进 git 的：
- `chrome-mv3-prod-0.1.29.zip`（产物，且 Plasmo 会重生成）
- `docs/release/v0.1.29-chrome-store/assets/*.png` 用户提供的截图（在 `.gitignore` 里加 `docs/release/**/assets/*.png` 与 `*.zip`）

## 3. 版本号处理

- 修改 `package.json` `version: 0.1.28 → 0.1.29`
- Plasmo 把 `version` 写入 `manifest.json`（MV3）作为 `version` 字段，CWS 审核以这个为准
- 不动 `host_permissions` / `permissions`（用户已选"原样发布"）

## 4. 隐私声明（PRIVACY.md）

简明 Markdown，仓库根。用 GitHub raw 链接填入 CWS：

```
https://raw.githubusercontent.com/<owner>/<repo>/<branch>/PRIVACY.md
```

仓库 owner 暂时按 git 远端 `github.com:ansike/tour-chrome-extension.git` 推断为 `ansike/tour-chrome-extension`，分支用 `product`（与本次提交分支一致；如果用户后续切到 `main`，链接里替换分支）。

内容包含：
- 不收集的：位置、信用卡、健康、金融、活动
- 收集的：用户主动登录后获得的 token（存在本地 `chrome.storage`）、用户当前页面访问的产品/订单数据（仅本地处理用于功能）
- 用途：仅用于插件功能
- 不出售、不转让给第三方、不用于与功能无关的目的
- 联系邮箱：从 `package.json` `author` 解析（`ansike@qq.com`）

## 5. 商店文案（双语）

放在 `docs/release/v0.1.29-chrome-store/store-listing.{en,zh}.json`，并把值汇总在 `store-listing.md`。

字段与上限：

| 字段 | 上限 | 说明 |
| --- | --- | --- |
| name | 45 | 短名 |
| short_description | 132 | 单行简介 |
| description | 16000 | 详细说明 |
| category | — | 默认 Productivity |
| language | — | 中文为主，英文为副 |

文案由我阅读 `src/popup.tsx` / `src/sidepanel.tsx` / 各 `contents/*` 后起草，写出中英两版，用户复核修改。

## 6. manifest 披露（中英，提交时填）

manifest 三处需要在 CWS 商店表中逐条披露用途：

```
host_permissions:
  - https://vacations.ctrip.com/*   # 携程度假主站：注入产品创建/编辑功能
  - https://vbooking.ctrip.com/*    # 携程后台下单/订单管理：注入订单辅助
  - https://online.ctrip.com/*      # 携程 online 子域：辅助登录态/账号信息获取
  - https://www.atdtour.com/*       # 我方后端：API 调用（认证/产品迁移审计上报）
  - $EXTENSION_DEV_HOST_LOCALHOST   # 仅开发期占位，发布包中保留（用户决定）
  - $EXTENSION_DEV_HOST_LOOPBACK    # 同上

permissions:
  - storage                         # 本地缓存 token / 用户偏好

web_accessible_resources:
  - assets/products_export_20260224_0941.csv
    → 用于 ExportTab 主动下载导出 CSV
```

理由放在 `docs/release/v0.1.29-chrome-store/manifest-review.md`，每条 1-2 句英文理由（提交表要英文）。

## 7. 隐私问卷填写草稿

CWS 现在强制完整填写"Data usage"问卷。基于源码扫描结果：

| 题目 | 答案 | 说明 |
| --- | --- | --- |
| Personally identifiable info | Yes | 用户登录 token / 账号 ID |
| Health info | No | |
| Financial info | No | |
| Authentication info | Yes | token 存本地 |
| Personal communications | No | |
| Location | No | |
| Web history | No | |
| User activity (website content) | Yes | 在 ctrip/atdtour 页面读取 DOM 用于功能 |
| Sold to third parties | No | |
| Used for unrelated purposes | No | |

写在 `privacy-questionnaire.md`。

## 8. 发布包产出步骤

```bash
# 在仓库根执行
# 1) bump 版本
# 改 package.json "version": "0.1.29"

# 2) 拉干净构建
rm -rf build/chrome-mv3-prod chrome-mv3-prod-0.1.29.zip
npm run build   # plasmo build

# 3) 打包 zip
cd build/chrome-mv3-prod && zip -r ../../chrome-mv3-prod-0.1.29.zip . && cd ../..

# 4) 校验产物
unzip -l chrome-mv3-prod-0.1.29.zip | head -50
# 期望看到 manifest.json 且 version === "0.1.29"
```

## 9. 提交手册（README.md）骨架

`docs/release/v0.1.29-chrome-store/README.md` 应包含：

1. 预检：Google 账号 + 一次性 $5 注册费 + 启用了 2FA
2. 打开 Chrome Web Store Developer Dashboard
3. New Item → 上传 `chrome-mv3-prod-0.1.29.zip`
4. Store listing 标签：填 `store-listing.md` 里所有字段
5. Privacy 标签：填 `privacy-questionnaire.md` + 上传/链接 `PRIVACY.md`
6. Permissions 标签：填 `manifest-review.md`
7. Submit for review
8. 审核时间预期：新扩展首审 1-3 工作日；版本更新通常 < 24h
9. 失败回退：审核驳回会邮件给出原因；按原因调整后再次 Submit

## 10. 不做的事

- 不调用 CWS Publish API
- 不加 `.github/workflows/release.yml`
- 不打 git tag（用户后续可手动打）
- 不修改 README / ChangeLog 之外的现有代码
- 不清理 `chrome-mv3-prod/` 旧目录（用户控制）

## 11. 风险与注意

- `web_accessible_resources` 引用了一个 CSV 文件名 `products_export_20260224_0941.csv`，按 Chrome MV3 规范文件名应相对 `extension root`；plasmo build 输出的 zip 里应当保留此结构。
- `$EXTENSION_DEV_HOST_LOCALHOST` / `$EXTENSION_DEV_HOST_LOOPBACK` 这两条会出现在发布版 manifest 中（用户已知情）。提交时要在 `manifest-review.md` 里明确写"only used during local development, no effect on end users"。如果审核因此被打回，备选方案是删这两行重新 build。
- 如果 Privacy 标签拒绝接受 raw.githubusercontent.com 链接，需切换到 GitHub Pages 或自有域名（届时再决定）。

## 12. 验证（发布前最后一步）

提交前由用户对以下三件事确认：
1. `chrome-mv3-prod-0.1.29.zip` 解开后 `manifest.json` `version === "0.1.29"`
2. `PRIVACY.md` raw 链接能打开
3. 商店文案与 `package.json` 实际功能一致（特别是 description 中提到的功能点）