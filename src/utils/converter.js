// flow
export type ConvertObject = {
    value: number,
    from: string,
    to: string
};

export const parseStringToConvert = (stringToConvert: string): ConvertObject | null => {
    const regex = /^(\d+|\d+\.\d+)\s+(\w\w\w)\s+in\s+(\w\w\w)$/si;
    const result = stringToConvert.match(regex);
    if (result) {
        const [, value, from, to] = result;
        return {value: Number(value), from, to};
    }
    return result;
};
