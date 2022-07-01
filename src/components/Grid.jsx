import React, { useEffect, useState } from "react";
import { CARDS } from "../constants/URLs";
import "../styles/Grid.css";
import Card from "./Card";

const Grid = () => {
  const [cards, setCards] = useState(CARDS);
  const [cardsUpdated, setCardsUpdated] = useState(false);

  const handleCardClick = (position) => {
    let updatedCards = cards;
    let otherCardOpen = false;

    updatedCards.forEach((card, i) => {
      card.isShown === true && position !== i && card.isCompleted === false
        ? (otherCardOpen = card)
        : null;
    });

    if (!otherCardOpen) {
      updatedCards[position].isShown = true;
      setCards(updatedCards);
      setCardsUpdated(true);
      return;
    }

    if (otherCardOpen.imageURL !== updatedCards[position].imageURL) {
      updatedCards[position].isShown = true;
      setCards(updatedCards);
      setCardsUpdated(true);

      setTimeout(() => {
        updatedCards[position].isShown = false;
        otherCardOpen.isShown = false;

        setCards(updatedCards);
        setCardsUpdated(true);
      }, 1500);
    } else {
      updatedCards[position].isShown = true;
      updatedCards[position].isCompleted = true;
      otherCardOpen.isCompleted = true;

      setCards(updatedCards);
      setCardsUpdated(true);
    }
  };

  useEffect(() => {
    if (cardsUpdated) {
      setCardsUpdated(false);
    }
  }, [cards, cardsUpdated]);

  return (
    <section className="grid">
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            position={i}
            url={cards[i].imageURL}
            isShown={cards[i].isShown}
            isCompleted={cards[i].isCompleted}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </section>
  );
};

export default Grid;
