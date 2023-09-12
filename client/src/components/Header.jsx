import React, { useState, useEffect } from "react";

import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo/coffeazy-logo.png";
import FullNavigation from "./FullNavigation";
import Hamburger from "./Hamburger";

const Header = (props) => {
  const width = props.width;
  const [mobile, setMobile] = useState(false);
  const isMobile = () => {
    if (window.innerWidth > 769) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    function handleResize() {
      if (width > 769) {
        setMobile(false);
        window.localStorage.setItem("isMobile", false);
      } else {
        setMobile(true);
        window.localStorage.setItem("isMobile", true);
      }
    }
    window.addEventListener("resize", handleResize);
  });
  console.log(mobile);
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img id="logo-img" src={logo} alt="logo" />
        </Navbar.Brand>
        {isMobile() ? <Hamburger /> : <FullNavigation />}
      </Container>
    </Navbar>
  );
};

export default Header;
