import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { v4 as uuidv4 } from "uuid";
import { Capitalize, formatPrice } from "../utils/aux";
import BtnAnadir from "../components/BtnAnadir";

import "./css/Pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({ data: null });
  const [loading, setLoading] = useState(true);
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate();

  useEffect(() => {
    const aux = pizzas.find((item) => item.id === id);
    if (aux) {
      setLoading(false);
      setPizza(aux);
    } else {
      console.error(`Pizza with ID ${id} not found`);
      // setLoading(true);
      // navigate("/"); // Redirect to an error page or home page
    }
  }, [id, pizzas, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

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
            <BtnAnadir
              id={pizza.id}
              pizza={pizza}
              text={"Añadir 🛒"}
              anadir={true}
              color={"btn-danger"}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Pizza;
