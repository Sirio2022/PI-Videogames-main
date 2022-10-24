import axios from "axios";
import { DELETE_VIDEOGAME } from ".";

export const deletevideogame = (id) => async (dispatch) => {
  return await axios
    .delete(`http://localhost:3001/videogames/${id}`)
    .then((g) => dispatch({ type: DELETE_VIDEOGAME, payload: g.data }))
    .then(alert("Videojuego Eliminado con exito"));
};

export default deletevideogame;
