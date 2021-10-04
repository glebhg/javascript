// fetch weather
const apiKey = "3c35006fceb2782bcc306a780629d75f";

export const buildUrl = (inputVal, apiKey) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

export const fetchWeather = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
