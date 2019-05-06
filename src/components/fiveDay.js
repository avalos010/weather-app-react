import React, { useState, useEffect, useContext } from "react";
import "../styles/forecast.css";
import Forecast from "../components/forecast";
import Spinner from "./Spinner";
import { lat, lon } from "../getCoordinates";
import { Link } from "react-router-dom";

const FiveDay = props => {
  const [forecastData, setForecastData] = useState(null);

  const handleLoadForecast = async () => {
    if (lat) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
      );
      const json = await response.json();
      setForecastData(json.list);
      console.log(json.list);
    }
  };

  useEffect(() => {
    handleLoadForecast();
  }, []);

  return (
    <div className="forecast_parent">
      <div className="forecast_nav">
        <h2>Forecast </h2>
        <Link to="/" className="btn btn-dark ml-3">
          &larr; Home
        </Link>
      </div>

      {forecastData ? <Forecast forecastData={forecastData} /> : <Spinner />}
    </div>
  );
};

export default FiveDay;
