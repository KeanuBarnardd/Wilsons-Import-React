import React from "react";
import "./Home.scss";
import Header from "./../Header/Header";
import HeaderWork from "./HeaderWork/HeaderWork";
import OurMessage from "./OurMessage/OurMessage";
import { images } from "../../Constants/index";

const Home = () => {
  return (
    <>
      <Header backgroundImg={images.header} />
      <HeaderWork />
      <OurMessage/>
    </>
  );
};

export default Home;
