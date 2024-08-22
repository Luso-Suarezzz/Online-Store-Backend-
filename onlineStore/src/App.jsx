import { Route, Routes } from "react-router-dom";
import paths from "./config/routePaths";
import Store from "./views/Store";
import Login from "./views/login";
import Register from "./views/register";
import Error404 from "./views/Error404";
import ProtectedRoute from "./auth/ProtectedRoute";
import Publicar from "./views/Publicar";
import Favoritos from "./views/Favoritos";
import Contacto from "./views/Contacto";
import Perfil from "./views/Perfil";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<ProtectedRoute component={Store} />} />
        <Route path={paths.SOTER_PATH} element={<ProtectedRoute component={Store} />} />
        <Route path={paths.PUBLICAR_PATH} element={<ProtectedRoute component={Publicar} />} />
        <Route path={paths.FAVORITOS_PATH} element={<ProtectedRoute component={Favoritos} />} />
        <Route path={paths.CONTACTO_PATH} element={<ProtectedRoute component={Contacto} />} />
        <Route path={paths.PERFIL_PATH} element={<ProtectedRoute component={Perfil} />} />

        <Route path={paths.LOGIN_PATH} element={<Login />} />
        <Route path={paths.REGISTER_PATH} element={<Register />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
