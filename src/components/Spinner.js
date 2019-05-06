import React from "react";
import Loader from "react-loader-spinner";
import "../styles/forecast.css";

const Spinner = () => (
  <div className="loader-spinner">
    <Loader type="TailSpin" color="#fff" height={100} width={80} />
    <p>Loading Forecast...</p>
  </div>
);

export default Spinner;
