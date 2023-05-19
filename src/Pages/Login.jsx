import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../Services/usuariosService";
import "./Registro.css";
//import Greeting from "../index";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  //const{isLoggedIn, setIsLoggedIn} = (false);

  const onSubmit = async (data) => {
    try {
      const user = await login(data.email, data.password);
      console.log("Se logueó el user: ", user);
      alert(`Se logueó con éxito ${data.email}`);
      /*acá va el use state*/ 
      //setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
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
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              Ingresar
            </Button>
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
