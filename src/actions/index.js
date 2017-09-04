import axios from 'axios';

const API_KEY='e6c8e2e06ee03d15ed893112e5b97630';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return{
        type: FETCH_WEATHER,
        payload: request
    };
}