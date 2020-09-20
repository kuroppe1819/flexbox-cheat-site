import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { theme } from '../fixtures/theme';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
    children: ReactNode;
};

const Component: React.FC<Props> = (props: Props) => {
    return (
        <React.StrictMode>
            <Normalize />
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                {props.children}
                <Footer />
            </ThemeProvider>
        </React.StrictMode>
    );
};

export const PageRoot = Component;
