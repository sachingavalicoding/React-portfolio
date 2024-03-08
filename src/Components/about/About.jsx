import React from "react";
import aboutImg from "../../assets/assets/me-about.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABout Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={aboutImg} className="about__me-image" alt="about img " />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 2+ Years Working </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small> 200+ worldwide </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 30+ Completed </small>
            </article>
          </div>

          <p>
            I've had the privilege of working with diverse clients and
            industries, contributing to the success of various projects. From
            small businesses to larger enterprises, each collaboration has
            enriched my skill set and broadened my perspective.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
