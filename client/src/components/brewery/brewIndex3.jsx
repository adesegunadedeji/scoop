import React, { useState,  useEffect } from 'react';
import './index.css'
export default function IndexMap(){

    const[value, setValue] = useState([]);

  useEffect(() => {
    const getData = async ()=>{
        const url =  `https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/breweries?withAlternateNames=Y&withLocations=Y&key=${process.env.REACT_APP_BREWERYDBKEY}`
        console.log(url)
        try {
            const response = await fetch (url,{
                  method:"GET",
                  headers:{
                      "Content-Type": "application/json",
                  }
            });
            const parsedResponse = await response.json();
            console.log(parsedResponse.data, "PARSEDRESPONSE");
            setValue(parsedResponse.data); //Set State:
  
        } catch (error) {
            console.log(error) 
        }
    }
    getData();
  }, []);

  console.log(value);

  const mappedValue = value.map((data)=>{
    return(
        <li key={data.id}>
             <h1>{data.name}</h1>
           </li>
            )
})
  return (
      <div>
          <h1>Test</h1> 
          <ul>
              {mappedValue}
          </ul>

            </div>
  )

}

