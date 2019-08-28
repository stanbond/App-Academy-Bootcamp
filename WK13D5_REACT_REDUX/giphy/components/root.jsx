import React, { Component } from 'react';
import { Provider } from 'react-redux';
import fetchSearchGiphys from '../util/api_util';
import GiphysSearchContainer from './giphys_search_container';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <GiphysSearchContainer />
    </Provider>
  );
};

export default Root;