import React from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";

const BtnAnadir = ({ pizza, id }) => {
  const { setMonto, setCarrito, carrito, monto } = useContext(PizzaContext);
  //   console.log(carrito);
  const anadirPizza = () => {
    const aux = carrito.map((item) => {
      //   console.log(pizza);
      if (item.id === id) {
        return { ...item, ammount: item.ammount + 1 };
      }
      return item;
    });
    setCarrito(aux);
    setMonto(monto + pizza.price);
    console.log(carrito);
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={anadirPizza}>
        Añadir 🛒
      </button>
    </div>
  );
};

export default BtnAnadir;
