import { Background, ButtonClass, ButtonStudy, HomeContainer, ImageContainer, InteractionContainer } from './styles'
import logoProffy from '../../assets/proffy-logo-01.svg'
import logoProffyIlust from '../../assets/proffy-logo-02.svg'
import iconStudy from '../../assets/image-study.svg'
import iconClass from '../../assets/image-class.svg'
import iconHeart from '../../assets/icon-heart.svg'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  return (
    <Background>
      <HomeContainer>
        <ImageContainer>
          <img src={logoProffy} alt="" />
          <img src={logoProffyIlust} alt="" />
        </ImageContainer>
        <InteractionContainer>
          <div>
            <ButtonStudy onClick={() => navigate('/classlist')}>
              <input type="image" src={iconStudy} />
              Estudar
            </ButtonStudy>
            <ButtonClass onClick={() => navigate('/registerclass')}>
              <input type="image" src={iconClass} /> Dar aulas
            </ButtonClass>
          </div>
          <span>
            Total de 285 conexões já realizadas <input type="image" src={iconHeart} />
          </span>
        </InteractionContainer>
      </HomeContainer>
    </Background>
  )
}
