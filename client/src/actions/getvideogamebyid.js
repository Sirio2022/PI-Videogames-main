import { GET_VIDEOGAME_BY_ID } from ".";
import axios from "axios";

export default function getvideogamebyid(id) {
  return async function (dispatch) {
    try {
      var result = await axios.get(`http://localhost:3001/videogames/${id}`);
      return dispatch({
        type: GET_VIDEOGAME_BY_ID,
        payload: result.data,
      });
    } catch (error) {
      console.log("A ocurrido un error al traer el videojuego por ID", error);
    }
  };
}
