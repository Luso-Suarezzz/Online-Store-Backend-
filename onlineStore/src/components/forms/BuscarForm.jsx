import { useContext, useState } from "react";
import formValidation from "../../validations/formValidation";
import { alertConfirm, alertInfo } from "../alerts/alerts";
import { Contexto } from "../../context/Contexto";

function BuscarForm() {
  const { setStore, peticionGet } = useContext(Contexto);

  const [values, setValues] = useState({
    search: "",
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

  // Funcion de buscar
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = await validation();
    if (validate) return alertInfo(validate);
    let respuesta = await peticionGet(
      `http://localhost:3000/productos/buscar/${values.search}`,
      "GET"
    );
    if (respuesta.status === 200) {
      alertConfirm("Resultado de la busqueda");
      return setStore(respuesta.productos);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="busqueda"
        class="w-full justify-center items-center flex md:w-1/2 py-4 md:py-8 px-4 md:px-12 gap-2"
      >
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleInputChange}
          value={values.search}
          placeholder="Buscar..."
          class="px-4 py-2 rounded-lg border-2 border-naranja focus:outline-none w-2/3 md:w-full text-sm md:text-lg font-hanuman"
        />
        <button
          type="submit"
          class="bg-azul p-2 text-blanco font-breeSerif rounded-lg border-2 border-azul hover:border-marron-calro hover:bg-marron-calro transition-all duration-500"
        >
          Search
        </button>
      </form>
    </>
  );
}

export default BuscarForm;
