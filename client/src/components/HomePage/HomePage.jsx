import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getallvideogames from "../../actions/getallvideogames"
import VideoGames from "../VideoGames/VideoGames";
import SearchBar from "../SearchBar/SearchBar"


export default function HomePage () {

const dispatch = useDispatch()


useEffect(() => {
    dispatch(getallvideogames())
},[])

function handleClick(e){
    e.preventDefault();
    dispatch(getallvideogames())
}

return(
    <div>
        <Link to="videogame">Crear tu propio videojuego</Link>
        <h1>APP DE VIDEOJUEGOS DE SIRIO2022</h1>
        <button onClick={e => {handleClick(e)}}>
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
        
        <SearchBar/>
        <VideoGames/>


    </div>
)


}