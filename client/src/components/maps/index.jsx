import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
  
    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };
  // Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };
  
  const handleApiLoaded = (map, maps, places) => {
      // Get bounds by our places
      const bounds = getMapBounds(map, maps, places);
      // Fit map to bounds
      map.fitBounds(bounds);
      // Bind the resize listener
      bindResizeListener(map, maps, bounds);
};


class MapContainer extends Component {

    constructor(){
        super();
        this.state= {
            mapsLoaded: false,
            map: {},
            maps: {}
        }
    }


  render() {

    
    return (
    <div  className="Map_Container" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.REACT_APP_GOOGLEKEY}`,
            libraries: ['places', 'directions']
          }}
          defaultZoom={12} // Supports DP, e.g 11.5
          defaultCenter={{ lat:47.7601, lng: -122.2054 }}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
        </GoogleMapReact>
        </div>
          
   )}
  
}

export default MapContainer;