import { theme } from '../src/themes/theme';

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
