import React from "react";
import "../style/Card.css";

const Card = ({ title, subtitle, content }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default Card;
