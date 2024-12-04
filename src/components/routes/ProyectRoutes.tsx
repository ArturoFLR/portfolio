import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router";

function ProyectRoutes() {
  return (
    <Routes>
      {/* <Route path="*" element={<WrongPath />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default ProyectRoutes;
