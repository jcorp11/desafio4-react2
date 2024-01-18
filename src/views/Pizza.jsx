import React from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Capitalize, formatPrice } from "../utils/aux";
import BtnAnadir from "../components/BtnAnadir";

import "./css/Pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((item) => item.id === id);
  console.log(pizza);
  return (
    <section className="pizzaWrapper">
      <section className="PizzapizzaContainer">
        <section
          className="imgLeft"
          style={{ backgroundImage: `url(${pizza.img})` }}
        ></section>
        <section className="right">
          <h3>{Capitalize(pizza.name)}</h3>
          <hr />
          <p>{pizza.desc}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={uuidv4()}>🍕 {Capitalize(ingredient)}</li>
            ))}
          </ul>
          <section className="lastRow">
            <h2>Precio: $ {formatPrice(pizza.price)}</h2>
            <BtnAnadir id={pizza.id} pizza={pizza} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Pizza;
