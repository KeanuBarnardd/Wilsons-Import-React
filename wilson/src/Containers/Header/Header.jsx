import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { images } from "../../Constants";

const Header = ({ backgroundImg }) => {
  return (
    <header className="app__flex" style={{backgroundImage: `url(${backgroundImg})`}}>
      <div className="header__content app__container-width">
        <h1 className="header__title">Your ultimate trucking and warehousing services.</h1>
        <p className="header__text">
          Here at wilsonport we pride ourselves in being known for our quality services. Your
          satisfaction and happiness is our number one priority all the time.
        </p>
        <div className="header__buttons-container">
          <button className="header__button">
            <Link to="/contact">Get in Touch</Link>
          </button>
          <button className="header__button">
            <Link to="/about">About us</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
