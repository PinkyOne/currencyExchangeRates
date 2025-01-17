// @flow
import type {ConvertObject} from 'utils/types';

export type ConvertResult = {
    id: string,
    conversionString: string,
    timestamp: number,
    convertObject: ConvertObject,
    result: string | number,
    displayValue: string,
}
export type ConverterStore = {
    convert: (convertString: string) => void,
    results: Array<ConvertResult>,
};
