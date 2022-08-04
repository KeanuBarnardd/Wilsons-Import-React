import React from "react";
import { motion } from "framer-motion";
import "./ImageCard.scss";

const ImageCard = ({ image, title, text, position, delayTime }) => {
  return (
    <motion.div
      className="image__card"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delay: delayTime }}
    >
      <img src={image} alt="" />
      <div className="imagecard__content">
        <h2 className="imagecard__title">
          {" "}
          <span>{title}</span>{" "}
        </h2>
        <h3>{position}</h3>
        <hr />
        <p>{text}</p>
      </div>
    </motion.div>
  );
};

export default ImageCard;
