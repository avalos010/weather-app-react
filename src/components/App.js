import React from "react";
import { Routes, Route } from "react-router-dom";

import "../App.css";
import CurrentWeather from "./CurrentWeather";
import FiveDay from "./fiveDay";

const App = () => (
  <Routes>
    <Route exact path="" element={<CurrentWeather />} />
    <Route exact path="/forecast" element={<FiveDay />} />
  </Routes>
);

export default App;
