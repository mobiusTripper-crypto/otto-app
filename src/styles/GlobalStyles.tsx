import { createGlobalStyle } from 'styled-components'
import cursorDefault from 'assets/cursor-default.png'
import cursorPointer from 'assets/cursor-pointer.png'

const GlobalStyle = createGlobalStyle`
    body {
        cursor: url(${cursorDefault}), auto;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'Pangolin';
        src: url('/fonts/Pangolin-Regular.ttf') ;
    }

    @font-face {
        font-family: 'PaytoneOne';
        src: url('/fonts/paytoneone-regular.woff2') format('woff2');
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: url(${cursorPointer}) 7 0 ,auto;

        :disabled {
            cursor: url(${cursorDefault}), auto;
        }
    }

    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`

function GlobalStyles(): JSX.Element {
  return <GlobalStyle />
}

export default GlobalStyles
