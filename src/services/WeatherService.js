const apiBase = 'https://api.openweathermap.org/data/2.5';

export default {
  async fetchWeather(city) {
    const response = await fetch(`${apiBase}/weather?q=${city}&appid=ae022e0a1551eb3e2833113e3d2da947`);
    const weather = await response.json();
    return {
      ...weather,
      temp: weather.main.temp
    };
  }
}
