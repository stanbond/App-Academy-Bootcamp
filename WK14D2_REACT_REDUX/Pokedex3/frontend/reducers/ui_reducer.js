
const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
    // setLoading: new action
    // this will listen to action type, set back to false once data comes through
     // loading === true
     // if action type comes through, we're not loading anymore
        default:
            return state;
    }
}
export default uiReducer;