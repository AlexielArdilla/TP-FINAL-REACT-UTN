import { useForm } from "react-hook-form";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { create } from "../Services/usuariosService";
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";
import "./Registro.css";
import Input from "../Components/Input";
import ButtonWithLoading from "../Components/ButtonWithLoading";


function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const user = await create(data);
      console.log("Este es el user creado: ", user);
      setLoading(false);
      setAlert({
        variant: "success",
        text: "Gracias por registrarte",
        duration: 3000,
        link: "/ingresar",
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

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <h1>Regístrese</h1>
          <AlertCustom
            {...alert}
          />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
              register={{ ...register("nombre", { required: true }) }}
              errors={errors}
            />
            <Input
              label="Apellido"
              name="formBasicApellido"
              placeholder="Ingrese su apellido"
              register={{ ...register("apellido", { required: true }) }}
            />
            <Input
              label="Email"
              name="formBasicApellido"
              type="email"
              placeholder="Ingrese su email"
              register={{
                ...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                }),
              }}
            >
              <Form.Text className="text-muted">
                {errors.email?.type === "required" && (
                  <span>El campo es obligatorio</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span>Formato email no valido</span>
                )}
              </Form.Text>
            </Input>
            <Input
              label="Contraseña"
              name="formBasicPassword"
              type="password"
              placeholder="Ingrese su contraseña"
              register={{
                ...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 12
                }),
              }}
            >
              <Form.Text className="text-muted">
                {errors.password?.type === "required" && (
                  <span>El campo es obligatorio</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Debe completar al menos 6 caracteres</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span>Debe completar menos de 12 caracteres</span>
                )}
              </Form.Text>
            </Input>
            <ButtonWithLoading loading={loading}>Registrarse</ButtonWithLoading>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
