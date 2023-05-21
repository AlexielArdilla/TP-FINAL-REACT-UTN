import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Registro.css";
import { update, getById, deleteProducto } from "../Services/productosService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";

function ProductosModificar() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
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

  const handleClickEliminar = async () => {
    setLoading(true);
    try {
      const response = await deleteProducto(id);
      console.log(
        "ProductosModificar handleClickEliminar trae:",
        response
      );
      setLoading(false);
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
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Modificar producto</h1>
      <AlertCustom
          {...alert}
        />
      <Button variant="danger" onClick={handleClickEliminar}>
        Eliminar
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
         <Input
          label="Nombre"
          name="formBasicNombre"
          placeholder="Ingrese su nombre"
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
              />
            </Form.Group>

        <ButtonWithLoading loading={loading}>Guardar</ButtonWithLoading>
      </Form>
    </div>
  );
}

export default ProductosModificar;
