import { Route, Routes } from "react-router";
import CheckMate from "../vistas/CheckMate";
import Home from "../vistas/Home";
import LRIngenieros from "../vistas/LRIngenieros";
import En256Colores from "../vistas/En256Colores";

function ProyectRoutes() {
  return (
    <Routes>
      {/* <Route path="*" element={<WrongPath />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/checkmate" element={<CheckMate />} />
      <Route path="/lringenieros" element={<LRIngenieros />} />
      <Route path="/en256colores" element={<En256Colores />} />
    </Routes>
  );
}

export default ProyectRoutes;
