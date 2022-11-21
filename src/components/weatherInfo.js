import React from "react";

function WeatherInfo(weather) {
  return (
    <div className="container">
      <div className="card p-3">
        <p className="lead font-weight-bold">{weather.name}</p>
        <div className="m-3">
          {weather && (
            <img
              style={{ width: 80 }}
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              className="mx-auto card-img-top"
              alt={weather.weather.description}
            />
          )}
        </div>
        <div className="card-body ">
          <p className="card-text">
            <span className="font-weight-bold">{weather.main.temp}°F</span>
            <br />
            {weather.weather.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
