class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
        // constant time lookup object
        const newObject = {};
        benches.forEach(bench => {
            newObject[bench.id] = bench;
        });
        
        // creating this.markers object for storing markers
       benches.forEach(bench => {
          if (!Object.keys(this.markers).includes(bench.id)){
            const marker = this.createMarkerFromBench(bench);
            marker.setMap(this.map);
            this.markers[bench.id] = marker;
          }
       })

       const that = this;
        // checking newObject vs this.markers
    //    let benchesKey = this.markers.keys;
    //    debugger
    //    benchesKey.forEach(id => {
        Object.keys(this.markers).forEach((id) => {
           if (!newObject[id]){
               that.removeMarker(id);
           }
       });
    }

    removeMarker(id) {
        this.markers[id].setMap(null);
        delete this.markers[id];
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