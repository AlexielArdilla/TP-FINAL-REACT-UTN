import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getById, update } from "../Services/productosService";
import { Button, Card } from "react-bootstrap";
import './detalle.css';
import { Link } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import { registroMessage } from "../Utils/errorMessage";


function CardDePago({ producto }) {

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

    const { id } = useParams();

    const {
        register,
        setValue
    } = useForm({ mode: "onChange" });

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ variant: "", text: "" });

    useEffect(() => {
        const result = async () => {
            setLoading(true);
            try {
                const response = await getById(id);
                setValue("title", response.data().title);
                setValue("price", response.data().price);
                setValue("thumbnail", response.data().thumbnail);
                setValue("categoria", response.data().categoria);
                setValue("adoptado", response.data().adoptado);

                setLoading(false);

                setAlert({
                    variant: "success",
                    text: "Modificado con éxito",
                    duration: 3000,
                    link: "/"
                });
            } catch (e) {
                console.log(e);
                setAlert({
                    variant: "danger",
                    text: registroMessage[e.code] || "Ha ocurrido un error",
                });
                setLoading(false);
            }
            setAlert({});
        };
        result();
    }, [id, setValue]);

    const crearAdoptado = async (data) => {
        setLoading(true);
        try {
            const document = await update(id, data);
            console.log(
                "Desde modificar:",
                document
            );
            setLoading(false);
            setAlert({
                variant: "success",
                text: "Modificado con éxito",
                duration: 3000,
                link: "/",
            });
        } catch (e) {
            console.log(e.code);
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ha ocurrido un error",
            });
            setLoading(false);
        }
    };

    if (loading) {
        <Loading />
    } else {
        return (
            <>
                <div className="col-md-4">
                    <h1 style={{ textAlign: 'center', margin: "25px 25px" }}>Tu perri</h1>
                    {alert}
                    <Card style={styles.card}>
                        <Card.Img variant="top" src={producto.thumbnail} />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>Precio: AR${producto.price}</Card.Text>
                            <Card.Text>¿Ya fue adoptado?:{" "}<b>{producto.adoptado}</b></Card.Text>
                            register={{ ...register("adoptado", { required: true }) }}
                            <Button variant="danger" as={Link} to={'/'}>
                                Volver
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}

export default CardDePago