import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="/" className={({ active }) => (active ? active : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ active }) => (active ? active : "")}>
          About
        </NavLink>
        <NavLink to="/" className={({ active }) => (active ? active : "")}>
          Careers
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
