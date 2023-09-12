import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import DropDown from "./DropDown";
import logo from "../assets/img/logo/coffeazy-logo.png";
import cart from "../assets/icons/cart.png";

const Header = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img id="logo-img" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link>
            <Link className="link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" id="links" to="/menu">
              Menu
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to="/shop">
              Shop Coffeazy
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to="/upload">
              Upload Product
            </Link>
          </Nav.Link>
          <DropDown />

          {/* <NavDropdown id="nav-dropdown" title="Account">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Create Account</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </NavDropdown> */}

          <Nav.Link>
            <img id="cart" src={cart} alt="cart" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
