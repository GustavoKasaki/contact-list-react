import HeaderContainer from './containers/Header'
import Main from './containers/Main'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderContainer />
        <Main />
      </Container>
    </>
  )
}

export default App
