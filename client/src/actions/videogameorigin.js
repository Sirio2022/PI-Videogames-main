import { VIDEOGAMES_ORIGIN } from ".";

export default function videogameorigin(payload) {
  return {
    type: VIDEOGAMES_ORIGIN,
    payload,
  };
}
