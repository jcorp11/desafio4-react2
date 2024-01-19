import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [monto, setMonto] = useState(0);
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const getPizzas = async () => {
    try {
      const res = await axios.get("/pizzas.json");
      // console.log(res.data);
      setPizzas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizzas();
    const storedCarrito = JSON.parse(localStorage.getItem("carrito"));
    if (storedCarrito) {
      setCarrito(storedCarrito);
      setMonto(storedCarrito.reduce((a, b) => a + b.price * b.ammount, 0));
    }
  }, []);

  return (
    <PizzaContext.Provider
      value={{ monto, setMonto, pizzas, setPizzas, carrito, setCarrito }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
