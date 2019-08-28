import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container'
import { Route } from 'react-router-dom'

export default class PokemonIndex extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {};
    // }
    componentDidMount(){
            this.props.requestAllPokemon()
        }
    
    render() {
        const pokemonItems = this.props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
             
          ));
        return (
            <section className='pokedex'>
             <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>       
                <ul className='pokemon-index'>
                  {pokemonItems}
                </ul>  
            </section>
        )
    }

    
}