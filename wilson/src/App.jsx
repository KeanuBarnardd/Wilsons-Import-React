import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About, Careers, Contact, NotFound } from "./Containers";
import { Navbar } from "./Components";
import './Globals.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
