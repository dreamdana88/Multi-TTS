# Tavern Multi-TTS

SillyTavern 第三方前端扩展。目标是把原来的酒馆助手脚本，迁移成可以通过 Git 仓库地址安装、启停和更新的公开插件。

当前版本是 **0.1.0**：已使用 SillyTavern 1.18.0 官方扩展设置、原生消息事件和 `setExtensionPrompt` 接入聊天。助手消息里的 `<say>` 台词会变成可点击片段。完整引擎/映射界面还在后续步骤。

最低 SillyTavern 版本：**1.18.0**。

## 安装

在 SillyTavern 里：

1. 打开 **扩展** → **安装扩展**。
2. 粘贴仓库地址：`https://github.com/dreamdana88/Multi-TTS`
3. 安装后刷新页面，在扩展设置中找到 **Tavern Multi-TTS**。

安装不会改酒馆助手脚本，也不会读取或覆盖旧脚本的配置。新旧两套数据使用不同的设置命名空间。

## 开发构建

本仓库不会自动写入任何本机 SillyTavern 的 `third-party` 目录。

```bash
pnpm install
pnpm verify
```

常用命令：

- `pnpm build`：生成 `dist/index.js` 和 `dist/index.css`
- `pnpm test`：单元测试
- `pnpm typecheck` / `pnpm lint` / `pnpm format`

### 可选：开发符号链接

只有你自己明确要在本机联调时才做。不要覆盖旧酒馆助手脚本，也不要替换已安装的其他扩展。

全局安装（所有用户可见）：

```text
SillyTavern/public/scripts/extensions/third-party/Multi-TTS  ->  本仓库根目录
```

当前用户安装：

```text
SillyTavern/data/<user-handle>/extensions/Multi-TTS  ->  本仓库根目录
```

Windows 示例（请自行替换路径，不要照抄别人的安装目录）：

```bat
mklink /D "C:\path\to\SillyTavern\public\scripts\extensions\third-party\Multi-TTS" "C:\path\to\Multi-TTS"
```

链接后重启 SillyTavern。修改源码后执行 `pnpm build`。

## 设置

扩展设置保存在 SillyTavern 的 `extensionSettings.tavern_multi_tts`，带 `schemaVersion`。

当前字段：

- `schemaVersion`：`2`
- `enabled` / `injectEnabled`：功能和提示词注入开关
- MiniMax / Local-GSVI 引擎字段、角色映射和预取参数（可通过导入写入；完整面板在后续步骤）

卸载或在扩展管理里清理数据时，会删除这个命名空间。

### 从旧酒馆助手脚本导入

1. 在酒馆助手里打开旧 Tavern Multi-TTS 脚本变量，复制整份设置 JSON。
2. 在新扩展面板选择「导入旧酒馆助手设置」。
3. 导入只会写入 `extensionSettings.tavern_multi_tts`，不会改旧脚本变量。

密钥会出现在 SillyTavern 扩展设置里（和官方扩展设置机制一样），但不会写入日志。

## 和旧脚本的关系

旧酒馆助手脚本可以继续用。本扩展使用独立设置命名空间和缓存库。若两者同时装饰消息，新扩展会提示只保留一个，避免重复生成。
