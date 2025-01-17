import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
  id: number
  name: string
  phone: string
  email: string
}

const initialState: Contact[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    email: 'jane@example.com'
  }
]

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
    addNewContact: (state, action: PayloadAction<Contact>) => {
      const contactExists = state.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('This contact already exists!')
      } else {
        const previousContact = state[state.length - 1]

        const newContact = {
          ...action.payload,
          id: previousContact ? previousContact.id + 1 : 1
        }
        state.push(newContact)
      }
    }
  }
})

export const { updateContact, removeContact, addNewContact } =
  contactsSlice.actions
export default contactsSlice.reducer
