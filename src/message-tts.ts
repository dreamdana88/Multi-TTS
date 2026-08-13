export { extractSaySegments, type SaySegment } from './message-tts/say-parser';
export { createChatRuntime } from './message-tts/chat-runtime';
export {
  decorateMessageElement,
  findMessageElement,
  removeMessageDecorations,
} from './message-tts/message-decoration';
export {
  buildTtsInputText,
  normalizeSayTextForDisplay,
  normalizeSayTextForTts,
  stripInterjectionsForLocalGsvi,
} from './message-tts/interjection';
export { runWithConcurrency } from './message-tts/prefetch-queue';
