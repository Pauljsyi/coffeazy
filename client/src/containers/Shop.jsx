import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
const cards = [
  {
    id: "1",
    type: "product",
    image: "example",
    description: "Back",
  },
  {
    id: "2",
    type: "product",
    image: "Click",
    description: "Back",
  },
  {
    id: "3",
    type: "product",
    image: "Focus",
    description: "Back",
  },
];
const Shop = () => {
  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
