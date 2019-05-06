import React, { useState, useEffect, useContext } from "react";
import "../styles/forecast.css";
import Forecast from "../components/forecast";
import Spinner from "./Spinner";
import { lat, lon } from "../getCoordinates";
import { Link } from "react-router-dom";

const FiveDay = props => {
  const [forecastData, setForecastData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [city, setCity] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLoadForecast = async () => {
    if (lat && lon) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
      );
      const json = await response.json();

      if (json) {
        setForecastData(json.list);
        console.log(json);
        setCity(`${json.city.name}, ${json.city.country}`);
      }
    }
  };

  const handleUserLocationInput = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        props.location.city
      }&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );
    const json = await response.json();

    if (json) {
      setForecastData(json.list);
      console.log(json);
      setCity(`${json.city.name}, ${json.city.country}`);
    }
  };

  useEffect(() => {
    if (!props.location.city && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLon(longitude);
          handleLoadForecast();
        },
        () => alert("Please Allow Location")
      );
    } else if (props.location.city) {
      handleUserLocationInput();
      console.log(props.location.city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <div className="forecast_parent">
      <div className="forecast_nav">
        <h2>Forecast </h2>
        <Link to="/" className="btn btn-dark ml-3">
          &larr; Home
        </Link>
      </div>
      <h4 className="text-center">{city}</h4>
      {forecastData ? <Forecast forecastData={forecastData} /> : <Spinner />}
    </div>
  );
};

export default FiveDay;
