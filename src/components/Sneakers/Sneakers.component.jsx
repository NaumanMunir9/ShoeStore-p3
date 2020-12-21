import React from "react";
import { Link } from "react-router-dom";
import ShoesStore from "../../StoreData/ShoesStore";

const Sneakers = () => {
  const sneakers = ShoesStore[4].items;

  return (
    <div>
      <div className="shoes-container">
        <h1>Sneakers</h1>
        <div className="product-shoes">
          {sneakers.map(({ id, name, image }) => {
            return (
              <div className="mapped-shoes" key={id}>
                <Link to={`/Sneakers/${id}`}>
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

export default Sneakers;
