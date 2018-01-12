import axios from 'axios';      // https://www.npmjs.com/package/axios

// api key for http://openweathermap.org/forecast5
const API_KEY = '7114e5cb52efc6d8bcbc3935f2a12fb4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;
const UNIT = 'metric';     // 'standard', 'metric', 'imperial'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'us') {
    const url = `${ROOT_URL}q=${city},${country}&units=${UNIT}&appid=${API_KEY}`;
    const request = axios.get(url);     // similar as jquery's AJAX, "request" is a Promise

    //console.log('Request: ', request);

    return {
        type: FETCH_WEATHER,
        // "request" us a Promise, when Redux see a Promise, "payload" become a Middleware,
        // so it will stop the action until the Promise been resolved.
        // Ex: console.log show Promise as "pending" when search
        payload: request,
    };
}