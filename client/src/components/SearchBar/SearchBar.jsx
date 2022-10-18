import React, { useState } from "react";
import getvideogamebyname from "../../actions/getvideogamebyname";
import {useDispatch} from "react-redux";
import style from "./SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  

  function handleinputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getvideogamebyname(name));
    setName("")
  }

  return (
    <div className={style.sbcontainer}>
      <input className={style.sbinput}
        onChange={(e) => handleinputChange(e)}
        type="text"
        placeholder="Buscar por nombre"
        value={name}
      />
      <button className={style.sbbot}  onClick={(e) => handleSubmit(e)} type="submit">
        Buscar
      </button>
    </div>
  );
}
