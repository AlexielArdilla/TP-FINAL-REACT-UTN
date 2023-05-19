import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Row from "react-bootstrap/Row";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const titulo = "Listado de perris";

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProductos();
        
        console.log(
          "🚀 ~ Cuando se trae todos los productos:",
          querySnapshot.docs
        );
        setProductos(querySnapshot.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    request();
  }, []);


  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: 'center', padding: '25px' }}>{titulo}</h1>
        <div className="d-flex justify-content-center"></div>
        <Row  xs={1} md={2} className="g-4">
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              id={producto.id}
              nombre={producto.data().title}
              precio={producto.data().price}
              thumbnail={producto.data().thumbnail}
              categoria={producto.data().categoria}
            />
          ))}
        </Row>
      </div >
    );
  }
}

export default Productos;
