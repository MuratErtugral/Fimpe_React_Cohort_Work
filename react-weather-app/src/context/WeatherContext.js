import { createContext, useContext, useState, useEffect } from "react";
import cityData from "../data/cities_of_turkey.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState({
    id: 61,
    name: "Trabzon",
    latitude: "41.0015",
    longitude: "39.7178",
    population: 768417,
    region: "Karadeniz",
    icon: "",
  });
  const [weathers, setWeathers] = useState({});
  const [unit, setUnit] = useState("metric");

  const values = {
    cities,
    setCities,
    selected,
    setSelected,
    weathers,
    setWeathers,
    unit,
    setUnit,
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  function getCities() {
    setCities(cityData);
  }

  const citylat = selected?.initialvalues?.[0].latitude
    ? selected?.initialvalues?.[0].latitude
    : selected.latitude;

  const citylon = selected?.initialvalues?.[0].longitude
    ? selected?.initialvalues?.[0].longitude
    : selected.longitude;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${citylat}&lon=${citylon}&exclude=minutely,hourly&units=${unit}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeathers(data));
    return;
  }, [selected, unit]);

  useEffect(() => {
    getCities();
    return;
  }, [unit]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
