import React, { useEffect, useState } from "react";
import { CARDS } from "../constants/URLs";
import "../styles/Grid.css";
import Card from "./Card";

const Grid = () => {
  const [cards, setCards] = useState(CARDS);

  const handleCardClick = (cardPosition, cardURL) => {
    const updatedCards = cards;
    updatedCards[cardPosition] = {
      imageURL: cardURL,
      isShown: true,
    };

    setCards(updatedCards);
  };

  useEffect(() => {}, [cards]);

  return (
    <section className="grid">
      {cards.map((card, i) => (
        <Card
          key={i}
          position={i}
          url={card.imageURL}
          isShown={card.isShown}
          cardClicked={handleCardClick}
        />
      ))}
    </section>
  );
};

export default Grid;
