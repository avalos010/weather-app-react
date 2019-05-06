import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDay from "./fiveDay";

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <CurrentWeather />} />
    <Route exact path="/forecast" render={() => <FiveDay />} />
  </Switch>
);

export default App;
