import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemReducer from './items_reducer'
import uiReducer from './ui_reducer'
 
export const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    items: itemReducer,
    ui: uiReducer
})