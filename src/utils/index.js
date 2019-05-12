// @flow

import type {ConvertObject} from './types';

export const parseStringToConvert = (stringToConvert: string): ConvertObject | null => {
    const regex = /^(\d+|\d+\.\d+)\s+(\w\w\w)\s+in\s+(\w\w\w)$/si;
    const result = stringToConvert.trim().match(regex);
    if (result) {
        const [, value, from, to] = result;
        return {value: Number(value), from: from.toUpperCase(), to: to.toUpperCase()};
    }
    return null;
};
