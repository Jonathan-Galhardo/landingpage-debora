import React from 'react'
import CSS from './Header.css'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='header'>
      <section className="container_header">
        <div className='header_container'>
          <h5>Olá, Eu sou! </h5>
          <h1>Débora Escobar</h1>
        </div>
        <div className="text-light">Pedagoga Mestra em Educação</div>

        <HeaderSocial />



        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </section>
      <div id="sobre" class="wave"></div>
    </header>
  )
}

export default Header