import React from "react";
import { useParams } from "react-router";
import ShoesStore from "../../../StoreData/ShoesStore";

const Oxford = () => {
  const { id } = useParams();
  const singleOxford = ShoesStore[3].items[id];
  const { image, name } = singleOxford;

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default Oxford;
