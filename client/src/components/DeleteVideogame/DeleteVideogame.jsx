import React, { useState } from "react";
import deletevideogame from "../../actions/deletevideogame";
import { useDispatch } from "react-redux";
import style from "./DeleteVideogame.module.css";

export default function DeleteVideogame() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleinputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(deletevideogame(name));
    setName("")
  }

  return (
    <div className={style.sbcontainer}>
      <input
        className={style.sbinput}
        onChange={(e) => handleinputChange(e)}
        type="text"
        placeholder="Eliminar"
        value={name}
      />
      <button className={style.sbbot} onClick={(e) => handleSubmit(e)} type="submit">
        Eliminar juego
      </button>
    </div>
  );
}
