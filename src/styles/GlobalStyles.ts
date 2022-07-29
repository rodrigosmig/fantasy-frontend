import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #181B23;
        --red: #FC8181;
        --blue: #5429CC;
        --green: #02884e;
        --pink: #D53F8C;
        --white: white;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #FFFFFF;
        --gray-900: #181B23;
        --gray-800: #1F2029;
        --gray-700: #353646;
        --gray-600: #4B4D63;
        --gray-500: #616480;
        --gray-400: #797D9A;
        --gray-300: #9699B0;
        --gray-200: #B3B5C6;
        --gray-100: #D1D2DC;
        --gray-50: #EEEEF2;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%
        }

        @media(max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background:  var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--text-body)
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a, a:link, a:visited, a:active {
        text-decoration: none;
        color: inherit;
    }
`