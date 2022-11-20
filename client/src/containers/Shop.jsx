import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Hover",
    back: "Back",
  },
  {
    id: "2",
    variant: "click",
    front: "Click",
    back: "Back",
  },
  {
    id: "3",
    variant: "focus",
    front: "Focus",
    back: "Back",
  },
];
const Shop = () => {
  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="row h-100">
        <div className="col d-flex-flex-column-flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
