import Header from "../components/Header";
import foto from "../assets/Foto Luis.jpg";

function Contacto() {
  return (
    <>
      <Header />

      <div class="h-[80px]"></div>
      <main class="w-full h-[100vh] p-4 md:p-4 lg:p-8">
        <div class="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8">
          <div class="w-full md:w-1/2 h-full flex justify-center items-center p-16">
            <img
              class="rounded-full border-4 border-azul"
              src={foto}
              alt="Foto desarrollador"
            />
          </div>

          <section class="w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-4">
            <h2 class="text-4xl text-azul font-roboto font-bold text-center">
              Desarrollador del Proyecto
            </h2>
            <p class="text-xl text-negro font-hanuman text-center px-8">
              Para obtener más información sobre el desarrollador del proyecto
              OnlineStore, puedes contactarlo por medio de sus redes:
            </p>
            <ul class="flex gap-4">
              <li>
                <a
                  href="https://www.instagram.com/luissuarezhuz?igsh=YzljYTk1ODg3Zg=="
                  class="rounded-full hover:text-azul hover:border-marron-calro transition-all duration-500 bg-blanco p-4 text-5xl flex items-center justify-center border-2 border-azul text-negro"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Luis-Suarezzz"
                  class="rounded-full hover:text-azul hover:border-marron-calro transition-all duration-500 bg-blanco p-4 text-5xl flex items-center justify-center border-2 border-azul text-negro"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584247486972"
                  class="rounded-full hover:text-azul hover:border-marron-calro transition-all duration-500 bg-blanco p-4 text-5xl flex items-center justify-center border-2 border-azul text-negro"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/luissuarezhuzluisjose"
                  class="rounded-full hover:text-azul hover:border-marron-calro transition-all duration-500 bg-blanco p-4 text-5xl flex items-center justify-center border-2 border-azul text-negro"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

    </>
  );
}

export default Contacto;
