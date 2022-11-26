import React from "react";
import cn from "classnames";
import { Button, Card } from "react-bootstrap";
import product1 from "../assets/img/products/Shutterstock_503987836.jpg";
import product2 from "../assets/img/products/Shutterstock_499650232.jpg";

const ProductCard = (props) => {
  const { card } = props;
  console.log(card);
  return (
    // <div id="flip-card">
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    //       <img src={product2} />
    //     </div>
    //     <div className="flip-card-back">
    //       <h3>Card Title</h3>
    //       <p>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <Button variant="primary">Go somewhere</Button>
    //     </div>
    //   </div>
    // </div>
    <div className="flip-card-outer ">
      <div className="flip-card-inner hover-trigger">
        <div className="card front border-0">
          {/* <div className="card-body d-flex justify-content-center align-items-center"> */}
          <img className="img-fluid w-100 h-100" src={card.image} alt="" />
          {/* <p className="card-text fs-1 fw-bold">
              <img className="w-100" src={card.image} alt="" />
            </p> */}
          {/* </div> */}
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
