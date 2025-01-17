import { useSelector } from 'react-redux'
import ContactCard from '../../components/Card'
import { ContactList, Counter, MainContainer } from './styles'
import { RootState } from '../../store/store'

const Main = () => {
  const contacts = useSelector((state: RootState) => state.contacts)

  // const showFilterResults = (amount: number) => {
  //   const msg = ''
  //   const complement =
  //     term !== undefined && term.length > 0 ? `and "${term}"` : ''
  // }

  return (
    <MainContainer>
      <Counter>
        {contacts.length >= 1 ? (
          <p>{contacts.length} contacts</p>
        ) : (
          <p>No contacts</p>
        )}
      </Counter>
      <ContactList>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ContactList>
    </MainContainer>
  )
}

export default Main
