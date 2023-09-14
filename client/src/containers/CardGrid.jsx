import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const CardGrid = () => {
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
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {coffee.map((item, idx) => (
          <ProductCard key={item.id} idx={idx} coffee={item} />
        ))}
      </Row>
    </>
  );
};

export default CardGrid;
