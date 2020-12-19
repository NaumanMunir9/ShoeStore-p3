import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Logo</h1>
      <ul>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="Shoes">
          <h1>Shoes</h1>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
