import React from "react";
import { Nav } from "react-bootstrap";
import cart from "../assets/icons/cart.png";
import DropDown from "./DropDown";
import NavItem from "./NavItem";

const FullNavigation = () => {
  return (
    <>
      <Nav>
        <NavItem />
        <DropDown />
        <Nav.Link>
          <img id="cart" src={cart} alt="cart" />
        </Nav.Link>
      </Nav>
    </>
  );
};

export default FullNavigation;
