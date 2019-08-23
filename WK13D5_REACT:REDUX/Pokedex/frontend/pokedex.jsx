import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import * as actions from './actions/pokemon_actions.js'
import configureStore from './store/store'


const Root = function() {
    return (
        <h1>Hey Ma Im on the Internet</h1>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);
    
    window.store = store
    window.actions = actions

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.receiveAllPokemon = actions.receiveAllPokemon;
    window.requestAllPokemon = actions.requestAllPokemon;
})

