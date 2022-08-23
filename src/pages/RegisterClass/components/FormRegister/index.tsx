import iconAtencao from '../../../../assets/Atencao.svg'
import { FormContainer, FormRegisterClass, AvailabilityContainer, FormFooter } from './styles'

export function FormRegister() {
  return (
    <FormContainer>
      <FormRegisterClass>
        <h2>Seus dados</h2>

        <label htmlFor="name">Nome completo</label>
        <input type="text" id="name" />

        <label htmlFor="photo">
          Link da sua foto <span>(comece com //http)</span>
        </label>
        <input type="text" id="photo" />

        <label htmlFor="whatsapp">
          Whatsapp <span>(somente números)</span>
        </label>
        <input type="text" id="whatsapp" />

        <label htmlFor="bio">Biografia</label>
        <textarea id="bio" />

        <h2>Sobre a aula</h2>

        <label htmlFor="subject">Matéria</label>
        <select id="subject" required defaultValue={''}>
          <option value="" disabled hidden>
            Selecione qual você quer ensinar
          </option>
          <option value="art">Artes</option>
          <option value="biology">Biologia</option>
          <option value="science">Ciências</option>
          <option value="physicalEducation">Educação Física</option>
          <option value="physical">Física</option>
          <option value="geography">Geografia</option>
          <option value="history">História</option>
          <option value="math">Matemática</option>
          <option value="portuguese">Português</option>
          <option value="chemistry">Química</option>
        </select>

        <label htmlFor="cost">
          Custo da sua hora por aula <span>(em R$)</span>
        </label>
        <input type="text" id="cost" />

        <AvailabilityContainer>
          <div>
            <h2>Horários disponíveis</h2>
            <button type="button">+ Novo horário</button>
          </div>
          <div>
            <div>
              <label htmlFor="day">Dia da semana</label>
              <select id="day" required defaultValue={''}>
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
              <label htmlFor="start">Das</label>
              <input type="text" id="start" />
            </div>
            <div>
              <label htmlFor="finish">Até</label>
              <input type="text" id="finish" />
            </div>
          </div>
        </AvailabilityContainer>

        <FormFooter>
          <div>
            <img src={iconAtencao} alt="" />
            <div>
              <span>Importante!</span>
              <span>Preencha todos os dados</span>
            </div>
          </div>
          <button type="submit">Salvar cadastro</button>
        </FormFooter>
      </FormRegisterClass>

      {/* <Toast>
        <span>Cadastro salvo</span>
      </Toast> */}
    </FormContainer>
  )
}
