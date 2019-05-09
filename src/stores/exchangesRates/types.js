// @flow
import type {ConvertObject} from 'utils';

export type ExchangeRatesStore = {
    convertCurrencies: (convertObject: ConvertObject) => string,
    exchangeRate:(currencyCode:string)=> number,
};
