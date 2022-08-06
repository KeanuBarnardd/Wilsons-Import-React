import React from "react";
import { Link } from "react-router-dom";
import { SiKfc, SiTesla, SiNike, SiShopify, SiXbox } from "react-icons/si";
import { images } from "../../Constants";
import { motion } from "framer-motion";

import "./Careers.scss";

const Careers = () => {
  return (
    <div className="app__flex">
      <div className="app__container-width careers__container">
        <motion.h1
          className="careers__title"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0 }}
        >
          Want to work for us?
        </motion.h1>
        <motion.hr
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}
        />
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.3 }}
          className="careers__p"
        >
          Looking to start a fresh and exciting career with Wilsons Trucks. Well look no further we are a family of strong compontent workers that are constantly on the look out for hard working members. We strive for diversity and have tons of positions to fill with your expertise. 
        </motion.p>
        <motion.button
          className="careers__button"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Link className="careers__button-link" to={"/contact"}>
            Contact Us
          </Link>
        </motion.button>

        <motion.img
          className="careers__img"
          src={images.crates}
          alt=""
          whileInView={{opacity: [0, 1] }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="careers__title"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Partners
        </motion.h1>
        <motion.hr
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.p
          className="careers__p"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        >
        We have worked with a ton of brands making sure they succed in getting the best delivery, storage and customer service anyone can provide. Working with these brands has solified as in this market and helps us continue to grow. 
        </motion.p>
        <div className="careers__groups-grid">
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0 }}
            className="careers__groups-item"
          >
            <SiKfc className="groups__item-icon" />
            <p className="groups__item-title">KFC</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.1 }}
            className="careers__groups-item"
          >
            <SiTesla className="groups__item-icon" />
            <p className="groups__item-title">Tesla</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.2 }}
            className="careers__groups-item"
          >
            <SiNike className="groups__item-icon" />
            <p className="groups__item-title">Nike</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="careers__groups-item"
          >
            <SiShopify className="groups__item-icon" />
            <p className="groups__item-title">Shopify</p>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.4 }}
            className="careers__groups-item"
          >
            <SiXbox className="groups__item-icon" />
            <p className="groups__item-title">Xbox</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
