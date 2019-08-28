import * as pokemonActions from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case pokemonActions.RECEIVE_ALL_POKEMON:
            return action.pokemon;
            // const allPokemon = action.payload.pokemon;
            // return Object.assign({}, state, allPokemon);
        case pokemonActions.RECEIVE_ONE_POKEMON:
            let newState = Object.assign({}, state, {[action.pokemon.id]: action.pokemon})
            return newState;            
        default:
            return state;
        
    }
}
export default pokemonReducer



