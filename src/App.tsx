import { Route, Routes } from "react-router";
import Home from "./vistas/Home";

function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<WrongPath />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
