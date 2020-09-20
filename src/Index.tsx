import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './components/GlobalStyle';
import { NumberBlock } from './components/NumberBlock';
import { theme } from './fixtures/theme';
import { Header } from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faGithub);

ReactDOM.render(
    <React.StrictMode>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Header />
            <NumberBlock index={1} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
