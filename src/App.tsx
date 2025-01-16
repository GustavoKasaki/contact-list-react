import { Provider } from 'react-redux'
import store from './store/store'
import HeaderContainer from './containers/Header'
import Main from './containers/Main'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <HeaderContainer />
        <Main />
      </Container>
    </Provider>
  )
}

export default App
