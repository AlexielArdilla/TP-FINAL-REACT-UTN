import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import './producto.css';

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem"
  }
};

function Producto({ id, nombre, precio, thumbnail }) {
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>${precio}</Card.Text>
          <Button variant="primary" as={Link} to={`/producto/${id}`}>
            Detalle
          </Button>
          <Button variant="primary">
            Favoritos
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
