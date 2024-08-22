import { useContext, useState } from "react";
import logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";
import paths from "../config/routePaths";
import { alertConfirm } from "./alerts/alerts";
import { Contexto } from "../context/Contexto";

function Header() {
  const navigate = useNavigate();

  const [side, setSide] = useState(false);

  const { setToken, setUser, setStore, peticionGet, user } =
    useContext(Contexto);

  const logout = async () => {
    await setToken(null);
    await setUser(null);
    alertConfirm("Has cerrado sesion exitosamente");
    return navigate(paths.LOGIN_PATH);
  };

  return (
    <>
      <header className="h-[80px] bg-gris w-full flex items-center px-4 fixed">
        <h1 className="w-2/3 md:w-1/3 text-4xl text-azul font-roboto font-bold">
          <b className="text-marron-calro">O</b>nline{" "}
          <b className="text-marron-calro">S</b>tore
        </h1>
        <div className="w-1/3 md:w-2/3 flex justify-end md:invisible">
          <img
            onClick={(e) => setSide(true)}
            className="h-[50px] w-[50px] rounded-full border-2 border-azul hover:cursor-pointer"
            src={logo}
            id="toggle-btn"
            alt="logo"
          />
        </div>
        <nav
          id="sidebar"
          className={
            side
              ? "h-[600px] flex justify-center items-center md:relative md:h-full md:-right-0 absolute top-0 right-0 w-2/3 bg-gris transition-all duration-500"
              : "h-[600px] flex justify-center items-center md:relative md:h-full md:-right-0 absolute top-0 -right-full w-2/3 bg-gris transition-all duration-500"
          }
        >
          <ul className="flex flex-col md:w-full md:flex-row w-full items-center justify-center gap-4">
            <li
              onClick={(e) => setSide(false)}
              id="toggle-cerrar"
              className="font-breeSerif text-lg text-marron-calro md:invisible hover:cursor-pointer"
            >
              Cerrar
            </li>
            <li className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-azul transition-all duration-500">
              <a
                onClick={(e) => {
                  navigate(paths.SOTER_PATH);
                }}
              >
                Tienda
              </a>
            </li>
            <li className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-azul transition-all duration-500">
              <a
                onClick={(e) => {
                  navigate(paths.PERFIL_PATH);
                }}
              >
                Perfil
              </a>
            </li>
            <li className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-azul transition-all duration-500">
              <a
                onClick={(e) => {
                  navigate(paths.FAVORITOS_PATH);
                }}
              >
                Favoritos
              </a>
            </li>
            {user.rol === "admin" ? (
              <li className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-azul transition-all duration-500">
                <a
                  onClick={(e) => {
                    navigate(paths.PUBLICAR_PATH);
                  }}
                >
                  Publicar
                </a>
              </li>
            ) : (
              <></>
            )}
            <li className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-azul transition-all duration-500">
              <a
                onClick={(e) => {
                  navigate(paths.CONTACTO_PATH);
                }}
              >
                Contacto
              </a>
            </li>
            <li
              className="font-hanuman text-sm md:text-lg hover:cursor-pointer text-negro hover:text-red-600 transition-all duration-500"
              onClick={(e) => logout()}
              id="logout"
            >
              Logout
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
