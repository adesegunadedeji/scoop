import React, { useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, 
    MDBCol} from 'mdbreact';
 import './listings.css';
import ModalPage from './modal';
const Listings = (props) => {
     const [profileState, setProfileState] = useState(props);
     const Value = profileState.location.state;
     console.log(Value, "VALUE oF PROPS")

    const mappedValue = Object.entries(Value).map(([key, index]) => {
        // Pretty straightforward - use key for the key and index for the value.
        // Just to clarify: unlike object destructuring, the parameter names don't matter here.
//console.log(key, "KEY");
// console.log(index, "INDEX")
return (
   
    <MDBCol md='4' key = {key}>
    <MDBCard>
      <MDBCardImage
        top
        src = "https://images.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        overlay='white-slight'
        hover
        waves
        alt='MDBCard image cap'/>
      <MDBCardBody className='elegant-color white-text rounded-bottom'>
        <MDBCardTitle>{index.name}</MDBCardTitle>
        <hr className='hr-light' />
        <MDBCardText className='white-text'>
        Like what you see or interested in our beers?
        </MDBCardText>
        <ModalPage Value= {Value}/>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
)
    })    
    return (
        <div>
             <MDBRow>
              {mappedValue}
              </MDBRow>
        </div>
    )
}

export default Listings