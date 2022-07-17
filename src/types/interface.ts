export interface DataProd  {
    "nameProduct": string,
    "brand": string,
    "display": string,
    "ram": string,
    "storage": string,
    "color": string,
    "price": string,
    "year": string,
    "amount": string,
    "img": string
}

export interface LocStor {
    'filter' : {
        'brandApple': boolean,
        'brandASUS': boolean,
        'brandHP': boolean,
        'brandLenovo': boolean,
        'brandDell': boolean,
        'disp13': boolean,
        'disp14': boolean,
        'disp15': boolean,
        'disp16': boolean,
        'ram8': boolean,
        'ram16': boolean,
        'stor256': boolean,
        'stor512': boolean,
        'stor1024': boolean,
        'colSilv': boolean,
        'colBlack': boolean,
        'colGray': boolean,
        'priceFrom': string,
        'priceTo': string,
        'amountFrom': string,
        'amountTo': string,
        'fieldSearch': string
    },
    'sort': {
        'az': boolean,
        'za': boolean,
        'yearUp': boolean,
        'yearDown': boolean
    },
    'cart': DataProd[]
}