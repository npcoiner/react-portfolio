import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation() {
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Nicholas Coiner</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
