import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdViewQuilt } from "react-icons/md";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { TbBrandMongodb } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development </h3>
          <div className="experience__content">
            <div className="experience__card">
              <TbBrandReact className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React Js </h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <TbBrandNextjs className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Next Js </h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <TbBrandNextjs className="card__icon" />
              <article className="experience__details">
                <RiJavascriptFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <SiTypescript className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Typescript </h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <SiTailwindcss className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4> Tailwind Css </h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <MdViewQuilt className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4> UI & UX </h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development </h3>
          <div className="experience__content">
            <div className="experience__card">
              <IoLogoNodejs className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <TbBrandMongodb className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <FaPhp className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <GrMysql className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>My SQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <FaPython className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
            <div className="experience__card">
              <FaJava className="card__icon" />
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
