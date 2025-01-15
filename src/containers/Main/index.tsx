import Contact from '../../components/Card'
import { ContactList, Counter, MainContainer } from './styles'

const Main = () => {
  return (
    <MainContainer>
      <Counter>
        <p>6 contacts</p>
      </Counter>
      <ContactList>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </ContactList>
    </MainContainer>
  )
}

export default Main
