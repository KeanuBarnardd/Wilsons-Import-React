import React from "react";
import "./OurStats.scss";

const OurStats = () => {
  return (
    <div className="stats__background app__flex">
      <div className="stats__container app__container-width">
        <h1 className="stats__title">Our Stats</h1>
        <hr />

        <div className="stats__grid">
          <div className="stats__card app__flex stats__card-1">
            <i className="fa-solid fa-box-archive"></i>
            <h1>1000+</h1>
            <p>Packages stored</p>
          </div>
          <div className="stats__card app__flex stats__card-2">
            <i className="fa-solid fa-face-smile"></i>
            <h1>800+</h1>
            <p>Packages stored</p>
          </div>
          <div className="stats__card app__flex stats__card-1">
            <i className="fa-solid fa-truck"></i>
            <h1>3000+</h1>
            <p>Packages stored</p>
          </div>
          <div className="stats__card app__flex stats__card-2">
            <i className="fa-solid fa-earth-oceania"></i>
            <h1>2000+</h1>
            <p>Packages stored</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStats;
