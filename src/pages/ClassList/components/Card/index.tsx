import iconWhatsapp from '../../../../assets/icon-whatsapp.svg'
import { CardBackground, CardContainer, CardContent, CardFooter, CardHeader } from './styles'

export function Card() {
  return (
    <CardContainer>
      <CardBackground>
        <CardHeader>
          <img src="https://github.com/diego3g.png" alt="" />
          <div>
            <h3>Gustavo Silva</h3>
            <span>Matematica</span>
          </div>
        </CardHeader>

        <CardContent>
          <span>Entusiasta das melhores tecnologias de química avançada.</span>
          <span>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais
            de 200.000 pessoas já passaram por uma das minhas explosões.
          </span>
        </CardContent>

        <CardFooter>
          <div>
            <span>Preço/hora</span>
            <span>R$ 20,00</span>
          </div>
          <button>
            <input type="image" src={iconWhatsapp} alt="" />
            Entrar em contato
          </button>
        </CardFooter>
      </CardBackground>
    </CardContainer>
  )
}
