import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
const HeaderSocals = () => {
  return (
    <div className="header__socials">
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
  )
}

export default HeaderSocals