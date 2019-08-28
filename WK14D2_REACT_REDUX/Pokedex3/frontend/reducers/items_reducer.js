import * as pokemonActions from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case pokemonActions.RECEIVE_ONE_POKEMON:
            let newState = Object.assign({}, state, {items: action.pokemon.items})
            return newState;            
        default:
            return state;
        
    }
}

export default itemReducer;