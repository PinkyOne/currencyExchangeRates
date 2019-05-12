/*********************************************************************
 *********** Add integration tests with exchangeRates Store ***********
 **********************************************************************/
import {ConverterStore} from './index';
import {getSnapshot} from 'mobx-state-tree';


test('Converter - Create Store', () => {
    const store = ConverterStore.create({});
    const snapshot = getSnapshot(store);

    expect(snapshot).toEqual({results: []});
});

test('Converter - Convert first time', () => {
    const store = ConverterStore.create({});
    store.convert('1 usd in rub');

    const snapshot = getSnapshot(store);
    expect(snapshot.results.length).toBe(1);
});
test('Converter - Convert second time', () => {
    const store = ConverterStore.create({});
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');

    const snapshot = getSnapshot(store);
    expect(snapshot.results.length).toBe(2);
});
test('Converter - Convert third time', () => {
    const store = ConverterStore.create({});
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');

    const snapshot = getSnapshot(store);
    expect(snapshot.results.length).toBe(3);
});
test('Converter - Convert fourth time', () => {
    const store = ConverterStore.create({});
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');
    store.convert('1 usd in rub');

    const snapshot = getSnapshot(store);
    expect(snapshot.results.length).toBe(3);
});


test('Converter - Result Check', () => {
    const mockRootStore = {exchangeRatesStore: {convertCurrencies: () => ({result: 'result'})}};

    const store = ConverterStore.create({}, {getRoot: () => mockRootStore});
    store.convert('1 usd in rub');

    expect(store.results[0].result).toEqual({'conversionResult': 'result'});
});

test('Converter - Parse error Check', () => {
    const mockRootStore = {exchangeRatesStore: {convertCurrencies: () => ({result: 'result'})}};

    const store = ConverterStore.create({}, {getRoot: () => mockRootStore});
    store.convert('1.... usd in rub');

    expect(store.results[0].result).toEqual({
        'conversionError': undefined,
        'parseError': true,
    });
});

test('Converter - Conversion error Check', () => {
    const mockRootStore = {exchangeRatesStore: {convertCurrencies: () => ({error: 'error'})}};

    const store = ConverterStore.create({}, {getRoot: () => mockRootStore});
    store.convert('1 usd in rub');

    expect(store.results[0].result).toEqual({
        'conversionError': 'error',
        'parseError': false,
    });
});
