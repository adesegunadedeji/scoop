import React, { useState } from 'react';
import {Redirect, useParams} from 'react-router-dom';

export default function IndexTest(){
const[value, setValue] = useState("");
const[List, setList] = useState([]);


const getBeer = async (search)=>{
    try {
    const brewedSearch = await fetch (`https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=${search}&type=beer&key=${process.env.REACT_APP_BREWERYDBKEY}`,
    {
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        }
    });
    const parsedResponse = await brewedSearch.json();
    console.log(parsedResponse.data, "PARSEDRESPONSE");
    setList(parsedResponse.data); //Set State
}
 catch (error) {
     console.log(error)  
}}

console.log(List, "LIST AFTER SET STATE");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, "Input Value");
    getBeer(value);
}
//let { slug } = useParams();
// console.log(slug);

return (
    <div className="brew_Index">
    <form onSubmit={handleSubmit}>
    <h1>Find a Local Brewery Near You</h1>
    <div className="form-Box">
        <input type="text" required value={value}  className="search_field liquor" placeholder="Seattle's Beer ..." 
            onChange={(e)=>setValue(e.target.value)}/>
        <button className = "search_btn">Search</button>
        </div>
    </form>
    {
    List.length > 0 &&  
     <Redirect to = {{pathname: '/listings', state:{...List}} }/>
}
    </div>
)
}