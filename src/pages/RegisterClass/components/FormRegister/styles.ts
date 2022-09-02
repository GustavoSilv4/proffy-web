import styled from 'styled-components'

export const FormContainer = styled.main`
  width: 100%;
  max-width: 650px;
  margin: -5rem auto;
  padding: 3.5rem 4rem;

  margin-bottom: 5rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['shape-01']};
`

export const FormRegisterClass = styled.form`
  display: flex;
  flex-direction: column;

  > h2 {
    font-family: 'Archivo', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;

    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme['back-lines']};
  }

  > h2:nth-last-of-type(1) {
    margin-top: 4rem;
  }

  label {
    font-size: 0.875rem;
    margin: 1.5rem 0 0.5rem;

    color: ${(props) => props.theme['textbase-complement']};

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme['textbase-inputs']};
    }
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    font-family: 'Archivo', sans-serif;
    padding: 1rem 1.5rem;

    background-color: ${(props) => props.theme['shape-02']};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['back-lines']};
    color: ${(props) => props.theme['textbase-base']};
  }

  textarea {
    resize: none;
    height: 10rem;
  }
`

export const FormError = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.red};
`

export const AvailabilityContainer = styled.div`
  margin-bottom: 4rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 4rem;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;

    border-bottom: 1px solid ${(props) => props.theme['back-lines']};

    h2 {
      font-family: 'Archivo', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
    }

    button {
      border: 0;
      background-color: transparent;

      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      color: ${(props) => props.theme.purple};
    }
  }

  > div:nth-child(2) {
    display: flex;
    gap: 1rem;
  }

  div input {
    width: 100%;
    padding: 1rem;
  }

  div select {
    width: 320px;

    div {
      padding: 1rem;
    }
  }
`
export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${(props) => props.theme['back-lines']};
  padding-top: 2.5rem;

  > div {
    display: flex;
    gap: 1rem;

    span {
      display: block;
      font-size: 0.75rem;

      color: #a0a0b2;
    }
  }

  button {
    padding: 1rem 2.5rem;
    border: 0;
    border-radius: 8px;

    font-family: 'Archivo', sans-serif;
    font-weight: 600;

    color: ${(props) => props.theme['shape-01']};
    background-color: ${(props) => props.theme.green};

    transition: background-color 0.2s;

    &:hover {
      background-color: #04bf58;
    }
  }
`

/* export const Toast = styled.div`
  width: 200px;
  height: 55px;
  position: fixed;
  top: 50px;
  left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme['shape-01']};
  background-color: ${(props) => props.theme.purple};
  transform: translateX();

  transition: transform 0.6s ease-in-out;
  animation: go-back 0.2s;

  @keyframes go-back {
    from {
      transform: translateX(-250px);
    }
    to {
      transform: translateX(0px);
    }
  }
` */
