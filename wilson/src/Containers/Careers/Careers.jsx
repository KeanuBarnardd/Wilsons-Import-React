import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Constants";
import { motion } from "framer-motion";

import "./Careers.scss";

const Careers = () => {
  return (
    <div
      className="app__flex careers__header"
      style={{ backgroundImage: `url(${images.trucksBirdsEyeview})` }}
    >
      <div className="careers__header-content app__container-width">
        <motion.h1 whileInView={{ x: [-50, 0], opacity: [0, 1] }}>
          Feel like your ready to be apart of our team?
        </motion.h1>
        <motion.button
          className="careers__header-button"
          to={"/contact"}
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        >
          <Link to={"/contact"} className="careers__link">Join our team</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Careers;
