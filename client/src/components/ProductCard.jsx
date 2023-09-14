import React, { useState } from "react";
import cn from "classnames";
import { Button, Card, Col, Collapse } from "react-bootstrap";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
import product2 from "../assets/img/products/Shutterstock_499650232.jpg";

const ProductCard = (props) => {
  const { coffee, key, idx } = props;
  const [open, setOpen] = useState(false);
  // console.log("coffee from productcard comp: ", coffee.ingredients);
  // const mappedIngredients = () => {
  //   coffee.ingredients.map((i) => {
  //     console.log("mapped ingredients: ", i);
  //   });
  // };

  console.log("product card  id", idx);

  return (
    <>
      <Col key={idx}>
        <Card
          style={{ width: "18rem" }}
          onClick={() => setOpen(!open)}
          aria-controls="collapse-body"
          aria-expanded={open}
        >
          <Card.Img variant="top" src={coffee.image} width={200} height={200} />
          <Card.Body>
            <p>
              <Card.Title>{coffee.title}</Card.Title>
            </p>
            <Collapse in={open}>
              <div className="collapse" id="collapse-body">
                <div>{coffee.description}</div>
                <Button variant="primary">Add to Cart</Button>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
      {/* CARD FLIP  */}
      {/* <div className="flip-card-outer">
        <div className="flip-card-inner hover-trigger">
          <div className="card front border-0">
            <h3 className="pt-3">{coffee.title}</h3>
            <div className="card-body d-flex justify-content-center align-items-center">
              <img
                className="coffee-img img-fluid w-100 h-100"
                src={coffee.image}
                alt=""
              />
            </div>
          </div>
          <div className="card back">
            <div className="card-body d-flex justify-content-center align-items-center">
              <div>
                <p className="card-text fs-10">{coffee.description}</p>
                <p>
                  <strong>Ingredients:</strong> {coffee.ingredients.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductCard;
