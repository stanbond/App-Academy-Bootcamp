export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
import { fetchBenches } from './bench_actions';

// export const updateBounds = (bounds) => ({
//     type: UPDATE_BOUNDS,
//     bounds
// })
export const changeFilter = (filter, value) => ({
    type: UPDATE_BOUNDS,
    filter,
    value
})


export const updateBounds = (filter, value) => (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBenches(getState().ui.filters)(dispatch);
};
