export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export const createFontSize = () => ({
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
});
