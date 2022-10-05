import React from 'react'
import './Contact.css'
import { FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wlc6df', 'template_sofunnb', form.current, 'vHyutRIPp-r2cpj9p')

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h2>Contato</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <FiMail className='contact__options-icon' />
            <h4>Email</h4>
            <h5>debora@gmail.com</h5>
            <a className='btn' href="mailto:galhardoj@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__options-icon' />
            <h4>Whatsapp</h4>
            <h5>(55)9.8122-6934</h5>
            <a className='btn' href="https://api.whatsapp.com/send?phone=5555981226934&text=Ol%C3%A1!">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__options-icon' />
            <h4>Instagram</h4>
            <h5>Débora Escobar</h5>
            <a className='btn' href="https://www.instagram.com/deboraescobarpedagoga/?next=%2Frdo/">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Digite seu nome' required />
          <input type="email" name='email' placeholder='Digite seu email' required />
          <textarea name='message' rows='7' placeholder='Digite sua mensagem' required />
          <button type='submit' value="Send" className='btn'>Enviar</button>

        </form>
      </div>
    </section>
  )
}

export default Contact