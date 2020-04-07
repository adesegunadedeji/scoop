import React from 'react'
import './index.css'


function Navbar(){

    return (
        <div className="Navbar">
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" class="check_btn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Lets Brew </label>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="brewery">Brewery</a></li>
                    <li><a href="#">IceCream</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar