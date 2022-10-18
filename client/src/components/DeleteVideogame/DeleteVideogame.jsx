import React, { useState } from "react";
import deletevideogame from "../../actions/deletevideogame";
import { useDispatch } from "react-redux";

export default function DeleteVideogame(payload) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  function handleinputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(deletevideogame(payload));
  }

  return (
    <div>
      <input
        onChange={(e) => handleinputChange(e)}
        type="text"
        placeholder="Eliminar"
        value={name}
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Eliminar juego
      </button>
    </div>
  );
}
