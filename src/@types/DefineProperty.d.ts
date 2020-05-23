import { Color } from '../common/util/DefineProperty';

export type Color = typeof Color[keyof typeof Color];

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
