import { useEffect, useState } from "react";
import { getAllProductos } from "../Services/productosService";
import Loading from "../Components/Loading/Loading";
import Table from 'react-bootstrap/Table';

function TablaPerros() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const titulo = "Detalle de todos los perris";
   
    useEffect(() => {
        const request = async () => {
            try {
                const querySnapshot = await getAllProductos();

                console.log(
                    "Cuando se trae todos los productos:",
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

    return (
        <Loading loading={loading}>
            <h1 style={{ textAlign: 'center', padding: '25px' }}>{titulo}</h1>
            <div className="d-flex justify-content-center"></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Fue adoptado</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.data().title}</td>
                            <td>AR${producto.data().price}</td>
                            <td>{producto.data().adoptado}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Loading >
    );
}


export default TablaPerros;
