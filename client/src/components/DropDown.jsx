import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

const DropDown = () => {
  return (
    <>
      <NavDropdown id="nav-dropdown" title="Account">
        <Nav.Link>
          <Link className="link" href="/login">
            Log In
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="link" href="/register">
            Create Account
          </Link>
        </Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link>
          <Link className="link" href="/contact">
            Contact us
          </Link>
        </Nav.Link>
      </NavDropdown>
    </>
  );
};

export default DropDown;
