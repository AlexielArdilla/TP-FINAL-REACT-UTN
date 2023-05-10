import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import './producto.css';
import { useState } from "react";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem"
  },
  button: {
    margin: "15px"
  }
};


function Producto({ id, nombre, precio, thumbnail }) {

  const [favorito, setFavorito] = useState('')
  console.log("favoritos: ", favorito)

  const handleClick = () => {
    //alert(`Has agregado ${nombre} a tus favoritos`)
    setFavorito(`Has agregado ${nombre} a tus favoritos`)
  }

  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <div id="favorito">{favorito}</div>
      <Card style={styles.card}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>${precio}</Card.Text>
          <Button style={styles.button} variant="primary" as={Link} to={`/producto/${id}`}>
            Detalle
          </Button>
          <Button variant="success" onClick={handleClick}>
            Favoritos
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Producto;
