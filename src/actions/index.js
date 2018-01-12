import axios from 'axios';      // https://www.npmjs.com/package/axios

// api key for http://openweathermap.org/forecast5
const API_KEY = '7114e5cb52efc6d8bcbc3935f2a12fb4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);     // similar as jquery's AJAX

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}