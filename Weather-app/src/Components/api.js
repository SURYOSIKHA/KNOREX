import axios from "axios";
const API_KEY = "517582c99ce1b6719974d1e065818cda";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export const getWeather = async (city, days = 3) => {  
  const count = days * 8;
  const url = `${BASE_URL}/forecast?q=${city}&cnt=${count}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};
