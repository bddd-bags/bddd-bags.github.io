import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../index.css";

function nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-1">
        <Container className="navbar-style">
          <Navbar.Brand href="#home" className="sans-bold">
            SUIT GAME
          </Navbar.Brand>
          <Nav className="sign">
            <Nav.Link className="sans-re" href="/register">
              REGISTER
            </Nav.Link>
            <Nav.Link className="sans-re" eventKey={2} href="/login">
              LOGIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;
