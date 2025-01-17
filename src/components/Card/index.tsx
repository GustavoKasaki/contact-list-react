import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Contact,
  deleteContact,
  updateContact
} from '../../store/reducers/contacts'
import { AppDispatch } from '../../store/store'

import confirmImg from '../../assets/icons/confirm.svg'
import cancelImg from '../../assets/icons/cancel.svg'
import editImg from '../../assets/icons/edit.svg'
import deleteImg from '../../assets/icons/delete.svg'

import * as S from './styles'

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

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <>
      {isEditing ? (
        <S.CardEdit>
          <S.Info>
            <S.NameInput
              type="text"
              name="name"
              value={editableContact.name}
              onChange={handleInputChange}
            />
            <S.PhoneInput
              type="text"
              name="phone"
              value={editableContact.phone}
              onChange={handleInputChange}
            />
            <S.EmailInput
              type="email"
              name="email"
              value={editableContact.email}
              onChange={handleInputChange}
            />
          </S.Info>
          <S.Buttons>
            <S.ConfirmBtn onClick={handleSave}>
              <img src={confirmImg} alt="Confirm" />
            </S.ConfirmBtn>
            <S.CancelBtn onClick={handleCancel}>
              <img src={cancelImg} alt="Cancel" />
            </S.CancelBtn>
          </S.Buttons>
        </S.CardEdit>
      ) : (
        <S.Card>
          <S.Info>
            <S.Name>{contact.name}</S.Name>
            <S.Phone>Phone: {contact.phone}</S.Phone>
            <S.Email>E-mail: {contact.email}</S.Email>
          </S.Info>
          <S.Buttons>
            <S.EditBtn onClick={() => setIsEditing(true)}>
              <img src={editImg} alt="Edit" />
            </S.EditBtn>
            <S.DeleteBtn onClick={handleDelete}>
              <img src={deleteImg} alt="Edit" />
            </S.DeleteBtn>
          </S.Buttons>
        </S.Card>
      )}
    </>
  )
}

export default ContactCard
