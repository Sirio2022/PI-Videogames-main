import React from "react";
import s from "../VideogameCard/VideogameCard.module.css";
import {Link} from "react-router-dom"


const VideoGameCard = ({ name, image, genres, rating, id }) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <Link to={`/videogame/${id}`}>
        <h4>{name}</h4>
        </Link>
        <p>{genres}</p>
        <img className={s.imag} src={image} alt="Img" />
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default VideoGameCard;
