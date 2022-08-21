import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.purple};
`

export const HomeContainer = styled.main`
  height: 100vh;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5.375rem;
`

export const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
  }

  span {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['textpurple-base']};
  }
`

const ButtonBase = styled.button`
  border: 0;
  padding: 2rem 4rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  font-family: 'Archivo', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;

  color: ${(props) => props.theme['textbase-title']};
`

export const ButtonStudy = styled(ButtonBase)`
  background: ${(props) => props.theme['another-purple']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['little-purple']};
  }
`

export const ButtonClass = styled(ButtonBase)`
  background: ${(props) => props.theme.green};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['another-green']};
  }
`
