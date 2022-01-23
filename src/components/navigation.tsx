import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="primary">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand as={NavLink} to="/">
            home
          </Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/about">
            about
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
