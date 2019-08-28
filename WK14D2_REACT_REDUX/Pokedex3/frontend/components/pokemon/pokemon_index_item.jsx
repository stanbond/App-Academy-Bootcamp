import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PokemonDetail from './pokemon_detail'

class PokemonIndexItem extends Component {
  render() {
    return (
        <li className='pokemon-index-item'>
            <Link to={`/pokemon/${this.props.pokemon.id}`}>
                <img src={this.props.pokemon.image_url}/>
                {this.props.pokemon.name}
                {this.props.pokemonDetail}
            </Link>
        </li>
    );
  }
}

export default PokemonIndexItem;
