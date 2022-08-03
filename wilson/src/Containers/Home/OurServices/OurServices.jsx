import React from "react";
import "./OurServices.scss";
import { motion } from "framer-motion";
import { images } from "../../../Constants/index";

const OurServices = () => {
  return (
    <div
      className="services__background-img app__flex"
      style={{ backgroundImage: `url(${images.trucksBirdsEyeview})` }}
    >
      <div className="services__content app__container-width">
        <h1 className="services__title">Our services</h1>
        <hr />
        <div className="services__content-grid">
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <i className="fa-solid fa-truck"></i>
            <div className="services__card-content">
              <h1>Transport</h1>
              <p>We transport your needs all around the country.</p>
            </div>
          </motion.div>
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <i className="fa-solid fa-boxes-stacked"></i>
            <div className="services__card-content">
              <h1>Storage</h1>
              <p>We store your need so you don't have to worry.</p>
            </div>
          </motion.div>
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <i className="fa-solid fa-headphones"></i>
            <div className="services__card-content">
              <h1>Consulting</h1>
              <p>We love consulting for logistics like any expert.</p>
            </div>
          </motion.div>
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <i className="fa-solid fa-truck"></i>
            <div className="services__card-content">
              <h1>Trucking</h1>
              <p>We provide local trucking based on your needs.</p>
            </div>
          </motion.div>
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <i className="fa-solid fa-truck-fast"></i>
            <div className="services__card-content">
              <h1>Deliveries</h1>
              <p>We provide door to door deliveries for any product.</p>
            </div>
          </motion.div>
          <motion.div
            className="services__card"
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <i className="fa-solid fa-cube"></i>
            <div className="services__card-content">
              <h1>Packaging</h1>
              <p>We will cover your products with solid packaging.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
