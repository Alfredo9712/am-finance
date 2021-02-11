import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" className="mb-0" expand="sm">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Funds and Finance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/budget">
                Budget <i className="fas fa-chart-pie"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/budget" style={{ color: "#42D9C5" }}>
                Stocks <i className="fas fa-chart-line"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
