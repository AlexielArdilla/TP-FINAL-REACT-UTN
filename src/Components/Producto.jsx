import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import './producto.css';
import EcommerceContext from "../Context/EcommerceContext";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
  button: {
    margin: "15px"
  }
};


function Producto({ id, nombre, precio, thumbnail, categoria }) {

  return (
    <EcommerceContext.Consumer>
      {context =>
        <Col xs={12} sm={6} lg={4} xxl={3}>
          <Card style={styles.card}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>${precio}</Card.Text>
              <Card.Text>{categoria}</Card.Text>
              <Button style={styles.button} variant="primary" as={Link} to={`/producto/${id}`}>
                Detalle
              </Button>
              {
                context.userLogin &&
                <Button variant="success" as={Link} to={`/producto/modificar/${id}`}>
                  Modificar
                </Button>
              }
            </Card.Body>
          </Card>
        </Col>
      }
    </EcommerceContext.Consumer>
  );
}

export default Producto;
