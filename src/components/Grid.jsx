import React, { useEffect, useState } from "react";
import { CARDS } from "../constants/URLs";
import { getRemainingTime } from "../utilities/Timer";
import Card from "./Card";
import "../styles/Grid.css";

const Grid = ({ timeToComplete }) => {
	const [cards, setCards] = useState(CARDS);
	const [cardsUpdated, setCardsUpdated] = useState(false);
	const [remainingTime, setRemainingTime] = useState({
		seconds: "00",
		minutes: "01",
	});
	const hasWon = () => {
		return cards.every((card) => card.isCompleted);
	};
	const hasFailed = () => {
		return remainingTime.minutes === "00" && remainingTime.seconds === "00";
	};

	const handleCardClick = (position) => {
		if (hasWon()) {
			return;
		} else if (hasFailed()) {
			return;
		}

		let updatedCards = cards;
		let otherCardOpen = false;
		let numberOfCardsOpen = 0;

		updatedCards.forEach((card) => {
			card.isShown === true && card.isCompleted === false ? numberOfCardsOpen++ : null;
		});

		if (numberOfCardsOpen > 1) {
			return;
		}

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
			}, 1000);
		} else {
			updatedCards[position].isShown = true;
			updatedCards[position].isCompleted = true;
			otherCardOpen.isCompleted = true;

			setCards(updatedCards);
			setCardsUpdated(true);
		}

		checkIsGameOver();
	};

	useEffect(() => {
		if (cardsUpdated) {
			setCardsUpdated(false);
		}
	}, [cards, cardsUpdated]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!hasWon() && hasFailed) updateRemainingTime(timeToComplete);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [timeToComplete]);

	const updateRemainingTime = (countdown) => {
		setRemainingTime((prevTime) => getRemainingTime(countdown));
	};

	return (
		<>
			{}
			<div className="timer">
				{`${hasWon() ? "Completed with" : ""} 
        
         ${
						!hasFailed()
							? remainingTime.minutes + ":" + remainingTime.seconds
							: "Sorry, better luck next time."
					}
        
        
        ${hasWon() ? "seconds left." : ""}`}
			</div>

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
		</>
	);
};

export default Grid;
