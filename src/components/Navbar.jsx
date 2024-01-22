import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import "./css/Navbar.css";
import { formatPrice } from "../utils/aux";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : null);
  const { monto, setMonto } = useContext(PizzaContext);

  return (
    <nav className="navbar">
      <NavLink to="/">🍕 ¡Pizzería Mamma Mia!</NavLink>

      <NavLink className={setActiveClass} to="/carrito">
        <span>🛒 $ {formatPrice(monto)}</span>
      </NavLink>
    </nav>
  );
};
export default Navbar;
