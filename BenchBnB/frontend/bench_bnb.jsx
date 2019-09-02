import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
// import {fetchBenches} from './actions/bench_actions';
import {selectAllBenches} from './reducers/selectors';
import {updateBounds} from './actions/filter_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    

    // Testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // Testing end

    ReactDOM.render(<Root store={store}/>, root);
});

window.updateBounds = updateBounds;
window.selectAllBenches = selectAllBenches;