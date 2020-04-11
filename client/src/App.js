import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import IndexMap from './components/brewery/brewIndex3';
import Home from './components/home/index';
import brewIndex from './components/brewery/index'
import Navbar from './components/navbar';
import Footer from './components/footer/index'
import AutoComplete from './components/maps/autoComplete';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/brewerytest" component={IndexMap}/>
      <Route path="/brewery" component={brewIndex}/>
      <Route path="/maps" component={AutoComplete }/>
      <Route path ='/' component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;