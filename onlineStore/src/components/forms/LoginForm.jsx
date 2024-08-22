import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/Contexto";
import paths from "../../config/routePaths";
import formValidation from "../../validations/formValidation";
import { alertConfirm, alertError, alertInfo } from "../alerts/alerts";

function LoginForm() {
  const navigate = useNavigate();

  const { peticionPost, setToken, setUser } = useContext(Contexto);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Detectar el valor del input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // funcion para validar campos
  const validation = () => {
    for (let key in values) {
      let error = formValidation.validateText(values[key].toString());
      if (!error) return "Completa todos los datos";
    }
  };

  // Funcion de iniciar sesion
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = await validation();
    if (validate) return alertInfo(validate);
    let respuesta = await peticionPost(
      "http://localhost:3000/users/login",
      "POST",
      values
    );
    setValues({
      username: "",
      password: ""
    });
    if (respuesta.status === 200) {
      setToken(respuesta.token);
      setUser(respuesta.user)
      alertConfirm("Has iniciado sesion exitosamente");
      return navigate(paths.SOTER_PATH);
    } else {
      return alertError("No coinciden las credenciales");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="form-login"
        className="gap-4 w-[75%] flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
            value={values.username}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Usuario"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={values.password}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Contraseña"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full mt-4">
          <button className="bg-azul font-breeSerif text-lg rounded-lg p-2 text-blanco hover:bg-marron-calro transition-all duration-300">
            Iniciar Sesión
          </button>
          <button
            id="register"
            type="button"
            onClick={(e) => {
              navigate(paths.REGISTER_PATH);
            }}
            className="bg-azul font-breeSerif text-lg rounded-lg p-2 text-blanco hover:bg-marron-calro transition-all duration-300"
          >
            Registrarme
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
