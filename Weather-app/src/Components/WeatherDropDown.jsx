import React from "react";
const WeatherDropdown = ({ selectedCity, setSelectedCity, forecastDays, setForecastDays }) => {
  const cities = ["Ho Chi Minh", "Singapore", "Kuala Lumpur", "Tokyo", "Athens"];
  const handleForecastDaysChange = (e) => {
    const value = Math.min(3, Math.max(1, Number(e.target.value))); // Restrict to a range of 1 to 3
    setForecastDays(value);
  };
  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      >
        <option value="" disabled>
          Select a city
        </option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label style={{ marginRight: "5px" }}>Days:</label>
      <input
        type="number"
        min="1"
        max="3"
        value={forecastDays}
        onChange={handleForecastDaysChange}
        style={{
          width: "50px",
          padding: "5px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};
export default WeatherDropdown;
