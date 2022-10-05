import React from 'react'
import './Footer.css'
import { SiGmail } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DÉBORA ESCOBAR</a>


      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>Quem Sou</a></li>
        <li><a href='#contact'>Contatos</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="mailto:deescobar067@gmail.com"><SiGmail /></a>
        <a href="https://api.whatsapp.com/send?phone=5555981226934&text=Ol%C3%A1!"><SiWhatsapp /></a>
        <a href="https://www.linkedin.com/in/jonathangalhardo/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Débora Escobar. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer