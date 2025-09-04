import React from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logo from "../assets/logo.png"
const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image src={logo} className='logoImageHeader'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Detalii</Nav.Link>
            <Nav.Link href="#povestea-noastra">Povestea Noastră</Nav.Link>
            <Nav.Link href="#confirma">Confirmă participare</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;