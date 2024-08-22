import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import paths from "../config/routePaths";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  const navigate = useNavigate();

  

  return (
    <>
      <main id="main">
        <div className="w-full h-[100vh] bg-fondo bg-cover">
          <div className="w-full h-[100vh] bg-marron-calro bg-opacity-[35%] absolute flex justify-center items-center ">
            <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
              <span className="w-full md:w-1/2 justify-center items-center flex">
                <img
                  className="rounded-full border-azul border-2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] "
                  src={logo}
                  alt="Logo"
                />
              </span>
              <div className="mt-8 w-11/12 md:w-3/4 lg:w-1/2 justify-center items-center flex">
                <section className="flex flex-col justify-center items-center h-auto w-5/6 px-4 py-16 gap-8 bg-gris rounded-xl border-2 border-azul">
                  <h2 className="text-4xl text-center font-roboto font-extrabold text-negro">
                    Iniciar Sesion
                  </h2>
                  <LoginForm />
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
