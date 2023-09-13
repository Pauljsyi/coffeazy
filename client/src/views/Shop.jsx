import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
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
  const [coffee, setCoffee] = useState([]);
  const getCoffee = async () => {
    const res = await axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((res) => {
        console.log(typeof res.data);
        setCoffee(res.data);
      })
      .catch((e) => {
        console.error("something went wrong ", e);
      });
  };

  useEffect(() => {
    getCoffee();
  }, []);

  console.log("coffee data from api: ", coffee);
  return (
    <div className="container">
      <h1>Shop</h1>
      <div className="row h-100">
        {/* <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center"> */}
        {coffee.map((item) => (
          <ProductCard key={item.id} coffee={item} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Shop;
