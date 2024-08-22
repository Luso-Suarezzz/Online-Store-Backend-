import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/Contexto";
import paths from "../../config/routePaths";
import formValidation from "../../validations/formValidation";
import { alertConfirm, alertError, alertInfo } from "../alerts/alerts";

function RegisterForm() {
  const navigate = useNavigate();

  const { peticionPost } = useContext(Contexto);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    username: "",
    password: "",
    confirmPassword: "",
    rol: "",
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
    let errorPassword = formValidation.validatePasswords(
      values.password,
      values.confirmPassword
    );
    if (!errorPassword) return alertError("No coinciden las contraseñas");
    let respuesta = await peticionPost(
      "http://localhost:3000/users/registrar",
      "POST",
      values
    );
    setValues({
      nombre: "",
      apellido: "",
      correo: "",
      username: "",
      password: "",
      confirmPassword: "",
      rol: "",
    });
    if (respuesta.status === 201) {
      return alertConfirm("Se ha registrado el usuario exitosamente");
    } else {
      return alertError("No se ha registrado el usuario");
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
          <label className="text-xl font-bold text-negro">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleInputChange}
            value={values.nombre}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Nombre"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            onChange={handleInputChange}
            value={values.apellido}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Apellido"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            onChange={handleInputChange}
            value={values.correo}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Correo"
          />
        </div>
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
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInputChange}
            value={values.confirmPassword}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
            placeholder="Confirmar"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-xl font-bold text-negro">Rol</label>
          <select
            name="rol"
            value={values.rol}
            onChange={handleInputChange}
            className="border-2 rounded-lg bg-blanco border-azul focus:outline-none w-full px-2 py-1 font-hanuman text-md"
          >
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full mt-4">
          <button className="bg-azul font-breeSerif text-lg rounded-lg p-2 text-blanco hover:bg-marron-calro transition-all duration-300">
            Registrarme
          </button>
          <button
            id="register"
            type="button"
            onClick={(e) => {
              navigate(paths.LOGIN_PATH);
            }}
            className="bg-azul font-breeSerif text-lg rounded-lg p-2 text-blanco hover:bg-marron-calro transition-all duration-300"
          >
            Inicio Sesión
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
