import React, { useState, useEffect } from "react";
import "../styles/forecast.css";
import Forecast from "./Forecast";
import Spinner from "./Spinner";
import { Link, useLocation } from "react-router-dom";
import useForecast from "../hooks/useForecast";

const FiveDay = (props) => {
  const [forecastData, setForecastData] = useState(null);
  // const [city, setCity] = useState(null);
  // const { state } = useLocation();
  const { data: forecast, isLoading } = useForecast();

  useEffect(() => {
    setForecastData(forecast && forecast.list);
  }, [forecast]);

  // useEffect(() => {
  //   console.log(state);
  //   setForecastData(forecast && forecast.list);
  // }, [state]);

  return (
    <div className="forecast_parent">
      <div className="forecast_nav">
        <h2>Forecast </h2>
        <Link to="/" className="btn btn-dark ml-3">
          &larr; Home
        </Link>
      </div>
      {/* <h4 className="text-center">{city}</h4> */}
      {isLoading && <Spinner />}
      {forecastData ? <Forecast forecastData={forecastData} /> : null}
    </div>
  );
};

export default FiveDay;
