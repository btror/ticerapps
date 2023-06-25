import "./NavigationBar.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navigation-menu">
      <Navbar.Brand id="navbar-title">TICERAPPS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <li>
            <Link to="/" id="nav-link">
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/apps" id="nav-link">
              Apps
            </Link>
          </li>
          <li>
            <Link to="/contact" id="nav-link">
              Contact
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
