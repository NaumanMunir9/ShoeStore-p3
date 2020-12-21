import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const MonkStrap = () => {
  const { id } = useParams();
  const singleMonkStrap = ShoesStore[2].items[id];
  const { image, name } = singleMonkStrap;

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default MonkStrap;
