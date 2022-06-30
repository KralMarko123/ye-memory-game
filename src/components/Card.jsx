import React from "react";
import "../styles/Card.css";

const Card = ({ position, url, isShown, cardClicked }) => {
  const cardClickedHandler = () => {
    cardClicked(position, url);
  };

  return (
    <div
      className={`card ${isShown ? "shown" : ""}`}
      onClick={() => cardClickedHandler()}
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
