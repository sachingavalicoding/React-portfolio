import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>

      <h2>Services</h2>
      <div className="services__container container">
        <article className="service">
          <div className="service__head">
            <h3>Business Website Services </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Professional Business Website Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Corporate Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO-Friendly Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>WordPress, Joomla, or Custom CMS Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Membership and User Authentication Systems</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testimonials and Case Studies Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hosting and Domain Management</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development Services </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Solutions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Redesign and Maintenance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Landing Page Websites </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Personal Portfolio </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>App Development Services </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>iOS and Android App Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Platform App Development (React Native, Flutter)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Feature-Rich and User-Friendly Applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization Best Practices</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testimonials and Case Studies Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Improving User Experience (UX)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Regular Updates and Bug Fixes</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
