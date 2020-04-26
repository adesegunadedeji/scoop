import React, { useState} from 'react';
import {Card, Button, CardImg, CardTitle, CardText,Col, Row, CardBody} from 'reactstrap';
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
   
    <Col md='4' key = {key}>
    <Card>
      <CardImg
        top
        src = "https://images.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        overlay='white-slight'
        hover
        waves
        alt='MDBCard image cap'/>
      <CardBody className='elegant-color white-text rounded-bottom'>
        <CardTitle>{index.name}Lets Test this Crap</CardTitle>
        <hr className='hr-light' />
        <CardText className='white-text'>
        Like what you see or interested in our beers?
        </CardText>
        <ModalPage Value= {Value}/>
      </CardBody>
    </Card>
  </Col>
)
    })    
    return (
        <div>
             <Row>
              {mappedValue}
              </Row>
        </div>
    )
}

export default Listings