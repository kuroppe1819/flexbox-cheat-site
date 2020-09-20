import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './components/GlobalStyle';
import { NumberBlock } from './components/NumberBlock';
import { theme } from './fixtures/theme';

ReactDOM.render(
    <React.StrictMode>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <NumberBlock index={1} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
