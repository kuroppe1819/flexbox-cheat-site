export type DeviceMaxWidth = {
    [key: string]: string;
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
};

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
