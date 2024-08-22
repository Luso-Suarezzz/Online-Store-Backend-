import { useContext, useState } from "react";
import formValidation from "../../validations/formValidation";
import { Contexto } from "../../context/Contexto";
import { alertConfirm, alertError, alertInfo } from "../alerts/alerts";

function EditarStoreForm({ producto, setModal }) {
  const { peticionPostToken, setStore, store } = useContext(Contexto);

  const [values, setValues] = useState({
    nombre: producto ? producto.nombre : "",
    categoria: producto ? producto.categoria : "Tecnologia",
    descripcion: producto ? producto.descripcion : "",
    precio: producto ? producto.precio : "",
    moneda: producto ? producto.moneda : "",
    imagen: producto ? producto.imagen : "",
    cantidad: producto ? producto.cantidad : "",
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
      `http://localhost:3000/productos/editar/${producto._id}`,
      "PUT",
      values
    );
    if (respuesta.status === 201) {
      const nuevoStore = store.map((c, i) => {
        if (c._id === producto._id) {
          // actualizo el producto
          return (c = {
            _id: producto._id,
            nombre: values.nombre,
            categoria: values.categoria,
            descripcion: values.descripcion,
            precio: values.precio,
            moneda: values.moneda,
            imagen: values.imagen,
            cantidad: values.cantidad,
          });
        } else {
          // El resto no ha cambiado
          return c;
        }
      });
      setStore(nuevoStore);
      alertConfirm(respuesta.mensaje);
      setModal(false)
    } else {
      alertError("No se ha editado el cambio en el store");
    }
  };

  return (
    <>
      <div
        id="modalEditar"
        className="fixed top-0 left-0 bg-opacity-40 bg-negro w-[100vw] h-[100vh] flex items-center justify-center"
      >
        <div className="h-[95%] w-[95%] md:w-[80%] bg-blanco border-naranja border-[3px] rounded-3xl">
          <form
            onSubmit={handleSubmit}
            id="formStore"
            className="flex flex-col justify-center items-center gap-4 h-full w-full p-4"
          >
            <h4 className="font-lato font-bold text-3xl mb-8 text-negro">
              Publicar Producto
            </h4>
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <label className="text-lg font-bold text-negro">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={handleInputChange}
                value={values.nombre}
                placeholder="Nombre"
                className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
              />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <label className="text-lg font-bold text-negro">Categoria</label>
              <select
                name="categoria"
                id="categoria"
                onChange={handleInputChange}
                value={values.categoria}
                className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
              >
                <option value="Tecnologia">Tecnologia</option>
                <option value="Moda">Moda</option>
                <option value="Electrodomesticos">Electrodomesticos</option>
                <option value="Juegos">Juegos</option>
                <option value="Servicios">Servicios</option>
              </select>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <label className="text-lg font-bold text-negro">
                Descripcion
              </label>
              <input
                type="text"
                name="descripcion"
                id="descripcion"
                value={values.descripcion}
                onChange={handleInputChange}
                placeholder="Descripcion"
                className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3">
              <div className="w-full lg:w-2/3 flex flex-col gap-2">
                <label className="text-lg font-bold text-negro">Precio</label>
                <input
                  type="number"
                  min={0}
                  name="precio"
                  id="precio"
                  value={values.precio}
                  onChange={handleInputChange}
                  placeholder="Precio"
                  className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
                />
              </div>
              <div className="w-full lg:w-2/3 flex flex-col gap-2">
                <label className="text-lg font-bold text-negro">Moneda</label>
                <input
                  type="text"
                  name="moneda"
                  id="moneda"
                  onChange={handleInputChange}
                  value={values.moneda}
                  placeholder="Moneda"
                  className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <label className="text-lg font-bold text-negro">Imagen</label>
              <input
                type="text"
                name="imagen"
                id="imagen"
                onChange={handleInputChange}
                value={values.imagen}
                placeholder="Url de la Imagen"
                className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
              />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-2">
              <label className="text-lg font-bold text-negro">Cantidad</label>
              <input
                type="number"
                min={0}
                name="cantidad"
                id="cantidad"
                value={values.cantidad}
                onChange={handleInputChange}
                placeholder="Cantidad del producto"
                className="border-[2px] border-azul rounded-lg bg-white focus:outline-none w-full px-2 py-1 font-breeSerif text-md"
              />
            </div>
            <div className="w-full lg:w-2/3 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={(e) => {
                  setModal(false);
                }}
                className="bg-azul px-8 py-2 rounded-xl font-hanuman text-blanco"
              >
                Cerrar
              </button>
              <button
                type="submit"
                className="bg-azul px-8 py-2 rounded-xl font-hanuman text-blanco"
              >
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditarStoreForm;
