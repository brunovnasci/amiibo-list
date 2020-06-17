import React from "react";
import "./Card.scss";

function Card({ text, onClick, image }) {
  return (
    <div className="card-body" onClick={() => onClick()}>
      <div>
        <img src={image} alt="img do card" />
      </div>
      <h1>{text}</h1>
    </div>
  );
}

export default Card;
