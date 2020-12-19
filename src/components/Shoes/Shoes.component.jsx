import React from "react";
import ShoesStore from "../../StoreData/ShoesStore";
import "./Shoes.styles.scss";

const Shoes = () => {
  const boots = ShoesStore[0].items;

  return (
    <div>
      {boots.map((boot) => {
        return (
          <div key={boot.name} className="shoes-container">
            <img className="shoes-image" src={boot.image} alt={boot.name} />
            <h4 className="shoe-title">{boot.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Shoes;
