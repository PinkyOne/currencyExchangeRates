import {applySnapshot, getRoot, types} from 'mobx-state-tree';
import moment from 'moment';
import {parseStringToConvert} from 'utils';

const ConvertResult = types.model('ConvertResult', {
    conversionString: types.string,
    timestamp: types.optional(types.number, () => moment().unix()),

}).views(self => ({
    get convertObject() {
        return parseStringToConvert(self.conversionString);
    },
    get result() {
        const {exchangeRatesStore} = getRoot(self);
        const {convertObject} = self;
        let conversionResult = exchangeRatesStore.convertCurrencies(convertObject);
        if (conversionResult === 'NaN') conversionResult = exchangeRatesStore.convertCurrencies(convertObject, false);

        return conversionResult;
    },
    get displayValue() {
        const {conversionString, timestamp, result} = self;
        return `${conversionString} at ${moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a')}: ${result}`;
    }
}));

export const ConverterStore = types.model('ConverterStore', {
    results: types.array(ConvertResult)
}).actions(self => ({
    convert(conversionString) {
        const {results} = self;

        const newResults = [{conversionString}, ...results];
        if (newResults.length > 3) newResults.pop();

        applySnapshot(self.results, newResults);
    }
}));

const store = ConverterStore.create({});

export default store;
