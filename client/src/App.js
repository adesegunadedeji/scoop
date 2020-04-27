import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/index';
import IndexTest from './components/giphy/index'
import Navbar from './components/navbar';
import Footer from './components/footer/index';
import AutoComplete from './components/maps/autoComplete';
import giphyList from './components/giphy/giphyList';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/giphy" component={IndexTest}/>
      <Route path="/maps" component={AutoComplete }/>
      <Route path="/listings" component={giphyList}/>
      <Route path ='/' component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;