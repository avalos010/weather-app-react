import React from "react";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDay from "./FiveDay";

const App = () => (
  <Routes>
    <Route exact path="/weather-app-react" element={<CurrentWeather />} />
    <Route exact path="/forecast" element={<FiveDay />} />
  </Routes>
);

export default App;
