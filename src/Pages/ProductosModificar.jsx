import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { update, getById, deleteProducto } from "../Services/productosService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";

function ProductosModificar() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ variant: "", text: "" });

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
        setValue("categoria", response.data().categoria);

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
      }
      setAlert({});
    };
    result();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const document = await update(id, data);
      console.log(
        "Desde modificar:",
        document
      );
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
    }
  };

  const handleClickEliminar = async () => {
    try {
      const response = await deleteProducto(id);
      console.log(
        "🚀 ~ file: ProductosModificar.jsx:46 ~ handleClickEliminar ~ response:",
        response
      );

      setAlert({
        variant: "success",
        text: "Eliminado con éxito",
        duration: 3000,
        link: "/",
      });

    } catch (e) {
      console.log(e);
      setAlert({
        variant: "danger",
        text: registroMessage[e.code] || "Ha ocurrido un error",
      });
    }
  };

  return (
    <div>
      <h1>Modificar producto</h1>
      <AlertCustom
          //variant={alert.variant} text={alert.text}
          {...alert}
        />
      <Button variant="danger" onClick={handleClickEliminar}>
        Eliminar
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register("title")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su precio"
            {...register("price")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su imagen"
            {...register("thumbnail")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea" rows={3}
                placeholder="Describa al perri"
                {...register("categoria")}
              />
            </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosModificar;
