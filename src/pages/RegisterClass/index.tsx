import iconVoltar from '../../assets/Voltar.svg'
import iconProffy from '../../assets/Proffy.svg'

import { Header, HeaderBackground } from './styles'
import { FormRegister } from './components/FormRegister'
import { useNavigate } from 'react-router-dom'

export function RegisterClass() {
  const navigate = useNavigate()

  return (
    <div>
      <HeaderBackground>
        <Header>
          <nav>
            <button onClick={() => navigate('/')}>
              <img src={iconVoltar} alt="" />
            </button>
            <img src={iconProffy} alt="" />
          </nav>
          <div>
            <div>
              <h1>Que incrível que você quer dar aulas.</h1>
              <span>O primeiro passo, é preencher esse formulário de inscrição.</span>
            </div>
          </div>
        </Header>
      </HeaderBackground>

      <FormRegister />
    </div>
  )
}
