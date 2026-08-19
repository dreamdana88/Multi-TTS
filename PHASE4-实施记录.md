# Phase 4 实施记录：Multi-TTS 接入 IndexTTS-2.5

## 1. 开工前基线

`git status --short`：

```text
?? HANDOFF-Multi-TTS-SillyTavern-Extension.md
?? Multi-TTS.code-workspace
```

这两个未跟踪文件属于用户，本阶段未覆盖、删除、stash 或 reset。

`pnpm verify` 基线：

- `typecheck` / `typecheck:node` / `lint` 通过。
- `prettier --check .` 失败，未进入测试与构建。失败文件：
  - `.claude/settings.local.json`
  - `HANDOFF-Multi-TTS-SillyTavern-Extension.md`
  - `Multi-TTS.code-workspace`
  - `README.md`
- 按任务书要求，未顺手修理这些无关格式问题。
- 单独执行 `pnpm test` 作为逻辑基线：`22` 个测试文件、`115` 个用例全部通过。

## 2. 修改 / 新增文件清单

新增：

- `src/engines/index-tts.ts`
- `src/engines/index-tts.test.ts`
- `PHASE4-实施记录.md`

修改：

- `src/engines/contract.ts`
- `src/engines.ts`
- `src/extension-settings.ts`
- `src/extension-settings.test.ts`
- `src/message-tts/synthesis-request.ts`
- `src/message-tts/synthesis-request.test.ts`
- `src/audio-cache.ts`
- `src/audio-cache.test.ts`
- `src/prompt-injection.ts`
- `src/prompt-injection.test.ts`
- `src/settings-sync.ts`
- `src/settings-sync.test.ts`
- `src/message-tts/interjection.ts`
- `src/message-tts/interjection.test.ts`
- `src/settings-panel/catalog-state.ts`
- `src/settings-panel/catalog-state.test.ts`
- `src/settings-panel/test-utterance.ts`
- `src/settings-panel/test-utterance.test.ts`
- `src/settings-panel.vue`
- `src/style.css`
- `src/message-tts/chat-runtime.test.ts`

未改：`chat-runtime.ts`、播放器、预取队列、IndexTTS / SillyTavern / GSVI 外部项目，以及开工前用户文件。

## 3. 三引擎接线与 IndexTTS 设置字段

`TtsEngineId` 现为 `'minimax' | 'local_gsvi' | 'index_tts'`。

`createTtsAdapter()` 对三个引擎显式分支，不再把非 GSVI 默认成 MiniMax。

IndexTTS 独立设置：

- `indexTtsBaseUrl`，默认 `http://127.0.0.1:7860`
- `indexTtsVoiceId`
- `indexTtsLanguage`，默认 `ZH`，仅允许 `ZH | EN | JA | AR | ES`
- `indexTtsCharacterMappings`：`characterName + indexTtsVoiceId + indexTtsLanguage`
- `indexTtsCharacterMappingPresets`：独立映射存档

MiniMax / Local-GSVI 的设置和映射字段仍按原样解析，不会被清空或复用。

设置面板：

- 引擎下拉增加 `IndexTTS-2.5`
- IndexTTS 只显示服务地址、检查连接、拉取/刷新音色、默认音色、默认语言、试听
- 音色目录改为 `EngineCatalogs` 三引擎结构，互不共享列表和过滤状态
- 角色映射行：角色名、音色预设、语言、试听、删除
- 错误和离线状态走现有状态栏

## 4. 实际发送的 speech JSON 示例

`POST http://127.0.0.1:7860/v1/audio/speech`

```json
{
  "model": "IndexTTS-2.5",
  "input": "要生成的台词",
  "voice": "mori",
  "response_format": "wav",
  "language": "ZH"
}
```

只发送这 5 个字段。模型与 `wav` 由适配器内部固定，不向请求类型或 JSON 额外暴露 `emotion`、`intensity`、`speed`。

## 5. 缓存键、AbortSignal、代次与 Swipe

IndexTTS 缓存键只包含：

- 文本
- `engine=index_tts`
- 规范化服务 origin
- 固定模型 `IndexTTS-2.5`
- 音色 ID
- 语言
- `wav`

不把 MiniMax / GSVI 的速度、音量、情绪、切句等参数写进 IndexTTS 缓存键。

播放与下载继续绑定现有通用机制：

- 控件键：`message_id:swipe_id:segment_index`
- 每个 in-flight 请求有独立 `request_token` 和 `AbortSignal`
- 合成完成后若代次已过期或 signal 已 abort，结果标记为 `cancelled`，不写回旧控件
- Swipe / 编辑 / 切换聊天会 abort 过期请求并拆掉旧装饰

本阶段没有新增客户端队列，也没有改 `chat-runtime.ts`。

## 6. A/B 逆序回归

测试：`src/message-tts/chat-runtime.test.ts`

方法：

1. 使用 IndexTTS 引擎和爱丽丝 / 鲍勃两条完整映射。
2. 同一消息挂两个分段，分别点击播放，让合成 Promise 挂起。
3. 先 resolve 鲍勃的 Blob，再 resolve 爱丽丝的 Blob。
4. 断言 `playAudioBlob` 收到的顺序是鲍勃 Blob、爱丽丝 Blob。
5. 再分别点下载，断言下载拿到的仍是各自 Blob。

另两条回归：

- 过期 Swipe 后迟到的 IndexTTS Blob 不得播放，也不得复活旧控件。
- 取消后的 IndexTTS 请求即使再 resolve，也不当作错误，不播放。

结果：上述用例通过。

## 7. `pnpm verify` 结果

官方命令 `pnpm verify` 仍在 `prettier --check .` 处失败，失败文件与开工前基线完全相同：

- `.claude/settings.local.json`
- `HANDOFF-Multi-TTS-SillyTavern-Extension.md`
- `Multi-TTS.code-workspace`
- `README.md`

这些文件不是本阶段改动，未为过测试去改 Prettier 规则或格式化用户文件。

本阶段改动范围内的验证已通过：

- `pnpm typecheck` 通过
- `pnpm typecheck:node` 通过
- `pnpm lint` 通过
- `prettier --check src tests PHASE4-实施记录.md` 及项目配置文件通过
- `pnpm test`：`23` 个测试文件、`134` 个用例全部通过（基线为 `22` / `115`）
- `pnpm build` 通过，`dist/index.js` 215.61 kB
- `pnpm test:dist` 通过：`onInstall, onActivate, onEnable, onDisable, onClean, onDelete`

MiniMax 与 Local-GSVI 原有测试全部保持通过。

## 8. 未做的真实运行验收

以下内容本阶段明确没有做，不能当成已验收：

- 未连接真实 `http://127.0.0.1:7860` IndexTTS 服务
- 未在 SillyTavern 实机安装或打开设置面板
- 未跑真实 RP、多角色连读或试听
- 未验证真实网络超时、显存排队或中文预设在浏览器里的显示
- 未实现 emotion / intensity / 八维向量 / 语速
- 未做发布包、覆盖包或安装方案

## 9. 回退方法

不要使用 `git reset --hard`。

删除新增文件：

- `src/engines/index-tts.ts`
- `src/engines/index-tts.test.ts`
- `PHASE4-实施记录.md`

按文件还原本阶段修改（仅限这些路径）：

```text
git restore --source=HEAD --
  src/audio-cache.test.ts
  src/audio-cache.ts
  src/engines.ts
  src/engines/contract.ts
  src/extension-settings.test.ts
  src/extension-settings.ts
  src/message-tts/chat-runtime.test.ts
  src/message-tts/interjection.test.ts
  src/message-tts/interjection.ts
  src/message-tts/synthesis-request.test.ts
  src/message-tts/synthesis-request.ts
  src/prompt-injection.test.ts
  src/prompt-injection.ts
  src/settings-panel.vue
  src/settings-panel/catalog-state.test.ts
  src/settings-panel/catalog-state.ts
  src/settings-panel/test-utterance.test.ts
  src/settings-panel/test-utterance.ts
  src/settings-sync.test.ts
  src/settings-sync.ts
  src/style.css
```

开工前用户文件应继续保留：

- `HANDOFF-Multi-TTS-SillyTavern-Extension.md`
- `Multi-TTS.code-workspace`
