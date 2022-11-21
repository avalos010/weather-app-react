import axios from "axios";

export const getForecast = async (
  latitude,
  longitude,
  location = undefined
) => {
  if (!location && longitude) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );
    // console.log(response.data);

    return response.data;
  } else {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );

    //   console.log(response.data);
    return response.data;
  }
};

export const getCurrentWeather = async (
  latitude,
  longitude,
  location = undefined
) => {
  if (!location && longitude) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );
    return response.data;
  } else {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=601eae66287223be5956bb277ffa86d5&units=imperial`
    );

    //   console.log(response.data);
    return response.data;
  }
};
