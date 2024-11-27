import React, { useEffect, useState } from "react";
import { getWeather } from "./api";
const WeatherDisplay = ({ city, forecastDays }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (city) {
      getWeather(city, forecastDays)
        .then((data) => setWeather(data))
        .catch((err) => console.error("Error fetching weather:", err));
    }
  }, [city, forecastDays]);
  if (!city) return <p>Select a city to see the weather.</p>;
  if (!weather) return <p>Loading weather data...</p>;
  const groupedForecast = [];
  let currentDay = null;
  weather.list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const day = date.getDate();
    if (currentDay !== day) {
      currentDay = day;
      groupedForecast.push({
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
        data: [item],
      });
    } else {
      groupedForecast[groupedForecast.length - 1].data.push(item);
    }
  });
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><strong>Temperature:</strong> {weather.list[0].main.temp} °C</p>
      <p><strong>Condition:</strong> {weather.list[0].weather[0].description}</p>
      <h3>Forecast:</h3>
      {groupedForecast.map((forecast, index) => (
        <div key={index}>
          <h4>{forecast.date}</h4>
          <ul>
            {forecast.data.map((item, i) => (
              <li key={i}>
                {new Date(item.dt_txt).toLocaleTimeString()}: {item.main.temp}°C, {item.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default WeatherDisplay;
