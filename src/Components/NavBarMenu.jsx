import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import EcommerceContext from "../Context/EcommerceContext";
import { useContext } from "react";

function NavBarMenu() {
  const context = useContext(EcommerceContext);

  const handleLougout = () => {
    context.logoutUser();
  }

  return (
    <EcommerceContext.Consumer>
      {context =>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            AdoptaUnPerri.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              {
                !context.userLogin &&
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/alta">
                    Registro
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ingresar">
                    Ingresar
                  </Nav.Link>
                </>
              }
              {
                context.userLogin &&
                <>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={handleLougout}>
                    Salir
                  </Nav.Link>
                  <NavDropdown title="Perris" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/producto/alta">
                      Nuevo
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/producto/tabla">
                      Tabla de perris
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              }
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      }
    </EcommerceContext.Consumer>
  );
}

export default NavBarMenu;