import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const Sneaker = () => {
  const { id } = useParams();
  const singleSneaker = ShoesStore[4].items[id];
  const { image, name } = singleSneaker;

  return (
    <div className="shoe-container">
      <img className="shoe-image" src={image} alt={name} />
      <h1 className="shoe-title">{name}</h1>
    </div>
  );
};

export default Sneaker;
