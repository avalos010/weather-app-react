import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation.js'
import CurrentWeather from './CurrentWeather.js'
import Input from './input.js';

class App extends Component {
  state = {
    lat: null,
    lon: null
  }
  componentDidMount = ()  => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleLocationSuccess, this.handleLocationError)
    }
  }

  handleLocationSuccess = (position) => {
    const {latitude, longitude} = position.coords;
    this.setState({
      lat: latitude,
      lon: longitude
    })

  }

  handleLocationError = () => {
    alert('Please allow location')
  }


  render() {
    return (
      <div className="App">
        <Navigation />
        {this.state.lat && <CurrentWeather lon={this.state.lon} lat={this.state.lat}/>}
      </div>
    );
  }
}

export default App;
