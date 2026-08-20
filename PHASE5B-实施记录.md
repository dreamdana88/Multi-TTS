# Phase 5B 实施记录：逐句稀疏命名情绪

工作目录：`D:\git项目\Multi-TTS`  
记录时间：2026-08-20 19:15（Asia/Shanghai）

依据 `GROK-任务书-Phase5B-Multi-TTS-逐句稀疏情绪.md`。未修改设置面板、IndexTTS 服务、MiniMax/GSVI 契约。未提交、未推送。

---

## 1. 开工 Git / 基线 / UI 保护 / 备份

- 分支：`main`，HEAD：`06f61ed`（滑条默认态与悬停态使用同一套白底藕粉样式）
- `git status --short`：仅用户改动 `Tavern-Multi-TTS第三方扩展改造计划.md`；未覆盖该文件其余内容，只追加 Step 6 完成记录。
- 未修改 `src/settings-panel.vue`、`src/style.css`。
- `pnpm verify` 基线：typecheck/lint 通过后，在 `prettier --check .` 失败。无关文件仍是：
  - `.claude/settings.local.json`
  - `HANDOFF-Multi-TTS-SillyTavern-Extension.md`
  - `Multi-TTS.code-workspace`
  - `README.md`
    未顺手修复。

备份目录：`D:\git项目\Multi-TTS\backups\phase5b-20260820-191510\`

| 文件                                        |  字节 | SHA-256                                                            |
| :------------------------------------------ | ----: | :----------------------------------------------------------------- |
| `AGENTS.md`                                 |  7128 | `4A8D3DB66D5896269F2FAA29CA447FE19A9EA009FD5051401B79FE702E875975` |
| `src/message-tts/say-parser.ts`             |   674 | `71E1AD96D0C878863416F23F775629EC74C70D01EDDCFBDA4F3D01EF0EAB268F` |
| `src/message-tts/say-parser.test.ts`        |  2383 | `1E97B1C3F3605FEA1FD633908ABBD516701104ED155F5BE2E07C52DBF3200FE3` |
| `src/engines/contract.ts`                   |  1861 | `E0F19C1D9E1582F0B32556942518AB668A28B59EF7E82598A2D334AFAEF80840` |
| `src/engines/index-tts.ts`                  |  8866 | `4A5AADC788451B41122F7E51B0F05E8913D89E1A712958CA4C0434611B7BC711` |
| `src/engines/index-tts.test.ts`             | 10098 | `0D30F6E7CD109FCA31956A654A4C58D36A88988A669979596624D369D81211DC` |
| `src/message-tts/synthesis-request.ts`      |  9560 | `49EFEA3C2B0275C33B2F02C483E55E61500E76220A2CBE8484C748E7336DFC6D` |
| `src/message-tts/synthesis-request.test.ts` | 11466 | `F47EF7BB39750F2A87883A6EB345F75ED1E55ADED7DD7177F959EB3FAFCBB89C` |
| `src/audio-cache.ts`                        | 11678 | `D55FC0092CA42317AD0B4ABE168CDC17591DBB0F794722CDC99FE7F72787F301` |
| `src/audio-cache.test.ts`                   |  9774 | `25264A4118BBBB0ED7AB97CA42BA0A039B31C067C9E4318EA2F5C4F5BFDDA3DB` |
| `src/prompt-injection.ts`                   |  3002 | `ADE939493A6B6FF8F455851B3A016F1EBB6D2F508120B0CFB4DFE8C8023C1843` |
| `src/prompt-injection.test.ts`              |  3081 | `B67B6020D76FFEBA77DB20393BEED9E5F1D7DDF33DBE546DF2C13DD49A674597` |
| `src/message-tts/chat-runtime.ts`           | 14216 | `10A7539C43A8DBA98BA44A53E1380550A7EC01111780B968691DD060A0203FC7` |
| `src/message-tts/chat-runtime.test.ts`      | 30214 | `DF136471180BCE5C5E33F6B69B890C9C2697F0CD78659B7553D0F1BBA65BF809` |

（完整清单见备份目录 `manifest-sha256.csv`。）

---

## 2. 修改文件与数据流

标签 → 解析 → 请求 → API → 缓存 → 播放：

1. `extractSaySegments()` 分层解析开标签属性，读出 `char` 与可选 `emo`。
2. 合法 `emo` 进入 `SaySegment.emotion`；非法则丢弃本段情绪，保留 char/正文/index，并打不含完整台词的警告。
3. `chat-runtime.ensureAudio()` 把该段 emotion 同时传入 `buildSynthesisRequest()` 与 `buildAudioCacheKeyInput()`。
4. IndexTTS payload 仅在有合法稀疏对象时多出 `emotion`；否则仍是五字段。
5. 缓存键使用按八维顺序规范化的 `喜:0.35,平静:0.1` 字符串，与标签书写顺序无关。
6. 播放/下载仍绑定 `message_id:swipe_id:segment_index`、请求代次和 AbortSignal。

---

## 3. 语法、回退与提示词

- 普通：`<say char="角色名">...</say>`，请求不带 `emotion`。
- 单情绪：`emo="怒:0.35"`。
- 复合：`emo="哀:0.30,低落:0.15"`，最多三种。
- 允许名称：喜、怒、哀、惧、厌恶、低落、惊喜、平静。
- `0 < value <= 1.0`；全/半角冒号逗号可解析。
- 非法整段作废，不继承上一句，台词仍按普通生成。
- MiniMax / Local-GSVI 仍用现有 `injectTemplate`（含括号语气词）。切换引擎 Tab 会改 `ttsEngine`，经 `planSettingsSync` 重新注入。
- IndexTTS 使用内置 `INDEX_TTS_INJECT_TEMPLATE`，不读用户自定义 `injectTemplate`。结构对齐现有 `<VOICE_RULE>`：角色范围、char 必填、禁止旁白/空标签/嵌套；禁止括号语气词；日常省略 `emo`；明显情绪才写 `emo="名称:数值"`；八个合法名、1–3 种、数值区间；禁止八位数组/英文模板名/`emotion`/`intensity`/零值/重复/堆叠。三条例：普通、单情绪、双情绪。

---

## 4. 测试命令与结果

| 命令                                              | 退出码 | 结果                                                                                                                                                                                                 |
| :------------------------------------------------ | -----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm typecheck`                                  |      0 | 通过                                                                                                                                                                                                 |
| `pnpm typecheck:node`                             |      0 | 通过                                                                                                                                                                                                 |
| `pnpm lint`                                       |      0 | 通过                                                                                                                                                                                                 |
| 定向 `prettier --check`（任务书列出的 16 个文件） |      0 | 通过                                                                                                                                                                                                 |
| `pnpm test`                                       |      0 | 24 个测试文件 / 143 用例全部通过                                                                                                                                                                     |
| `pnpm build`                                      |      0 | `dist/index.js` 235.20 kB                                                                                                                                                                            |
| `pnpm test:dist`                                  |      0 | `onInstall, onActivate, onEnable, onDisable, onClean, onDelete`                                                                                                                                      |
| `pnpm verify`                                     |      1 | typecheck/lint 通过后，`prettier --check .` 被开工前无关文件阻断：`.claude/settings.local.json`、`HANDOFF-Multi-TTS-SillyTavern-Extension.md`、`Multi-TTS.code-workspace`、`README.md`。未顺手修复。 |

---

## 5. 真实宿主验收

静态完成，实机待验收。未覆盖实际安装扩展，未在 SillyTavern 中试听。

---

## 6. 未验证事项

- 真实 IndexTTS 普通/单情绪/复合/再普通四句试听
- 非法 `emo` 在实机控制台的安全警告
- 多角色预取、Swipe、下载的实机串音检查

---

## 7. 回退

不要用 `git reset --hard`。用备份覆盖本阶段文件：

`D:\git项目\Multi-TTS\backups\phase5b-20260820-191510\`

然后删除 `PHASE5B-实施记录.md`。不要回退设置面板 UI 改动。
