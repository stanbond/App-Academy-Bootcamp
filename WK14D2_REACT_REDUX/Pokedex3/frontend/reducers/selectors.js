
export const selectAllPokemon = state => (
    // Object.freeze(state)
    // const pokemon = Object.values(state.pokemon);
    Object.values(state.entities.pokemon)   
)


// export const selectAllPokemonItems = state => (
//     Object.values(state.entities.pokemon.items) 
// )