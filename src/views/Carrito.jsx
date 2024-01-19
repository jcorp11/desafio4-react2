import React from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import "./css/Carrito.css";
import { v4 as uuidv4 } from "uuid";
import CarritoRow from "../components/CarritoRow";
import { formatPrice } from "../utils/aux";

const Carrito = () => {
  const { carrito } = useContext(PizzaContext);
  const filteredCarrito = carrito.filter((pizza) => pizza.ammount > 0);
  return (
    <section className="carritoWrapper">
      <section className="carritoContainer">
        <h4>Detalles del pedido:</h4>
        <section className="carritoContent">
          <section className="carritoGrid">
            {filteredCarrito.map((pizza) => (
              <CarritoRow key={uuidv4()} pizza={pizza} />
            ))}
          </section>
          {filteredCarrito.length > 0 && (
            <section className="carritoTotal">
              <h3 className="total pt-3">
                Total: $
                {formatPrice(
                  filteredCarrito.reduce((a, b) => a + b.price * b.ammount, 0)
                )}
              </h3>
              <button className="btn btn-success">Ir a Pagar</button>
            </section>
          )}
          {filteredCarrito.length === 0 && (
            <h3 className="text-center pt-3">No hay pizzas en el carrito</h3>
          )}
        </section>
      </section>
    </section>
  );
};

export default Carrito;
