import { TOGGLE_FAVORITE } from '../actions/pokemon';
import { POKEMON_INFO } from '../actions/pokemon';

const initialState = {
  pokemons: [],
  pokemonInfo: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return { pokemons: action.pokemonObj };
    case POKEMON_INFO: 
      return { pokemons: action.pokemonInfo };
    default:
      return state;
  }
};

export default pokemonReducer;
