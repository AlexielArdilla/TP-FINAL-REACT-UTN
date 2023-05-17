import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { create } from "../Services/productosService";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const document = await create(data);
      console.log(
        "🚀 ~ file: ProductosAlta.jsx:18 ~ onSubmit ~ document:",
        document
      );
      alert("Creado con éxito")
    } catch (e) {
      console.log(e);
      alert("No se pudo crear!!!")
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
      </div>
    </div>
  );
}

export default ProductosAlta;
