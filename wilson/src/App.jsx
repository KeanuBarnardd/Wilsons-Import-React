import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, About, Careers, NotFound } from "./Containers";
import { Navbar } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
