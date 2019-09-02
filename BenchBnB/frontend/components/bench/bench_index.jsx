import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

    componentDidMount(){
        // this.props.updateBounds()
    }


  render() {
    const benches = this.props.benches.map(
        (bench) => { return <BenchIndexItem key={bench.id} bench={bench}/>
        });

    return (
      <ul>
        {benches}
      </ul>
    )
  }
}

export default BenchIndex;