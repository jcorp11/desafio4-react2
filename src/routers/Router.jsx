import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Pizza from "../views/Pizza";
import Carrito from "../views/Carrito";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  );
}

export default Router;
