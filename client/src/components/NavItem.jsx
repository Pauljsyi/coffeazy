import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/icons/cart.png";

const NavItem = () => {
  return (
    <>
      <Link className="nav-link" to="/">
        Home
      </Link>

      <Link className="nav-link" to="/menu">
        Menu
      </Link>

      <Link className="nav-link" to="/merch">
        Coffeazy Merch
      </Link>

      <Link className="nav-link" to="/upload">
        Upload Product
      </Link>

      <Link className="nav-link" to="/login">
        Log In
      </Link>

      <Link className="nav-link" to="/register">
        Create Account
      </Link>

      <Link className="nav-link" to="/cart">
        <img id="cart" src={cart} alt="cart" />
      </Link>
    </>
  );
};

export default NavItem;
