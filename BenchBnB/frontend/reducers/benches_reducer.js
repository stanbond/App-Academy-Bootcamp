import {RECEIVE_BENCHES} from '../actions/bench_actions';

const benchesReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCHES:
        const benchesObject = {};
        action.benches.forEach(bench => {
            benchesObject[bench.id] = bench
        });
      return benchesObject;
    default:
      return state;
  }
}

export default benchesReducer;


