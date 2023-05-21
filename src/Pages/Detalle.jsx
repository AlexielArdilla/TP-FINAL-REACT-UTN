import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getById } from "../Services/productosService";
import Loading from "../Components/Loading/Loading";
import './detalle.css';

function Detalle() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  console.log("🚀 ~ file: Detalle ID params:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        // const response = await res.json()
        console.log(
          "Productos response:",
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


  return (
    <Loading loading={loading}>
      <div className="producto-lista">
        <img src={producto.thumbnail} alt="imagen del  producto" />
        <h1>{producto.title}</h1>
        <p>${producto.price}</p>
        <Button variant="primary" id={id} size="lg" as={Link} to={`/producto/${id}/pagar`}>Pagar</Button>
      </div>
    </Loading>
  );
}

export default Detalle;
