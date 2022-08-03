import React from "react";
import "./Home.scss";
import Header from "./../Header/Header";
import HeaderWork from "./HeaderWork/HeaderWork";
import { images } from "../../Constants/index";


const Home = () => {
  return (
    <>
      <Header backgroundImg={images.header} />
      <HeaderWork/>
    </>
  );
};

export default Home;
