import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const MonkStrap = () => {
  const { id } = useParams();
  const singleMonkStrap = ShoesStore[2].items[id];
  const { image, name } = singleMonkStrap;

  return (
    <div className="shoe-container">
      <img className="shoe-image" src={image} alt={name} />
      <h1 className="shoe-title">{name}</h1>
    </div>
  );
};

export default MonkStrap;
