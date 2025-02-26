import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
    }

    button {
        cursor: pointer;
    }
    a, a:visited, a:hover{
        text-decoration: none;
        color: inherit;
    }
    ul li{list-style: none;}
`