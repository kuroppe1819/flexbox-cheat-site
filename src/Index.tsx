import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { NumberBlock } from './components/NumberBlock';
import { theme } from './fixtures/theme';

ReactDOM.render(
    <>
        <Normalize />
        <ThemeProvider theme={theme}>
            <NumberBlock index={1} />
        </ThemeProvider>
    </>,
    document.getElementById('root')
);
