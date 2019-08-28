import React from 'react'


class PokemonDetail extends React.Component {

    componentDidMount() {
        return this.props.requestOnePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        //check route params
        const id = this.props.match.params.pokemonId
        const newId = prevProps.match.params.pokemonId
        if (id !== newId) {
            this.props.requestOnePokemon(newId)
        }
    }

    render() {
    //   let items = this.props.PokemonDetail.items
    //   items = items.map((item, idx) => <li key={idx}><... item={item} pokemonId={this.props.PokemonDetail.id}/></li>)
        if (!this.props.pokemon) {
            return null;
        } 
        return (
        <div className="pokemon-detail">
            <img src={this.props.pokemon.image_url}/> 
            <h1>{this.props.pokemon.name}</h1>
            <h1>{this.props.pokemon.poke_type}</h1>
            <h1>{this.props.pokemon.attack}</h1>
            <h1>{this.props.pokemon.defence}</h1>
            <h1>{this.props.pokemon.moves}</h1>
        </div>
        );
    }
}

export default PokemonDetail;