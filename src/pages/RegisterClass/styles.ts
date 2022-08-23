import styled from 'styled-components'

export const HeaderBackground = styled.div`
  height: 23rem;

  background: ${(props) => props.theme.purple};
`

export const Header = styled.header`
  height: 100%;

  nav {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0.5rem 1.5rem;

    display: flex;
    justify-content: space-between;

    > button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  > div {
    width: 100%;
    max-width: 650px;
    margin: 0 auto;

    div {
      max-width: 367px;

      h1 {
        font-size: 2.25rem;
        font-family: 'Archivo', sans-serif;
        font-weight: bold;

        margin-bottom: 1.5rem;

        color: ${(props) => props.theme['textbase-title']};
      }

      span {
        font-size: 1rem;
        font-weight: 400;

        color: ${(props) => props.theme['textpurple-base']};
      }
    }
  }
`
