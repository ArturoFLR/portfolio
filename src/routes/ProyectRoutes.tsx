import { Route, Routes } from "react-router";
import CheckMate from "../vistas/CheckMate";
import Home from "../vistas/Home";
import LRIngenieros from "../vistas/LRIngenieros";

function ProyectRoutes() {
  return (
    <Routes>
      {/* <Route path="*" element={<WrongPath />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/checkmate" element={<CheckMate />} />
      <Route path="/lringenieros" element={<LRIngenieros />} />
    </Routes>
  );
}

export default ProyectRoutes;
