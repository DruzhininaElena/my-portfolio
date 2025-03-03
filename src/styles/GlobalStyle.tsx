import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme.ts';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
    }
    
    *::selection {
        background-color: ${theme.colors.secondaryFont};
        color: #fff;
    }
    
    
    body {
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryFont}
    }

    button {
        cursor: pointer;
        border: none;
    }
    a, a:visited, a:hover{
        text-decoration: none;
        color: inherit;
    }
    ul li {
        list-style: none;
    }
    
    section {
        margin-bottom: 144px;
    }

    img {
        display: block;
    }
    
    input, textarea {
        font-family: inherit;
        color: inherit;
    }
    
    p {
        line-height: 1.5;
        color: ${theme.colors.secondaryFont};
    }
`