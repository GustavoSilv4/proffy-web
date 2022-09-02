import { ClassData } from '../..'
import iconWhatsapp from '../../../../assets/icon-whatsapp.svg'
import { CardBackground, CardContainer, CardContent, CardFooter, CardHeader } from './styles'

export function Card(data: ClassData) {
  return (
    <CardContainer>
      <CardBackground>
        <CardHeader>
          <img src={data.image} alt="" />
          <div>
            <h3>{data.name}</h3>
            <span>{data.subject}</span>
          </div>
        </CardHeader>

        <CardContent>
          <span>{data.biography}</span>
        </CardContent>

        <CardFooter>
          <div>
            <span>Preço/hora</span>
            <span>R$ {data.cost}</span>
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
