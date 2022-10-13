import React from "react";
import s from "../VideogameCard/VideogameCard.module.css";

const VideoGameCard = ({ name, image, genres, rating }) => {

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h4>{name}</h4>
        <p>{genres}</p>
        <img className={s.imag} src={image} alt="Image not found" />
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default VideoGameCard;
