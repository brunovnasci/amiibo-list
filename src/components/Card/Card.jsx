import React from "react";
import "./Card.scss";

function Card({ text, onClick }) {
  return (
    <div className="card-body" onClick={() => onClick()}>
      <div></div>
      <h1>{text}</h1>
    </div>
  );
}

export default Card;
