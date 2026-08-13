# Step 0 基线确认

记录时间：2026-08-13。  
本文件只做盘点，不修改旧脚本、不修改本机 SillyTavern、不读取或输出密钥。

## 1. 已阅读规则

- 本仓库 `AGENTS.md`
- `Tavern-Multi-TTS第三方扩展改造计划.md`

约束摘要：只改本仓库；不改 SillyTavern / 酒馆助手 / IndexTTS / GPT-SoVITS 源码；不覆盖用户正在使用的旧脚本；不提交、不推送；不安装依赖、不下载模型、不发起真实付费 API。

## 2. 新仓库 Git 状态

| 项       | 值                                             |
| -------- | ---------------------------------------------- |
| 路径     | `D:\git项目\Multi-TTS`                         |
| 远程     | `https://github.com/dreamdana88/Multi-TTS.git` |
| 分支     | `main`                                         |
| HEAD     | `f85b82e122824d182c8ea6cceb767e955d056947`     |
| 提交说明 | `立项`（2026-08-13 13:33:30 +0800）            |
| 工作区   | 干净，与 `origin/main` 同步                    |

当前仓库文件：

- `AGENTS.md`
- `Tavern-Multi-TTS第三方扩展改造计划.md`
- `.gitattributes`
- 本文件 `docs/step-0-baseline.md`

尚无 `manifest.json`、`package.json`、`src/`、构建配置或测试。

## 3. 三类旧资产

### 3.1 旧源码（迁移应以这里为准）

路径：`D:\酒馆资料\tavern_helper_combo-latest\src\minimax-tts`

这是酒馆助手 combo 工程里的 TypeScript / Vue 源码，不是 Git 仓库中的发布产物。计划已明确：不得以旧发布仓库的单文件 `index.js` 作为新项目源码基础。

| 文件               |  大小 | 最后写入            | SHA-256                                                            |
| ------------------ | ----: | ------------------- | ------------------------------------------------------------------ |
| `api.ts`           | 27010 | 2026-03-23 00:57:18 | `ea7a338d49b6c616caa7c44c32934e86a5c3e5774bd8a666d69ecf805eb5e894` |
| `cache.ts`         |  7484 | 2026-03-22 19:02:45 | `26544736070eaaa92c83b8ae9dc17b20462a193fe186f32910beab1738363afa` |
| `index.ts`         | 18132 | 2026-04-11 15:47:08 | `2eb1b93dccc386efba7c6792657040098b5b01c774de4f3869434567048090b6` |
| `inject_prompt.ts` |  3290 | 2026-03-22 18:36:36 | `7aa70a6d0498935916900c1c9ae9ae6d03dc2a5a0bd2920003c55d39d380dbaa` |
| `interjection.ts`  |  1049 | 2026-03-22 14:35:41 | `0d3e83d56317067feda7e3c33480847921b903e98b0d02549f3af1f27058ae09` |
| `Panel.vue`        | 51062 | 2026-03-23 00:57:10 | `1c76344420bbc4ab3701b558b92750311bd0cf8ba0827884abe4f8bce8cb3b60` |
| `parser.ts`        |   574 | 2026-03-22 16:36:32 | `2413efef78642c8d74949e4dfa02b47a27fe860b3c306d0a895e726fdd7502fd` |
| `playback.ts`      |  2071 | 2026-03-21 04:13:40 | `0b00cb62d1f55ad700eb28c4baf412d0fc7cac9c8f1d9998b770a648f55f5299` |
| `settings.ts`      |  5808 | 2026-03-28 11:48:14 | `708283686e49c06ea6c676f9f308a8639890deaaba68d5836d92262c9822b4aa` |
| `style.scss`       |  1032 | 2026-03-21 03:44:18 | `522b961f511df8a13de421743b6163355300216f57bc661c8e2a9158174bf5d4` |

旧工程通过 webpack 把 `src/**/index.ts` 打成酒馆助手脚本。`minimax-tts` 没有独立测试目录。

### 3.2 构建产物

| 文件                                                                   |   大小 | 最后写入            | SHA-256                                                            |
| ---------------------------------------------------------------------- | -----: | ------------------- | ------------------------------------------------------------------ |
| `D:\酒馆资料\tavern_helper_combo-latest\dist\minimax-tts\index.js`     | 136570 | 2026-07-16 17:14:05 | `6e4791798a92117d5c48412b04d564ece79dbde75899214194ca7347f47b7c71` |
| `D:\酒馆资料\tavern_helper_combo-latest\dist\minimax-tts\index.js.map` | 367844 | 2026-07-16 17:14:05 | `54a7e6caee5c36b492fd1e640bf51aa7c1af3aa27566071d9c73f5694c124c84` |

本地 `dist` 日期晚于源码最后写入，可能只是后来重新打包，不能当成比 TypeScript 源码更新的业务版本。

### 3.3 发布仓库产物

仓库：`https://github.com/dreamdana88/Tavern-Multi-TTS`  
分支：`main`  
HEAD：`49d7c00a4057efb10ff75cdbd869b6310e8d8ba3`  
最新提交：`Update index.js`（2026-04-11 15:57:28 +0800）

仓库内只有：

- `index.js`（136566 字节，SHA-256 `fe678a36af86ddf22c698f1405a5fe5714795a4865211b59c13255d15212993c`）
- `README.md`

发布 `index.js` 与本地 `dist/minimax-tts/index.js` **不一致**。旧脚本安装方式是酒馆助手脚本远程导入该 `index.js`：

```js
import 'https://quantil.jsdelivr.net/gh/dreamdana88/Tavern-Multi-TTS/index.js';
```

导出备份：`D:\酒馆资料\-Tavern_Multi-TTS.json`  
大小 1680，最后写入 2026-03-28 11:45:58，SHA-256 `4103be62feeed34f1aae1d629c476610b116decab37499c6c610e16be908b490`。  
脚本 id：`f90fb695-4484-4549-be68-73754afb7535`。

## 4. 本机实际安装版本

### 4.1 SillyTavern

| 项                  | 值                                                                 |
| ------------------- | ------------------------------------------------------------------ |
| 候选目标路径        | `D:\ST-manager1\SillyTavern`                                       |
| `package.json` 版本 | `1.18.0`                                                           |
| Git                 | 该目录不是 git 仓库，无法给出 commit / tag                         |
| 启动管理器          | `D:\ST-manager1`                                                   |
| 用户目录            | `D:\ST-manager1\SillyTavern\data\default-user`                     |
| 监听端口            | `8888`                                                             |
| 服务端插件          | `enableServerPlugins: false`                                       |
| 第三方扩展目录      | `D:\ST-manager1\SillyTavern\public\scripts\extensions\third-party` |
| 用户扩展目录        | `D:\ST-manager1\SillyTavern\data\default-user\extensions`（空）    |

本机未发现第二个完整 SillyTavern 安装。进入 Step 1 前仍需用户确认该路径就是目标实例。

已安装且启用的相关宿主扩展：

- 酒馆助手 `JS-Slash-Runner` 4.9.1，`minimum_client_version` 为 `1.12.13`
- `ST-Prompt-Template`（旧脚本提示词注入走酒馆助手 `injectPrompts`，不是这个扩展）

同机还装有但已禁用的 TTS 相关第三方扩展，与本项目不是同一套代码：

- `GSVI-Inline-TTS`
- `ST-GPT-SoVITS-Extension`
- `SillyTavern-GPT-SoVITS`

SillyTavern 内置 `public/scripts/extensions/tts/` 也包含官方 MiniMax / GSVI 适配器，与 Tavern Multi-TTS 无关，不得混用或覆盖。

`third-party` 下 **没有** `Multi-TTS` 目录。新扩展尚未安装。

### 4.2 酒馆助手里的旧脚本

全局脚本总开关：开启。  
用户：`default-user`。

| 状态 | 名称               | 脚本 id                                | 内容形态                                              |
| ---- | ------------------ | -------------------------------------- | ----------------------------------------------------- |
| 启用 | `Tavern Multi-TTS` | `f90fb695-4484-4549-be68-73754afb7535` | 远程导入发布仓库 `index.js`（78 字符）                |
| 停用 | `minimax2兜底222`  | `b155c07b-062d-4484-be8f-46f695c03eca` | 内联 webpack 包（约 104838 字符），名称像本地兜底副本 |

两个脚本 id 在 `settings.json` 中各只出现一次，配置存在酒馆助手脚本变量里。本文件不读取、不导出这些变量的值。

蜃灵若干 OpenAI 预设里有名为 `💠语音支持（Tavern Multi-TTS）` 的提示条目。那是预设文案，不是扩展源码。

### 4.3 外部 TTS 环境（只记录路径，不改）

本机存在 IndexTTS-2.5：`D:\AI\IndexTTS-2.5`，含 `webui.py` 与 `启动IndexTTS-2.5.cmd`。  
按规则视为外部进程；Step 0 / Step 1 不得启动、停止、升级或修改它。

## 5. 现有功能清单

来源：`src/minimax-tts` 源码，不是 README 宣传语。

### 5.1 运行链路

1. 酒馆助手事件：`MESSAGE_RECEIVED`、`CHARACTER_MESSAGE_RENDERED`、`MESSAGE_UPDATED`。
2. 仅处理 assistant 消息。
3. 用正则解析 `<say>` / `<say char="...">`。
4. 按当前引擎查找角色映射；未命中则回退到引擎默认音色，不报错。
5. 规范化台词：显示去掉语气词；MiniMax 保留白名单语气词；Local-GSVI 去掉全部括号语气词。
6. 按预取策略生成音频，写入内存 Map + IndexedDB。
7. 把消息里的台词替换成可点击片段：播放 / 暂停 / 重播 / 下载。
8. 内联替换失败时，在消息底部挂 fallback 列表。
9. 用 `data-minimax-tts-rendered` 避免重复装饰。

### 5.2 能力对照

| 能力              | 现状                                                                |
| ----------------- | ------------------------------------------------------------------- |
| MiniMax 云端 TTS  | 有。双端点 `api.minimaxi.com` / `api-bj.minimaxi.com`，失败重试     |
| Local-GSVI        | 有。`/v1/audio/speech`，多种 payload 回退                           |
| IndexTTS          | 无                                                                  |
| `<say char>` 解析 | 有。不支持 `emotion` / `intensity`                                  |
| 多角色映射        | MiniMax：角色名 → Voice ID；GSVI：角色名 → 模型 / 语种 / 情绪       |
| 映射存档          | MiniMax 与 GSVI 各一套，可保存 / 读取 / 删除                        |
| 提示词注入        | 酒馆助手 `injectPrompts`，可开关、改深度、role、模板                |
| 预取              | `manual` / `auto_all` / `auto_first_n`，有并发上限                  |
| 缓存              | IndexedDB `minimax_tts_cache`，上限 100 条 / 50MB                   |
| 播放              | 单例 `HTMLAudioElement`，支持暂停、恢复、停止、重播                 |
| 下载              | 文件名 `minimax_tts_{messageId}_{index}.mp3`                        |
| 测试语音          | 日 / 中 / 英；可测默认音色或单条角色映射                            |
| 音色目录          | MiniMax 可拉取并按语言 / 性别 / 来源筛选；localStorage 缓存 24 小时 |
| GSVI 模型目录     | 拉取 `/models/{v2,v3,v4,v2Pro}`                                     |
| 卸载清理          | `pagehide` 时停监听、卸注入、停播放、卸 Vue、删挂载 DOM             |

### 5.3 酒馆助手依赖（Step 3 必须替换）

- 设置：`getScriptId`、`getVariables`、`insertOrAssignVariables`
- 消息：`getChatMessages`、`retrieveDisplayedMessage`
- 事件：`eventOn` + `tavern_events.*`
- 注入：`injectPrompts` / `uninjectPrompts`
- UI 挂载：`#extensions_settings2` 或 `#extensions_settings`
- 运行时：jQuery、Vue 3、Pinia、lodash、zod、klona、toastr
- 样式传送：`@util/script` 的 `createScriptIdDiv`、`teleportStyle`

这些都不是 SillyTavern 第三方扩展官方生命周期。

## 6. 设置字段清单

来源：`settings.ts` 的 Zod schema。设置存酒馆助手脚本变量，无独立 schema 版本号。

### 6.1 通用

| 字段                 | 类型                                       | 默认         | 界面                  |
| -------------------- | ------------------------------------------ | ------------ | --------------------- |
| `enabled`            | boolean                                    | `true`       | 有                    |
| `ttsEngine`          | `'minimax' \| 'local_gsvi'`                | `'minimax'`  | 有                    |
| `speed`              | number，夹到 0.5–2                         | `1`          | 有                    |
| `requestTimeoutMs`   | int，夹到 1000–30000                       | `15000`      | 无，仅请求使用        |
| `maxConcurrency`     | int，夹到 1–10                             | `3`          | 预取非 manual 时显示  |
| `prefetchMode`       | `'manual' \| 'auto_all' \| 'auto_first_n'` | `'auto_all'` | 有                    |
| `prefetchFirstCount` | int，夹到 1–10                             | `2`          | `auto_first_n` 时显示 |
| `testLanguage`       | `'ja' \| 'zh' \| 'en'`                     | `'ja'`       | 有                    |

### 6.2 MiniMax

| 字段                        | 类型                                | 默认              | 界面         |
| --------------------------- | ----------------------------------- | ----------------- | ------------ |
| `apiKey`                    | string                              | `''`              | 有，password |
| `groupId`                   | string                              | `''`              | 有           |
| `voiceId`                   | string                              | `''`              | 有，手填优先 |
| `voiceCatalogSelectedId`    | string                              | `''`              | 手填为空时用 |
| `model`                     | 见下方枚举                          | `'speech-2.8-hd'` | 有           |
| `vol`                       | number，夹到 0–10                   | `1`               | 有           |
| `characterMappings[]`       | `{ characterName, minimaxVoiceId }` | `[]`              | 有           |
| `characterMappingPresets[]` | `{ name, mappings }`                | `[]`              | 有           |

模型枚举：`speech-02-hd`、`speech-02-turbo`、`speech-2.8-hd`、`speech-2.8-turbo`、`speech-2.6-hd`、`speech-2.6-turbo`。

### 6.3 Local-GSVI

| 字段                            | 类型                                                        | 默认             | 界面                          |
| ------------------------------- | ----------------------------------------------------------- | ---------------- | ----------------------------- |
| `localGsviBaseUrl`              | string                                                      | `''`             | 有                            |
| `localGsviAuthToken`            | string                                                      | `''`             | 高级设置                      |
| `localGsviModel`                | string                                                      | `''`             | 有，格式 `modelName\|version` |
| `localGsviCharacter`            | string                                                      | `''`             | 无独立控件，与 model 同步     |
| `localGsviFormat`               | `'mp3' \| 'wav'`                                            | `'mp3'`          | 无                            |
| `localGsviUseReferenceAudio`    | boolean                                                     | `false`          | 有，但 checkbox 禁用          |
| `localGsviLanguage`             | string                                                      | `'ja'`           | 有                            |
| `localGsviEmotion`              | string                                                      | `''`             | 有                            |
| `localGsviReferenceText`        | string                                                      | `''`             | 无                            |
| `localGsviTopK`                 | int 1–200                                                   | `20`             | 无                            |
| `localGsviTopP`                 | number 0–1                                                  | `0.7`            | 无                            |
| `localGsviTemperature`          | number 0–2                                                  | `0.7`            | 无                            |
| `localGsviTextLang`             | string                                                      | `'多语种混合'`   | 高级设置                      |
| `localGsviTextSplitMethod`      | string                                                      | `'按标点符号切'` | 高级设置                      |
| `localGsviBatchSize`            | int 1–8                                                     | `1`              | 高级设置                      |
| `gsviCharacterMappings[]`       | `{ characterName, gsviVoiceId, gsviLanguage, gsviEmotion }` | `[]`             | 有                            |
| `gsviCharacterMappingPresets[]` | `{ name, mappings }`                                        | `[]`             | 有                            |

GSVI 合成时语种和情绪不能为空，否则直接抛错。

### 6.4 提示词注入

| 字段             | 类型                                | 默认                     | 界面                        |
| ---------------- | ----------------------------------- | ------------------------ | --------------------------- |
| `injectEnabled`  | boolean                             | `true`                   | 有                          |
| `injectDepth`    | int                                 | `1`                      | 滑块 0–10；schema 允许 0–50 |
| `injectRole`     | `'system' \| 'user' \| 'assistant'` | `'system'`               | 有                          |
| `injectTemplate` | string                              | 内置 `<VOICE_RULE>` 模板 | 有                          |

模板占位符：`${mapped_characters}`，兼容旧名 `${target_characters}`。  
注入时还会追加一段不可编辑的 `<VOICE_CHAR_RULE>`。

### 6.5 不在设置对象里、但影响结果的存储

| 存储         | 键 / 库                                | 用途                      |
| ------------ | -------------------------------------- | ------------------------- |
| localStorage | `minimax_tts_voice_catalog_v1`         | MiniMax 音色目录，TTL 24h |
| localStorage | `minimax_tts_voice_filter_v1`          | 音色筛选 UI 状态          |
| IndexedDB    | `minimax_tts_cache` / `audio_cache` v1 | 音频缓存                  |

缓存键包含引擎、文本、音色 / 模型、语速音量、GSVI 语种情绪和部分生成参数。新扩展必须换独立设置命名空间和缓存版本，避免覆盖旧脚本数据。

## 7. 本次允许修改的目录

| 路径                                              | 权限                                                                                    |
| ------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `D:\git项目\Multi-TTS`                            | 允许。新扩展唯一工作区                                                                  |
| `D:\酒馆资料\tavern_helper_combo-latest`          | 只读。旧源码与本地构建产物                                                              |
| `https://github.com/dreamdana88/Tavern-Multi-TTS` | 只读。旧发布回退                                                                        |
| `D:\ST-manager1\SillyTavern`                      | 禁止改源码、用户数据、已装扩展。Step 1 若做开发符号链接，必须另获授权，且不得覆盖旧脚本 |
| `D:\ST-manager1\SillyTavern\data\default-user`    | 禁止。含旧脚本、映射、密钥                                                              |
| `D:\AI\IndexTTS-2.5`                              | 禁止。外部模型环境                                                                      |

可以在不影响旧版本的前提下开始迁移：新扩展用独立仓库、独立设置键、独立缓存名；旧酒馆助手脚本保持启用即可继续工作。

## 8. 已知缺口（供后续步骤，本步不实施）

1. 新仓库还没有第三方扩展骨架。
2. 业务完全绑在酒馆助手 API 上。
3. 设置没有 schema 版本，也没有旧脚本 → 新扩展的导入工具。
4. 未映射角色会静默使用默认音色。
5. `<say>` 还不认识 `emotion` / `intensity`。
6. 没有 IndexTTS 适配器。
7. 旧源码没有单元测试。
8. 发布 `index.js`、本地 `dist`、TypeScript 源码三者不完全同一快照；迁移以 TypeScript / Vue 源码为准。
9. 本机同时存在启用的 CDN 脚本和停用的内联兜底脚本。新扩展若与旧脚本同时启用，必须提示冲突。

## 9. 验收对照

| 计划要求                           | 结论                                                        |
| ---------------------------------- | ----------------------------------------------------------- |
| 明确旧源码、构建产物、实际安装版本 | 见第 3、4 节                                                |
| 明确本次允许修改的目录             | 见第 7 节                                                   |
| 可以在不影响旧版本的前提下开始迁移 | 可以。旧脚本仍由酒馆助手加载发布 `index.js`；新扩展尚未安装 |

未验证：未启动 SillyTavern 做实机点击；未读取用户映射或密钥；未对比 CDN 当前字节与 GitHub HEAD 是否被缓存延迟。
