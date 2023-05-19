import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { create } from "../Services/productosService";
import { registroMessage } from "../Utils/errorMessage";
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom";

function ProductosAlta() {
  const {
    register,
    handleSubmit
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    try {
      const document = await create(data);
      console.log(
        "Producto creado:",
        document
      );
      setAlert({
        variant: "success",
        text: "Creado con éxito",
        duration: 3000,
        link: "/",
      });
      //setAlert();
    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "No se pudo crear el producto",
      });
      //setAlert();
    }
    
  };

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <h1>Nuevo perris</h1>
        <AlertCustom
          //variant={alert.variant} text={alert.text}
          {...alert}
        />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                {...register("title")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                {...register("price")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su imagen"
                {...register("thumbnail")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea" rows={3}
                placeholder="Describa al perri"
                {...register("categoria")}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </div>
    
  );
}

export default ProductosAlta;
