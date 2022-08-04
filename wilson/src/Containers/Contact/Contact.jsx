import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="app__flex">
      <div className="app__container-width contact__container">
        <motion.h1
          className="contact__title"
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
          className="contact__p"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe libero minus corrupti,
          sint temporibus veniam voluptates quam reprehenderit id soluta in! Excepturi consequuntur
          laudantium ut dolore deserunt quos, delectus molestias?
        </motion.p>
        <div className="app__flex">
          <motion.form
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="contact__form"
          >
            <div className="input__container">
              <p>Name:</p>
              <input type="text" placeholder="Bob winston" />
            </div>
            <div className="input__container">
              <p>Email:</p>
              <input type="text" placeholder="example@gmail.com" />
            </div>
            <div className="input__container">
              <p>Message:</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Hello, I just want to enquire..."
              ></textarea>
            </div>
            <button id="form__btn" className="form__button" type="submit">SEND</button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
