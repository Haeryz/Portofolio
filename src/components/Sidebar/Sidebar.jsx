import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={LogoS} alt="Logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="Logo subtitle" />
      </Link>
      <nav>
        <NavLink exact={true} to={'/'} activeClassName='active'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        
        <NavLink exact={true} to={'/about'} activeClassName='active' className={'about-link'}>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>

        <NavLink exact={true} to={'/contact'} activeClassName='active' className={'contact-link'}>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>

      </nav>

      <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/muhammad-hariz-faizul-anwar-471241302/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Haeryz'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
