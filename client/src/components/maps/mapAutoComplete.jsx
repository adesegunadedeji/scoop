import React, {Component} from 'react';
import Autocomplete from 'react-autocomplete';

class MapAutoComplete extends Component{
    constructor(props){
        super(props);
        this.state={
            suggestion: [],
            dataSource: [],
            seattleLatLng: this.props.seattleLatLng,
            autocompleteService: this.props.autocompleteService,
            geoCoderService: this.props.geoCoderService
        }
    }
     // Runs after clicking away from the input field or pressing 'enter'.
  // Geocode the location selected to be created as a marker.
  onSelect = ((value) => {
    this.state.geoCoderService.geocode({ address: value }, ((data) => {
      const { location } = data[0].geometry;
      this.props.addMarker(location.lat(), location.lng(), this.props.markerName);
    }))
  });

 // Runs a search on the current value as the user types in the AutoComplete field.
 handleSearch = ((value) => {
    const autocompleteService = this.state.autocompleteService;
    const seattleLatLng = this.state.seattleLatLng;

    console.log(autocompleteService, "AUTOCOMPLETESERVICCE")
    // Search only if there is a string
    if (value.length > 0) {
      const searchQuery = {
        input: value,
        location: seattleLatLng, // Search within Seattle
        radius: 30000, // With a 30km radius
      };
      autocompleteService.getQueryPredictions(searchQuery, ((data) => {
        // The name of each GoogleMaps suggestion object is in the "description" field
        if (data) {
          const dataSource = data.map((data) => data.description);
          this.setState({ dataSource: dataSource,
             suggestions: data });
        }
      }));
    }
  });

    render(){
        return(
            <Autocomplete
            dataSource={this.state.dataSource}
            onSearch={this.handleSearch}
            onSelect={this.onSelect}
            placeholder="Address"/>
          )
    }

}

export default MapAutoComplete