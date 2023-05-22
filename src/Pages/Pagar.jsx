import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getById } from "../Services/productosService";
import { Button, Card, Form } from "react-bootstrap";
import './detalle.css';
import { registroMessage } from "../Utils/errorMessage";
import { Link } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";
import Loading from "../Components/Loading/Loading"
import { createComprador } from "../Services/compradoresService";

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

  const {
    register,
    handleSubmit,
   //setValue,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});

  //const [comprador, setComprador] = useState({});

  const [alert, setAlert] = useState({ variant: "", text: "" });
  console.log("ID del perro:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);

        console.log(
          "Info del producto perro?:",
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


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const document = await createComprador(data);
      //setProducto(producto.adoptado("Sí"));
      console.log(
        "Producto creado:",
        document
      );
     
      setLoading(false);

      setAlert({
        variant: "success",
        text: "Compra exitosa",
        duration: 3000,
        link: "/",
      });

    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "No se pudo crear el producto",
      });
      setLoading(false);
    }

  };


  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-4">
          <h1 style={{ textAlign: 'center', margin: "25px 25px" }}>Tu perris</h1>
          <Card style={styles.card}>
            <Card.Img variant="top" src={producto.thumbnail} />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>Precio: ${producto.price}</Card.Text>
              <Card.Text>¿Ya fue adoptado?:<b>{producto.adoptado}</b></Card.Text>
              <Button variant="danger" as={Link} to={'/'}>
                Volver
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-8">
          <h1>Pagar</h1>
          <AlertCustom
            {...alert}
          />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nombre y apellido"
              name="formBasicNombre"
              placeholder="Ingrese su nombre y apellido"
              register={{ ...register("title", { required: true }) }}
              errors={errors}
            />
            <Input
              label="Número de tarjeta de crédito"
              name="formBasicNombre"
              type="number"
              placeholder="Ingrese su número (16 dígitos)"
              register={{
                ...register("cardNumber", {
                  required: true,
                  minLength: 16,
                  maxLength: 16
                })
              }}
              errors={errors}
            />
            <Input
              label="Vencimiento"
              name="formBasicNombre"
              type="number"
              placeholder="MMAA"
              register={{
                ...register("vencimiento", {
                  required: true,
                  minLength: 4,
                  maxLength: 4
                })
              }}
              errors={errors}
            />
            <Input
              label="Código de seguridad"
              name="formBasicNombre"
              type="number"
              placeholder="Ejemplo 111"
              register={{
                ...register("codigoSeguridad", {
                  required: true,
                  minLength: 3,
                  maxLength: 3
                })
              }}
              errors={errors}
            />
            <ButtonWithLoading loading={loading}>Pagar</ButtonWithLoading>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Pagar