# Tavern Multi-TTS

SillyTavern 第三方 TTS 扩展，支持 MiniMax、Local-GSVI、IndexTTS 和 Fish Audio。

## 安装

在 SillyTavern 中打开 **扩展 → 安装扩展**，粘贴仓库地址：

<https://github.com/dreamdana88/Multi-TTS>

安装完成后刷新页面，在扩展设置中找到 **Tavern Multi-TTS**。

## 使用

1. 启用扩展。
2. 选择 TTS 引擎并填写对应服务配置。
3. 添加角色映射。
4. 发送消息后，带有 `<say>` 标签的台词会显示播放、下载和重新生成按钮。

旧酒馆助手 TTS 脚本不要与本扩展同时启用，否则可能重复生成或播放语音。

## Fish Audio

使用 Fish Audio 前，需要额外安装独立的服务端桥接插件：

<https://github.com/dreamdana88/Multi-TTS-Fish-Bridge>

安装并启用 SillyTavern Server Plugins 后，重启 SillyTavern，再在本扩展中配置 Fish Audio。

开发基准为 SillyTavern 1.18.0，不锁定客户端版本。
