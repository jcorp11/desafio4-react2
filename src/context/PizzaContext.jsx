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
      const aux = res.data.map((pizza) => {
        return { id: pizza.id, name: pizza.name, ammount: 0 };
      });
      setCarrito(aux);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizzas();
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
