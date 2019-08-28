import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';


export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  }
};

export const fetchSearchGiphys = fetched => dispatch => {
  debugger
  return APIUtil.fetchSearchGiphys(fetched).then(
    giphys => dispatch(receiveSearchGiphys(giphys.data))
  );
};

// export const fetchSearchGiphys = (fetched) => {
//   return (dispatch) => {
//     APIUtil.fetchSearchGiphys(fetched)
//       .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
//   }
// };


