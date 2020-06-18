import React from "react";
import Card from "./Card";
import './List.css';

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cardIds.map(card => (
            <Card 
            list={props.id}
            id={card.id}
            key={card.id} 
            title={card.title} 
            content={card.content} 
            delete={props.onDeleteCard}
            />
        ))}
        
        <button 
        type="button" 
        className="List-add-button"
        onClick={() => props.onRandomCard(props.id)}>
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
