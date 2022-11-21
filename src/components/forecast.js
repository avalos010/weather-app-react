import React from "react";

const Forecast = ({ forecastData }) => {
  return (
    <div className="forecast">
      {forecastData.map((w, index) => {
        return (
          <div className="forecast_container" key={index}>
            <p className="forcecast_date">{w.dt_txt}</p>
            <div className="forecast_min_max">
              <p>Min: {w.main.temp_min}&#8457;</p>
              <p>Max: {w.main.temp_max}&#8457;</p>
            </div>
            <div className="forecast_description">
              <p className="forecast_description_text">{w.weather[0].main}</p>
              <img
                src={`https://openweathermap.org/img/w/${w.weather[0].icon}.png`}
                className="mx-auto card-img-top"
                alt={w.weather[0].description}
              />
            </div>
            <p className="forecast_wind">wind: {w.wind.speed} mph</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
