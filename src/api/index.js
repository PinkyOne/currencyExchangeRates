// @flow

import axios from 'axios';

const exchangeApiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
const geoLocationApiKey = process.env.REACT_APP_GEOLOCATION_API_KEY;

export const getExchangeRates = async (): { base: string, rates: Array<{ [code: string]: number }> } => {
    const {data: {rates, base}} = await axios.get('https://openexchangerates.org/api/latest.json', {
        params: {app_id: exchangeApiKey}
    });

    return {rates, base};
};

export const getCurrencies = async (): Array<{[code: string]: string}> => {
    const {data} = await axios.get('https://openexchangerates.org/api/currencies.json');

    return data;
};

export const getCurrentCurrencyCode = async (): string => {
    const {
        data: {
            currency: {code}
        }
    } = await axios.get('https://api.ipgeolocation.io/ipgeo', {
        params: {apiKey: geoLocationApiKey}
    });

    return code;
};