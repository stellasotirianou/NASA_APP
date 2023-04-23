import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
      style={{ position: "sticky" }}
    >
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          NASA API
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              IMAGE OF THE DAY
            </Nav.Link>
            <Nav.Link as={Link} to="/asteroids">
              NEO's TRACKER
            </Nav.Link>
            <Nav.Link as={Link} to="/image">
              IMAGE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
