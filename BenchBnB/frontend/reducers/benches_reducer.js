import {RECEIVE_BENCHES, RECEIVE_BENCH} from '../actions/bench_actions';

const benchesReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCHES:
        const benchesObject = {};
        action.benches.forEach(bench => {
            benchesObject[bench.id] = bench
        });
      return benchesObject;

    case RECEIVE_BENCH:
        return Object.assign({}, state, {
          [action.bench.id]: action.bench
        });
        
    default:
      return state;
  }
}

export default benchesReducer;


