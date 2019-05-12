// @flow
export type Currency = {
    code: string,
    name: string,
}
export type CurrenciesStore = {
    fetch: () => Promise<void>,
    fetchCurrenciesError: boolean,
    resetFetchCurrenciesError: () => void,
    fetchBasicCurrencyError: boolean,
    resetFetchBasicCurrencyError: () => void,
    fetchBasicCurrency: () => Promise<void>,
    changeBasicCurrency: (code: string) => void,
    basicCurrency: Currency,
    currencies: Array<Currency>,
    isFetchingCurrencies: boolean,
    isFetchingBasicCurrency: boolean,
    isFetching: boolean,
};
