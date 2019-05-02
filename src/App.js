import React from 'react';
import './App.css';
import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import FortuneApi from './FortuneApi'
import WeatherApi from './WeatherApi'

function App() {
  return (
    <div className="App"> 
      <div className="dropdown">
        <button 
        className="btn btn-secondary dropdown-toggle"  
        type="button" 
        id="dropdownMenuButton" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
        DropDownButton
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

          <Link 
          to="/" 
          className="dropdown-item"
          >HOME
          </Link>
          <Link 
          to="/fortune" 
          className="dropdown-item"
          >FORTUNE
          </Link>
          <Link 
          to="/weather" 
          className="dropdown-item"
          >WEATHER
          </Link>

        </div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/fortune" component={FortuneApi}></Route>
        <Route path="/weather" component={WeatherApi}></Route>
      
      </div>
    </div>
  );
}

export default App;
