/* eslint-disable no-useless-constructor */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import getplarforms from "../../actions/getplatforms";
import getgenres from "../../actions/getgenres";
import getallvideogames from "../../actions/getallvideogames";
import sortvideogames from "../../actions/sortvideogames";
import background from "../../img/Elden landing Page.jpg"

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getplarforms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getgenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getallvideogames());
  }, [dispatch]);

  function handleSortvideogames(e) {
    dispatch(sortvideogames("asc"));
  }

  return (
    
    <div>
      <h1>BIENVENIDOS A LA APP DE VIDEO JUEGOS DE SIRIO2022</h1>
      <Link to="/home">
        
        <button onClick={handleSortvideogames}>
          ENTRAR
        </button>
      </Link>
    </div>
    
    
  );
}
