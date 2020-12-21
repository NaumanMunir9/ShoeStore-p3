import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Luxury Shoes Inc.</h1>
      <ul className="navbar-ul">
        <Link className="router-link" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="router-link" to="Boots">
          <h1>Boots</h1>
        </Link>
        <Link className="router-link" to="Loafers">
          <h1>Loafers</h1>
        </Link>
        <Link className="router-link" to="MonkStraps">
          <h1>MonkStraps</h1>
        </Link>
        <Link className="router-link" to="Oxfords">
          <h1>Oxfords</h1>
        </Link>
        <Link className="router-link" to="Sneakers">
          <h1>Sneakers</h1>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
