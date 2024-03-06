import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import './footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
       <a href="./" className='footer__logo'>SACHIN GAVALI </a>
       <ul className="footer__links">
        <li><a href="./">Home </a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#experience">Experience </a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">PortFolio </a></li>
        <li><a href="#testimonial">Testimonials </a></li>
        <li><a href="#contact">Contact </a></li>
       </ul>

       <div className="footer__socials">
       <a href="https://linkdin.com" rel="noreferrer" target='_blank' >
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com"rel="noreferrer" target='_blank' >
        <AiFillGithub />
      </a>
      <a href="https://instagram.com" rel="noreferrer" target='_blank' >
        <FaInstagram />
      </a>
       </div>

       <div className="footer__copyright">
        <small>&copy; Sachin Gavali. All rights reserved. </small>
       </div>
    </footer>
  )
}

export default Footer