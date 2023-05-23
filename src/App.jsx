import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Registro from "./Pages/Registro";
import Detalle from "./Pages/Detalle";
import NavBarMenu from "./Components/NavBarMenu";
import NotFound from "./Pages/NotFound";
import Container from "react-bootstrap/Container";
import Login from "./Pages/Login";
import ProductosAlta from "./Pages/ProductosAlta";
import ProductosModificar from "./Pages/ProductosModificar";
import Footer from "./Components/Footer";
import Pagar from "./Pages/Pagar";
import GlobalState from "./Context/GlobalState";
import TablaPerros from "./Pages/TablaPerros";
import EcommerceContext from "./Context/EcommerceContext";

function App() {

  return (
    <Router>
      <GlobalState>
        <EcommerceContext.Consumer>
          {(context) => (
            <>
              <NavBarMenu />
              <Container>
                <Routes>
                <Route path="/" element={<Home />} />
                  {
                    !context.userLogin &&
                    <>
                    <Route path="/" element={<Home />} />
                      <Route path="/alta" element={<Registro />} />
                      <Route path="/ingresar" element={<Login />} />
                      <Route path="/producto/:id" element={<Detalle />} />
                      <Route path="/producto/:id/pagar" element={<Pagar />} />
                      <Route path="*" element={<NotFound />} />
                    </>}
                  {
                    context.userLogin &&
                    <>
                     <Route path="/" element={<Home />} />
                      <Route path="/producto/alta" element={<ProductosAlta />} />
                      <Route path="/ingresar" element={<Login />} />
                      <Route path="/producto/tabla" element={<TablaPerros />} />
                      <Route
                        path="/producto/modificar/:id"
                        element={<ProductosModificar />} />
                      <Route path="/producto/:id" element={<Detalle />} />
                      <Route path="/producto/:id/pagar" element={<Pagar />} />
                      <Route path="*" element={<NotFound />} />
                    </>}
                </Routes>
              </Container>
              <Footer id="footer" />
            </>
          )}
        </EcommerceContext.Consumer>
      </GlobalState>
    </Router>
  );
}

export default App;
