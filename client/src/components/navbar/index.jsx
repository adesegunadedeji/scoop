import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Navbar(){

    return (
        <div className="Navbar">
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="check_btn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Lets Brew </label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/maps">Maps</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/brewery">Brewery</Link></li>
                    <li><Link to="/icecream">IceCream</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </div>
    )
}