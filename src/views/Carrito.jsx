import React from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import "./css/Carrito.css";
import { v4 as uuidv4 } from "uuid";
import CarritoRow from "../components/CarritoRow";

const Carrito = () => {
  const { carrito } = useContext(PizzaContext);
  return (
    <section className="carritoWrapper">
      <section className="carritoContainer">
        <h4>Detalles del pedido:</h4>
        <section className="carritoContent">
          <section className="carritoGrid">
            {carrito.map((pizza) => (
              <CarritoRow key={uuidv4()} pizza={pizza} />
            ))}
          </section>
          <section className="carritoTotal"></section>
        </section>
      </section>
    </section>
  );
};

export default Carrito;
