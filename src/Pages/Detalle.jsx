import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const styles = {
  card: {
    marginBottom: "10px",
    width: "18rem",
  },
};

function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const [comprar, setComprar] = useState('')
  console.log("🚀 ~ file: Detalle.jsx:4 ~ Detalle ~ params:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        // const response = await res.json()
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
          response,
          response.data()
        );
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, [id]);

  const handleClick = () => {
    alert("Ha comprado el producto!")
    setComprar= 'Compró un producto'
   };
  if (loading) {
    return <div>Cargando ...</div>;
  }
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={producto.thumbnail} />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>${producto.price}</Card.Text>
          <Button onClick={handleClick}>Comprar</Button>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default Detalle;
