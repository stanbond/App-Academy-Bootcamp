import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';



const mapStateToProps = state => ({
  giphys: state.giphys
});


const mapDispatchToProps = dispatch => ({
    fetchSearchGiphys: fetched => dispatch(fetchSearchGiphys(fetched))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiphysSearch);