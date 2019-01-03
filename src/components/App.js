import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation.js'
import CurrentWeather from './CurrentWeather.js'
import Input from './input.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navigation />
        <CurrentWeather/>
      </div>
    );
  }
}

export default App;
