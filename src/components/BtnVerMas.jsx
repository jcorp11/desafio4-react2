import React from "react";
import { useNavigate } from "react-router-dom";
const BtnVerMas = ({ id }) => {
  const navigate = useNavigate();
  const irAPizza = () => {
    console.log(id);
    navigate(`/pizza/${id}`);
  };
  return (
    <div>
      <button className="btn btn-info" onClick={irAPizza}>
        Ver Más 👀
      </button>
    </div>
  );
};

export default BtnVerMas;
