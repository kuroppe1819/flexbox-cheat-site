import { DeviceMaxWidth } from 'src/@types/DefineProperty';

export const Color = {
    white: '#ffffff',
    blue100: '#ebf8ff',
    blue400: '#63b3ed',
    blue500: '#4299e1',
    blue700: '#2b6cb0',
    blue900: '#2a4365',
    gray400: '#cbd5e0',
} as const;

const deviceSize = {
    mobileS: '320px',
    mobileM: '410px',
    mobileL: '520px',
    tablet: '880px',
    laptop: '1280px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const deviceMaxWidth: DeviceMaxWidth = {
    mobileS: `(max-width: ${deviceSize.mobileS})`,
    mobileM: `(max-width: ${deviceSize.mobileM})`,
    mobileL: `(max-width: ${deviceSize.mobileL})`,
    tablet: `(max-width: ${deviceSize.tablet})`,
    laptop: `(max-width: ${deviceSize.laptop})`,
    laptopL: `(max-width: ${deviceSize.laptopL})`,
    desktop: `(max-width: ${deviceSize.desktop})`,
    desktopL: `(max-width: ${deviceSize.desktop})`,
};
