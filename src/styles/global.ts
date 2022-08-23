import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }

    body{
        background: ${(props) => props.theme.background};
    }

    body, input, button, textarea{
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
`
