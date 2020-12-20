import React from "react";
import "./MenuItems.styles.scss";

const MenuItems = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menuItems-container`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">Shop Now</p>
      </div>
    </div>
  );
};

export default MenuItems;
