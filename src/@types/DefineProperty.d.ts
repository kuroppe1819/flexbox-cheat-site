import { ThemeColor } from '../common/util/DefineProperty';

export type ThemeColor = typeof ThemeColor[keyof typeof ThemeColor];

export type DeviceMaxWidth = {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
};
