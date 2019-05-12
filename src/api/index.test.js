import axios from 'axios';
import {getCurrencies, getCurrentCurrencyCode, getExchangeRates} from 'api';
import {mockedExchangeRatesResponse, mockedGetCurrenciesResponse, mockedGetCurrentCurrencyResponse} from './mocks';

jest.mock('axios');

test('get Exchange Rates', async () => {
    axios.get.mockResolvedValue(mockedExchangeRatesResponse);

    const {base, rates} = await getExchangeRates();
    expect(rates).toMatchObject(mockedExchangeRatesResponse.data.rates);
    expect(base).toBe(mockedExchangeRatesResponse.data.base);
});

test('get currencies', async () => {
    axios.get.mockResolvedValue(mockedGetCurrenciesResponse);

    const currencies = await getCurrencies();
    expect(currencies).toMatchObject(mockedGetCurrenciesResponse.data);
});

test('get current currency', async () => {
    axios.get.mockResolvedValue(mockedGetCurrentCurrencyResponse);

    const code = await getCurrentCurrencyCode();
    expect(code).toBe('RUB');
});
