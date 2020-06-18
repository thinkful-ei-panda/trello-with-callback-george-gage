import React from "react";
import './Card.css';


function Card(propsObject) {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{propsObject.title}</h3>
      <p>{propsObject.content}</p>
    </div>
  );
}

export default Card;
