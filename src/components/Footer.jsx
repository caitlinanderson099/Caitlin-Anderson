import { TelephoneFill } from 'react-bootstrap-icons'
import { EnvelopeAtFill } from 'react-bootstrap-icons'
import { Linkedin } from 'react-bootstrap-icons'
import { Github } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer>
        <h4> © Caitlin Anderson Design Portfolio 2024 </h4>
        <div className='footer-contact'>
            <h4> <TelephoneFill/> 027 341 2624 </h4>
            <h4> <EnvelopeAtFill/> caitlin.anderson099@gmail.com </h4>
            <h4> <Linkedin/> caitlin-anderson-75bb16270 </h4>
            <h4> <Github/> caitlinanderson099 </h4>
        </div>
    </footer>
  )
}

export default Footer
