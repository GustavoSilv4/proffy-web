import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`

export const CardBackground = styled.div`
  padding: 2rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['back-lines']};

  background-color: ${(props) => props.theme['shape-01']};
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 2rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`

export const CardContent = styled.main`
  span {
    display: block;
    font-size: 1rem;
    color: ${(props) => props.theme['textbase-base']};
    margin-bottom: 2rem;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    span:first-child {
      font-size: 0.875rem;
      color: ${(props) => props.theme['textbase-complement']};
    }

    span:last-child {
      font-size: 1.25rem;
      font-weight: bold;
      font-family: 'Archivo', sans-serif;

      color: ${(props) => props.theme.purple};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2.5rem;

    font-family: 'Archivo', sans-serif;
    font-weight: 600;

    border: 0;
    border-radius: 8px;

    background-color: ${(props) => props.theme.green};
    color: ${(props) => props.theme['shape-01']};

    transition: background-color 0.2s;

    &:hover {
      background-color: #04bf58;
    }
  }
`
