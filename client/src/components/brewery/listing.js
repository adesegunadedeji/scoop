import React, { useState } from 'react';
// import './index.css';
// const Listings = props => {
//     const [profileState, setProfileState] = useState(props);
//    //console.log(profileState, "Profile state")
//     //console.log(props.location.state);
//     const listings = props.location.state.map((listings)=>{
//         return(
//             <li key = {listings.id}> 
//     <h1>{listings.style.descriptions}</h1>
//             </li>
//         )
//     })
//     return(
//         <div> 
//                <div>
//                    <h1 style={{color: "red"}}>Test</h1>
               
//                <ul>
//                    {listings}
//                    </ul></div> 
//         </div>
//     )
// }
export default function Listings (props){
     const [profileState, setProfileState] = useState(props);
     console.log(profileState.location.state[0].name, "PROPS")
    // const mappedValue = profileState.map((data)=>{
    //     console.log(data)
    //     return (
    //         <li key = {data.id}>
    //             <h1>{data.name}</h1>
    //         </li>
    //     )

    // });
    return (
        <div>
            <h1 style={{color: "red"}}>test</h1>
            {/* <ul>
              {mappedValue}
          </ul> */}

        </div>
    )

}