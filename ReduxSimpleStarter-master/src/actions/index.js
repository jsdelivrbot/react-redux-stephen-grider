const API_KEY = 'd744afe3260cc49bff44102ec131e0d1';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
