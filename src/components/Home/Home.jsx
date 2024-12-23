import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I&apos;m
          <img src={LogoTitle} alt="developer" />
          lobodan
          <br />
          web developer
          <h2>Frontend Developer / Javavascript expert</h2>
          <Link to={"/contact"} className='flat-button'>CONTACT ME</Link>
        </h1>
      </div>
    </div>
  )
}

export default Home
