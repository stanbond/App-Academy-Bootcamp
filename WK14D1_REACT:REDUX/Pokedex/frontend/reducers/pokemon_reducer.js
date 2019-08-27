import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon;
            // const allPokemon = action.payload.pokemon;
            // return Object.assign({}, state, allPokemon);
        default:
            return state;
    }
}
export default pokemonReducer



