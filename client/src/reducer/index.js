import {
  GET_ALLVIDEOGAMES,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAMES_BY_NAME,
  GET_VIDEOGAME_BY_ID,
} from "../actions";

const initialstate = {
  videogames: [],
  videogamesfilter: [],
  videogamedetails: [],
  genres: [],
  platforms: [],
};

export default function rootreducer(state = initialstate, action) {
  switch (action.type) {
    case GET_ALLVIDEOGAMES:
      if (action.payload) {
        return {
          ...state,
          videogames: action.payload,
          videogamesfilter: action.payload,
        };
      } else {
        return {
          ...state,
          videogames: [],
        };
      }
    case GET_VIDEOGAMES_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        videogamedetails: action.payload,
      };
    case GET_GENRES:
      let genre = action.payload;
      genre.unshift("All");
      return {
        ...state,
        genres: genre,
      };
    case GET_PLATFORMS:
      return{
        ...state,
        platforms: action.payload
      }
    


































    default:
      return state;
  }
}
