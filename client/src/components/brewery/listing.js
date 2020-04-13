import React, { useState} from 'react';
 import './listings.css';
const Listings = props => {
     const [profileState, setProfileState] = useState(props);
     const Value = profileState.location.state;
     console.log(Value, "VALUE OF PROPS");
    const mappedValue = Object.entries(Value).map(([key, index]) => {
        // Pretty straightforward - use key for the key and index for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
console.log(key, "KEY");
console.log(index, "INDEX")
return (
    <li key = {key}>
        <h4>{index.name}</h4>
    </li>
)
    })    
    return (
        <div>
            <h1 style={{color: "red"}}>test</h1>
            <ul>
              {mappedValue}
          </ul>
        </div>
    )
}

export default Listings