class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
       benches.forEach(bench => {
          if (!Object.keys(this.markers).includes(bench.id)){
            const marker = this.createMarkerFromBench(bench);
            marker.setMap(this.map);
            this.markers[bench.id] = marker;
          }
       })
    }

    createMarkerFromBench(bench){
        const myLatLng = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: bench.description
        })
        return marker;
    }

}

export default MarkerManager;