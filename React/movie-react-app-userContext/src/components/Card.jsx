import React from "react";

const Card = ({ film }) => {
  return (
    <div className="card">
      <img src={film.coverImage} alt={film.name} />
      <h3>{film.name}</h3>
      <p>Yıl: {film.year}</p>
      <p>Yönetmen: {film.director}</p>
    </div>
  );
};

export default Card;
