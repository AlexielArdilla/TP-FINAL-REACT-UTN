import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Row from "react-bootstrap/Row";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const titulo = "Listado de productos";
  const [buscar, setBuscar] = useState("iPhone");

  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await getAllProductos(buscar)
          // const response = await res.json()
          console.log("Productos:", response.results)
          setProductos(response.data.results)
          setLoading(false)
        } catch (e) {
          console.log(e)

        }

      }
      request()
    },
    [buscar]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:32 ~ handleChange ~ value:", value);
    setBuscar(value);
  };

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1>{titulo}</h1>
        <div id="buscador">
          <h3>Buscar:</h3> <br />
          <input type="text"
            name="buscar"
            value={buscar}
            onChange={handleChange}
          /> <br />
          <hr /></div>
        <Row>
          {productos.map((producto) => (
            <Producto
              id={producto.id}
              thumbnail={producto.thumbnail}
              nombre={producto.title}
              precio={producto.price}
              categoria=""
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
