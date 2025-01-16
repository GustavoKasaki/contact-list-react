import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Contact, updateContact } from '../../store/reducers/contactSlice'
import { AppDispatch } from '../../store/store'

import confirmImg from '../../assets/icons/confirm.svg'
import cancelImg from '../../assets/icons/cancel.svg'
import editImg from '../../assets/icons/edit.svg'
import {
  Buttons,
  CancelBtn,
  Card,
  CardEdit,
  ConfirmBtn,
  EditBtn,
  Email,
  EmailInput,
  Info,
  Name,
  NameInput,
  Phone,
  PhoneInput
} from './styles'

interface ContactCardProps {
  contact: Contact
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editableContact, setEditableContact] = useState<Contact>(contact)

  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditableContact({ ...editableContact, [name]: value })
  }

  const handleSave = () => {
    dispatch(updateContact(editableContact))
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditableContact(contact)
    setIsEditing(false)
  }

  return (
    <>
      {isEditing ? (
        <CardEdit>
          <Info>
            <NameInput
              type="text"
              name="name"
              value={editableContact.name}
              onChange={handleInputChange}
            />
            <PhoneInput
              type="text"
              name="phone"
              value={editableContact.phone}
              onChange={handleInputChange}
            />
            <EmailInput
              type="email"
              name="email"
              value={editableContact.email}
              onChange={handleInputChange}
            />
          </Info>
          <Buttons>
            <ConfirmBtn onClick={handleSave}>
              <img src={confirmImg} alt="Confirm" />
            </ConfirmBtn>
            <CancelBtn onClick={handleCancel}>
              <img src={cancelImg} alt="Cancel" />
            </CancelBtn>
          </Buttons>
        </CardEdit>
      ) : (
        <Card>
          <Info>
            <Name>{contact.name}</Name>
            <Phone>Phone: {contact.phone}</Phone>
            <Email>E-mail: {contact.email}</Email>
          </Info>
          <Buttons>
            <EditBtn onClick={() => setIsEditing(true)}>
              <img src={editImg} alt="Edit" />
            </EditBtn>
          </Buttons>
        </Card>
      )}
    </>
  )
}

export default ContactCard
