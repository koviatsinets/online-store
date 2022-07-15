

// ------------------ Организация объекта данных ls ------------------ //

export let lsTempObj = {
    'filter' : {
        'brandApple': false,
        'brandASUS': false,
        'brandHP': false,
        'brandLenovo': false,
        'brandDell': false,
        'disp13': false,
        'disp14': false,
        'disp15': false,
        'disp16': false,
        'ram8': false,
        'ram16': false,
        'stor256': false,
        'stor512': false,
        'stor1024': false,
        'colSilv': false,
        'colBlack': false,
        'colGray': false,
        'priceFrom': 0,
        'priceTo': 2050,
        'amountFrom': 0,
        'amountTo': 24,
        'fieldSearch': ''
    },
    'sort': {
        'az': false,
        'za': false,
        'yearUp': false,
        'yearDown': false
    },
    'cart': []
}

lsTempObj = (localStorage.getItem('rsschool-koviatsinets-store') === null)? lsTempObj : JSON.parse(localStorage.getItem('rsschool-koviatsinets-store'));