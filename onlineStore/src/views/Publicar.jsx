import Header from "../components/Header";
import PublicarForm from "../components/forms/PublicarForm";

function Publicar() {
  return (
    <>
      <Header />

      <div class="h-[80px]"></div>

      <main class="p-6 md:p-4 min-h-[100vh] flex items-center justify-center">
        <div class="h-auto w-full md:w-10/12 bg-blanco rounded-2xl border-2 border-azul">
          <PublicarForm />
        </div>
      </main>
    </>
  );
}

export default Publicar;
