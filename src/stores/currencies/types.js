// @flow
export type Currency = {
    code: string,
    name: string,
}
export type CurrenciesStore = {
    changeBasicCurrency: (code: string) => void,
    basicCurrency: Currency,
    currencies: Array<Currency>,
    isFetchingCurrencies: boolean,
    isFetchingBasicCurrency: boolean,
    isFetching: boolean,
};
