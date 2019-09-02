import {UPDATE_BOUNDS} from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, action.filter);
        default:
            return state;
    }
};

export default filterReducer;