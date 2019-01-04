import React, { Component,Fragment } from 'react';

import '../App.css';
import CurrentWeather from './CurrentWeather'

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
      <Fragment>
        {this.state.lat && <CurrentWeather lon={this.state.lon} lat={this.state.lat}/>}
      </Fragment>
    );
  }
}

export default App;
