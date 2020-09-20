import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../src/components/root/GlobalStyle';
import { theme } from '../src/fixtures/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => {
        library.add(faTwitter, faGithub);
        return (
            <>
                <Normalize />
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </>
        );
    },
];
