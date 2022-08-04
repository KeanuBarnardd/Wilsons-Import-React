import React from "react";
import "./Home.scss";
import Header from "./../Header/Header";
import HeaderWork from "./HeaderWork/HeaderWork";
import OurMessage from "./OurMessage/OurMessage";
import OurServices from "./OurServices/OurServices";
import { images } from "../../Constants/index";
import OurStats from "./Ourstats/OurStats";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header backgroundImg={images.header} />
      <HeaderWork />
      <OurMessage/>
      <OurServices/>
      <OurStats/>
      <Footer/>
    </>
  );
};

export default Home;
