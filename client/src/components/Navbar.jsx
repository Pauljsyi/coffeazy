import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import NavItem from "./NavItem";
import logo from "../assets/img/logo/coffeazy-logo.png";
import Cart from "./Cart";

const Navbar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [showAnimated, setShowAnimated] = useState(false);
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img id="logo-img" src={logo} alt="logo" />
        </MDBNavbarBrand>
        {/* <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler> */}
        <MDBNavbarToggler
          type="button"
          className="ms-auto"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setShowAnimated(!showAnimated);
            setShowNavSecond(!showNavSecond);
          }}
        >
          <div className={`animated-icon1 ${showAnimated && "open"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </MDBNavbarToggler>
        <MDBCollapse
          className="bg-light my-5"
          id="collapse-menu"
          navbar
          show={showNavSecond}
        >
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <NavItem />
            <Cart />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
