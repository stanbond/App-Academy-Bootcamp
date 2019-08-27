// import values from 'lodash/values'

export const selectAllPokemon = state => (
    // Object.freeze(state)
    // const pokemon = Object.values(state.pokemon);
    Object.values(state.entities.pokemon)   
)

