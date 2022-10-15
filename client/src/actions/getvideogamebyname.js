import { GET_VIDEOGAME_BY_NAME } from ".";
import axios from "axios";

export default function getvideogamebyname(name) {
  return async function (dispatch) {
    try {
      var result = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      console.log(result)
      return dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: result.data,
      });
    } catch (error) {
      console.log(
        "A ocurrido un error al traer el videojuego por nombre",
        error
      );
    }
  };
}
