import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../src/components/GlobalStyle';
import { theme } from '../src/fixtures/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => (
        <>
            <Normalize />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        </>
    ),
];
