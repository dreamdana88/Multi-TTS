# Tavern Multi-TTS

SillyTavern 第三方前端扩展。目标是把原来的酒馆助手脚本，迁移成可以通过 Git 仓库地址安装、启停和更新的公开插件。

当前版本是 **0.1.0**：扩展设置面板已在 SillyTavern 1.18.0 实机显示。仓库内已迁移 `<say>` 解析、语气词清理、音频缓存、播放下载、预取队列，以及 MiniMax / Local-GSVI 请求适配器。这些模块还没有接到聊天消息上，所以安装后仍然不会自动朗读。

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

- `schemaVersion`：`1`
- `enabled`：是否启用 TTS 功能（骨架阶段只保存，不触发合成）

卸载或在扩展管理里清理数据时，会删除这个命名空间。

## 和旧脚本的关系

旧酒馆助手脚本（从 `Tavern-Multi-TTS` 仓库加载 `index.js`）可以继续用。本扩展不会改它，也不会使用它的脚本变量。

同时启用两者时，后续版本会给出冲突提示。当前骨架还不会生成音频。
