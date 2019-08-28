import ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
    ApiUtil.fetchAllPokemon()
      .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receiveOnePokemon = pokemon => ({
    type: RECEIVE_ONE_POKEMON,
    pokemon
})

export const requestOnePokemon = (id) => (dispatch) => (
    ApiUtil.fetchPokemon(id)
        .then(pokemon => dispatch(receiveOnePokemon(pokemon)))
)