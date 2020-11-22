export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

export const theme = {
    // reference https://tailwindcss.com/docs/background-color
    color: {
        blue100: '#ebf8ff',
        blue400: '#63b3ed',
        blue500: '#4299e1',
        blue700: '#2b6cb0',
        blue900: '#2a4365',
        gray400: '#cbd5e0',
        gray500: '#a0aec0',
        gray700: '#4a5568',
        white: '#fff',
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
    },
    shadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
};
