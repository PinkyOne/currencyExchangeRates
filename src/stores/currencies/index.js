import {flow, getParent, types} from 'mobx-state-tree';
import {getCurrencies, getCurrentCurrencyCode} from 'api';

const Currency = types.model('Currency', {
    code: types.string,
    name: types.string
});
const BasicCurrency = types.model('BasicCurrency', {
    code: types.string
}).views(self => ({
    get name() {
        return getParent(self)
            .currencies
            .find(({code}) => code === self.code)
            .name;
    }
}));

export const CurrenciesStore = types.model('CurrenciesStore', {
    isFetchingCurrencies: types.optional(types.boolean, false),
    isFetchingBasicCurrency: types.optional(types.boolean, false),
    currencies: types.array(Currency),
    basicCurrency: types.optional(BasicCurrency, {code: ''})
}).actions(self => ({
    afterCreate() {
        self.init();
    },
    init() {
        self.fetch();
        self.fetchBasicCurrency();
    },
    fetch: flow(function* () {
        self.isFetchingCurrencies = true;
        try {
            const currencies = yield getCurrencies();
            self.currencies = Object.entries(currencies).map(([code, name]) => ({
                code, name
            }));
        } finally {
            self.isFetchingCurrencies = false;
        }
    }),
    fetchBasicCurrency: flow(function* () {
        self.isFetchingBasicCurrency = true;
        try {
            const code = yield getCurrentCurrencyCode();
            self.basicCurrency = {code};
        } finally {
            self.isFetchingBasicCurrency = false;
        }
    }),
    changeBasicCurrency(code) {
        self.basicCurrency = {code};
    }
}));

const store = CurrenciesStore.create({});

export default store;
