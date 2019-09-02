import React from 'react';

class BenchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: `This is x: ${this.props.lat} y: ${this.props.lng}`,
            seating: 2,
            lat: this.props.lat,
            lng: this.props.lng
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field){
        return (event) => {
            this.setState({[field]: event.target.value});
        };
    };

    handleSubmit(event){
        event.preventDefault();
        this.props.createBench(this.state).then((response) => {this.props.history.push('/')});
    }

    render(){
        let {lat, lng} = this.props;
        return (
            <form action="Create Bench" onSubmit={this.handleSubmit}>
            <br></br>
                <label htmlFor="description">Description</label>
                <br></br>
                <input 
                  type="text" 
                  value={this.state.description} 
                  id="description" 
                  onChange={this.update('description')}/>
            <br></br>
                <label htmlFor="number-of-seats">Number of seats</label>
            <br></br>
                <input 
                  type="number" 
                  value={this.state.seating} 
                  id="number-of-seats" 
                  onChange={this.update('seating')}/>  
            <br></br>
                <label htmlFor="lat">Latitude</label>
                <br></br>
                <input 
                  disabled 
                  type="number" 
                  value={this.state.lat} 
                  id="lat"/>     
            <br></br>
                <label htmlFor="lng">Longitude</label>
                <br></br>
                <input 
                  disabled 
                  type="number" 
                  value={this.state.lng} 
                  id="lng"/>
            <br></br>
                <button>Create Bench</button>        
            </form>
        )
    }
}

export default BenchForm;