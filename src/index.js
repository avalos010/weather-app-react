import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CurrentWeather from "./components/CurrentWeather";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
