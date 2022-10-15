import {
  DELETE_VIDEOGAME,
  GENRES_FILTER,
  GET_ALLVIDEOGAMES,
  GET_GENRES,
  GET_PLATFORMS,
  GET_VIDEOGAME_BY_NAME,
  GET_VIDEOGAME_BY_ID,
  POST_VIDEOGAME,
  SORT_VIDEOGAMES,
  VIDEOGAMES_ORIGIN,
} from "../actions";

const initialstate = {
  videogames: [],
  videogamesfilter: [],
  videogamedetails: [],
  genres: [],
  platforms: [],
};

export default function rootReducer(state = initialstate, action) {
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
    case GET_VIDEOGAME_BY_NAME:
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
      return {
        ...state,
        platforms: action.payload,
      };
    case GENRES_FILTER:
      const allvideogames = state.videogamesfilter;
      const genrefilter =
        action.payload === "All"
          ? allvideogames
          : allvideogames.filter((p) => p.genres.includes(action.payload));
      if (genrefilter.length === 0) {
        alert(`No se encontraron videojuegos para ${action.payload} genero`);
        return state;
      } else {
        return {
          ...state,
          videogames: genrefilter,
        };
      }
    case POST_VIDEOGAME:
      return {
        ...state,
      };
    case DELETE_VIDEOGAME:
      return {
        ...state,
      };
    case VIDEOGAMES_ORIGIN:
      const videogameorigin = state.videogamesfilter;
      const filterorigin =
        action.payload === "DB"
          ? videogameorigin.filter((p) => p.origin === "DB")
          : videogameorigin.filter((p) => p.origin === "API");
      return {
        ...state,
        videogames:
          action.payload === "All" ? state.videogamesfilter : filterorigin,
      };
    case SORT_VIDEOGAMES:
      if (action.payload === "rating") {
        let sortedArray = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        });
        return {
          ...state,
          videogames: sortedArray,
        };
      } else {
        let sortedArray =
          action.payload === "asc"
            ? state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
            : state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          videogames: sortedArray,
        };
      }
    default:
      return state;
  }
}
