import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { create } from "../Services/productosService";
import { registroMessage } from "../Utils/errorMessage";
import { useState } from "react";
import AlertCustom from "../Components/AlertCustom";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";

function ProductosAlta() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const document = await create(data);
      console.log(
        "Producto creado:",
        document
      );

      setLoading(false);

      setAlert({
        variant: "success",
        text: "Creado con éxito",
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
            <Input
              label="Nombre"
              name="formBasicNombre"
              placeholder="Ingrese el nombre del perri"
              register={{ ...register("title", { required: true }) }}
              errors={errors}
            />
            <Input
              label="Precio"
              name="formBasicNombre"
              type="number"
              placeholder="Ingrese su precio"
              register={{ ...register("price", { required: true }) }}
              errors={errors}
            />
            <Input
              label="Imagen"
              name="formBasicNombre"
              type="text"
              placeholder="Ingrese su imagen"
              register={{ ...register("thumbnail", { required: true }) }}
              errors={errors}
            />
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea" rows={3}
                placeholder="Describa al perri"
                {...register("categoria")}
                required
              />
            </Form.Group>

            <ButtonWithLoading loading={loading}>Guardar</ButtonWithLoading>
          </Form>
        </div>
      </div>
    </div>

  );
}

export default ProductosAlta;
