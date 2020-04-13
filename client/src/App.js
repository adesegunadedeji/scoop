import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import IndexMap from './components/brewery/brewIndex3';
import Home from './components/home/index';
import IndexTest from './components/brewery/brewIndex2'
import Navbar from './components/navbar';
import Footer from './components/footer/index'
import AutoComplete from './components/maps/autoComplete';
import Listings from './components/brewery/listing'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/brewerytest" component={IndexMap}/>
      <Route path="/brewery" component={IndexTest}/>
      <Route path="/maps" component={AutoComplete }/>
      <Route path="/listings" component={Listings}/>
      <Route path ='/' component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;