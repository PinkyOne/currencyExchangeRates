import {flow, types} from 'mobx-state-tree';
import numeral from 'numeral';
import {getExchangeRates} from 'api';

const ExchangeRate = types.model('ExchangeRate', {
    code: types.string,
    rate: types.number,
});

export const ExchangeRatesStore = types.model('ExchangeRatesStore', {
        isFetching: types.optional(types.boolean, false),
        baseCurrencyCode: types.maybe(types.string),
        exchangeRates: types.array(ExchangeRate),
    })
    .actions(self => ({
        afterCreate() {
            self.fetch();
        },
        fetch: flow(function* () {
            self.isFetching = true;
            try {
                const {rates, base} = yield getExchangeRates();
                self.exchangeRates = Object.entries(rates).map(([code, rate]) => ({
                    code, rate
                }));
                self.baseCurrencyCode = base;
            } finally {
                self.isFetching = false;
            }
        })
    }))
    .views(self => ({
        exchangeRate(currencyCode) {
            const {baseCurrencyCode, exchangeRates} = self;

            if (currencyCode === baseCurrencyCode) return 1;

            const exchangeRate = exchangeRates.find(({code}) => code === currencyCode);
            if (!exchangeRate) return null;

            return exchangeRate.rate;
        },
        convertCurrencies({value, from, to}) {
            if (from === to) return value;
            const exchangeRateFrom = self.exchangeRate(from);
            const exchangeRateTo = self.exchangeRate(to);
            return numeral(value * exchangeRateTo / exchangeRateFrom).format('0,0.00');
        }
    }));

const store = ExchangeRatesStore.create({});

export default store;
