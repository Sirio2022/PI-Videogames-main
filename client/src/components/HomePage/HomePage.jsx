import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getallvideogames from "../../actions/getallvideogames";
import SearchBar from "../SearchBar/SearchBar";
import Paging from "../Paging/Paging";
import VideoGameCard from "../VideogameCard/VideogameCard";
import style from "./HomePage.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getallvideogames());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getallvideogames());
  }

  return (
    <div>
      <Link to="videogame">Crear tu propio videojuego</Link>
      <h1>APP DE VIDEOJUEGOS DE SIRIO2022</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Recargar Videojuegos
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
          <option value="rating">Rating</option>
          <option value="date">Fecha</option>
        </select>

        <select>
          <option value="All">Api+DB Games</option>
          <option value="API">Existente</option>
          <option value="DB">Creado</option>
        </select>
      </div>
      <br />
      <div>
        <Paging
          videogamesPerPage={videogamesPerPage}
          allVideogames={allVideogames.length}
          paging={paging}
          currentPage={currentPage}
        />
      </div>
      <SearchBar />
      <div className={style.container}>
        {currentVideogames?.map((vg) => {
          return (
            <VideoGameCard
              name={vg.name}
              image={vg.image}
              genres={vg.genres}
              rating={vg.rating}
              origin={vg.origin}
              key={vg.id}
              id={vg.id}
            />
          );
        })}
      </div>
    </div>
  );
}
