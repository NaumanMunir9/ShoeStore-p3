import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const Oxford = () => {
  const { id } = useParams();
  const singleOxford = ShoesStore[3].items[id];
  const { image, name } = singleOxford;

  return (
    <div className="shoe-container">
      <img className="shoe-image" src={image} alt={name} />
      <h1 className="shoe-title">{name}</h1>
    </div>
  );
};

export default Oxford;
