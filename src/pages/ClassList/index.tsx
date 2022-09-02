import iconVoltar from '../../assets/Voltar.svg'
import iconProffy from '../../assets/Proffy.svg'

import { ContentContainer, Form, FormContainer, Header, HeaderBackground, NoContent } from './styles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import axios from 'axios'

export interface ClassData {
  id: number
  name: string
  image: string
  cost: string
  subject: string
  contact: string
  biography: string
}

export function ClassList() {
  const navigate = useNavigate()

  const [classes, setClasses] = useState<ClassData[]>([])

  useEffect(() => {
    async function getClass() {
      const response = await axios.get('http://localhost:3001/classes')
      setClasses(response.data)
    }

    getClass()
  }, [])

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
              <h1>Estes são os professores disponíveis.</h1>
            </div>
          </div>
        </Header>
      </HeaderBackground>

      <main>
        <FormContainer>
          <Form>
            <div>
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject" />
            </div>
            <div>
              <label htmlFor="dayofweek"> Dia da semana</label>
              <select id="dayofweek" required defaultValue={''}>
                <option value="" disabled hidden>
                  Selecione o dia...
                </option>
                <option value="monday">Segunda</option>
                <option value="tuesday">Terça</option>
                <option value="wednesday">Quarta</option>
                <option value="thursday">Quinta</option>
                <option value="friday">Sexta</option>
              </select>
            </div>
            <div>
              <label htmlFor="hour">Horário</label>
              <input type="text" id="hour" />
            </div>
          </Form>
        </FormContainer>

        <ContentContainer>
          {classes ? (
            <>
              {classes.map((classs) => (
                <Card
                  key={classs.id}
                  id={classs.id}
                  name={classs.name}
                  image={classs.image}
                  cost={classs.cost}
                  subject={classs.subject}
                  biography={classs.biography}
                  contact={classs.contact}
                />
              ))}
            </>
          ) : (
            <NoContent>
              <span>Nenhum professor encontrado com sua pesquisa.</span>
            </NoContent>
          )}
        </ContentContainer>
      </main>
    </div>
  )
}
