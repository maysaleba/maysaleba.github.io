import React from 'react';
import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

 
const Navi = () => {
  
    return (
  <Navbar className="fixed-top navbar" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand className="logotext " href="#" >
        <img
          alt=""
          src={logo}
          width="38"
          height="38"
          className="logo d-inline-block align-text-center"

        />{' '}
      MaySaleBa?
      </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navlink">
        <Nav.Link href="#home">Switch</Nav.Link>
        <Nav.Link href="#link">Playstation</Nav.Link>
        <NavDropdown title="Gift Cards" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">eShop</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">PS Store</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 )
  
}
 
export default Navi;