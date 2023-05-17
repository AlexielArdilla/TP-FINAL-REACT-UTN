import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getById } from "../Services/productosService";
import './detalle.css';

function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
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

  const handleClick = () => {};
  if (loading) {
    return <div>Cargando ...</div>;
  }
  return (
    <div className="producto-lista">
      <img src={producto.thumbnail} alt="imagen del  producto" />
      <h1>{producto.title}</h1>
      <p>${producto.price}</p>
      <Button variant="primary" size="lg" onClick={handleClick}>Comprar</Button>
    </div>
  );
}

export default Detalle;
