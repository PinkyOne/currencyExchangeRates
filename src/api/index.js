import axios from "axios";

const exchangeApiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
const geoLocationApiKey = process.env.REACT_APP_GEOLOCATION_API_KEY;

export const getLatestCurrencies = () => axios.get('https://openexchangerates.org/api/latest.json',{
    params: {app_id: exchangeApiKey}
});

export const getCurrencies = () => axios.get('https://openexchangerates.org/api/currencies.json');

export const getCurrentCurrency = () => axios.get('https://api.ipgeolocation.io/ipgeo',{
    params: {apiKey: geoLocationApiKey}
});