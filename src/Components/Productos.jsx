import { useEffect, useState } from "react";
import Producto from "./Producto";
import { getAllProductos } from "../Services/productosService";
import Row from "react-bootstrap/Row";

function Productos() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const titulo = "Listado de perris";
  /*const [buscar, setBuscar] = useState("iPhone");*/

  useEffect(() => {
    const request = async () => {
      try {
        const querySnapshot = await getAllProductos();
        // const response = await res.json()
        console.log(
          "🚀 ~ file: Productos.jsx:25 ~ request ~ response:",
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

  /*const handleChange = (event) => {
    const value = event.target.value;
    console.log("🚀 ~ file: Productos.jsx:32 ~ handleChange ~ value:", value);
    setBuscar(value);
  };*/

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div>
        <h1 style={{textAlign: 'center', padding: '25px'}}>{titulo}</h1>
       {/* <div id="buscador">
          <h3>Buscar:</h3> <br />
          <input type="text"
            name="buscar"
            value={buscar}
            onChange={handleChange}
          /> <br />
          <hr /></div>*/}
        <Row>
          {productos.map((producto) => (
            <Producto
            id={producto.id}
            nombre={producto.data().title}
            precio={producto.data().price}
            thumbnail={producto.data().thumbnail}
            categoria=""
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Productos;
