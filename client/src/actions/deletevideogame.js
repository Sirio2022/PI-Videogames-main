import axios from "axios";
import { DELETE_VIDEOGAME } from ".";

export default function deletevideogame(name) {
  return async function (dispatch) {
    var result = await axios.post(
      `http://localhost:3001/videogames/delete/:${name}`
    );
    return dispatch({
      type: DELETE_VIDEOGAME,
      payload: result.data
    });
  };
}
