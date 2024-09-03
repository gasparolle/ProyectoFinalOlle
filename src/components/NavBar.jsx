import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return <> 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='contenedor'>
        <Navbar.Brand>Argen Camaras</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/Camara">Camaras</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/Lentes">Lentes</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/Accesorios">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
  
    </Navbar>
   
    </>;
}