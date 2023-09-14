import React from "react";
import { Link } from "react-router-dom";

const NavItem = () => {
  return (
    <>
      <Link className="nav-link" to="/">
        Home
      </Link>

      <Link className="nav-link" to="/menu">
        Menu
      </Link>

      <Link className="nav-link" to="/shop">
        Shop Coffeazy
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
    </>
  );
};

export default NavItem;
