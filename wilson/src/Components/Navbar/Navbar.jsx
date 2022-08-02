import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className=" app__flex ">
      <ul className="app__flex app__container-width navbar">
        <h2 className="navbar__logo">Wilsons Trucks</h2>
        <div className="navbar__links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            About
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active navlinks" : "navlinks")}>
            Contact
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
