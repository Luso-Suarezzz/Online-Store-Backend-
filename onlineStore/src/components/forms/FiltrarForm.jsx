import { useContext, useState } from "react";
import formValidation from "../../validations/formValidation";
import { Contexto } from "../../context/Contexto";
import { alertConfirm, alertInfo } from "../alerts/alerts";

function FiltrarForm() {
  const { setStore, peticionGet } = useContext(Contexto);

  const [values, setValues] = useState({
    categoria: "Todos",
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

  // Funcion de Filtrar
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = await validation();
    if (validate) return alertInfo(validate);

    if (values.categoria === "Todos") {
      let respuesta = await peticionGet(
        "http://localhost:3000/productos/all",
        "GET"
      );
      if (respuesta.status === 200) {
        alertConfirm("Filtrado con exito en la categoria global");
        return setStore(respuesta.productos);
      }
    } else {
      let respuesta = await peticionGet(
        `http://localhost:3000/productos/filtro/${values.categoria}`,
        "GET"
      );
      if (respuesta.status === 200) {
        alertConfirm("Filtrado con exito en la categoria " + values.categoria);
        return setStore(respuesta.productos);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="filtrado"
        class="w-full justify-center items-center flex md:w-1/2 py-4 md:py-8 px-4 md:px-12 gap-2"
      >
        <select
          name="categoria"
          id="categoria"
          onChange={handleInputChange}
          value={values.categoria}
          class="px-4 py-2 rounded-lg border-2 border-naranja focus:outline-none w-2/3 md:w-full text-sm md:text-lg font-hanuman"
        >
          <option value="Todos">Todos</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Moda">Moda</option>
          <option value="Electrodomesticos">Electrodomesticos</option>
          <option value="Juegos">Juegos</option>
          <option value="Servicios">Servicios</option>
        </select>
        <button
          type="submit"
          class="bg-azul p-2 text-blanco font-breeSerif rounded-lg border-2 border-azul hover:border-marron-calro hover:bg-marron-calro transition-all duration-500"
        >
          Filtrar
        </button>
      </form>
    </>
  );
}

export default FiltrarForm;
