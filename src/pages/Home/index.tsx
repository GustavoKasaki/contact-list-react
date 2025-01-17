import FooterContainer from '../../containers/Footer'
import HeaderContainer from '../../containers/Header'
import Main from '../../containers/Main'

const Home = () => {
  return (
    <>
      <HeaderContainer isRegistering={false} />
      <Main />
      <FooterContainer />
    </>
  )
}

export default Home
