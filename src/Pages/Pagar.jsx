import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getById, pay } from "../Services/productosService";
import { Button, Card, Form } from "react-bootstrap";
import './detalle.css';
import { Link } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";
import Loading from "../Components/Loading/Loading";
import { registroMessage } from "../Utils/errorMessage";

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
    setValue,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const producto = {};
  const [alert, setAlert] = useState({ variant: "", text: "" });
  console.log("🚀 Será esta la ID???:", id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        setValue("adoptado", "sí");
        console.log(
          "🚀 ~ Info del producto:",
          response,
          response.data()
        );

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
    };

    request();
  }, [id, setValue]);

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

  const onSubmit = async (data) => {

    const pagado = await pay(data);
    console.log("Pagó?", pagado)

    setAlert({
      variant: "success",
      text: "¡Pago exitoso!",
      duration: 3000,
      link: "/"
    })



  }

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