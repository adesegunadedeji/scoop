// import React, { Component} from 'react';
// import './index.css'
// import GoogleMapReact from 'google-map-react';
// import MapAutoComplete from './mapAutoComplete';
// import placeCard from './placeCard';
// import constraintSlider from './constraintSlider';
// import MapMarker from './marker'
// import { Button, Input, Divider, message } from 'antd';
// const ST_COOR = { lat: 47.7601, lng: -122.2054 }; //Initial Coordinates of Seattle
// console.log(ST_COOR.lat, "COORDINATES")

// class Test extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//         //   constraints: [
//         //       {
//         //        name: '', time: 0 }
//         //     ],
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

//       // Update name for constraint with index === key
// //   updateConstraintName = ((e, key) => {
// //     e.preventDefault();
// //     const prevConstraints = this.state.constraints;
// //     const constraints = Object.assign([], prevConstraints);
// //     constraints[key].name = e.target.value;
// //     this.setState({ 
// //         constraints: constraints
// //     });
// //   });


//   // Updates distance (in KM) for constraint with index == key
// //   updateConstraintTime = ((key, value) => {
// //     const prevConstraints = this.state.constraints;
// //     const constraints = Object.assign([], prevConstraints);
// //     constraints[key].time = value;
// //     this.setState({ 
// //         constraints: constraints
// //      });
// //   });

//   // Adds a Marker to the GoogleMaps component
// //   addMarker = ((lat, lng, name) => {
// //     const prevMarkers = this.state.markers;
// //     const markers = Object.assign([], prevMarkers);

// //     // If name already exists in marker list just replace lat & lng.
// //     let newMarker = true;
// //     for (let i = 0; i < markers.length; i++) {
// //       if (markers[i].name === name) {
// //         newMarker = false;
// //         markers[i].lat = lat;
// //         markers[i].lng = lng;
// //         message.success(`Updated "${name}" Marker`);
// //         break;
// //       }
// //     }
// //     // Name does not exist in marker list. Create new marker
// //     if (newMarker) {
// //       markers.push({ lat, lng, name });
// //       message.success(`Added new "${name}" Marker`);
// //     }

// //     this.setState({ markers });
// //   });

//     // componentDidMount() {
//     // console.log("COMPONENT IS MOUNTING")
//     //   }

//  // Runs once when the Google Maps library is ready
//   // Initializes all services that we need
//      handleApiLoaded = (map, maps) => {
//         console.log(this.state.autoCompleteService, "INITIAL AUTOCOMPLETE")
//          this.setState({
//             // mapsLoaded: true,
//             // map,
//             maps,
//             seattleLatLng:new maps.LatLng(ST_COOR.lat, ST_COOR.lng),
//             autoCompleteService: new maps.places.AutocompleteService(),
//             placesService:new maps.places.PlacesService(),
//             geoCoderService: new maps.Geocoder(),
//             directionsService: new maps.DirectionsService()
//          })
//          console.log(this.state.autoCompleteService, "AUTOCOMPLETESERVICE IN INDEX JSX")
//     };
//      // With the constraints, find some places that offer bar services
//     handleClick = (() => {
//     const { markers, constraints, placesService, directionService, maps } = this.state;
//     console.log("CLICKED!!!!", markers)
//     if (markers.length === 0) {
//         //console.log("TYPE A COMMENT");
//       message.warn('Add a constraint and try again!');
//       return;
//     }
//     const filteredResults = [];
//     const marker = markers[0];
//     const timeLimit = constraints[0].time;
//     const markerLatLng = new maps.LatLng(marker.lat, marker.lng);

//     const placesRequest = {
//       location: markerLatLng,
//         radius: '30000', // Cannot be used with rankBy. Pick your poison!
//       type: ['restaurant', 'bar'], // List of types: https://developers.google.com/places/supported_types
//       query: 'Bars',
//       //rankBy: maps.places.RankBy.DISTANCE, // Cannot be used with radius.
//     };

//     // First, search for ice cream shops.
//     placesService.textSearch(placesRequest, ((response) => {
//       // Only look at the nearest top 5.
//       const responseLimit = Math.min(5, response.length);
//       for (let i = 0; i < responseLimit; i++) {
//         const Bar = response[i];
//         console.log(Bar, "BAR ON lIne 124")
//         const { rating, name } = Bar;
//         const address = Bar.formatted_address; 
//         const priceLevel = Bar.price_level; 
//         let photoUrl = '';
//         let openNow = false;
//         if (Bar.opening_hours) {
//           openNow = Bar.opening_hours.open_now; // e.g true/false
//         }
//         if (Bar.photos && Bar.photos.length > 0) {
//           photoUrl = Bar.photos[0].getUrl();
//         }

//     //     // Second, For each Bar, check if it is within acceptable travelling distance
//         const directionRequest = {
//           origin: markerLatLng,
//           destination: address, // Address of ice cream place
//           travelMode: 'DRIVING',
//         }
//         directionService.route(directionRequest, ((result, status) => {
//           if (status !== 'OK') { return }
//           const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
//           const travellingTimeInMinutes = travellingRoute.duration.value / 60;
//           if (travellingTimeInMinutes < timeLimit) {
//             const distanceText = travellingRoute.distance.text; // 6.4km
//             const timeText = travellingRoute.duration.text; // 11 mins
//             filteredResults.push({
//               name,
//               rating,
//               address,
//               openNow,
//               priceLevel,
//               photoUrl,
//               distanceText,
//               timeText,
//             });
//           }
//           // Finally, Add results to state
//           this.setState({ 
//         searchResults: filteredResults
//      });
//         }));
//       }
//     }));
 
//   });

//   render() {
//     const { constraints, mapsLoaded, seattleLatLng, markers, searchResults } = this.state;
//     const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
//     return (
//     <div  className="Map_Container" style={{ height: '100vh', width: '100%' }}>
//           <h1>Wanna Drink? Find a bar near you!!!</h1>
//         {/* Constraints section */}
//           <section>
//           {mapsLoaded ?
//             <div>
//               {constraints.map((constraint, key) => {
//                 const { name, time } = constraint;
//                 return (
//                   <div key={key}>
//                     <div>
//                       <Input placeholder="Name" onChange={(event) => this.updateConstraintName(event,key)} />
//                       <MapAutoComplete
//                       autoCompleteService={autoCompleteService}
//                       geoCoderService={geoCoderService}
//                       seattleLatLng={seattleLatLng}
//                       markerName={name}
//                       addMarker={this.addMarker}
//                       />
//                     </div>
//                     <constraintSlider
//                       iconType="car"
//                       value={time}
//                       onChange={(value) => this.updateConstraintTime(key, value)}
//                       text="Minutes away by car"
//                     />
//                     <Divider />
//                   </div>
//                 );
//               })}
//             </div>
//             : null
//           }
//         </section>
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
//         //onGoogleApiLoaded={({map, maps}) => console.log(map, maps.places.AutocompleteService(),"MAPS API")} 
//         >
//               {/* Pin markers on the Map*/}
//               {markers.map((marker, key) => {
//               const { name, lat, lng } = marker;
//               return (
//                 <MapMarker key={key} name={name} lat={lat} lng={lng} />
//               );
//             })}   
//         </GoogleMapReact>
//         </section>
//           {/* Search Button */}
//           <Button onClick={this.handleClick}>SEARCH</Button>

// {/* Results section */}
// {searchResults.length > 0 ?
//   <>
//     <Divider />
//     <section>
//       <div>
//         <h1>Lets Get Drunk</h1>
//         <div>
//           {
//           searchResults.map((result, key) => (
//             <placeCard info={result} key={key} />
//           ))}
//         </div>
//       </div>
//     </section>
//   </>
//   : null}
//   </div>
//    )}
// }

// export default Test;