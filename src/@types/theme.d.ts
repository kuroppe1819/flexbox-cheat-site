import { Theme } from '../common/util/Theme';

export type Theme = typeof Theme[keyof typeof Theme];
