import {applySnapshot, flow, types} from 'mobx-state-tree';
import numeral from 'numeral';
import {getExchangeRates} from 'api';

import {ONE_HOUR} from 'consts/timeIntervals';

const ExchangeRate = types.model('ExchangeRate', {
        code: types.string,
        rate: types.number,
    })
    .views(self => ({
        get displayValue() {
            const {code, rate} = self;
            return `${code} - ${rate}`;
        }
    }));

export const ExchangeRatesStore = types.model('ExchangeRatesStore', {
        isFetching: types.optional(types.boolean, false),
        baseCurrencyCode: types.maybe(types.string),
        exchangeRates: types.array(ExchangeRate),
        refreshTimerId: types.maybe(types.number),
        fetchError: types.optional(types.boolean, false),
        ratesIsOutdated: types.optional(types.boolean, false),
    })
    .actions(self => ({
        afterCreate() {
            self.fetch();
        },
        fetch: flow(function* () {
            self.isFetching = true;
            try {
                const {rates, base: baseCurrencyCode} = yield getExchangeRates();
                self.resetRefreshTimer();

                const exchangeRates = Object.entries(rates).map(([code, rate]) => ({
                    code, rate
                }));

                const refreshTimerId = setTimeout(() => self.setRatesIsOutdated(true), ONE_HOUR);

                applySnapshot(self, {baseCurrencyCode, exchangeRates, refreshTimerId});
            } catch (error) {
                self.fetchError = !!error;
            } finally {
                self.isFetching = false;
            }
        }),
        updateBaseCurrencyCode(newBaseCode) {
            const {baseCurrencyCode, exchangeRates, convertCurrencies} = self;
            const newExchangeRates = [
                ...exchangeRates
                    .filter(({code}) => code !== newBaseCode)
                    .map(({code}) => ({
                        code,
                        rate: Number(convertCurrencies({value: 1, from: newBaseCode, to: code}))
                    })),
                {
                    code: baseCurrencyCode,
                    rate: Number(convertCurrencies({value: 1, from: baseCurrencyCode, to: newBaseCode}))
                }
            ];
            applySnapshot(self, {...self, baseCurrencyCode: newBaseCode, exchangeRates: newExchangeRates})
        },
        resetFetchError() {
            self.fetchError = false;
        },
        setRatesIsOutdated(value) {
            self.ratesIsOutdated = value;
        },
        resetRefreshTimer() {
            self.setRatesIsOutdated(false);
            clearTimeout(self.refreshTimerId);
        }
    }))
    .views(self => ({
        exchangeRate(currencyCode) {
            const {baseCurrencyCode, exchangeRates} = self;

            if (currencyCode === baseCurrencyCode) return 1;

            const exchangeRate = exchangeRates.find(({code}) => code === currencyCode);
            if (!exchangeRate) return null;

            return exchangeRate.rate;
        },
        convertCurrencies({value, from, to}, withFormatting = true) {
            if (from === to) return {result: value};
            const exchangeRateFrom = self.exchangeRate(from);
            const exchangeRateTo = self.exchangeRate(to);
            const error = !(exchangeRateFrom && exchangeRateTo);
            if (error) return {error};

            const convertedValue = value * exchangeRateTo / exchangeRateFrom;
            return {
                error,
                result: withFormatting ? numeral(convertedValue).format('0,0.00') : convertedValue
            };
        },
        customBaseCodeExchangeRates(baseCode) {
            const {exchangeRates, convertCurrencies} = self;

            return exchangeRates
                .map(({code}) => {
                    const conversionResult = convertCurrencies({value: 1, from: baseCode, to: code}, false);
                    return (`${code} - ${conversionResult.result}`)
                });
        }
    }));

const store = ExchangeRatesStore.create({});

export default store;
