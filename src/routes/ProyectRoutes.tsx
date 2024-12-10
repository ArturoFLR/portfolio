import { Route, Routes } from "react-router";
import CheckMate from "../vistas/CheckMate";
import Home from "../vistas/Home";

function ProyectRoutes() {
  return (
    <Routes>
      {/* <Route path="*" element={<WrongPath />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/checkmate" element={<CheckMate />} />
    </Routes>
  );
}

export default ProyectRoutes;
