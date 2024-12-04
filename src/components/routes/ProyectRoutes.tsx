import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router";
import CheckMate from "../../vistas/CheckMate";

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
