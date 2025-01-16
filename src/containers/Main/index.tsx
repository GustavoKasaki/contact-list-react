import { useSelector } from 'react-redux'
import ContactCard from '../../components/Card'
import { ContactList, Counter, MainContainer } from './styles'
import { RootState } from '../../store/store'

const Main = () => {
  const contacts = useSelector((state: RootState) => state.contacts)

  return (
    <MainContainer>
      <Counter>
        <p>6 contacts</p>
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
