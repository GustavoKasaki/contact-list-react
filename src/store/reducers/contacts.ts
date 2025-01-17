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
  },
  {
    id: 3,
    name: 'Jane Smith',
    phone: '987-654-3210',
    email: 'jane@example.com'
  },
  {
    id: 4,
    name: 'Jack Saw',
    phone: '987-654-3210',
    email: 'jsaw@example.com'
  },
  {
    id: 5,
    name: 'Lara Miller',
    phone: '987-654-3210',
    email: 'lmiller@example.com'
  },
  {
    id: 6,
    name: 'Tobias Allen',
    phone: '987-654-3210',
    email: 't.allen@example.com'
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
    deleteContact: (state, action: PayloadAction<number>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
    addNewContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
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

export const { updateContact, deleteContact, addNewContact } =
  contactsSlice.actions
export default contactsSlice.reducer
