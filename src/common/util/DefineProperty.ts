import { DeviceMaxWidth } from 'src/@types/DefineProperty';

// TODO: blue900 のような名前に変更するか、material-ui-colorから引っ張ってくる
export const ThemeColor = {
    primary: '#63b3ed',
    backgroundFeaturedItem: '#2b6cb0',
    shadow: '#cbd5e0',
    borderGray: '#cbd5e0',
    borderBlue: '#4299e1',
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
