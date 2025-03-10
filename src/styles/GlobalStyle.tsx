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
    
    html {
        scroll-behavior: smooth;
    }
    
    
    body {
        font-family: 'Nunito', Helvetica, Arial, sans-serif;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryFont};
        //min-width: 375px;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        
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
        //margin-bottom: 144px;
        padding-top: 144px;
        
        @media ${theme.media.mobile} {
            padding-top: 80px;
        }
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
    
    @media (prefers-reduced-motion: reduce) {
        *, *:before, *:after {
            animation: none !important;
        }
    }
`