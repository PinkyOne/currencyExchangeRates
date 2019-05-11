// @flow
import type {ConvertObject} from 'utils/types';

export type ExchangeRate = {
    code: string,
    rate: number,
    displayValue: string,
};

export type ExchangeRatesStore = {
    customBaseCodeExchangeRates: (code: string) => Array<string>,
    fetch: () => Promise<void>,
    convertCurrencies: (convertObject: ConvertObject) => string,
    exchangeRate: (currencyCode: string)=> number,
    exchangeRates: Array<ExchangeRate>,
    isFetching: boolean,
};
