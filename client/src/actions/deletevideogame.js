import axios from "axios";
import { DELETE_VIDEOGAME } from ".";

export default function deletevideogame(id) {
  return async function (dispatch) {
    return await axios.delete(
      `http://localhost:3001/videogames/delete/:${id}`.then((g) =>
        dispatch({ type: DELETE_VIDEOGAME, payload: g.data })
      )
    );
  };
}
