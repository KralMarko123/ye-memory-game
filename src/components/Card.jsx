import React from "react";
import "../styles/Card.css";

const Card = ({ position, url, isShown, isCompleted, handleCardClick }) => {
	const cardClickHandler = () => {
		handleCardClick(position);
	};

	let classNames = "card";
	isShown || isCompleted ? (classNames += " shown") : null;
	isCompleted ? (classNames += " completed") : null;

	return (
		<div className={`${classNames}`} onClick={() => cardClickHandler()}>
			<div className="card-inner">
				<div className="card-front"></div>
				<div className="card-back">
					<img className="card-image" src={`${url}`} alt="card__image" />
				</div>
			</div>
		</div>
	);
};

export default Card;
