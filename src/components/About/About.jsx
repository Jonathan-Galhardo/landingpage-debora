import React from 'react'
import './About.css'


const about = () => {
  return (
    <section id='about'>


      <div className='container about__container'>
        <h2>Sobre Mim</h2>
        <p>
          Débora é Pedagoga, Mestra em Educação pela UFRGS, atua há mais de 11 anos na Educação Especial. Especialista em Orientação Educacional pela UFFS, possui formação em Educação Terapêutica no Lugar de Vida/SP. Capacitação para aplicação do instrumento IRDI + AI.
        </p>

      </div>



      <div className='container about__container'>
        <h2>Especialidades</h2>
        <p>
          Crianças, adolescentes e Adultos.
        </p>

      </div>

      <div className='container about__container'>
        <h2>Formação</h2>
        <p>
          Débora é Pedagoga, Mestra em Educação pela UFRGS, atua há mais de 11 anos na Educação Especial. Especialista em Orientação Educacional pela UFFS, possui formação em Educação Terapêutica no Lugar de Vida/SP. Capacitação para aplicação do instrumento IRDI + AI.
          <br></br>
          <a href="#contact" id='button' className='btn btn-primary'>Currículo Lattes</a>
        </p>

      </div>
    </section >
  )
}

export default about