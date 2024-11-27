import React, { useState, useEffect } from "react";
import WeatherDropdown from "./Components/WeatherDropDown";
import WeatherDisplay from "./Components/WeatherDisplay";
const App = () => {
  const [selectedCity, setSelectedCity] = useState(() => {
    const savedCity = localStorage.getItem("selectedCity");
    return savedCity ? savedCity : "";
  });
  const [forecastDays, setForecastDays] = useState(() => {
    const savedDays = localStorage.getItem("forecastDays");
    return savedDays ? parseInt(savedDays, 10) : 3;
  });
  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem("selectedCity", selectedCity);
    }
  }, [selectedCity]);
  useEffect(() => {
    localStorage.setItem("forecastDays", forecastDays);
  }, [forecastDays]);
  return (
    <div>
      <WeatherDropdown
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        forecastDays={forecastDays}
        setForecastDays={setForecastDays}
      />
      <WeatherDisplay city={selectedCity} forecastDays={forecastDays} />
    </div>
  );
};

export default App;
