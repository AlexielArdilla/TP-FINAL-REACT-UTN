import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import { Button, Card, Form } from "react-bootstrap";
import './detalle.css';
import { Link } from "react-router-dom";
//import perrito from "../img/perrito.jpg"

const styles = {

    card: {
        marginBottom: "10px",
        width: "18rem",
        textAlign: "center"
    },
    button: {
        margin: "15px",
    }
};


function Pagar() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    console.log("🚀 Será esta la ID???:", id);

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getById(id);
                // const response = await res.json()
                console.log(
                    "🚀 ~ Info del producto:",
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


    const handleSubmit = () =>{
        alert(`El pago por ${producto.title} ha sido exitoso!!!`)
    } 

    if (loading) {
        return <div>Cargando ...</div>;
    }
    return (
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-md-4">
                    <h1 style={{textAlign:'center', margin:"25px 25px"}}>Tu perris</h1>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src={producto.thumbnail} />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>Precio: ${producto.price}</Card.Text>
                            <Button variant="danger" as={Link} to={'/'}>
                                Volver
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-8">
                <h1>Pagar</h1>
                <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre y apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre y apellido"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Número de tarjeta de cred/débito</Form.Label>
              <Form.Control
                type="number"
                placeholder="Núm de tarjeta de crédito"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Vencimiento:</Form.Label>
              <Form.Control
                type="number"
                placeholder="MMAA"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Código de seguridad:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ejemplo 111"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Pagar
            </Button>
          </Form>
                </div>
            </div>
        </div>
    )
}

export default Pagar