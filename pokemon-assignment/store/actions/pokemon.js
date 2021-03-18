export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const POKEMON_INFO = 'POKEMON_INFO';

export const toggleFavorite = (obj) => {
  return {
    type: TOGGLE_FAVORITE,
    pokemonObj: obj
  };
}

export const pokemonInfo = (obj) => {
  return {
    type: POKEMON_INFO,
    pokemonInfo: obj,
  }
}