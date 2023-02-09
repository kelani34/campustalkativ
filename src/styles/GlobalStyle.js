import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        /* height: 100%; */
        scroll-behavior: smooth;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        height: 100vh;

        background: #FFF7EC;
        padding: 0;
        margin: 0;

        color: #050300;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, ul, li, p {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
    #root{
        height: 60%;
    }
`;
