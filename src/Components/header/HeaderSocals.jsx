import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
const HeaderSocals = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sachin-gavali-9b0a4a232/"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        href="https://github.com/sachingavalicoding"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a href="https://ig.me/m/sachin__gavali" rel="noreferrer" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocals;
