import React, { useState, useRef, useEffect } from "react";
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
import logo from "../assets/img/logo/coffeazy-logos.png";

const Navbar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [showAnimated, setShowAnimated] = useState(false);
  const [open, setOpen] = useState(false);

  // CUSTOM HOOK TO DETECT OUTSIDE CLICK
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowNavSecond(false);
          setShowAnimated(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <MDBNavbar expand="lg" light bgColor="light" ref={wrapperRef}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" id="nav-brand">
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
          id="hamburger-btn"
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
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
