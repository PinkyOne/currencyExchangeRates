import {getExchangeRates} from 'api';
import {getSnapshot} from 'mobx-state-tree';
import {ExchangeRatesStore} from './index';

jest.mock('api');
const mockedResponse = {
        base: 'USD',
        rates:
            {
                    AED: 3.673014,
                    AFN: 77.499438,
                    ALL: 110.45,
                    AMD: 480.48986,
                    ANG: 1.874844,
                    AOA: 325.135,
                    ARS: 44.446,
                    AUD: 1.4243,
                    AWG: 1.8,
                    AZN: 1.7025,
                    BAM: 1.753601,
                    BBD: 2,
                    BDT: 84.38,
                    BGN: 1.74791,
                    BHD: 0.377059,
                    BIF: 1835,
                    BMD: 1,
                    BND: 1.350606,
                    BOB: 6.90955,
                    BRL: 3.9395,
                    BSD: 1,
                    BTC: 0.000172709073,
                    BTN: 69.31288,
                    BWP: 10.786129,
                    BYN: 2.112959,
                    BZD: 2.015591,
                    CAD: 1.343703,
                    CDF: 1636,
                    CHF: 1.01685,
                    CLF: 0.023958,
                    CLP: 677.005,
                    CNH: 6.734857,
                    CNY: 6.734644,
                    COP: 3240.42515,
                    CRC: 595.205919,
                    CUC: 1,
                    CUP: 25.75,
                    CVE: 98.9275,
                    CZK: 22.9508,
                    DJF: 178,
                    DKK: 6.6662,
                    DOP: 50.615,
                    DZD: 119.659485,
                    EGP: 17.1635,
                    ERN: 14.99899,
                    ETB: 29,
                    EUR: 0.89194,
                    FJD: 2.152842,
                    FKP: 0.759129,
                    GBP: 0.759129,
                    GEL: 2.705,
                    GGP: 0.759129,
                    GHS: 5.18,
                    GIP: 0.759129,
                    GMD: 49.685,
                    GNF: 9230,
                    GTQ: 7.659456,
                    GYD: 209.145546,
                    HKD: 7.84515,
                    HNL: 24.584925,
                    HRK: 6.619037,
                    HTG: 87.000153,
                    HUF: 288.62,
                    IDR: 14202.327728,
                    ILS: 3.58308,
                    IMP: 0.759129,
                    INR: 69.178,
                    IQD: 1190,
                    IRR: 42105,
                    ISK: 121.369769,
                    JEP: 0.759129,
                    JMD: 134.729243,
                    JOD: 0.709004,
                    JPY: 111.105,
                    KES: 101.11,
                    KGS: 68.708449,
                    KHR: 4060,
                    KMF: 440.374372,
                    KPW: 900,
                    KRW: 1164.33,
                    KWD: 0.304181,
                    KYD: 0.833274,
                    KZT: 381.41,
                    LAK: 8628.5,
                    LBP: 1509.45,
                    LKR: 176.907579,
                    LRD: 173.37529,
                    LSL: 14.36,
                    LYD: 1.4,
                    MAD: 9.66625,
                    MDL: 17.830168,
                    MGA: 3620,
                    MKD: 55.0278,
                    MMK: 1521.051433,
                    MNT: 2453.75,
                    MOP: 8.080494,
                    MRO: 357,
                    MRU: 36.77,
                    MUR: 35.207,
                    MVR: 15.400001,
                    MWK: 734.536638,
                    MXN: 18.918982,
                    MYR: 4.142504,
                    MZN: 64.050449,
                    NAD: 14.4,
                    NGN: 360,
                    NIO: 33.07,
                    NOK: 8.7006,
                    NPR: 110.903644,
                    NZD: 1.5049,
                    OMR: 0.385011,
                    PAB: 1,
                    PEN: 3.314334,
                    PGK: 3.36,
                    PHP: 51.745104,
                    PKR: 141.45,
                    PLN: 3.8174,
                    PYG: 6327.0557,
                    QAR: 3.640999,
                    RON: 4.239518,
                    RSD: 105.350103,
                    RUB: 65.0609,
                    RWF: 905,
                    SAR: 3.75041,
                    SBD: 8.226062,
                    SCR: 13.680528,
                    SDG: 45.175,
                    SEK: 9.538223,
                    SGD: 1.3604,
                    SHP: 0.759129,
                    SLL: 8390,
                    SOS: 584.5,
                    SRD: 7.458,
                    SSP: 130.2634,
                    STD: 21050.59961,
                    STN: 21.9,
                    SVC: 8.749649,
                    SYP: 515.093439,
                    SZL: 14.465,
                    THB: 31.879145,
                    TJS: 9.429828,
                    TMT: 3.499986,
                    TND: 3.02541,
                    TOP: 2.2829,
                    TRY: 5.9644,
                    TTD: 6.77275,
                    TWD: 30.872,
                    TZS: 2305.1,
                    UAH: 26.608,
                    UGX: 3769.749872,
                    USD: 1,
                    UYU: 35.100967,
                    UZS: 8445,
                    VEF: 248487.642241,
                    VES: 5192.50683,
                    VND: 23130.633181,
                    VUV: 111.058203,
                    WST: 2.626662,
                    XAF: 585.074287,
                    XAG: 0.066957,
                    XAU: 0.00078191,
                    XCD: 2.70255,
                    XDR: 0.719582,
                    XOF: 585.074287,
                    XPD: 0.00072814,
                    XPF: 106.436754,
                    XPT: 0.00114746,
                    YER: 250.350747,
                    ZAR: 14.350975,
                    ZMW: 12.924,
                    ZWL: 322.355011
            }
};

test('Exchange Rates Store - Create', async () => {
        const expectedSnapshot = {
                "isFetching": false,
                "baseCurrencyCode": "USD",
                "exchangeRates": [
                        {
                                "code": "AED",
                                "rate": 3.673014
                        },
                        {
                                "code": "AFN",
                                "rate": 77.499438
                        },
                        {
                                "code": "ALL",
                                "rate": 110.45
                        },
                        {
                                "code": "AMD",
                                "rate": 480.48986
                        },
                        {
                                "code": "ANG",
                                "rate": 1.874844
                        },
                        {
                                "code": "AOA",
                                "rate": 325.135
                        },
                        {
                                "code": "ARS",
                                "rate": 44.446
                        },
                        {
                                "code": "AUD",
                                "rate": 1.4243
                        },
                        {
                                "code": "AWG",
                                "rate": 1.8
                        },
                        {
                                "code": "AZN",
                                "rate": 1.7025
                        },
                        {
                                "code": "BAM",
                                "rate": 1.753601
                        },
                        {
                                "code": "BBD",
                                "rate": 2
                        },
                        {
                                "code": "BDT",
                                "rate": 84.38
                        },
                        {
                                "code": "BGN",
                                "rate": 1.74791
                        },
                        {
                                "code": "BHD",
                                "rate": 0.377059
                        },
                        {
                                "code": "BIF",
                                "rate": 1835
                        },
                        {
                                "code": "BMD",
                                "rate": 1
                        },
                        {
                                "code": "BND",
                                "rate": 1.350606
                        },
                        {
                                "code": "BOB",
                                "rate": 6.90955
                        },
                        {
                                "code": "BRL",
                                "rate": 3.9395
                        },
                        {
                                "code": "BSD",
                                "rate": 1
                        },
                        {
                                "code": "BTC",
                                "rate": 0.000172709073
                        },
                        {
                                "code": "BTN",
                                "rate": 69.31288
                        },
                        {
                                "code": "BWP",
                                "rate": 10.786129
                        },
                        {
                                "code": "BYN",
                                "rate": 2.112959
                        },
                        {
                                "code": "BZD",
                                "rate": 2.015591
                        },
                        {
                                "code": "CAD",
                                "rate": 1.343703
                        },
                        {
                                "code": "CDF",
                                "rate": 1636
                        },
                        {
                                "code": "CHF",
                                "rate": 1.01685
                        },
                        {
                                "code": "CLF",
                                "rate": 0.023958
                        },
                        {
                                "code": "CLP",
                                "rate": 677.005
                        },
                        {
                                "code": "CNH",
                                "rate": 6.734857
                        },
                        {
                                "code": "CNY",
                                "rate": 6.734644
                        },
                        {
                                "code": "COP",
                                "rate": 3240.42515
                        },
                        {
                                "code": "CRC",
                                "rate": 595.205919
                        },
                        {
                                "code": "CUC",
                                "rate": 1
                        },
                        {
                                "code": "CUP",
                                "rate": 25.75
                        },
                        {
                                "code": "CVE",
                                "rate": 98.9275
                        },
                        {
                                "code": "CZK",
                                "rate": 22.9508
                        },
                        {
                                "code": "DJF",
                                "rate": 178
                        },
                        {
                                "code": "DKK",
                                "rate": 6.6662
                        },
                        {
                                "code": "DOP",
                                "rate": 50.615
                        },
                        {
                                "code": "DZD",
                                "rate": 119.659485
                        },
                        {
                                "code": "EGP",
                                "rate": 17.1635
                        },
                        {
                                "code": "ERN",
                                "rate": 14.99899
                        },
                        {
                                "code": "ETB",
                                "rate": 29
                        },
                        {
                                "code": "EUR",
                                "rate": 0.89194
                        },
                        {
                                "code": "FJD",
                                "rate": 2.152842
                        },
                        {
                                "code": "FKP",
                                "rate": 0.759129
                        },
                        {
                                "code": "GBP",
                                "rate": 0.759129
                        },
                        {
                                "code": "GEL",
                                "rate": 2.705
                        },
                        {
                                "code": "GGP",
                                "rate": 0.759129
                        },
                        {
                                "code": "GHS",
                                "rate": 5.18
                        },
                        {
                                "code": "GIP",
                                "rate": 0.759129
                        },
                        {
                                "code": "GMD",
                                "rate": 49.685
                        },
                        {
                                "code": "GNF",
                                "rate": 9230
                        },
                        {
                                "code": "GTQ",
                                "rate": 7.659456
                        },
                        {
                                "code": "GYD",
                                "rate": 209.145546
                        },
                        {
                                "code": "HKD",
                                "rate": 7.84515
                        },
                        {
                                "code": "HNL",
                                "rate": 24.584925
                        },
                        {
                                "code": "HRK",
                                "rate": 6.619037
                        },
                        {
                                "code": "HTG",
                                "rate": 87.000153
                        },
                        {
                                "code": "HUF",
                                "rate": 288.62
                        },
                        {
                                "code": "IDR",
                                "rate": 14202.327728
                        },
                        {
                                "code": "ILS",
                                "rate": 3.58308
                        },
                        {
                                "code": "IMP",
                                "rate": 0.759129
                        },
                        {
                                "code": "INR",
                                "rate": 69.178
                        },
                        {
                                "code": "IQD",
                                "rate": 1190
                        },
                        {
                                "code": "IRR",
                                "rate": 42105
                        },
                        {
                                "code": "ISK",
                                "rate": 121.369769
                        },
                        {
                                "code": "JEP",
                                "rate": 0.759129
                        },
                        {
                                "code": "JMD",
                                "rate": 134.729243
                        },
                        {
                                "code": "JOD",
                                "rate": 0.709004
                        },
                        {
                                "code": "JPY",
                                "rate": 111.105
                        },
                        {
                                "code": "KES",
                                "rate": 101.11
                        },
                        {
                                "code": "KGS",
                                "rate": 68.708449
                        },
                        {
                                "code": "KHR",
                                "rate": 4060
                        },
                        {
                                "code": "KMF",
                                "rate": 440.374372
                        },
                        {
                                "code": "KPW",
                                "rate": 900
                        },
                        {
                                "code": "KRW",
                                "rate": 1164.33
                        },
                        {
                                "code": "KWD",
                                "rate": 0.304181
                        },
                        {
                                "code": "KYD",
                                "rate": 0.833274
                        },
                        {
                                "code": "KZT",
                                "rate": 381.41
                        },
                        {
                                "code": "LAK",
                                "rate": 8628.5
                        },
                        {
                                "code": "LBP",
                                "rate": 1509.45
                        },
                        {
                                "code": "LKR",
                                "rate": 176.907579
                        },
                        {
                                "code": "LRD",
                                "rate": 173.37529
                        },
                        {
                                "code": "LSL",
                                "rate": 14.36
                        },
                        {
                                "code": "LYD",
                                "rate": 1.4
                        },
                        {
                                "code": "MAD",
                                "rate": 9.66625
                        },
                        {
                                "code": "MDL",
                                "rate": 17.830168
                        },
                        {
                                "code": "MGA",
                                "rate": 3620
                        },
                        {
                                "code": "MKD",
                                "rate": 55.0278
                        },
                        {
                                "code": "MMK",
                                "rate": 1521.051433
                        },
                        {
                                "code": "MNT",
                                "rate": 2453.75
                        },
                        {
                                "code": "MOP",
                                "rate": 8.080494
                        },
                        {
                                "code": "MRO",
                                "rate": 357
                        },
                        {
                                "code": "MRU",
                                "rate": 36.77
                        },
                        {
                                "code": "MUR",
                                "rate": 35.207
                        },
                        {
                                "code": "MVR",
                                "rate": 15.400001
                        },
                        {
                                "code": "MWK",
                                "rate": 734.536638
                        },
                        {
                                "code": "MXN",
                                "rate": 18.918982
                        },
                        {
                                "code": "MYR",
                                "rate": 4.142504
                        },
                        {
                                "code": "MZN",
                                "rate": 64.050449
                        },
                        {
                                "code": "NAD",
                                "rate": 14.4
                        },
                        {
                                "code": "NGN",
                                "rate": 360
                        },
                        {
                                "code": "NIO",
                                "rate": 33.07
                        },
                        {
                                "code": "NOK",
                                "rate": 8.7006
                        },
                        {
                                "code": "NPR",
                                "rate": 110.903644
                        },
                        {
                                "code": "NZD",
                                "rate": 1.5049
                        },
                        {
                                "code": "OMR",
                                "rate": 0.385011
                        },
                        {
                                "code": "PAB",
                                "rate": 1
                        },
                        {
                                "code": "PEN",
                                "rate": 3.314334
                        },
                        {
                                "code": "PGK",
                                "rate": 3.36
                        },
                        {
                                "code": "PHP",
                                "rate": 51.745104
                        },
                        {
                                "code": "PKR",
                                "rate": 141.45
                        },
                        {
                                "code": "PLN",
                                "rate": 3.8174
                        },
                        {
                                "code": "PYG",
                                "rate": 6327.0557
                        },
                        {
                                "code": "QAR",
                                "rate": 3.640999
                        },
                        {
                                "code": "RON",
                                "rate": 4.239518
                        },
                        {
                                "code": "RSD",
                                "rate": 105.350103
                        },
                        {
                                "code": "RUB",
                                "rate": 65.0609
                        },
                        {
                                "code": "RWF",
                                "rate": 905
                        },
                        {
                                "code": "SAR",
                                "rate": 3.75041
                        },
                        {
                                "code": "SBD",
                                "rate": 8.226062
                        },
                        {
                                "code": "SCR",
                                "rate": 13.680528
                        },
                        {
                                "code": "SDG",
                                "rate": 45.175
                        },
                        {
                                "code": "SEK",
                                "rate": 9.538223
                        },
                        {
                                "code": "SGD",
                                "rate": 1.3604
                        },
                        {
                                "code": "SHP",
                                "rate": 0.759129
                        },
                        {
                                "code": "SLL",
                                "rate": 8390
                        },
                        {
                                "code": "SOS",
                                "rate": 584.5
                        },
                        {
                                "code": "SRD",
                                "rate": 7.458
                        },
                        {
                                "code": "SSP",
                                "rate": 130.2634
                        },
                        {
                                "code": "STD",
                                "rate": 21050.59961
                        },
                        {
                                "code": "STN",
                                "rate": 21.9
                        },
                        {
                                "code": "SVC",
                                "rate": 8.749649
                        },
                        {
                                "code": "SYP",
                                "rate": 515.093439
                        },
                        {
                                "code": "SZL",
                                "rate": 14.465
                        },
                        {
                                "code": "THB",
                                "rate": 31.879145
                        },
                        {
                                "code": "TJS",
                                "rate": 9.429828
                        },
                        {
                                "code": "TMT",
                                "rate": 3.499986
                        },
                        {
                                "code": "TND",
                                "rate": 3.02541
                        },
                        {
                                "code": "TOP",
                                "rate": 2.2829
                        },
                        {
                                "code": "TRY",
                                "rate": 5.9644
                        },
                        {
                                "code": "TTD",
                                "rate": 6.77275
                        },
                        {
                                "code": "TWD",
                                "rate": 30.872
                        },
                        {
                                "code": "TZS",
                                "rate": 2305.1
                        },
                        {
                                "code": "UAH",
                                "rate": 26.608
                        },
                        {
                                "code": "UGX",
                                "rate": 3769.749872
                        },
                        {
                                "code": "USD",
                                "rate": 1
                        },
                        {
                                "code": "UYU",
                                "rate": 35.100967
                        },
                        {
                                "code": "UZS",
                                "rate": 8445
                        },
                        {
                                "code": "VEF",
                                "rate": 248487.642241
                        },
                        {
                                "code": "VES",
                                "rate": 5192.50683
                        },
                        {
                                "code": "VND",
                                "rate": 23130.633181
                        },
                        {
                                "code": "VUV",
                                "rate": 111.058203
                        },
                        {
                                "code": "WST",
                                "rate": 2.626662
                        },
                        {
                                "code": "XAF",
                                "rate": 585.074287
                        },
                        {
                                "code": "XAG",
                                "rate": 0.066957
                        },
                        {
                                "code": "XAU",
                                "rate": 0.00078191
                        },
                        {
                                "code": "XCD",
                                "rate": 2.70255
                        },
                        {
                                "code": "XDR",
                                "rate": 0.719582
                        },
                        {
                                "code": "XOF",
                                "rate": 585.074287
                        },
                        {
                                "code": "XPD",
                                "rate": 0.00072814
                        },
                        {
                                "code": "XPF",
                                "rate": 106.436754
                        },
                        {
                                "code": "XPT",
                                "rate": 0.00114746
                        },
                        {
                                "code": "YER",
                                "rate": 250.350747
                        },
                        {
                                "code": "ZAR",
                                "rate": 14.350975
                        },
                        {
                                "code": "ZMW",
                                "rate": 12.924
                        },
                        {
                                "code": "ZWL",
                                "rate": 322.355011
                        }
                ],
                "fetchError": false,
                "ratesIsOutdated": false
        };
        getExchangeRates.mockResolvedValue(mockedResponse);

        const store = await ExchangeRatesStore.create({});

        const snapshot = getSnapshot(store);

        expect(snapshot).toMatchObject(expectedSnapshot);
        expect(snapshot).toHaveProperty('refreshTimerId');
});
test('Exchange Rates Store - Refresh Timer executed', async () => {
        jest.useFakeTimers();

        getExchangeRates.mockResolvedValue(mockedResponse);

        const store = await ExchangeRatesStore.create({});
        jest.runAllTimers();

        expect(store.ratesIsOutdated).toBeTruthy();
});