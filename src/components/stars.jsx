import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./StarRating.css"; // Importa el archivo CSS para estilos adicionales si es necesario

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
