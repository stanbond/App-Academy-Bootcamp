import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import * as actions from './actions/pokemon_actions.js'
import configureStore from './store/store'
import * as selectors from './reducers/selectors.js'
import Root from './components/root'
import { HashRouter, Route } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
    window.store = store
    window.actions = actions
    window.selectAllPokemon = selectors.selectAllPokemon
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    window.receiveAllPokemon = actions.receiveAllPokemon;
    window.requestAllPokemon = actions.requestAllPokemon;
    window.receiveOnePokemon = actions.receiveOnePokemon;
    window.requestOnePokemon = actions.requestOnePokemon;
})

