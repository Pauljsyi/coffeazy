import React from "react";
import { Nav } from "react-bootstrap";
import cart from "../assets/icons/cart.png";

const Cart = () => {
  return (
    <>
      <Nav.Link>
        <img id="cart" src={cart} alt="cart" />
      </Nav.Link>
    </>
  );
};

export default Cart;
