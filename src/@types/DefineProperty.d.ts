import { ThemeColor } from '../common/util/DefineProperty';

export type ThemeColor = typeof ThemeColor[keyof typeof ThemeColor];
