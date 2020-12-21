import React from "react";
import { Link } from "react-router-dom";
import ShoesStore from "../../StoreData/ShoesStore";

const Oxfords = () => {
  const oxfords = ShoesStore[3].items;

  return (
    <div>
      <div className="shoes-container">
        <h1>Oxfords</h1>
        <div className="product-shoes">
          {oxfords.map(({ id, name, image }) => {
            return (
              <div className="mapped-shoes" key={id}>
                <Link to={`/Oxfords/${id}`}>
                  <img className="shoes-image" src={image} alt={name} />
                  <h4 className="shoes-title">{name}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Oxfords;
