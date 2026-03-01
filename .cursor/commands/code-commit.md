# Code Commit

## 概述
执行一次完整的 Git 提交流程：分析变更、生成规范的 commit message、执行提交、直接 push。遵循 Conventional Commits 规范。

## 前置条件

1. **检查 Git 状态**
   - 运行 `git status` 确认当前状态
   - 暂存有 → 只提交暂存；暂存无且工作区有 → 先 `git add .` 再提交

2. **若无可提交变更**
   - 提示用户无变更需要提交

## 执行步骤

### 步骤 1：分析变更

- 运行 `git diff --staged` 获取已暂存变更
- 运行 `git diff` 获取未暂存变更
- 运行 `git status --short` 获取简要状态

- **分析变更内容**：
  - 识别修改的文件类型（新增/修改/删除）
  - 识别变更类型：功能、修复、重构、文档、样式、测试、构建等
  - 识别变更范围（scope）：如 `createProduct`、`ProductTransfer`、`api` 等

### 步骤 2：暂存与提交范围

- **暂存有变更**：只提交已暂存内容，不将工作区未暂存文件加入本次提交
- **暂存无、工作区有变更**：执行 `git add .` 暂存工作区全部变更，再继续提交

### 步骤 3：生成 Commit Message

遵循 **Conventional Commits** 格式：

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

**Type 类型**（必选）：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档变更
- `style`: 代码格式（不影响逻辑的改动）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具/依赖等变更

**Scope 范围**（可选）：
- 根据项目结构推断，如 `ProductTransfer`、`createProduct`、`api` 等

**Subject 主题**（必选）：
- 使用祈使句、现在时态，如 "add" 而非 "added"
- 首字母小写
- 不加句号
- 长度控制在 50 字符以内

**示例**：
```
feat(ProductTransfer): add CSV import validation
fix(createProduct): resolve API timeout on bulk create
refactor(api): extract upload logic to separate module
```

### 步骤 4：确认并执行

- 将生成的 commit message 展示给用户
- 若用户提供了额外说明（如 `/code-commit 修复 DX-523 相关问题`），将其融入 message 或作为 footer
- 用户确认后执行：`git commit -m "<message>"`

### 步骤 5：推送

- 提交成功后直接执行 `git push`，无需询问
- 若需关联 issue，可在 message 中添加 `#issue-number` 或 `fixes #123`

## 特殊场景处理

| 场景 | 处理方式 |
|------|----------|
| 无变更 | 提示并中止 |
| 暂存有 | 只提交暂存内容 |
| 暂存无、工作区有 | 先 `git add .` 暂存全部，再提交 |
| 变更涉及多个功能 | 建议拆分为多个 commit，或使用复合描述 |
| 合并冲突 | 提示先解决冲突再提交 |
| 首次提交 | 可建议 `git commit -m "chore: initial commit"` |
| 用户提供额外参数 | 将参数作为 commit message 的补充或替代 |

## 输出格式

提交并 push 成功后输出：
```
[commit-hash] type(scope): subject
pushed to <branch>
```

## 注意事项

- 不要提交敏感信息（如 API key、密码）
- 不要提交 `node_modules`、`.env` 等应忽略的文件
- 确保 commit message 能准确描述变更内容，便于后续追溯
