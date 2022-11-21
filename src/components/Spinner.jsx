import React from "react";
import { Oval } from "react-loader-spinner";
import "../styles/forecast.css";

const Spinner = () => (
  <div className="loader-spinner">
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
      className="loader-oval-spinner"
    />
    <p>Loading Forecast...</p>
  </div>
);

export default Spinner;
