import GiphysIndex from './giphys_index';
import React, { Component } from 'react';


class GiphysSearch extends Component {
  constructor() {
    super();
    this.state = { fetched: 'SenyoTube'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentdidMount () {
    this.props.fetchSearchGiphys('SenyoTube');
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({ fetched: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
      let fetched = this.state.fetched;
      this.props.fetchSearchGiphys(fetched);
  }
  
  
  render() {
    let { giphys } = this.props;
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.fetched}/>
          <button type="submit" onClick={this.handleSubmit}> Peep Dat Shit!</button>
        </form>

        <GiphysIndex giphys={giphys} />
      </div>
    )
  }
}
export default GiphysSearch;