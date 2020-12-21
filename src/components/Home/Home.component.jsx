import React from "react";
import { Outlet } from "react-router";
import Directory from "./Directory/Directory.component";
import "./Home.styles.scss";

const Home = () => {
  return (
    <div className="homepage-container">
      <Directory />

      <Outlet />
    </div>
  );
};

export default Home;
