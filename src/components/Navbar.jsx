import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : null);

  return (
    <nav className="navbar">
      <NavLink to="/">🍕 Pizzería Mamma Mia!</NavLink>

      <NavLink className={setActiveClass} to="/carrito">
        <span>🛒</span>
      </NavLink>
    </nav>
  );
};
export default Navbar;
