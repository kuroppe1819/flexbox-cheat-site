import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

    body {
        font-size: 16px;
        font-family: 'Raleway', '游ゴシック', 'Yu Gothic', sans-serif;
    }
    
    h1, h2, h3 {
        font-weight: 300;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }
`;
