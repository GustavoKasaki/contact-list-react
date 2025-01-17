import { Footer, Links } from './styles'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'

const FooterContainer = () => {
  return (
    <Footer>
      <p>Application made by Gustavo Kasaki, 2025</p>
      <Links>
        <a href="https://www.linkedin.com/in/gustavokasaki/">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/GustavoKasaki">
          <img src={github} alt="" />
        </a>
      </Links>
    </Footer>
  )
}

export default FooterContainer
