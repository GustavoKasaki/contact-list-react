import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer } from '../Main/styles'
import { addNewContact } from '../../store/reducers/contacts'
import { AppDispatch } from '../../store/store'
import * as S from './styles'

const Form = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleAddContact = (e: FormEvent) => {
    e.preventDefault()

    // alert('Please fill all fields to continue!')

    dispatch(
      addNewContact({
        name,
        phone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <S.Title>Add New Contact</S.Title>
      <S.Form onSubmit={handleAddContact}>
        <S.NameInput
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
        <S.PhoneInput
          type="number"
          name="phone"
          placeholder="Phone (numbers only)"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <S.EmailInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <S.Button type="submit">Add Contact</S.Button>
      </S.Form>
    </MainContainer>
  )
}

export default Form
