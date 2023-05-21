import { useForm } from "react-hook-form";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Form from "react-bootstrap/Form";
import { login } from "../Services/usuariosService";
import "./Registro.css";
import EcommerceContext from "../Context/EcommerceContext";
import { registroMessage } from "../Utils/errorMessage";
import AlertCustom from "../Components/AlertCustom";
import Input from "../Components/Input";
import { useContext, useState } from "react";

function Login() {
  const context = useContext(EcommerceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    
    try {
      const user = await login(data.email, data.password);
      console.log("Se logueó el user: ", user);
      
      context.loginUser();
      
      setLoading(false);
      setAlert({
        variant: "success",
        text: "Ingreso exitoso",
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

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <h1>Ingrese</h1>
          <AlertCustom
            {...alert}
          />
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                  maxLength: 12,
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
            <ButtonWithLoading loading={loading}>Ingresar</ButtonWithLoading>

          </Form>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  );
}

export default Login;
