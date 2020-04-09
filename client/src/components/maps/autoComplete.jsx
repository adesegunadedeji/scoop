import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

export default function AutoComplete (){
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    });

    const handleSelect = async value =>{
        try {
            const response = await geocodeByAddress(value);
            const latLng = await getLatLng(response[0]);
            console.log(response);
            console.log(latLng);
            
            setAddress(value);
            setCoordinates(latLng)
        } catch (error) {
            console.log(error);
        }
    };
        return( <div>
            <PlacesAutocomplete 
            value={address} 
            onChange={setAddress}
            onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading })=> 
            <div>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude:{coordinates.lng}</p>
                
                <input
              {...getInputProps({
                placeholder: "Type Address", className:"inputAutoComplete"
              })}
            />
            <div>
                {loading? <div> loading ... </div> : null}

                {suggestions.map((suggestion)=> {
                    console.log(suggestion)
                    const style ={
                        backgroundColor : suggestion.active ? "#F75940" : "#fff "
                    }
                //     const style = suggestion.active
                //   ? { backgroundColor: '#F75940', cursor: 'pointer' }
                //   : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return <div {...getSuggestionItemProps(suggestion,{style})}> {suggestion.description}</div>

                })}
            </div>
            </div>
            }
            </PlacesAutocomplete>
            </div>
        )
    }