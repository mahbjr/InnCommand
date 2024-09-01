import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">In Command</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#quartos">QUARTOS</Nav.Link>
            <Nav.Link href="#fitness">FITNESS</Nav.Link>
            <Nav.Link href="#lazer">LAZER</Nav.Link>
            <Nav.Link href="#eventos">EVENTOS</Nav.Link>

            <NavDropdown title="RESTAURANTES" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#coffee-shop">
                COFFEE SHOP
              </NavDropdown.Item>
              <NavDropdown.Item href="#la-marine">LA MARINE</NavDropdown.Item>
              <NavDropdown.Item href="#pool-bar">
                POOL BAR E RESTAURANTE
              </NavDropdown.Item>
              <NavDropdown.Item href="#casa-de-cha">
                CASA DE CHÁ
              </NavDropdown.Item>
              <NavDropdown.Item href="#room-service">
                ROOM SERVICE
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#galeria">GALERIA</Nav.Link>
            <Nav.Link href="#contatos">CONTATOS</Nav.Link>
          </Nav>
          <Button variant="outline-primary" href="#reservar" className="ms-2">
            RESERVAR
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
