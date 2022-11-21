import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../api";
import usePosition from "./usePosition";

export default function useCurrentWeather(location = undefined) {
  const { latitude, longitude } = usePosition();
  console.log(location);
  return useQuery(
    ["currentWeather"],
    () => {
      return location
        ? getCurrentWeather(null, null, location.city)
        : getCurrentWeather(latitude, longitude);
    },
    {
      enabled: location ? !!location : !!latitude && !!longitude,
    }
  );
}
