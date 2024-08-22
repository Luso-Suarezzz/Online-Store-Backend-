import { useContext, useEffect, useState } from "react";
import { Contexto } from "../context/Contexto";
import { alertConfirm } from "../components/alerts/alerts";
import Header from "../components/Header";
import BuscarForm from "../components/forms/BuscarForm";
import FiltrarForm from "../components/forms/FiltrarForm";
import Tarjeta from "../components/Tarjeta";
import EditarStoreForm from "../components/forms/EditarStoreForm";

const ITEMS_PER_PAGE = 10;

function Store() {
  const { store, setStore, peticionGet, user, setFav } = useContext(Contexto);

  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const cargar = async () => {
      let respuesta = await peticionGet(
        "http://localhost:3000/productos/all",
        "GET"
      );
      if (respuesta.status === 200) {
        setProductos([...respuesta.productos].splice(0, ITEMS_PER_PAGE));
        return setStore(respuesta.productos);
      }
      setFav(false);
    };
    cargar();
  }, []);

  useEffect(() => {
    const cargar = async () => {
      let respuesta = await peticionGet(
        "http://localhost:3000/productos/all",
        "GET"
      );
      if (respuesta.status === 200) {
        setProductos([...store].splice(0, ITEMS_PER_PAGE));
        return;
      }
      setFav(false);
    };
    cargar();
  }, [store]);

  const nextPage = (e) => {
    const totalElemntos = store.length;
    const nexPage = currentPage + 1;
    const firsItem = nexPage * ITEMS_PER_PAGE;
    if (firsItem >= totalElemntos) return;
    setProductos([...store].splice(firsItem, ITEMS_PER_PAGE));
    setCurrentPage(nexPage);
  };

  const previusPage = (e) => {
    const previusPage = currentPage - 1;
    const firsItem = previusPage * ITEMS_PER_PAGE;
    if (firsItem < 0) return;
    setProductos([...store].splice(firsItem, ITEMS_PER_PAGE));
    setCurrentPage(previusPage);
  };

  return (
    <>
      <Header />

      <div class="h-[80px]"></div>

      <main class="p-2 md:p-4">
        <section class="flex flex-col md:flex-row items-center w-full h-auto md:gap-12 lg:gap-24">
          <BuscarForm />
          <FiltrarForm />
        </section>

        <div class="w-full border-b-2 border-azul px-4 pb-2 pt-8">
          <h2 class="text-2xl text-negro font-roboto font-bold">
            Todos los Productos
          </h2>
        </div>

        <section
          id="tienda"
          class="p-8 flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center"
        >
          {productos.length === 0 ? (
            <h3 class="text-2xl text-negro font-roboto font-bold">
              No hay Productos
            </h3>
          ) : (
            productos.map((item, index) =>
              item.cantidad == 0 ? (
                <></>
              ) : (
                <>
                  <Tarjeta
                    key={index}
                    item={item}
                    setModal={setModal}
                    setCurrentItem={setCurrentItem}
                  />
                </>
              )
            )
          )}
        </section>

        <div className="w-full flex gap-2 justify-center">
          <button
            className="p-2 border-2 border-azul bg-azul text-blanco text-md font-hanuman rounded-md"
            onClick={previusPage}
          >
            Anterior
          </button>
          <button
            className="p-2 border-2 border-azul bg-azul text-blanco text-md font-hanuman rounded-md"
            disabled
          >
            {currentPage + 1}
          </button>
          <button
            className="p-2 border-2 border-azul bg-azul text-blanco text-md font-hanuman rounded-md"
            onClick={nextPage}
          >
            Siguiente
          </button>
        </div>

        {modal ? (
          <EditarStoreForm setModal={setModal} producto={currentItem} />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default Store;
