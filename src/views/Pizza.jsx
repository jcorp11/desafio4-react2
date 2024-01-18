import React from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((pizza) => pizza.id === id);
  console.log(pizza);
  return <div>Pizza {id}</div>;
};

export default Pizza;
