import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";
import "./Boot.styles.scss";

const Boot = () => {
  const { id } = useParams();
  const singleBoot = ShoesStore[0].items[id];
  const { name, image } = singleBoot;

  return (
    <div className="shoe-container">
      <img className="shoe-image" src={image} alt={name} />
      <h1 className="shoe-title">{name}</h1>
    </div>
  );
};

export default Boot;
