import React, { Component } from "react";
import { Link } from "react-router-dom";

import WeatherInfo from "./weatherInfo";

class CurrentWeather extends Component {
  state = {
    city: "",
    thumbnail: "",
    title: "",
    description: "",
    temp: 0,
    lon: null,
    lat: null,
    showInput: true
  };

  handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          this.setState({ lat: latitude, lon: longitude, showInput: false });
          this.handleWaitonLocation();
        },
        () => alert("Please Allow Location")
      );
    }
  };

  handleUserInput = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      }&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );

    const result = await response.json();

    result
      ? this.setState({
          title: result.name,
          thumbnail: result.weather[0].icon,
          description: result.weather[0].description,
          temp: Math.floor(result.main.temp)
        })
      : console.log("loading");
  };

  handleWaitonLocation = async () => {
    const { lon, lat } = this.state;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`;
    const response = await fetch(url);
    const result = await response.json();

    result
      ? this.setState({
          title: result.name,
          thumbnail: result.weather[0].icon,
          description: result.weather[0].description,
          temp: Math.floor(result.main.temp)
        })
      : console.log("loading");
  };

  render() {
    const { temp, title, thumbnail, description, city } = this.state;
    return (
      <div className="jumbotron  text-center" style={{ height: "95vh" }}>
        <h2 className="display-4 mt-3">Current Weather</h2>
        {title && (
          <WeatherInfo
            temp={temp}
            title={title}
            thumbnail={thumbnail}
            description={description}
          />
        )}
        {!title && (
          <div className="d-flex flex-column">
            <label htmlFor="location">Enter City:</label>
            <input
              className=" mx-auto border border-white rounded"
              type="text"
              id="location"
              onChange={e => this.setState({ city: e.target.value })}
            />
          </div>
        )}
        {!title && (
          <div className="d-flex flex-row justify-content-center mt-3">
            <button
              onClick={this.handleUserInput}
              className="btn btn-dark ml-3"
            >
              Search
            </button>
            <button
              onClick={this.handleUserLocation}
              className="btn btn-light ml-3"
            >
              Find Me
            </button>
          </div>
        )}
        {title && (
          <Link
            state={this.state.city}
            className=" mt-3 btn btn-dark"
            to={{
              pathname: "/forecast",
              city
            }}
          >
            See Forecast
          </Link>
        )}
      </div>
    );
  }
}

export default CurrentWeather;
