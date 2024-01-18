import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import PizzaCard from "../components/PizzaCard";

import "./css/Home.css";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <section className="home">
      <div className="hero py-5">
        <section className="content">
          <h1>Pizzería Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </section>
      </div>
      <section className="pizzaContainer pt-4">
        {pizzas.map((pizza) => {
          return <PizzaCard key={pizza.id} pizza={pizza} />;
        })}
      </section>
    </section>
  );
};
export default Home;
