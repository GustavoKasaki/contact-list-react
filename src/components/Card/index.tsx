import CancelBtn from '../CancelBtn'
import ConfirmBtn from '../ConfirmBtn'
import EditBtn from '../EditBtn'
import { Buttons, Card, ContactName, Email, Info, Phone } from './styles'

const Contact = () => (
  <Card>
    <Info>
      <ContactName>John Doe</ContactName>
      <Phone>
        <h3>Phone:</h3>
        <p>(00) 00000-0000</p>
      </Phone>
      <Email>
        <h3>E-mail:</h3>
        <p>john_doe_this_is_a_very_long_email@e-mail.com</p>
      </Email>
    </Info>
    <Buttons>
      <EditBtn />
      <ConfirmBtn />
      <CancelBtn />
    </Buttons>
  </Card>
)

export default Contact
