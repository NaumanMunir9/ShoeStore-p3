import React from "react";
import { Link } from "react-router-dom";
import ShoesStore from "../../StoreData/ShoesStore";

const MonkStraps = () => {
  const monkStraps = ShoesStore[2].items;

  return (
    <div>
      <div className="shoes-container">
        <h1>MonkStraps</h1>
        <div className="product-shoes">
          {monkStraps.map(({ id, name, image }) => {
            return (
              <div className="mapped-shoes" key={id}>
                <Link to={`/MonkStraps/${id}`}>
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

export default MonkStraps;
