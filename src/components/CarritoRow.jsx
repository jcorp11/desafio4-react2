import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./css/CarritoRow.css";
import { Capitalize, formatPrice } from "../utils/aux";
import BtnAnadir from "./BtnAnadir";

const CarritoRow = ({ pizza }) => {
  // console.log(pizza);
  return (
    <section className="gridRow">
      <section className="gridLeft">
        <img src={pizza.img} />
        <span>{Capitalize(pizza.name)}</span>
      </section>
      <section className="gridRight">
        <span>{formatPrice(pizza.price * pizza.ammount)}</span>
        <BtnAnadir
          id={pizza.id}
          pizza={pizza}
          text={"-"}
          anadir={false}
          color={"btn-danger"}
        />
        <span>{pizza.ammount}</span>
        <BtnAnadir
          id={pizza.id}
          pizza={pizza}
          text={"+"}
          anadir={true}
          color={"btn-primary"}
        />
      </section>
    </section>
  );
};

export default CarritoRow;
