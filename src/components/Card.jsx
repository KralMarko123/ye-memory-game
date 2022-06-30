import React from "react";
import "../styles/Card.css";

const Card = ({ position, url, isShown, handleCardClick }) => {
  const cardClickHandler = () => {
    handleCardClick(position, url);
  };

  return (
    <div
      className={`card ${isShown ? "shown" : ""}`}
      onClick={() => cardClickHandler()}
    >
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
