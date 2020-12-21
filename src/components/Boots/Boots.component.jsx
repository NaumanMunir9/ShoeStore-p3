import React from "react";
import { Link } from "react-router-dom";
import ShoesStore from "../../StoreData/ShoesStore";
import "./Boots.styles.scss";

const Boots = () => {
  const boots = ShoesStore[0].items;

  return (
    <div className="shoes-container">
      <h1>Boots</h1>
      <div className="product-shoes">
        {boots.map(({ id, name, image }) => {
          return (
            <div className="mapped-shoes" key={id}>
              <Link to={`/Boots/${id}`}>
                <img className="shoes-image" src={image} alt={name} />
                <h4 className="shoes-title">{name}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boots;
