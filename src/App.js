import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./components/Home/Home.component";
import Shoes from "./components/Shoes/Shoes.component";
import "./App.styles.scss";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Shoes" element={<Shoes />} />
      </Routes>
    </div>
  );
};

export default App;
