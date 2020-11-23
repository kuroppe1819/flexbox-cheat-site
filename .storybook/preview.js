import React from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../src/components/root/GlobalStyle';
import { theme } from '../src/data/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faCopy, faBook } from '@fortawesome/free-solid-svg-icons';
import { messages } from '../src/data/messages';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => {
        library.add(faTwitter, faGithub, faAngleDoubleLeft, faAngleDoubleRight, faCopy, faBook);
        const language = 'ja';
        return (
            <IntlProvider locale={language} messages={messages[language]}>
                <Normalize />
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </IntlProvider>
        );
    },
];
