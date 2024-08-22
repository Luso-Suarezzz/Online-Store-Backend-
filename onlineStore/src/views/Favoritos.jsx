import { useContext, useEffect, useState } from "react";
import { Contexto } from "../context/Contexto";
import Header from "../components/Header";
import Tarjeta from "../components/Tarjeta";
import EditarStoreForm from "../components/forms/EditarStoreForm";

function Favoritos() {
  const { store, setStore, peticionGet, user, setFav } = useContext(Contexto);

  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  useEffect(() => {
    const cargar = async () => {
      let respuesta = await peticionGet(
        "http://localhost:3000/favoritos/all",
        "GET"
      );
      if (respuesta.status === 200) {
        let nuevoStore = [];
        respuesta.favoritos.forEach((favorito) => {
          store.forEach((item) => {
            if (
              favorito.producto === item._id &&
              favorito.username === user.username
            ) {
              nuevoStore.push(item);
            }
          });
        });
        setFav(true)
        return setStore(nuevoStore);
      }
    };
    cargar();
  }, []);

  return (
    <>
      <Header />

      <div class="h-[80px]"></div>

      <main class="p-2 md:p-4">
        <div class="w-full border-b-2 border-azul px-4 pb-2 pt-8">
          <h2 class="text-2xl text-negro font-roboto font-bold">
            Todos los Favoritos
          </h2>
        </div>

        <section
          id="tienda"
          class="p-8 flex flex-col md:flex-row gap-8 flex-wrap items-center justify-center"
        >
          {store.length === 0 ? (
            <h3 class="text-2xl text-negro font-roboto font-bold">
              No hay Productos Favoritos
            </h3>
          ) : (
            store.map((item, index) =>
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

        {modal ? (
          <EditarStoreForm setModal={setModal} producto={currentItem} />
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default Favoritos;
