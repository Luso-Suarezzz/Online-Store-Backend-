import Header from "../components/Header";
import PerfilForm from "../components/forms/PerfilForm";

function Perfil() {
  return (
    <>
      <Header />

      <div class="h-[80px]"></div>

      <main class="p-6 md:p-4 min-h-[100vh] flex items-center justify-center">
        <div class="h-auto w-full md:w-10/12 p-6 flex justify-center items-center flex-col bg-blanco rounded-2xl border-2 border-azul">
          <h2 className="text-3xl text-center font-roboto font-extrabold text-negro mb-8">
            Perfil de Usuario
          </h2>
          <PerfilForm />
        </div>
      </main>
    </>
  );
}

export default Perfil;
