export type FontSize = keyof typeof FONT_SIZE;

const FONT_SIZE = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
};

export const createFontSize = () => FONT_SIZE;
