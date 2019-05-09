import {types} from 'mobx-state-tree';

import currenciesStore, {CurrenciesStore} from './currencies';
import exchangeRatesStore, {ExchangeRatesStore} from './exchangesRates';

const Store = types.model('RootStore', {
    currenciesStore: CurrenciesStore,
    exchangeRatesStore: ExchangeRatesStore,
});

const store = Store.create({currenciesStore, exchangeRatesStore});

export default store;
