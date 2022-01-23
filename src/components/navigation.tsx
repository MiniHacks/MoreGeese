import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/nav.css";

const Navigation = () => {
  return (
    <Navbar className="nav" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Antidoxx
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/"> Home </Nav.Link>
          <Nav.Link as={NavLink} to="/about"> About </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
