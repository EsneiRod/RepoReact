import {
    Route,
    Routes,
  } from "react-router-dom";
import MostrarDatos from "../Components/MostrarDatos";
import Loggin from "../Components/Loggin";
import { CONS_URL} from '../Constants/NamePath';
import Nosotros from './../Components/Nosotros';
import Contacto from "../Components/Contacto";

const Rutas = () => {
  return (
    <Routes>
        <Route path = {CONS_URL.PAGE_HOME} element={<Loggin />} />
        <Route path = {CONS_URL.PAGE_MOSTRARDATOS} element={<MostrarDatos />} />
        <Route path = {CONS_URL.PAGE_NOSOTROS} element={<Nosotros />} />
        <Route path = {CONS_URL.PAGE_CONTACTO} element={<Contacto />} />
    </Routes>
  )
}

export default Rutas
