import { v4 as uuidv4 } from "uuid";
import { Capitalize, formatPrice } from "../utils/aux";
import "./css/PizzaCard.css";
import BtnVerMas from "./BtnVerMas";
import BtnAnadir from "./BtnAnadir";

const PizzaCard = ({ pizza }) => {
  // console.log(pizza);
  return (
    <div className="pizzaCard">
      <div className="card" style={{ width: "18rem" }}>
        <img src={pizza.img} className="card-img-top" alt="Placeholder Image" />
        <div className="card-body">
          <h4 className="card-title">{Capitalize(pizza.name)}</h4>
          <hr />
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={uuidv4()}>🍕 {ingredient}</li>
            ))}
          </ul>
        </div>
        <section className="bottomCard">
          <h3>$ {formatPrice(pizza.price)}</h3>
          <section className="btnContainer">
            <BtnVerMas id={pizza.id} />
            <BtnAnadir id={pizza.id} pizza={pizza} />
          </section>
        </section>
      </div>
    </div>
  );
};

export default PizzaCard;
