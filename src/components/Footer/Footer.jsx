import React from 'react'
import './Footer.css'
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DÉBORA ESCOBAR</a>


      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Quem Sou</a></li>
        <li><a href='#services'>Serviços</a></li>
        <li><a href='#contact'>Contatos</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="mailto:galhardoj@gmail.com"><SiGmail /></a>
        <a href="https://api.whatsapp.com/send?phone=5555984389850&text=Ol%C3%A1!"><SiWhatsapp /></a>
        <a href="https://www.linkedin.com/in/jonathangalhardo/"><GrLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Débora Escobar. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer