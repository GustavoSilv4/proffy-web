import styled from 'styled-components'

export const HeaderBackground = styled.div`
  height: 17rem;

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
    max-width: 737px;
    margin: 0 auto;

    div {
      max-width: 422px;
      margin-top: 2rem;

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

export const FormContainer = styled.section`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;
  margin-top: -3.6rem;
  margin-bottom: 2.5rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.875rem;
      color: ${(props) => props.theme['textpurple-base']};

      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 1rem 1.5rem;

      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['back-lines']};

      color: ${(props) => props.theme['textbase-base']};
      background-color: ${(props) => props.theme['shape-02']};
    }

    select {
      font-size: 1rem;
      padding: 1.2rem 1.5rem;

      border-radius: 8px;
      border: 1px solid ${(props) => props.theme['back-lines']};

      color: ${(props) => props.theme['textbase-base']};
      background-color: ${(props) => props.theme['shape-02']};
    }
  }
`

export const ContentContainer = styled.section``

export const NoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 7.5rem;

  span {
    width: 247px;
    text-align: center;
    color: ${(props) => props.theme['textbase-complement']};
  }
`

export const Classes = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;

  margin-top: 2.5rem;

  background-color: ${(props) => props.theme['shape-01']};
`
