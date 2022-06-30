import React, { useEffect, useState } from "react";
import { CARDS } from "../constants/URLs";
import "../styles/Grid.css";
import Card from "./Card";

const Grid = () => {
  const [cards, setCards] = useState(CARDS);

  const handleCardClick = (position, url) => {
    const updatedCards = cards;
    updatedCards[position] = {
      imageURL: url,
      isShown: true,
    };
    setCards((prevCards) => updatedCards);
  };

  return (
    <section className="grid">
      {Object.keys(cards).map((key) => {
        return (
          <Card
            key={key}
            position={key}
            url={cards[key].imageURL}
            isShown={cards[key].isShown}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </section>
  );
};

export default Grid;
