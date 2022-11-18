import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Coffeazy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Shop Coffeazy</Nav.Link>
          <NavDropdown title="Account">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Create Account</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </NavDropdown>
        </Nav>
      </Container>
      <div className="cart-container">
        <Link>Cart</Link>
      </div>
    </Navbar>
  );
};

export default Header;
