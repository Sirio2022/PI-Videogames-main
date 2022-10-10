import { GET_ALLVIDEOGAMES } from "../actions";

const initialstate = {
  videogames: [],
};

export default function rootreducer(state = initialstate, action) {
  switch (action.type) {
    case GET_ALLVIDEOGAMES:
      if (action.payload) {
        return {
          ...state,
          videogames: action.payload,
        };
      }else{
        return{
            ...state,
            videogames: []
        }
      }
    default:
      return state;
  }
}
