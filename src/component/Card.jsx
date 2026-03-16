import React from "react";
import "../../src/index.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <h2 className="card-title">{title}</h2>

      <p className="card-description">{description}</p>

      <button className="card-button">Read More</button>
    </div>
  );
};

export default Card;
