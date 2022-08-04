import React from "react";
import { NavLink } from "react-router-dom";
import {AiFillHome,AiFillPhone,AiFillFileText,AiFillQuestionCircle} from "react-icons/ai";
import logo from '../../Assets/logo.PNG';
import "./Navbar.scss";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className=" app__flex ">
      <ul className="app__flex app__container-width navbar">
        <img src={logo} alt="" className="navbar__logo" />
        <div className="navbar__links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Home
            <AiFillHome className="navbar__navlinks-icon"/>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            About
            <AiFillQuestionCircle className="navbar__navlinks-icon"/>
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Careers
            <AiFillFileText className="navbar__navlinks-icon"/>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Contact
            <AiFillPhone className="navbar__navlinks-icon"/>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
