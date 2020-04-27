import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'

function Home () {
  return (
    <div className="home_Page">
      <div className="button_div">
     <button className="cream_btn"><Link to="/icecream">Ice Cream</Link></button>
    <button className = "brew_btn"><Link to="giphy">Giphy</Link></button>
    </div>
    </div>
  );
}

export default Home