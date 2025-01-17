import {applySnapshot, getEnv, getRoot, types} from 'mobx-state-tree';
import moment from 'moment';
import {parseStringToConvert, generateId} from 'utils';

const ConvertResult = types.model('ConvertResult', {
    id: types.optional(types.identifier, generateId),
    conversionString: types.string,
    timestamp: types.optional(types.number, () => moment().unix()),
}).views(self => ({
    get convertObject() {
        return parseStringToConvert(self.conversionString);
    },
    get result() {
        const localGetRoot = getEnv(self).getRoot || getRoot;
        const {exchangeRatesStore} = localGetRoot(self);
        const {convertObject, error: parseError} = self;

        let {result: conversionResult, error: conversionError} = parseError
            ? {}
            : exchangeRatesStore.convertCurrencies(convertObject);
        if (parseError || conversionError) return {parseError, conversionError};

        if (conversionResult === 'NaN') {
            const {result} = exchangeRatesStore.convertCurrencies(convertObject, false);
            conversionResult = result;
        }

        return {conversionResult};
    },
    get error() {
        return !self.convertObject;
    },
    get displayValue() {
        const {
            conversionString, timestamp, result: {
                parseError,
                conversionError,
                conversionResult
            }
        } = self;
        const dateTimeString = moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a');

        if (parseError)
            return `${conversionString}: Cannot recognize query`;
        if (conversionError)
            return `${conversionString}: Cannot convert with given query`;

        return `${conversionString} at ${dateTimeString}: ${conversionResult}`;
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
