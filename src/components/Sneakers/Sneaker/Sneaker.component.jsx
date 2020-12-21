import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const Sneaker = () => {
  const { id } = useParams();
  const singleSneaker = ShoesStore[4].items[id];
  const { image, name } = singleSneaker;

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default Sneaker;
