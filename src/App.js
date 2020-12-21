import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar.component";
import Home from "./components/Home/Home.component";
import Boots from "./components/Boots/Boots.component";
import Boot from "./components/Boots/Boot/Boot.component";
import Loafers from "./components/Loafers/Loafers.component";
import Loafer from "./components/Loafers/Loafer/Loafer.component";
import MonkStraps from "./components/MonkStraps/MonkStraps.component";
import MonkStrap from "./components/MonkStraps/MonkStrap/MonkStrap.component";
import Oxfords from "./components/Oxfords/Oxfords.component";
import Oxford from "./components/Oxfords/Oxford/Oxford.component";
import Sneakers from "./components/Sneakers/Sneakers.component";
import Sneaker from "./components/Sneakers/Sneaker/Sneaker.component";
import "./App.styles.scss";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Boots" element={<Boots />} />
        <Route path="/Boots/:id" element={<Boot />} />
        <Route path="Loafers" element={<Loafers />} />
        <Route path="/Loafers/:id" element={<Loafer />} />
        <Route path="MonkStraps" element={<MonkStraps />} />
        <Route path="/MonkStraps/:id" element={<MonkStrap />} />
        <Route path="Oxfords" element={<Oxfords />} />
        <Route path="/Oxfords/:id" element={<Oxford />} />
        <Route path="Sneakers" element={<Sneakers />} />
        <Route path="/Sneakers/:id" element={<Sneaker />} />
      </Routes>
    </div>
  );
};

export default App;
