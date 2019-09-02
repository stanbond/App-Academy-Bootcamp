import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.eventListener();
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    eventListener(){
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateBounds(bounds);
        });

        google.maps.event.addListener(this.map, 'click', (event) => {
            const latitude = event.latLng.lat();
            const longitude = event.latLng.lng();
            const coords = {lat: latitude, lng: longitude};
            this._handleClick(coords);
        });
    }

    _handleClick(coords){
        this.props.history.push({
            pathname: 'benches/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render(){
        return (
            <div id='map-container' ref={ map => this.mapNode = map }>

            </div>
        )
    }
}

export default withRouter(BenchMap);