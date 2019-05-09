import {getCurrencies, getCurrentCurrencyCode} from 'api';
import {CurrenciesStore} from './index';
import {getSnapshot} from "mobx-state-tree";

jest.mock('api');

test('test', async () => {

    const expectedStoreSnapshot = {
        "isFetchingCurrencies": false,
        "isFetchingBasicCurrency": false,
        "currencies": [
            {
                "code": "AED",
                "name": "United Arab Emirates Dirham"
            },
            {
                "code": "AFN",
                "name": "Afghan Afghani"
            },
            {
                "code": "ALL",
                "name": "Albanian Lek"
            },
            {
                "code": "AMD",
                "name": "Armenian Dram"
            },
            {
                "code": "ANG",
                "name": "Netherlands Antillean Guilder"
            },
            {
                "code": "AOA",
                "name": "Angolan Kwanza"
            },
            {
                "code": "ARS",
                "name": "Argentine Peso"
            },
            {
                "code": "AUD",
                "name": "Australian Dollar"
            },
            {
                "code": "AWG",
                "name": "Aruban Florin"
            },
            {
                "code": "AZN",
                "name": "Azerbaijani Manat"
            },
            {
                "code": "BAM",
                "name": "Bosnia-Herzegovina Convertible Mark"
            },
            {
                "code": "BBD",
                "name": "Barbadian Dollar"
            },
            {
                "code": "BDT",
                "name": "Bangladeshi Taka"
            },
            {
                "code": "BGN",
                "name": "Bulgarian Lev"
            },
            {
                "code": "BHD",
                "name": "Bahraini Dinar"
            },
            {
                "code": "BIF",
                "name": "Burundian Franc"
            },
            {
                "code": "BMD",
                "name": "Bermudan Dollar"
            },
            {
                "code": "BND",
                "name": "Brunei Dollar"
            },
            {
                "code": "BOB",
                "name": "Bolivian Boliviano"
            },
            {
                "code": "BRL",
                "name": "Brazilian Real"
            },
            {
                "code": "BSD",
                "name": "Bahamian Dollar"
            },
            {
                "code": "BTC",
                "name": "Bitcoin"
            },
            {
                "code": "BTN",
                "name": "Bhutanese Ngultrum"
            },
            {
                "code": "BWP",
                "name": "Botswanan Pula"
            },
            {
                "code": "BYN",
                "name": "Belarusian Ruble"
            },
            {
                "code": "BZD",
                "name": "Belize Dollar"
            },
            {
                "code": "CAD",
                "name": "Canadian Dollar"
            },
            {
                "code": "CDF",
                "name": "Congolese Franc"
            },
            {
                "code": "CHF",
                "name": "Swiss Franc"
            },
            {
                "code": "CLF",
                "name": "Chilean Unit of Account (UF)"
            },
            {
                "code": "CLP",
                "name": "Chilean Peso"
            },
            {
                "code": "CNH",
                "name": "Chinese Yuan (Offshore)"
            },
            {
                "code": "CNY",
                "name": "Chinese Yuan"
            },
            {
                "code": "COP",
                "name": "Colombian Peso"
            },
            {
                "code": "CRC",
                "name": "Costa Rican Colón"
            },
            {
                "code": "CUC",
                "name": "Cuban Convertible Peso"
            },
            {
                "code": "CUP",
                "name": "Cuban Peso"
            },
            {
                "code": "CVE",
                "name": "Cape Verdean Escudo"
            },
            {
                "code": "CZK",
                "name": "Czech Republic Koruna"
            },
            {
                "code": "DJF",
                "name": "Djiboutian Franc"
            },
            {
                "code": "DKK",
                "name": "Danish Krone"
            },
            {
                "code": "DOP",
                "name": "Dominican Peso"
            },
            {
                "code": "DZD",
                "name": "Algerian Dinar"
            },
            {
                "code": "EGP",
                "name": "Egyptian Pound"
            },
            {
                "code": "ERN",
                "name": "Eritrean Nakfa"
            },
            {
                "code": "ETB",
                "name": "Ethiopian Birr"
            },
            {
                "code": "EUR",
                "name": "Euro"
            },
            {
                "code": "FJD",
                "name": "Fijian Dollar"
            },
            {
                "code": "FKP",
                "name": "Falkland Islands Pound"
            },
            {
                "code": "GBP",
                "name": "British Pound Sterling"
            },
            {
                "code": "GEL",
                "name": "Georgian Lari"
            },
            {
                "code": "GGP",
                "name": "Guernsey Pound"
            },
            {
                "code": "GHS",
                "name": "Ghanaian Cedi"
            },
            {
                "code": "GIP",
                "name": "Gibraltar Pound"
            },
            {
                "code": "GMD",
                "name": "Gambian Dalasi"
            },
            {
                "code": "GNF",
                "name": "Guinean Franc"
            },
            {
                "code": "GTQ",
                "name": "Guatemalan Quetzal"
            },
            {
                "code": "GYD",
                "name": "Guyanaese Dollar"
            },
            {
                "code": "HKD",
                "name": "Hong Kong Dollar"
            },
            {
                "code": "HNL",
                "name": "Honduran Lempira"
            },
            {
                "code": "HRK",
                "name": "Croatian Kuna"
            },
            {
                "code": "HTG",
                "name": "Haitian Gourde"
            },
            {
                "code": "HUF",
                "name": "Hungarian Forint"
            },
            {
                "code": "IDR",
                "name": "Indonesian Rupiah"
            },
            {
                "code": "ILS",
                "name": "Israeli New Sheqel"
            },
            {
                "code": "IMP",
                "name": "Manx pound"
            },
            {
                "code": "INR",
                "name": "Indian Rupee"
            },
            {
                "code": "IQD",
                "name": "Iraqi Dinar"
            },
            {
                "code": "IRR",
                "name": "Iranian Rial"
            },
            {
                "code": "ISK",
                "name": "Icelandic Króna"
            },
            {
                "code": "JEP",
                "name": "Jersey Pound"
            },
            {
                "code": "JMD",
                "name": "Jamaican Dollar"
            },
            {
                "code": "JOD",
                "name": "Jordanian Dinar"
            },
            {
                "code": "JPY",
                "name": "Japanese Yen"
            },
            {
                "code": "KES",
                "name": "Kenyan Shilling"
            },
            {
                "code": "KGS",
                "name": "Kyrgystani Som"
            },
            {
                "code": "KHR",
                "name": "Cambodian Riel"
            },
            {
                "code": "KMF",
                "name": "Comorian Franc"
            },
            {
                "code": "KPW",
                "name": "North Korean Won"
            },
            {
                "code": "KRW",
                "name": "South Korean Won"
            },
            {
                "code": "KWD",
                "name": "Kuwaiti Dinar"
            },
            {
                "code": "KYD",
                "name": "Cayman Islands Dollar"
            },
            {
                "code": "KZT",
                "name": "Kazakhstani Tenge"
            },
            {
                "code": "LAK",
                "name": "Laotian Kip"
            },
            {
                "code": "LBP",
                "name": "Lebanese Pound"
            },
            {
                "code": "LKR",
                "name": "Sri Lankan Rupee"
            },
            {
                "code": "LRD",
                "name": "Liberian Dollar"
            },
            {
                "code": "LSL",
                "name": "Lesotho Loti"
            },
            {
                "code": "LYD",
                "name": "Libyan Dinar"
            },
            {
                "code": "MAD",
                "name": "Moroccan Dirham"
            },
            {
                "code": "MDL",
                "name": "Moldovan Leu"
            },
            {
                "code": "MGA",
                "name": "Malagasy Ariary"
            },
            {
                "code": "MKD",
                "name": "Macedonian Denar"
            },
            {
                "code": "MMK",
                "name": "Myanma Kyat"
            },
            {
                "code": "MNT",
                "name": "Mongolian Tugrik"
            },
            {
                "code": "MOP",
                "name": "Macanese Pataca"
            },
            {
                "code": "MRO",
                "name": "Mauritanian Ouguiya (pre-2018)"
            },
            {
                "code": "MRU",
                "name": "Mauritanian Ouguiya"
            },
            {
                "code": "MUR",
                "name": "Mauritian Rupee"
            },
            {
                "code": "MVR",
                "name": "Maldivian Rufiyaa"
            },
            {
                "code": "MWK",
                "name": "Malawian Kwacha"
            },
            {
                "code": "MXN",
                "name": "Mexican Peso"
            },
            {
                "code": "MYR",
                "name": "Malaysian Ringgit"
            },
            {
                "code": "MZN",
                "name": "Mozambican Metical"
            },
            {
                "code": "NAD",
                "name": "Namibian Dollar"
            },
            {
                "code": "NGN",
                "name": "Nigerian Naira"
            },
            {
                "code": "NIO",
                "name": "Nicaraguan Córdoba"
            },
            {
                "code": "NOK",
                "name": "Norwegian Krone"
            },
            {
                "code": "NPR",
                "name": "Nepalese Rupee"
            },
            {
                "code": "NZD",
                "name": "New Zealand Dollar"
            },
            {
                "code": "OMR",
                "name": "Omani Rial"
            },
            {
                "code": "PAB",
                "name": "Panamanian Balboa"
            },
            {
                "code": "PEN",
                "name": "Peruvian Nuevo Sol"
            },
            {
                "code": "PGK",
                "name": "Papua New Guinean Kina"
            },
            {
                "code": "PHP",
                "name": "Philippine Peso"
            },
            {
                "code": "PKR",
                "name": "Pakistani Rupee"
            },
            {
                "code": "PLN",
                "name": "Polish Zloty"
            },
            {
                "code": "PYG",
                "name": "Paraguayan Guarani"
            },
            {
                "code": "QAR",
                "name": "Qatari Rial"
            },
            {
                "code": "RON",
                "name": "Romanian Leu"
            },
            {
                "code": "RSD",
                "name": "Serbian Dinar"
            },
            {
                "code": "RUB",
                "name": "Russian Ruble"
            },
            {
                "code": "RWF",
                "name": "Rwandan Franc"
            },
            {
                "code": "SAR",
                "name": "Saudi Riyal"
            },
            {
                "code": "SBD",
                "name": "Solomon Islands Dollar"
            },
            {
                "code": "SCR",
                "name": "Seychellois Rupee"
            },
            {
                "code": "SDG",
                "name": "Sudanese Pound"
            },
            {
                "code": "SEK",
                "name": "Swedish Krona"
            },
            {
                "code": "SGD",
                "name": "Singapore Dollar"
            },
            {
                "code": "SHP",
                "name": "Saint Helena Pound"
            },
            {
                "code": "SLL",
                "name": "Sierra Leonean Leone"
            },
            {
                "code": "SOS",
                "name": "Somali Shilling"
            },
            {
                "code": "SRD",
                "name": "Surinamese Dollar"
            },
            {
                "code": "SSP",
                "name": "South Sudanese Pound"
            },
            {
                "code": "STD",
                "name": "São Tomé and Príncipe Dobra (pre-2018)"
            },
            {
                "code": "STN",
                "name": "São Tomé and Príncipe Dobra"
            },
            {
                "code": "SVC",
                "name": "Salvadoran Colón"
            },
            {
                "code": "SYP",
                "name": "Syrian Pound"
            },
            {
                "code": "SZL",
                "name": "Swazi Lilangeni"
            },
            {
                "code": "THB",
                "name": "Thai Baht"
            },
            {
                "code": "TJS",
                "name": "Tajikistani Somoni"
            },
            {
                "code": "TMT",
                "name": "Turkmenistani Manat"
            },
            {
                "code": "TND",
                "name": "Tunisian Dinar"
            },
            {
                "code": "TOP",
                "name": "Tongan Pa'anga"
            },
            {
                "code": "TRY",
                "name": "Turkish Lira"
            },
            {
                "code": "TTD",
                "name": "Trinidad and Tobago Dollar"
            },
            {
                "code": "TWD",
                "name": "New Taiwan Dollar"
            },
            {
                "code": "TZS",
                "name": "Tanzanian Shilling"
            },
            {
                "code": "UAH",
                "name": "Ukrainian Hryvnia"
            },
            {
                "code": "UGX",
                "name": "Ugandan Shilling"
            },
            {
                "code": "USD",
                "name": "United States Dollar"
            },
            {
                "code": "UYU",
                "name": "Uruguayan Peso"
            },
            {
                "code": "UZS",
                "name": "Uzbekistan Som"
            },
            {
                "code": "VEF",
                "name": "Venezuelan Bolívar Fuerte (Old)"
            },
            {
                "code": "VES",
                "name": "Venezuelan Bolívar Soberano"
            },
            {
                "code": "VND",
                "name": "Vietnamese Dong"
            },
            {
                "code": "VUV",
                "name": "Vanuatu Vatu"
            },
            {
                "code": "WST",
                "name": "Samoan Tala"
            },
            {
                "code": "XAF",
                "name": "CFA Franc BEAC"
            },
            {
                "code": "XAG",
                "name": "Silver Ounce"
            },
            {
                "code": "XAU",
                "name": "Gold Ounce"
            },
            {
                "code": "XCD",
                "name": "East Caribbean Dollar"
            },
            {
                "code": "XDR",
                "name": "Special Drawing Rights"
            },
            {
                "code": "XOF",
                "name": "CFA Franc BCEAO"
            },
            {
                "code": "XPD",
                "name": "Palladium Ounce"
            },
            {
                "code": "XPF",
                "name": "CFP Franc"
            },
            {
                "code": "XPT",
                "name": "Platinum Ounce"
            },
            {
                "code": "YER",
                "name": "Yemeni Rial"
            },
            {
                "code": "ZAR",
                "name": "South African Rand"
            },
            {
                "code": "ZMW",
                "name": "Zambian Kwacha"
            },
            {
                "code": "ZWL",
                "name": "Zimbabwean Dollar"
            }
        ],
        "basicCurrency": {
            "code": "RUB"
        }
    };

    const mockGetCurrenciesReturnValue = {
        AED: 'United Arab Emirates Dirham',
        AFN: 'Afghan Afghani',
        ALL: 'Albanian Lek',
        AMD: 'Armenian Dram',
        ANG: 'Netherlands Antillean Guilder',
        AOA: 'Angolan Kwanza',
        ARS: 'Argentine Peso',
        AUD: 'Australian Dollar',
        AWG: 'Aruban Florin',
        AZN: 'Azerbaijani Manat',
        BAM: 'Bosnia-Herzegovina Convertible Mark',
        BBD: 'Barbadian Dollar',
        BDT: 'Bangladeshi Taka',
        BGN: 'Bulgarian Lev',
        BHD: 'Bahraini Dinar',
        BIF: 'Burundian Franc',
        BMD: 'Bermudan Dollar',
        BND: 'Brunei Dollar',
        BOB: 'Bolivian Boliviano',
        BRL: 'Brazilian Real',
        BSD: 'Bahamian Dollar',
        BTC: 'Bitcoin',
        BTN: 'Bhutanese Ngultrum',
        BWP: 'Botswanan Pula',
        BYN: 'Belarusian Ruble',
        BZD: 'Belize Dollar',
        CAD: 'Canadian Dollar',
        CDF: 'Congolese Franc',
        CHF: 'Swiss Franc',
        CLF: 'Chilean Unit of Account (UF)',
        CLP: 'Chilean Peso',
        CNH: 'Chinese Yuan (Offshore)',
        CNY: 'Chinese Yuan',
        COP: 'Colombian Peso',
        CRC: 'Costa Rican Colón',
        CUC: 'Cuban Convertible Peso',
        CUP: 'Cuban Peso',
        CVE: 'Cape Verdean Escudo',
        CZK: 'Czech Republic Koruna',
        DJF: 'Djiboutian Franc',
        DKK: 'Danish Krone',
        DOP: 'Dominican Peso',
        DZD: 'Algerian Dinar',
        EGP: 'Egyptian Pound',
        ERN: 'Eritrean Nakfa',
        ETB: 'Ethiopian Birr',
        EUR: 'Euro',
        FJD: 'Fijian Dollar',
        FKP: 'Falkland Islands Pound',
        GBP: 'British Pound Sterling',
        GEL: 'Georgian Lari',
        GGP: 'Guernsey Pound',
        GHS: 'Ghanaian Cedi',
        GIP: 'Gibraltar Pound',
        GMD: 'Gambian Dalasi',
        GNF: 'Guinean Franc',
        GTQ: 'Guatemalan Quetzal',
        GYD: 'Guyanaese Dollar',
        HKD: 'Hong Kong Dollar',
        HNL: 'Honduran Lempira',
        HRK: 'Croatian Kuna',
        HTG: 'Haitian Gourde',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        IMP: 'Manx pound',
        INR: 'Indian Rupee',
        IQD: 'Iraqi Dinar',
        IRR: 'Iranian Rial',
        ISK: 'Icelandic Króna',
        JEP: 'Jersey Pound',
        JMD: 'Jamaican Dollar',
        JOD: 'Jordanian Dinar',
        JPY: 'Japanese Yen',
        KES: 'Kenyan Shilling',
        KGS: 'Kyrgystani Som',
        KHR: 'Cambodian Riel',
        KMF: 'Comorian Franc',
        KPW: 'North Korean Won',
        KRW: 'South Korean Won',
        KWD: 'Kuwaiti Dinar',
        KYD: 'Cayman Islands Dollar',
        KZT: 'Kazakhstani Tenge',
        LAK: 'Laotian Kip',
        LBP: 'Lebanese Pound',
        LKR: 'Sri Lankan Rupee',
        LRD: 'Liberian Dollar',
        LSL: 'Lesotho Loti',
        LYD: 'Libyan Dinar',
        MAD: 'Moroccan Dirham',
        MDL: 'Moldovan Leu',
        MGA: 'Malagasy Ariary',
        MKD: 'Macedonian Denar',
        MMK: 'Myanma Kyat',
        MNT: 'Mongolian Tugrik',
        MOP: 'Macanese Pataca',
        MRO: 'Mauritanian Ouguiya (pre-2018)',
        MRU: 'Mauritanian Ouguiya',
        MUR: 'Mauritian Rupee',
        MVR: 'Maldivian Rufiyaa',
        MWK: 'Malawian Kwacha',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        MZN: 'Mozambican Metical',
        NAD: 'Namibian Dollar',
        NGN: 'Nigerian Naira',
        NIO: 'Nicaraguan Córdoba',
        NOK: 'Norwegian Krone',
        NPR: 'Nepalese Rupee',
        NZD: 'New Zealand Dollar',
        OMR: 'Omani Rial',
        PAB: 'Panamanian Balboa',
        PEN: 'Peruvian Nuevo Sol',
        PGK: 'Papua New Guinean Kina',
        PHP: 'Philippine Peso',
        PKR: 'Pakistani Rupee',
        PLN: 'Polish Zloty',
        PYG: 'Paraguayan Guarani',
        QAR: 'Qatari Rial',
        RON: 'Romanian Leu',
        RSD: 'Serbian Dinar',
        RUB: 'Russian Ruble',
        RWF: 'Rwandan Franc',
        SAR: 'Saudi Riyal',
        SBD: 'Solomon Islands Dollar',
        SCR: 'Seychellois Rupee',
        SDG: 'Sudanese Pound',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        SHP: 'Saint Helena Pound',
        SLL: 'Sierra Leonean Leone',
        SOS: 'Somali Shilling',
        SRD: 'Surinamese Dollar',
        SSP: 'South Sudanese Pound',
        STD: 'São Tomé and Príncipe Dobra (pre-2018)',
        STN: 'São Tomé and Príncipe Dobra',
        SVC: 'Salvadoran Colón',
        SYP: 'Syrian Pound',
        SZL: 'Swazi Lilangeni',
        THB: 'Thai Baht',
        TJS: 'Tajikistani Somoni',
        TMT: 'Turkmenistani Manat',
        TND: 'Tunisian Dinar',
        TOP: 'Tongan Pa\'anga',
        TRY: 'Turkish Lira',
        TTD: 'Trinidad and Tobago Dollar',
        TWD: 'New Taiwan Dollar',
        TZS: 'Tanzanian Shilling',
        UAH: 'Ukrainian Hryvnia',
        UGX: 'Ugandan Shilling',
        USD: 'United States Dollar',
        UYU: 'Uruguayan Peso',
        UZS: 'Uzbekistan Som',
        VEF: 'Venezuelan Bolívar Fuerte (Old)',
        VES: 'Venezuelan Bolívar Soberano',
        VND: 'Vietnamese Dong',
        VUV: 'Vanuatu Vatu',
        WST: 'Samoan Tala',
        XAF: 'CFA Franc BEAC',
        XAG: 'Silver Ounce',
        XAU: 'Gold Ounce',
        XCD: 'East Caribbean Dollar',
        XDR: 'Special Drawing Rights',
        XOF: 'CFA Franc BCEAO',
        XPD: 'Palladium Ounce',
        XPF: 'CFP Franc',
        XPT: 'Platinum Ounce',
        YER: 'Yemeni Rial',
        ZAR: 'South African Rand',
        ZMW: 'Zambian Kwacha',
        ZWL: 'Zimbabwean Dollar'
    };
    const mockBasicCurrencyCode = 'RUB';
    getCurrencies.mockResolvedValue(mockGetCurrenciesReturnValue);
    getCurrentCurrencyCode.mockResolvedValue(mockBasicCurrencyCode);

    const store = await CurrenciesStore.create({});
    const snapshot = getSnapshot(store);
    expect(snapshot).toEqual(expectedStoreSnapshot)
});