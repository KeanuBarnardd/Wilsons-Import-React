import React from "react";
import { motion } from "framer-motion";
import { images } from "../../../Constants";
import "./HeaderWork.scss";

const HeaderWork = () => {
  return (
    <div className="app__flex">
      <div
        className="home__work-section app__container-width"
      >
        <motion.div
          className="home__work-card"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={images.trucks} alt="" />
          <h2>
            {" "}
            <span>Trucking</span>{" "}
          </h2>
          <p>
            With multiple trucks servicing Melbourne, we are capable of handling your trucking
            needs.{" "}
          </p>
        </motion.div>
        <motion.div
          className="home__work-card"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={images.warehouse} alt="" />
          <h2>
            {" "}
            <span>WAREHOUSING</span>{" "}
          </h2>
          <p>We have warehousing facilities avaiable for long or short term storage needs.</p>
        </motion.div>
        <motion.div
          className="home__work-card"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={images.crates} alt="" />
          <h2>
            {" "}
            <span> BONDED CFS</span>{" "}
          </h2>
          <p>
            Let us transer your Air freight to our custom bonded facility and we will make it ready
            to go.
          </p>
        </motion.div>
        <motion.div
          className="home__work-card"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img src={images.commercial} alt="" />
          <h2>
            {" "}
            <span>COMMERCIAL</span>{" "}
          </h2>
          <p>
            We can be your mover of choice for your next office commercial move whenever you want.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderWork;
