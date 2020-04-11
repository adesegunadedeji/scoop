import React, {Component} from 'react';
import './index.css'
import GoogleMapReact from 'google-map-react';
import MapAutoComplete from './mapAutoComplete'
import MapMarker from './marker'
import { Button, message } from 'antd';
import ConstraintSlider from './constraintSlider';
import PlaceCard from './placeCard'
const ST_COOR = { lat: 47.7601, lng: -122.2054 }; //Initial Coordinates of Seattle

export default class MapContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            constraints: [{ name: '', time: 0 }],
            searchResults: [],
            mapsLoaded: false,
            markers: [],
            map: {},
            mapsApi: {},
            seattleLng: {},
            autoCompleteService: {},
            placesService: {},
            geoCoderService: {},
            directionService: {},
        }
    }


      // Update name for constraint with index === key
  updateConstraintName = ((e, key) => {
      console.log(e,key, "In the update Constraint Function")
   e.preventDefault();
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].name = e.target.value;
    this.setState({ constraints });
  });
  
  // Updates distance (in KM) for constraint with index == key
  updateConstraintTime = ((key, value) => {
    const prevConstraints = this.state.constraints;
    const constraints = Object.assign([], prevConstraints);
    constraints[key].time = value;
    this.setState({ constraints });
  });

  // Adds a Marker to the GoogleMaps component
  addMarker = ((lat, lng, name) => {
    const prevMarkers = this.state.markers;
    const markers = Object.assign([], prevMarkers);

    // If name already exists in marker list just replace lat & lng.
    let newMarker = true;
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].name === name) {
        newMarker = false;
        markers[i].lat = lat;
        markers[i].lng = lng;
        message.success(`Updated "${name}" Marker`);
        break;
      }
    }
    // Name does not exist in marker list. Create new marker
    if (newMarker) {
      markers.push({ lat, lng, name });
      message.success(`Added new "${name}" Marker`);
    }

    this.setState({ markers });
  });


    //HANDLEAPILOADED FUNCTION
    handleApiLoaded = (map, maps) => {
        console.log(maps, "MAPS API");
        this.setState({
            mapsLoaded: true,
            map,
            maps,
            seattleLng: new maps.LatLng(ST_COOR.lat, ST_COOR.lng),
            autoCompleteService: new maps.places.AutocompleteService(),
            placesService: new maps.places.PlacesService(map),
            geoCoderService: new maps.Geocoder(),
            directionService: new maps.DirectionsService(),
          });
    }


    //HANDLECLICK FUNCTION
    handleClick = (e)=> {
        const { markers, constraints, placesService, directionService, maps } = this.state;
    console.log("SUBMIT BUTTON WORKS");
    if (markers.length === 0) {
        console.log("ADD A CONSTRAINT");
        message.warn('Add a constraint and try again!');
        return;
    }
    const filteredResults = [] ; 
    const marker = markers[0];
    const timeLimit = constraints[0].time;
    const markerLatLng = new maps.LatLng(marker.lat, marker.lng);

    const placesRequest = {
        location: markerLatLng,
        type: ['restaurant', 'cafe'],
        query: 'ice cream',
        rankBy: maps.places.RankBy.DISTANCE, 
    }
    placesService.textSearch(placesRequest, ((response) => { 
        console.log(response, "RESPONSE");
        const responseLimit = Math.min(10, response.length);
        let i ;
        for (i = 0; i< responseLimit; i++){
            const barPlace = response[i];
           console.log(barPlace);
           const { rating, name } = barPlace;
           const address = barPlace.formatted_address; // e.g 80 mandai Lake Rd,
           const priceLevel = barPlace.price_level; // 1, 2, 3...
           let photoUrl = '';
           let openNow = false;

            if (barPlace.opening_hours) {
          openNow = barPlace.opening_hours.open_now; // e.g true/false
        }
        if (barPlace.photos && barPlace.photos.length > 0) {
          photoUrl = barPlace.photos[0].getUrl();
        }
          // For each barPlace, check if it is within acceptable travelling distance
          const directionRequest = {
            origin: markerLatLng,
            destination: address, // Address of ice cream place
            travelMode: 'DRIVING',
          }


          directionService.route(directionRequest, ((result, status) => {
            if (status !== 'OK') { return }
            const travellingRoute = result.routes[0].legs[0]; // { duration: { text: 1mins, value: 600 } }
            const travellingTimeInMinutes = travellingRoute.duration.value / 60;
            if (travellingTimeInMinutes < timeLimit) {
              const distanceText = travellingRoute.distance.text; // 6.4km
              const timeText = travellingRoute.duration.text; // 11 mins
              filteredResults.push({
                name,
                rating,
                address,
                openNow,
                priceLevel,
                photoUrl,
                distanceText,
                timeText,
              });
            }
            // Finally, Add results to state
            this.setState({ searchResults: filteredResults });
          }));
          
        }
    })
    )};

    render () {
        const { constraints, mapsLoaded, seattleLatLng, markers, searchResults } = this.state;
        //const { autoCompleteService, geoCoderService } = this.state; // Google Maps Services
        return (
        <div> 
            <h1> Find Bars Around Me</h1>
              {/* Constraints section */}
<div className="constraint_Section">
    {mapsLoaded? <div> 
        {constraints.map((constraint, key)=>{
            const{ name, time} = constraint;
            console.log(name, time, "NAME AND TIME IN CONSTRAINT SECTION");
            return (
                <div key={key}> 
                     <input placeholder="Name" onChange={(e)=>
                        this.updateConstraintName(e, key)} />
                        <MapAutoComplete
                        autoCompleteService={this.state.autoCompleteService}
                        geoCoderService={this.state.geoCoderService}
                        seattleLatLng={seattleLatLng}
                        markerName={name}
                        addMarker={this.addMarker}
                        />
                        {/* <ConstraintSlider
                        iconType="car"
                        value={time}
                        onChange={(value) => this.updateConstraintTime(key, value)}
                      text="Minutes away by car"
                    /> */}
                </div>
            )
        })}
    </div> 
    : null}
     </div>

               {/* Maps Section */}
        <div style={{ height: '40vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_MAP_GOOGLEKEY}`,
          language: 'en'}}
          defaultZoom={12}
    defaultCenter={{ lat: ST_COOR.lat, lng: ST_COOR.lng }}
    yesIWantToUseGoogleMapApiInternals={true}
    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
{/* Pin markers on the Map*/}
{markers.map((marker, key) => {
              const { name, lat, lng } = marker;
              return (
                <MapMarker key={key} name={name} lat={lat} lng={lng} />
              );
            })}
        </GoogleMapReact>

   {/* Search Button */}
        </div>
   <Button className="mt-4 fw-md" type="primary" size="large" onClick={this.handleClick}>Search!</Button>


        {/* Results section */}
        {searchResults.length > 0 ? 
        <div> 
             {searchResults.map((result, key) => (
                    <PlaceCard info={result} key={key} />
                  ))}

        </div>
        
        : null}
        </div>
    )
}
}

