import { useContext, useState } from "react";
import formValidation from "../../validations/formValidation";
import { Contexto } from "../../context/Contexto";
import { alertConfirm, alertError, alertInfo } from "../alerts/alerts";

function PublicarForm() {
  const { peticionPostToken, setStore, store } = useContext(Contexto);

  const [values, setValues] = useState({
    nombre: "",
    categoria: "Tecnologia",
    descripcion: "",
    precio: "",
    moneda: "",
    imagen: "",
    cantidad: "",
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
  const validation = async () => {
    for (let key in values) {
      let error = formValidation.validateText(values[key].toString());
      if (!error) return "Completa todos los datos";
    }
  };

  // Funcion de iniciar sesion
  const handleSubmit = async (e) => {
    e.preventDefault();
    let respuesta = "";
    const validate = await validation();
    if (validate) return alertInfo(validate);
    respuesta = await peticionPostToken(
      "http://localhost:3000/productos/registrar",
      "POST",
      values
    );
    if (respuesta.status === 201) {
      setValues({
        nombre: "",
        categoria: "",
        descripcion: "",
        precio: "",
        moneda: "",
        imagen: "",
        cantidad: "",
      });
      setStore([
        // con el nuevo _array_
        ...store, // el cual contiene todos los elementos antiguos
        respuesta.producto, // y un nuevo elemento al final
      ]);
      alertConfirm(respuesta.mensaje);
    } else {
      alertError("No se ha registrado el producto");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="formStore"
        class="flex flex-col justify-center items-center gap-4 h-full w-full p-4"
      >
        <h4 class="font-lato font-bold text-3xl mb-8 text-negro">
          Publicar Producto
        </h4>
        <div class="w-full lg:w-2/3 flex flex-col gap-2">
          <label class="text-lg font-bold text-negro">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={handleInputChange}
            value={values.nombre}
            placeholder="Nombre"
            class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
          />
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-2">
          <label class="text-lg font-bold text-negro">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            onChange={handleInputChange}
            value={values.categoria}
            class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
          >
            <option value="Tecnologia">Tecnologia</option>
            <option value="Moda">Moda</option>
            <option value="Electrodomesticos">Electrodomesticos</option>
            <option value="Juegos">Juegos</option>
            <option value="Servicios">Servicios</option>
          </select>
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-2">
          <label class="text-lg font-bold text-negro">Descripcion</label>
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            value={values.descripcion}
            onChange={handleInputChange}
            placeholder="Descripcion"
            class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
          />
        </div>
        <div class="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
          <div class="w-full lg:w-2/3 flex flex-col gap-2">
            <label class="text-lg font-bold text-negro">Precio</label>
            <input
              type="number"
              min={0}
              name="precio"
              id="precio"
              value={values.precio}
              onChange={handleInputChange}
              placeholder="Precio"
              class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
            />
          </div>
          <div class="w-full lg:w-2/3 flex flex-col gap-2">
            <label class="text-lg font-bold text-negro">Moneda</label>
            <input
              type="text"
              name="moneda"
              id="moneda"
              onChange={handleInputChange}
              value={values.moneda}
              placeholder="Moneda"
              class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
            />
          </div>
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-2">
          <label class="text-lg font-bold text-negro">Imagen</label>
          <input
            type="text"
            name="imagen"
            id="imagen"
            onChange={handleInputChange}
            value={values.imagen}
            placeholder="Url de la Imagen"
            class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
          />
        </div>
        <div class="w-full lg:w-2/3 flex flex-col gap-2">
          <label class="text-lg font-bold text-negro">Cantidad</label>
          <input
            type="number"
            min={0}
            name="cantidad"
            id="cantidad"
            value={values.cantidad}
            onChange={handleInputChange}
            placeholder="Cantidad del producto"
            class="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
          />
        </div>
        <div class="w-full lg:w-2/3 flex justify-end gap-4 mt-4">
          <button
            type="submit"
            class="bg-azul px-8 py-2 rounded-xl font-hanuman text-blanco"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}

export default PublicarForm;
