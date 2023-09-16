import React, { useState } from "react";
import cn from "classnames";
import { Button, Card, Col, Collapse } from "react-bootstrap";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
import product2 from "../assets/img/products/Shutterstock_499650232.jpg";

const ProductCard = (props) => {
  const { coffee, idx } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Col key={idx} align="center">
        <Card
          style={{ width: "18rem" }}
          onClick={() => setOpen(!open)}
          // aria-controls="collapse-body"
          // aria-expanded={open}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={coffee.image}
            width={250}
            height={250}
          />
          <Card.Body>
            <Card.Title>{coffee.title}</Card.Title>

            <Collapse in={open} mountOnEnter={open}>
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
