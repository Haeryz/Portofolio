import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I&apos;m
          <img src={LogoTitle} alt="developer" />
          ariz
          <br />
          web developer
        </h1>
          <h2>Frontend Developer / Javavascript expert</h2>
          <Link to={"/contact"} className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
