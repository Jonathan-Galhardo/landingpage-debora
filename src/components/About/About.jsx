import React from 'react'
import './About.css'


const about = () => {
  return (
    <section id='about'>


      <div className='container about__container'>
        <h2>Sobre Mim</h2>
        <p>
          Sou pedagoga e psicanalista, atuo na Educação Básica, Ensino Superior e na clínica. Atendo crianças, adolescentes e adultos.
          <div>
            <a className='btn btn-primary' id='button' href="sobre.html">Saiba Mais</a>
          </div>
        </p>


      </div>



      <div className='container about__container'>
        <h2>Especialidades</h2>
        <p>Crianças, adolescentes e Adultos.</p>

      </div>

      <div className='container about__container'>
        <h2>Formação</h2>
        <p>
          Pedagoga e psicanalista, especialista em Orientação Educacional, Gestão Educacional, Docência para o Ensino Superior. Possui formação para o atendimento educacional especializados. É mestra em Educação (UFRGS), linha de pesquisa: Educação Especial e processos Inclusivos. Atualmente cursa pós-graduação em Clínica Interdisciplinar em Estimulação Precoce pelo centro de estudos Lydia coriat de Porto Alegre. Tem formação para o uso dos roteiros IRDI e AP3+AI.
          <br></br>
          <a href="http://lattes.cnpq.br/1884347888035511" id='button' className='btn btn-primary'>Currículo Lattes</a>
        </p>



      </div>

      <div className='container about__container'>
        <h2>Atendimento</h2>
        <p>Santo Ângelo/RS</p>



      </div>
    </section >
  )
}

export default about