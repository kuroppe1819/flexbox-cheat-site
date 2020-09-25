import { messages } from '../messages';

// TODO: もし型定義だけで完成したら d.ts に移動させる
export type Language = keyof typeof messages;
