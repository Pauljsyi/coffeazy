import React, { useState, useEffect } from "react";

import { Container, CardGroup } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import CardGrid from "../containers/CardGrid";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
import product2 from "../assets/img/products/Shutterstock_1728710197.jpg";
import product3 from "../assets/img/products/Shutterstock_499650232.jpg";
const cards = [
  {
    id: "1",
    type: "product",
    image: product1,
    description: "Back",
  },
  {
    id: "2",
    type: "product",
    image: product2,
    description: "Back",
  },
  {
    id: "3",
    type: "product",
    image: product3,
    description: "Back",
  },
];
const Shop = () => {
  return (
    <div className="container row mx-auto d-flex justify-content-center">
      <h1>Shop</h1>

      {/* <div className="coffee-container row "> */}
      {/* <div className="row d-flex flex-column flex-md-row justify-content-around align-items-center">
        {coffee.map((item) => (
          <ProductCard key={item.id} coffee={item} />
        ))}
      </div> */}
      {/* </div> */}
      <CardGrid />
    </div>
  );
};

export default Shop;
