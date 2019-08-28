import React from 'react';
import PokemonIndexItem from './pokemon_index_item'

export default class PokemonIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    

    render() {
        const pokemonItems = Object.values(this.props.pokemon).map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
          ));
        return (
            <section className='pokedex'>
                <ul className='pokemon-index'>
                  {pokemonItems}
                </ul>          
            </section>
        )
    }

    componentDidMount(){
        this.props.requestAllPokemon()
    }
}