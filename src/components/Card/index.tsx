import { useState } from 'react'
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
  ConfirmBtn,
  EditBtn,
  Email,
  Info,
  Name,
  Phone
} from './styles'

const ContactCard = ({ contact }: { contact: any }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editableContact, setEditableContact] = useState<Contact>(contact)

  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Card>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editableContact.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            value={editableContact.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editableContact.email}
            onChange={handleInputChange}
          />
          <Buttons>
            <ConfirmBtn onClick={handleSave}>
              <img src={confirmImg} alt="Confirm" />
            </ConfirmBtn>
            <CancelBtn onClick={handleCancel}>
              <img src={cancelImg} alt="Cancel" />
            </CancelBtn>
          </Buttons>
        </>
      ) : (
        <>
          <Info>
            <Name>{contact.name}</Name>
            <Phone>{contact.phone}</Phone>
            <Email>{contact.email}</Email>
          </Info>
          <Buttons>
            <EditBtn onClick={() => setIsEditing(true)}>
              <img src={editImg} alt="Edit" />
            </EditBtn>
          </Buttons>
        </>
      )}
    </Card>
  )
}

export default ContactCard
