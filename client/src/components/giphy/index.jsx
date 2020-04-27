import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import './index.css'


export default function IndexTest(){
    const[giphy, setGiphy] = useState("");
    const[List, setList] = useState([]);
    
    const grabGiphy = async (search)=>{
        const term = search//this.state.search if term
        console.log(term);
         try{
           const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY}&limit=20` // Fetch the API using a search.
           console.log(term)
           const giphy = await fetch(url,{
             method:"GET",
             headers:{
                 "Content-Type": "application/json",
             }
             })
           const parsedResponse = await giphy.json();
           console.log(parsedResponse.data, "PARSEDRESPONSE");
           setList(parsedResponse.data); //Set State
         }
         catch(err){
           console.log(err);
         }
       }

       console.log(List, "LIST AFTER SET STATE");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(giphy, "Input Value");
    grabGiphy(giphy);
}
return (
    <div className="index_Page">
    <form onSubmit={handleSubmit}>
    <h1>Search for Your Favorite Gifs</h1>
    <div className="form-Box">
        <input type="text" required giphy={giphy}  className="search_field giphy" placeholder="Favorite gifs..." 
            onChange={(e)=>setGiphy(e.target.value)}/>
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

