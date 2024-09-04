import { TelephoneFill } from 'react-bootstrap-icons'
import { EnvelopeAtFill } from 'react-bootstrap-icons'
import { Linkedin } from 'react-bootstrap-icons'
import { Github } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <h4> © Caitlin Anderson Design Portfolio 2024 </h4>
        <div className='footer-contact'>
            <h4> <TelephoneFill/> 027 341 2624 </h4>
            <h4> <a href="mailto:caitlin.anderson099@gmail.com">  <EnvelopeAtFill/> caitlin.anderson099@gmail.com </a> </h4>
            <h4> <Link to='https://www.linkedin.com/in/caitlin-anderson-75bb16270/'> <Linkedin/> caitlin-anderson-75bb16270  </Link></h4>
            <h4> <Link to='https://github.com/caitlinanderson099'> <Github/> caitlinanderson099  </Link></h4>
        </div>
    </footer>
  )
}

export default Footer
