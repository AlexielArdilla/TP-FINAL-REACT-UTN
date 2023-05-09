import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function NavBarMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        E-commerce 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/alta">
            Registro
          </Nav.Link>
          <Nav.Link as={Link} to="/ingresar">
            Ingresar
          </Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/producto/alta">
              Nuevo
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarMenu;
