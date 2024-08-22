import { useContext } from "react";
import { alertConfirm, alertError } from "./alerts/alerts";
import { Contexto } from "../context/Contexto";

function Tarjeta({ item, setCurrentItem, setModal }) {
  const { peticionPostToken, store, setStore, user, fav, peticionGet } = useContext(Contexto);

  const handleDelete = async () => {
    let respuesta = await peticionPostToken(
      `http://localhost:3000/productos/delete/${item._id}`,
      "DELETE",
      {}
    );
    if (respuesta.status === 200) {
      setStore(store.filter((a) => a._id !== item._id));
      return alertConfirm(respuesta.mensaje);
    }
  };

  const handleSell = async (e) => {
    let respuesta = await peticionPostToken(
      `http://localhost:3000/productos/vender/${item._id}`,
      "PUT",
      {}
    );
    if (respuesta.status === 201) {
      const nuevoStore = store.map((c, i) => {
        if (c._id === item._id) {
          // actualizo el producto
          return (c = {
            _id: item._id,
            nombre: item.nombre,
            categoria: item.categoria,
            descripcion: item.descripcion,
            precio: item.precio,
            moneda: item.moneda,
            imagen: item.imagen,
            cantidad: item.cantidad - 1,
          });
        } else {
          // El resto no ha cambiado
          return c;
        }
      });
      setStore(nuevoStore);
      return alertConfirm(respuesta.mensaje);
    }
  };

  const handleFavorite = async (e) => {
    let respuesta = await peticionPostToken(
      `http://localhost:3000/favoritos/registrar/${user.username}/${item._id}`,
      "POST",
      {}
    );
    if (respuesta.status === 200) {
      alertConfirm(respuesta.mensaje);
      if (fav) {
        let respuesta2 = await peticionGet(
          "http://localhost:3000/favoritos/all",
          "GET"
        );
        if (respuesta2.status === 200) {
          let nuevoStore = [];
          respuesta2.favoritos.forEach((favorito) => {
            store.forEach((item) => {
              if (
                favorito.producto === item._id &&
                favorito.username === user.username
              ) {
                nuevoStore.push(item);
              }
            });
          });
          return setStore(nuevoStore);
        }
      }
      return 
    }
    return alertError("Algo Fallo")
  }

  return (
    <>
      <div class="flex flex-col lg:flex-row bg-blanco border-2 border-azul rounded-xl w-full md:w-[45%] lg:w-[45%] h-auto lg:h-[350px] ">
        <div class="border-b-2 lg:border-b-0 lg:border-r-2 border-azul rounded-tl-xl lg:rounded-tr-none rounded-tr-xl lg:rounded-tl-xl lg:rounded-bl-xl h-full w-full lg:w-5/12 ">
          <img
            class="rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-tl-xl lg:rounded-bl-xl h-full w-full"
            src={item.imagen}
            alt="Imagen producto"
          />
        </div>
        <div class="px-5 pb-5 pt-5 flex flex-col gap-4">
          <h3 class="text-xl font-hanuman font-bold text-start">
            {item.nombre}
          </h3>
          <h5 class="font-hanuman text-negro text-md">{item.descripcion}</h5>
          <p class="font-hanuman text-negro text-sm font-semibold">
            {item.cantidad} Unidades
          </p>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-roboto font-bold text-negro">
              {item.precio}
              {item.moneda}
            </span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <button
              class="border-2 border-azul rounded-lg p-2 font-breeSerif text-negro hover:text-blanco hover:bg-azul transition-all duration-500"
              onClick={handleSell}
            >
              Vender
            </button>
            <button
              class="border-2 border-azul rounded-lg p-2 font-breeSerif text-negro hover:text-blanco hover:bg-azul transition-all duration-500"
              onClick={handleFavorite}
            >
              Favorito
            </button>
            {user.rol === "admin" ? (
              <>
                <button
                  class="border-2 border-marron-calro rounded-lg p-2 font-breeSerif text-negro hover:text-blanco hover:bg-marron-calro transition-all duration-500"
                  onClick={(e) => {
                    setCurrentItem(item);
                    setModal(true);
                  }}
                >
                  Editar
                </button>
                <button
                  class="border-2 border-red-600 rounded-lg p-2 font-breeSerif text-negro hover:text-blanco hover:bg-red-600 transition-all duration-500"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
