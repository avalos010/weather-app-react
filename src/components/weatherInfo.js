import React from "react";

function WeatherInfo({ title, thumbnail, temp, description }) {
  return (
    <div className="container">
      <div className="card p-3">
        <p className="lead font-weight-bold">{title}</p>
        <div className="m-3">
          {thumbnail && (
            <img
              style={{ width: 80 }}
              src={`https://openweathermap.org/img/w/${thumbnail}.png`}
              className="mx-auto card-img-top"
              alt={description}
            />
          )}
        </div>
        <div className="card-body ">
          <p className="card-text">
            <span className="font-weight-bold">{temp}°F</span>
            <br />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
