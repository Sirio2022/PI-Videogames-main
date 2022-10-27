/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import postvideogame from "../../actions/postvideogame";
//import getallvideogames from "../../actions/getallvideogames";
import style from "./AddVideogame.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre es requerido";
  } else if (!input.rating || input.rating < 0 || input.rating > 5) {
    errors.rating = "El Rating debe de ser un número entre 0-5";
  } else if (input.platform.length === 0) {
    errors.platform = "La plataforma es requerida";
  }
  return errors;
}

export default function AddVideogameByName() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    description: "",
    reldate: "",
    rating: 0,
    platform: [],
    genre: [],
  });
  const [errors, setErrors] = useState({});
  let allgenres = useSelector((state) => state.genres);
  const allplatforms = useSelector((state) => state.platforms);
  allgenres = allgenres.filter((p) => p !== "All");

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handlePlatforms(e) {
    console.log("Platform: ", e.target.value);
    setInput({
      ...input,
      platform: [...new Set([...input.platform, e.target.value])],
    });
  }

  function handleGenres(e) {
    setInput({
      ...input,
      genre: [...new Set([...input.genre, e.target.value])],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name) {
      return alert("El nombre es requerido");
    }
    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(input.reldate)) {
      return alert(
        "Formato de fecha incorrecto. Debe ser YYYY-MM-DD OR YYYY-M-D"
      );
    }
    if (!input.rating) {
      return alert("La valoración es requerida");
    }
    if (
      !/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) ||
      input.rating < 0 ||
      input.rating > 5
    ) {
      return alert(
        "El formato de la valoración es incorrecto. Debe ser un número entre 0-5"
      );
    }
    if (input.platform.length === 0) {
      return alert("La plataforma es requerida");
    }
    dispatch(postvideogame(input));
    //dispatch(getallvideogames());
    alert(`El videojuego ${input.name} se ha agregado correctamente`);
    setInput({
      name: "",
      description: "",
      reldate: "",
      rating: 0,
      platform: [],
      genre: [],
    });
    history.push("/home");
  }

  return (
    <>
      <div className={style.avgwrapper}>
        <form className={style.formarea} onSubmit={handleSubmit}>
          <div className={style.msgarea}>
            <label>Descripción</label>
            <textarea
              onChange={handleOnChange}
              type="text"
              name="description"
              value={input.description}
            />
          </div>
          <div className={style.detailsarea}>
            <label>Nombre del juego:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="name"
              value={input.name}
            />
            {errors.name && <p>{errors.name}</p>}

            <label>Fecha de lanzamiento:</label>
            <input
              onChange={handleOnChange}
              type="text"
              name="reldate"
              value={input.reldate}
              placeholder="YYYY-MM-DD"
            />

            <label>Valoración:</label>
            <input
              onChange={handleOnChange}
              onBlur={handleOnChange}
              type="text"
              name="rating"
              value={input.rating}
              placeholder="Ej 4.7"
            />
            {errors.rating && <p>{errors.rating}</p>}

            <label>Plataformas:</label>
            <select onChange={handlePlatforms} onBlur={handleOnChange}>
              {allplatforms.sort().map((p) => {
                return <option value={p}>{p}</option>;
              })}
            </select>
            <ul className="ul">
              <li>{input.platform.map((p) => p + " ,")}</li>
            </ul>
            {errors.platform && <p> {errors.platform} </p>}

            <label>Generos:</label>
            <select onChange={handleGenres}>
              {allgenres.sort().map((p) => {
                return <option value={p}>{p}</option>;
              })}
            </select>

            <ul>
              <li>{input.genre.map((p) => p + " ,")}</li>
            </ul>

            <button className={style.bot} type="submit">
              Agregar juego
            </button>
            <span>
              <Link to="/home">
                <button className={style.bot2}>Volver al home</button>
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
