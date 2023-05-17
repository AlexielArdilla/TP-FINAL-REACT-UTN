import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { update, getById, deleteProducto } from "../Services/productosService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductosModificar() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    const result = async () => {
      try {
        const response = await getById(id);
        setValue("title", response.data().title);
        setValue("price", response.data().price);
        setValue("thumbnail", response.data().thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    result();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const document = await update(id, data);
      console.log(
        "🚀 ~ file: ProductosAlta.jsx:18 ~ onSubmit ~ document:",
        document
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickEliminar = async () => {
    try {
      const response = await deleteProducto(id);
      console.log(
        "🚀 ~ file: ProductosModificar.jsx:46 ~ handleClickEliminar ~ response:",
        response
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Modificar producto</h1>
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

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosModificar;
