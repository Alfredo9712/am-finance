import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" className="mb-0" expand="sm">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Budget Planner{" "}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/Alfredo9712" target="_blank">
                {" "}
                Github Repo
              </Nav.Link>

              {/* <Nav.Link as={NavLink} to="/budget" style={{ color: "#42D9C5" }}>
                Stocks <i className="fas fa-chart-line"></i>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
