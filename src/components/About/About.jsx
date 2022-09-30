import React from 'react'
import './About.css'


const about = () => {
  return (
    <section id='about'>
      <h5>Bio</h5>
      <h2>Sobre Mim</h2>

      <div className='container about__container'>
        <p>
          Sou um entusiasta da tecnologia, acredito que ela seja para todas as pessoas e para todos os negócios. Busco resolver os problemas no meu caminho com calma, organização e uma dose grande de criatividade!
        </p>
        <a href="#contact" className='btn btn-primary'>Contato</a>
      </div>
    </section >
  )
}

export default about