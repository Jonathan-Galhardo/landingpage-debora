import React from 'react'
import CSS from './Header.css'
import ME from '../../assets/debora.png'//foto
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5>Olá, Eu sou! </h5>
        <h1>Débora Escobar</h1>
        <div className="text-light">Pedagoga Mestra em Educação</div>

        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header