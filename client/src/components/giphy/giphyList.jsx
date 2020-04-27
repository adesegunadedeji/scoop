import React ,{useState} from 'react'
import './index.css'
function GiphyList(props){
    const [profileState, setProfileState] = useState(props);
    const Value = profileState.location.state;
    console.log(Object.values(Value), "CHECK THIS OUT");
    const giphy = Object.values(Value).map(giphy=>{
        console.log(giphy.images.downsized.url);
    return(
        <li key={giphy.id}>
             <img className = "image" src={giphy.images.downsized.url} alt="gif"/>
           </li>
            )
})
return(
  <div>
      <h1>This is a list of Your Favorite Gifs</h1>
      <ul>
          {giphy}
      </ul>
  </div>
)
}
export default GiphyList