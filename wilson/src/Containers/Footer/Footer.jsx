import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.PNG";

import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer app__flex">
      <div className="app__container-width footer__content">
        <img src={logo} alt="" className="footer-logo" />
        <div className="footer__content-text">
          <Link className="footer__links" to="/contact">
            Contact Us
          </Link>
          <Link className="footer__links" to="/about">
            Find out more about us
          </Link>
          <Link className="footer__links" to="/careers">
            Check if we are hiring
          </Link>
        </div>
        <div className="footer__socials">
          <a className="footer__social-links" href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="footer__social-links" href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="footer__social-links" href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="footer__social-links" href="">
            <i className="fa-solid fa-at"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
