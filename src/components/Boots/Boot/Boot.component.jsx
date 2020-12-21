import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";
import "./Boot.styles.scss";

const Boot = () => {
  const { id } = useParams();
  const singleBoot = ShoesStore[0].items[id];
  const { name, image } = singleBoot;

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default Boot;
