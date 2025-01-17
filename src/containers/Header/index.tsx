import { AddButton, Header, HeaderTitle } from './styles'

type Props = {
  isRegistering: boolean
}

const HeaderContainer = ({ isRegistering }: Props) => {
  return (
    <Header>
      <HeaderTitle>Contact List</HeaderTitle>
      {isRegistering ? (
        <AddButton to="/">Go back</AddButton>
      ) : (
        <AddButton to="/register">Add new contact</AddButton>
      )}
    </Header>
  )
}

export default HeaderContainer
