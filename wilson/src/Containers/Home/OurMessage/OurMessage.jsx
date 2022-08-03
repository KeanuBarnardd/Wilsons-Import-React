import React from "react";
import "./OurMessage.scss";

import { images } from "../../../Constants";

const OurMessage = () => {
  return (
    <div className=" app__flex">
      <div className="home__our-message-container app__container-width">
        <img src={images.aboutImg} alt="" />
        <div className="home__our-message-container-content">
          <h1>Our message</h1>
          <hr />
          <p>
            At Wilsons Trucks, we encourage our team to come up with innovative ideas, strategic
            ways of thinking and bigger picture planning thinking to help our personal and
            professional growth.
            <br />
            <br />
            Our unstoppable commitment to finding comprehensive solutions for your needs has helped
            us build next level force.
            <br />
            <br />
            From<span> Wilsons Imports</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMessage;
