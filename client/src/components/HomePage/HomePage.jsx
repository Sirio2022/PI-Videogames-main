/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getallvideogames from "../../actions/getallvideogames";
import SearchBar from "../SearchBar/SearchBar";
import Paging from "../Paging/Paging";
import VideoGameCard from "../VideogameCard/VideogameCard";
import style from "./HomePage.module.css";
import genrefilter from "../../actions/genrefilter";
import videogameorigin from "../../actions/videogameorigin";
import sortvideogames from "../../actions/sortvideogames";

export default function HomePage() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.videogames);
  const allgenres = useSelector((state) => state.genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(10);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );
  const [render, setRender] = useState("");

  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getallvideogames());
  }, []);

  function handleGenreFilter(e) {
    e.preventDefault();
    dispatch(genrefilter(e.target.value));
  }

  function handleOriginFilter(e) {
    dispatch(videogameorigin(e.target.value));
    setCurrentPage(1);
  }

  function handleShowAll(e) {
    dispatch(videogameorigin("All"));
    dispatch(sortvideogames("asc"));
  }

  function handleSortvideogames(e) {
    e.preventDefault();
    dispatch(sortvideogames(e.target.value));
    setRender(`Order ${e.target.value}`);
  }

  return (
    <div>
      <div className={style.containerbtn}>
      <button className={style.botback}>
      <Link className={style.link}  to="/">Ir al inicio</Link>
      </button>
      <button className={style.botback}>
      <Link className={style.link}  to="videogame">Crear videojuego</Link>
      </button>
      <div></div>
      <button
      className={style.botback}
        onClick={(e) => {
          handleShowAll(e);
        }}
      >
        Recargar todos los Videojuegos
      </button>
        <SearchBar />
      </div>
      <div className={style.box}>
        <select
          onChange={(e) => handleSortvideogames(e)}
          onBlur={(e) => handleSortvideogames(e)}
        >
          <option value="asc">Ordenar </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
          <option value="rating">Rating</option>
          <option value="date">Fecha</option>
        </select>

        <select onChange={(e) => handleOriginFilter(e)}>
          <option value="All">Juegos en la API y BD</option>
          <option value="API">Existente</option>
          <option value="DB">Creado</option>
        </select>
      </div>
             

      <div className={style.box}>
        <select
          className={style.hpfilter}
          onChange={(e) => handleGenreFilter(e)}
        >
          {allgenres.sort().map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
        <br/>
        <br/>
            <div>
              <Paging
                videogamesPerPage={videogamesPerPage}
                allVideogames={allVideogames.length}
                paging={paging}
                currentPage={currentPage}
              />
            </div>
            <br/>
      </div>
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
