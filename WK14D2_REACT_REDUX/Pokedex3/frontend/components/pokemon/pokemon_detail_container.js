import { connect } from 'react-redux'
import * as PokemonActions from '../../actions/pokemon_actions'
// import {selectAllPokemonItems} from '../../reducers/selectors'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId] //selectAllPokemonItems(state)
  });

const mapDispatchToProps = dispatch => ({
    requestOnePokemon: (id) => dispatch(PokemonActions.requestOnePokemon(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PokemonDetail);