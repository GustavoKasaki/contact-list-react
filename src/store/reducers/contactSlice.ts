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
    }
  }
})

export const { updateContact } = contactsSlice.actions
export default contactsSlice.reducer
