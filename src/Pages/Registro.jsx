import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { create } from "../Services/usuariosService";
import AlertCustom from "../Components/AlertCustom";
import { registroMessage } from "../Utils/errorMessage";
import "./Registro.css";


function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  //const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ variant: "", text: "" });

  const onSubmit = async (data) => {
    try {
      const user = await create(data);
      console.log("Este es el user creado: ", user);
      //setLoading(false);
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
      //setLoading(false);
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
            //variant={alert.variant} text={alert.text}
            {...alert}
          />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                {...register("nombre", { required: true })}
              />

              {errors.nombre && (
                <Form.Text className="text-muted">
                  El Campo es obligatorio
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su apellido"
                {...register("apellido")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                })}
              />
              {errors.email && (
                <div>
                  <Form.Text className="text-muted">
                    {errors.email?.type === "required" && (
                      <span>El campo es obligatorio</span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span>Formato email no valido</span>
                    )}
                  </Form.Text>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              {errors.password && (
                <div>
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
                </div>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
