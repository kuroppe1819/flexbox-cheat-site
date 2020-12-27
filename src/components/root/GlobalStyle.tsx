import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        font-weight: 300;
    }

    body {
        font-size: 16px;
        font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }
`;
