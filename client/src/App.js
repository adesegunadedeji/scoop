import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import brewIndex from './components/brewery/index';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path={"/brewery"} component ={brewIndex}/>
      <h1>Presentational Page</h1>
      </Switch>
    </div>
  );
}

export default App;
