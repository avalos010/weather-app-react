import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../api";
import usePosition from "./usePosition";

export default function useForecast(location = undefined) {
  const { latitude, longitude } = usePosition();
  console.log(location);
  return useQuery(
    ["forecast"],
    () => {
      return location
        ? getForecast(null, null, location.city)
        : getForecast(latitude, longitude);
    },
    {
      enabled: location ? !!location : !!latitude && !!longitude,
    }
  );
}
