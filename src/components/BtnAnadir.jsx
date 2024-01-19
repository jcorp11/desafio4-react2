import React from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";

const BtnAnadir = ({ pizza, id, text, anadir, color }) => {
  const { setMonto, setCarrito, carrito, monto } = useContext(PizzaContext);
  //   console.log(carrito);
  const anadirPizza = () => {
    const aux = carrito.find((item) => item.id === id);
    // console.log(aux);
    if (aux) {
      aux.ammount += 1;
      setCarrito([...carrito]);
    } else {
      setCarrito([
        ...carrito,
        {
          id: pizza.id,
          img: pizza.img,
          name: pizza.name,
          price: pizza.price,
          ammount: 1,
        },
      ]);
    }
    setMonto(monto + pizza.price);
  };

  const restarPizza = () => {
    const aux = carrito.find((item) => item.id === id);
    // console.log(aux);
    if (aux) {
      aux.ammount -= 1;
      if (aux.ammount === 0) {
        const newCarro = carrito.filter((item) => item.id !== id);
        console.log(newCarro);
        setCarrito(newCarro);
      } else {
        setCarrito([...carrito]);
      }
    }
    setMonto(monto - pizza.price);
  };

  return (
    <div>
      <button
        className={` btn ${color}`}
        onClick={anadir ? anadirPizza : restarPizza}
        style={{ fontWeight: "bold" }}
      >
        {text}
      </button>
    </div>
  );
};

export default BtnAnadir;
