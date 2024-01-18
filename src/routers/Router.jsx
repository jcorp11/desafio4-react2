import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Pizza from "../views/Pizza";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      {/* <Route path="/choosePokemon" element={<Choose />} /> */}
    </Routes>
  );
}

export default Router;
