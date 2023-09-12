import React, { useState, useEffect } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo/coffeazy-logo.png";
import FullNavigation from "./FullNavigation";
import Hamburger from "./Hamburger";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 769) {
        setMobile(false);
      } else {
        setMobile(true);
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
        {mobile ? <Hamburger /> : <FullNavigation />}
      </Container>
    </Navbar>
  );
};

export default Header;
