import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddButton, Header, HeaderTitle } from './styles'
import { addNewContact, Contact } from '../../store/reducers/contacts'
import { AppDispatch } from '../../store/store'

const HeaderContainer = () => {
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    name: '',
    phone: '',
    email: ''
  })

  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewContact({ ...newContact, [name]: value })
  }

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.email) {
      // Gerar um ID único (pode ser substituído por lógica mais robusta)
      const id = Date.now()
      dispatch(addNewContact({ ...newContact, id }))
      setNewContact({ id: 0, name: '', phone: '', email: '' })
    } else {
      alert('Please fill out all fields.')
    }
  }

  return (
    <Header>
      <HeaderTitle>Contact List</HeaderTitle>
      <AddButton>+ Add new contact</AddButton>
    </Header>
  )
}

export default HeaderContainer
