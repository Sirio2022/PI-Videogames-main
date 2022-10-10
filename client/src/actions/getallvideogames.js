import { GET_ALLVIDEOGAMES } from ".";
import axios from "axios";

export default function getallvideogames() {
  return async function (dispatch) {
    var result = await axios.get("http://localhost:3001/vidogames");
    console.log(result);
    return dispatch({ type: GET_ALLVIDEOGAMES, payload: result.data });
  };
}
