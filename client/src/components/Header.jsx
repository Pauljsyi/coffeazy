import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/shop">Shop Coffeazy</Nav.Link>
          <NavDropdown id="nav-dropdown" title="Account">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Create Account</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </NavDropdown>

          <Nav.Link>
            <img id="cart" src={cart} alt="cart" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
