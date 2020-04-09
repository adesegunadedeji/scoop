// import React, { Component} from 'react';
// import './index.css'
// import GoogleMapReact from 'google-map-react';
// import MapAutoComplete from './mapAutoComplete';
// import placeCard from './placeCard';
// import constraintSlider from './constraintSlider';
// import MapMarker from './marker'
// import { Button, Input, Divider, message } from 'antd';

// const ST_COOR = { lat: 47.7601, lng: -122.2054 }; //Initial Coordinates of Seattle
// class MapContainer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           searchResults: [],
//           mapsLoaded: false,
//           markers: [],
//           map: {},
//           maps: {},
//           seattleLatLng: {},
//           autoCompleteService: {},
//           placesService: {},
//           geoCoderService: {},
//           directionsService: {},
//         };
//       }



//  // Runs once when the Google Maps library is ready
//   // Initializes all services that we need
//      handleApiLoaded = (map, maps) => {
//         //  this.setState({
//         //     mapsLoaded: true,
//         //     map,
//         //     maps,
//         //     seattleLatLng:new maps.LatLng(ST_COOR.lat, ST_COOR.lng),
//         //     autoCompleteService: new maps.places.AutocompleteService(),
//         //     placesService:new maps.places.PlacesService(),
//         //     geoCoderService: new maps.Geocoder(),
//         //     directionsService: new maps.DirectionsService()
//         //  })
//          //console.log(maps.places.AutocompleteService, "AUTOCOMPLETESERVICE IN INDEX JSX")
//     };


//     componentDidMount(){
//         this.handleApiLoaded();
//     }

//   render() {
//     // const { constraints, mapsLoaded, seattleLatLng, markers, searchResults } = this.state;
//     // const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
//     return (
//     <div  className="Map_container">
//          {/* Maps Section */}
//          <section>
//           <GoogleMapReact
//           bootstrapURLKeys={{
//             key: `${process.env.REACT_APP_GOOGLEKEY}`,
//             libraries: ['places', 'directions']
//           }}
//           defaultZoom={11} // Supports DP, e.g 11.5
//           defaultCenter={{ lat: ST_COOR.lat, lng: ST_COOR.lng }}
//           yesIWantToUseGoogleMapApiInternals={true}
//          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
//        // onGoogleApiLoaded={({map, maps}) => console.log(map, maps,"MAPS API")} 
//         >
//         </GoogleMapReact>
//         </section>
//   </div>
//    )}
// }

// export default MapContainer;