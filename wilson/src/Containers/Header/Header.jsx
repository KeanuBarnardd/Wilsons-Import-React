import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../Constants";

const Header = ({ backgroundImg }) => {
  return (
    <header className="app__flex" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <motion.div className="header__content app__container-width">
        <motion.h1
          className="header__title"
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Your ultimate trucking and warehousing services.
        </motion.h1>

        <motion.p
          className="header__text"
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
        >
          Here at wilsonport we pride ourselves in being known for our quality services. Your
          satisfaction and happiness is our number one priority all the time.
        </motion.p>
        <motion.div
          className="header__buttons-container"
          whileInView={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 1.9 }}
        >
          <button className="header__button header__button-orange">
            <Link to="/contact">Get in Touch</Link>
          </button>
          <button className="header__button header__button-clear">
            <Link to="/about">About us</Link>
          </button>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
