import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem"
  },
};

function Producto({ id, nombre, precio, thumbnail }) {
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>${precio}</Card.Text>
          <Button variant="primary" className="boton" as={Link} to={`/producto/${id}`}>
            Ver Detalle
          </Button>
          <Button variant="primary" className="boton" as={Link} to={`/producto/modificar/${id}`}>
            Modificar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
