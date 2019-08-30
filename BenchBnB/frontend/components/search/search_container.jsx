import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import Search from './search';

const mapStateToProps = (state) => ({
    benches: selectAllBenches(state.entities.benches)
});

const mapDispatchToProps = (dispatch) => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);