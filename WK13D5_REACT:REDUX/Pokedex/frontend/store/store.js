import { createStore } from 'redux';
import { applyMiddleware  } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { entitiesReducer } from '../reducers/entities_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

// const configureStore = (preloadedState = {}) => {
//     return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
// }
const configureStore = () => (
    createStore(
        rootReducer,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;

// BLEATER imports
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import thunk from '../middleware/thunk';
// import logger from 'redux-logger';
