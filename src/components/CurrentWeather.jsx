import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCurrentWeather from "../hooks/useCurrentWeather";
import WeatherInfo from "./WeatherInfo";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [inputLocation, setInputLocation] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const { data: currentWeather, isLoading } = useCurrentWeather();

  // const handleUserInput = async () => {
  //   setFinalValue(inputLocation);
  //   if (currentWeather) {
  //     setWeather(currentWeather);
  //   }
  // };

  const handleUserLocation = async () => {
    if (currentWeather) {
      setWeather(currentWeather);
    }
  };

  const title = weather ? weather.name : null;
  return (
    <div className="jumbotron  text-center" style={{ height: "95vh" }}>
      <h2 className="display-4 mt-3">Current Weather</h2>
      {weather && <WeatherInfo {...weather} />}

      {/* {!title && (
        <div className="d-flex flex-column">
          <label htmlFor="location">Enter City:</label>
          <input
            className=" mx-auto border border-white rounded"
            type="text"
            onChange={(e) => setInputLocation(e.target.value)}
          />
        </div>
      )} */}
      {!title && (
        <div className="d-flex flex-row justify-content-center mt-3">
          {/* <button onClick={handleUserInput} className="btn btn-dark ml-3">
            Search
          </button> */}
          <button onClick={handleUserLocation} className="btn btn-light ml-3">
            Find Me
          </button>
        </div>
      )}
      {title && (
        <Link
          state={{ city: inputLocation }}
          className=" mt-3 btn btn-dark"
          to={{
            pathname: "/forecast",
          }}
        >
          See Forecast
        </Link>
      )}
    </div>
  );
}

export default CurrentWeather;
