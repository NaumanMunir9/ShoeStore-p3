import React from "react";
import { Link } from "react-router-dom";
import "./MenuItems.styles.scss";

const MenuItems = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <div className={`${size} menuItems-container`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <Link to={linkUrl}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <p className="subtitle">Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;
