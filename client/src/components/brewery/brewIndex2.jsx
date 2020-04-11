import React, { useState } from 'react';

export default function IndexTest(){
const [value, setValue] = useState("");

const getBeer = async (search)=>{
    const brewedSearch = await fetch (`https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/search?q=${search}&type=beer&key=${process.env.REACT_APP_BREWERYDBKEY}`);
    const parsedResponse = await brewedSearch.json();
    console.log(parsedResponse, "PARSEDRESPONSW");
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, "Input Value");
    getBeer(value);
}

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
    </div>
)

}