import {parseStringToConvert} from './converter';

test('parse 1 USD to RUB', () => {
    const stringToConvert = '1 USD in RUB';

    expect(parseStringToConvert(stringToConvert)).toEqual({value: 1, from: 'USD', to: 'RUB'});
});

test('parse 12.12 USD to RUB', () => {
    const stringToConvert = '12.12 USD in RUB';

    expect(parseStringToConvert(stringToConvert)).toEqual({value: 12.12, from: 'USD', to: 'RUB'});
});

test('parse invalid string "12..12 USD to RUB"', () => {
    const stringToConvert = '12..12 USD in RUB';

    expect(parseStringToConvert(stringToConvert)).toEqual(null);
});
