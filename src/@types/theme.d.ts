import { Theme } from '../common/util/ThemeColor';

export type Theme = typeof Theme[keyof typeof Theme];
