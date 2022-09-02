import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import iconAtencao from '../../../../assets/Atencao.svg'
import { FormContainer, FormRegisterClass, AvailabilityContainer, FormFooter, FormError } from './styles'
import { useEffect } from 'react'
import { normalizeHour, normalizePhoneNumber } from '../../../../utils/masks'
import axios from 'axios'

const RegisterClassValidationSchema = zod.object({
  name: zod.string().min(1, 'Necessário colocar seu nome completo!'),
  photo: zod.string().regex(/http/, 'Coloque corretamente o link da sua foto!'),
  contact: zod.string().min(1, 'Necessário colocar seu numero de contato!'),
  bio: zod.string().min(1, 'Necessário colocar uma biografia!'),
  cost: zod.string().min(1, 'Necessário colocar o valor da sua aula'),
  start: zod.string(),
  finish: zod.string(),
  subject: zod.string(),
  days: zod.string(),
})

type RegisterClassData = zod.infer<typeof RegisterClassValidationSchema>

export function FormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RegisterClassData>({
    resolver: zodResolver(RegisterClassValidationSchema),
    defaultValues: {
      bio: '',
      name: '',
      photo: '',
      cost: '',
      contact: '',
      start: '',
      finish: '',
      subject: '',
      days: '',
    },
  })

  function handleRegisterClass(data: RegisterClassData) {
    const newCost = Number(data.cost).toLocaleString('pt-BR', { minimumFractionDigits: 2 })

    const dataForRegister = {
      id: new Date().getTime(),
      image: data.photo,
      name: data.name,
      biography: data.bio,
      subject: data.subject,
      cost: newCost,
      contact: data.contact,
    }

    axios.post('http://localhost:3001/classes', dataForRegister)

    reset()
  }

  console.log(errors)

  const contactValue = watch('contact')

  const startHourValue = watch('start')

  const finishHourValue = watch('finish')

  useEffect(() => {
    setValue('contact', normalizePhoneNumber(contactValue))
    setValue('start', normalizeHour(startHourValue))
    setValue('finish', normalizeHour(finishHourValue))
  }, [finishHourValue, contactValue, setValue, startHourValue])

  return (
    <FormContainer>
      <FormRegisterClass onSubmit={handleSubmit(handleRegisterClass)}>
        <h2>Seus dados</h2>

        <label htmlFor="name">Nome completo</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name?.message && <FormError>{errors.name?.message}</FormError>}

        <label htmlFor="photo">
          Link da sua foto <span>(comece com //http)</span>
        </label>
        <input type="text" id="photo" {...register('photo', { required: true })} />
        {errors.photo?.message && <FormError>{errors.photo?.message}</FormError>}

        <label htmlFor="contact">
          Whatsapp <span>(somente números)</span>
        </label>
        <input type="text" id="contact" {...register('contact', { required: true })} />
        {errors.contact?.message && <FormError>{errors.contact?.message}</FormError>}

        <label htmlFor="bio">Biografia</label>
        <textarea id="bio" {...register('bio', { required: true })} />
        {errors.bio?.message && <FormError>{errors.bio?.message}</FormError>}

        <h2>Sobre a aula</h2>

        <label htmlFor="subject">Matéria</label>
        <select id="subject" required {...register('subject', { required: true })}>
          <option value="" disabled hidden>
            Selecione qual você quer ensinar
          </option>
          <option value="Artes">Artes</option>
          <option value="Biologia">Biologia</option>
          <option value="Ciências">Ciências</option>
          <option value="Educação Física">Educação Física</option>
          <option value="Física">Física</option>
          <option value="Geografia">Geografia</option>
          <option value="História">História</option>
          <option value="Matemática">Matemática</option>
          <option value="Português">Português</option>
          <option value="Química">Química</option>
        </select>

        <label htmlFor="cost">
          Custo da sua hora por aula <span>(em R$)</span>
        </label>
        <input type="number" id="cost" step={0.01} min="0" {...register('cost', { required: true })} />

        <AvailabilityContainer>
          <div>
            <h2>Horários disponíveis</h2>
            <button type="button">+ Novo horário</button>
          </div>
          <div>
            <div>
              <label htmlFor="day">Dia da semana</label>
              <select id="day" required {...register('days', { required: true })}>
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
              <input type="text" id="start" {...register('start', { required: true })} />
            </div>
            <div>
              <label htmlFor="finish">Até</label>
              <input type="text" id="finish" {...register('finish', { required: true })} />
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
