import {types} from 'mobx-state-tree';

import currenciesStore, {CurrenciesStore} from './currencies';
import exchangeRatesStore, {ExchangeRatesStore} from './exchangesRates';
import converterStore, {ConverterStore} from './converter';

const Store = types.model('RootStore', {
    currenciesStore: CurrenciesStore,
    exchangeRatesStore: ExchangeRatesStore,
    converterStore: ConverterStore
});

const store = Store.create({currenciesStore, exchangeRatesStore, converterStore});

export default store;
