import { doc } from 'prettier';
import './global.css';

// ------------------ Организация массива данных для товаров ------------------ //

const productsArr = [
    {
        "name": "Macbook Air M1 13\" 8Gb 256Gb",
        "brand": "Apple",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "grey",
        "price": "999",
        "year": "2020",
        "amount": "5",
        "img": "./assets/images/macbook-air-8-256.jpeg"
    },
    {
        "name": "Macbook Pro M1 13\" 16Gb 256Gb",
        "brand": "Apple",
        "display": "13",
        "ram": "16",
        "storage": "256",
        "color": "silver",
        "price": "1299",
        "year": "2020",
        "amount": "4",
        "img": "./assets/images/macbook-pro-16-256.png"
    },
    {
        "name": "Macbook Pro M1 16\" 16Gb 512Gb",
        "brand": "Apple",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "1999",
        "year": "2020",
        "amount": "2",
        "img": "./assets/images/macbook-pro-16-512.jpeg"
    },
    {
        "name": "Macbook Pro M2 14\" 16Gb 1Tb",
        "brand": "Apple",
        "display": "14",
        "ram": "16",
        "storage": "1024",
        "color": "silver",
        "price": "1799",
        "year": "2022",
        "amount": "9",
        "img": "./assets/images/macbook-pro-14-1024.png"
    },
    {
        "name": "HP Victus 16\" 16Gb 512Gb",
        "brand": "HP",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1050",
        "year": "2021",
        "amount": "11",
        "img": "./assets/images/hp-victus-16-512.jpeg"
    },
    {
        "name": "HP Pavilion 15\" 8Gb 512Gb",
        "brand": "HP",
        "display": "15",
        "ram": "8",
        "storage": "512",
        "color": "black",
        "price": "1350",
        "year": "2021",
        "amount": "10",
        "img": "./assets/images/hp-pavilion-8-512.jpeg"
    },
    {
        "name": "HP ProBook 14\" 16Gb 256Gb",
        "brand": "HP",
        "display": "14",
        "ram": "16",
        "storage": "256",
        "color": "silver",
        "price": "1090",
        "year": "2021",
        "amount": "15",
        "img": "./assets/images/hp-probook-16-256.jpg"
    },
    {
        "name": "HP EliteBook 16\" 16Gb 1Tb",
        "brand": "HP",
        "display": "16",
        "ram": "16",
        "storage": "1Tb",
        "color": "silver",
        "price": "1700",
        "year": "2022",
        "amount": "2",
        "img": "./assets/images/hp-elitebook-16-512.jpg"
    },
    {
        "name": "ASUS ZenBook 13\" 8Gb 256Gb",
        "brand": "ASUS",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "black",
        "price": "890",
        "year": "2021",
        "amount": "21",
        "img": "./assets/images/asus-zenbook-8-256.jpg"
    },
    {
        "name": "ASUS VivoBook 15\" 8Gb 256Gb",
        "brand": "ASUS",
        "display": "15",
        "ram": "8",
        "storage": "256",
        "color": "grey",
        "price": "700",
        "year": "2020",
        "amount": "19",
        "img": "./assets/images/asus-vivobook-8-256.jpg"
    },
    {
        "name": "ASUS RogStrix 16\" 16Gb 1Tb",
        "brand": "ASUS",
        "display": "16",
        "ram": "16",
        "storage": "1024",
        "color": "black",
        "price": "1800",
        "year": "2022",
        "amount": "9",
        "img": "./assets/images/asus-rogstrix-16-1Tb.webp"
    },
    {
        "name": "ASUS Tuf Gaming Dash 16\" 16Gb 512Gb",
        "brand": "ASUS",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1590",
        "year": "2022",
        "amount": "8",
        "img": "./assets/images/asus-tuf-16-512.webp"
    },
    {
        "name": "Lenovo Legion 16\" 16Gb 512Gb",
        "brand": "Lenovo",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "2050",
        "year": "2022",
        "amount": "18",
        "img": "./assets/images/lenovo-legion-16-1024.jpg"
    },
    {
        "name": "Lenovo Ideapad 15\" 8Gb 256Gb",
        "brand": "Lenovo",
        "display": "15",
        "ram": "8",
        "storage": "256",
        "color": "silver",
        "price": "880",
        "year": "2020",
        "amount": "13",
        "img": "./assets/images/lenovo-ideapad-8-256.jpg"
    },
    {
        "name": "Lenovo V14 14\" 8Gb 256Gb",
        "brand": "Lenovo",
        "display": "14",
        "ram": "8",
        "storage": "256",
        "color": "black",
        "price": "680",
        "year": "2020",
        "amount": "11",
        "img": "./assets/images/lenovo-V14-8-256.jpg"
    },
    {
        "name": "Lenovo ThinkBook 14\" 16Gb 512Gb",
        "brand": "Lenovo",
        "display": "14",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "1000",
        "year": "2021",
        "amount": "20",
        "img": "./assets/images/lenovo-thinkbook-16-512.jpg"
    },
    {
        "name": "Dell Vostro 16\" 16Gb 1Tb",
        "brand": "Dell",
        "display": "16",
        "ram": "16",
        "storage": "1024",
        "color": "silver",
        "price": "1590",
        "year": "2022",
        "amount": "16",
        "img": "./assets/images/dell-vostro-16-1024.jpg"
    },
    {
        "name": "Dell Latitude 15\" 16Gb 512Gb",
        "brand": "Dell",
        "display": "15",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1490",
        "year": "2021",
        "amount": "24",
        "img": "./assets/images/dell-latitude-16-512.jpg"
    },
    {
        "name": "Dell Vostro 13\" 8Gb 256gb",
        "brand": "Dell",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "silver",
        "price": "750",
        "year": "2020",
        "amount": "13",
        "img": "./assets/images/dell-vostro-8-256.jpg"
    },
    {
        "name": "Dell XPS 14\" 8Gb 512Gb",
        "brand": "Dell",
        "display": "14",
        "ram": "8",
        "storage": "512",
        "color": "grey",
        "price": "1980",
        "year": "2022",
        "amount": "2",
        "img": "./assets/images/dell-latitude-16-512.jpg"
    },
    {
        "name": "Dell Vostro 13\" 8Gb 512gb",
        "brand": "Dell",
        "display": "13",
        "ram": "8",
        "storage": "512",
        "color": "silver",
        "price": "850",
        "year": "2020",
        "amount": "18",
        "img": "./assets/images/dell-vostro-8-256.jpg"
    },
  ]

// ------------------ Организация массива данных для товаров ------------------ //

let lsTempObj = {
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

// ------------------ Общий блок кода ------------------ //

lsTempObj = (localStorage.getItem('rsschool-koviatsinets-store') === null)? lsTempObj : JSON.parse(localStorage.getItem('rsschool-koviatsinets-store'));
let contentProducts = document.querySelector('.content-products');
let checkBoxList = document.querySelectorAll('input[type=checkbox]');
let cartNumber = document.querySelector('.cart-number');
let buttonSortAZ = document.querySelector('.button-sort-az');
let buttonSortZA = document.querySelector('.button-sort-za');
let buttonSortYearUp = document.querySelector('.button-sort-year-up');
let buttonSortYearDown = document.querySelector('.button-sort-year-down');
let busketCompleteArr = [];
let newArrProductsResult = [];
let clearButton = document.querySelector('.clear');
let buttonModalClose = document.querySelector('.button-modal-close');
let modalWindow = document.querySelector('.fog');
let searchField = document.querySelector('.search');
let clearSearchButton = document.querySelector('.search-button');
const buttonSortArr = [buttonSortAZ, buttonSortZA, buttonSortYearUp, buttonSortYearDown];

checkBoxList.forEach(el => el.addEventListener('click', filterArrProducts));
buttonSortArr.forEach(el => el.addEventListener('click', compareProducts));
clearButton.addEventListener('click', clearCheckbox);
buttonModalClose.addEventListener('click', closeModal);
searchField.addEventListener('input', searchByField);
clearSearchButton.addEventListener('click', clearSearch);

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const showPriceFrom = document.querySelector('#price-show-from');
const showPriceTo = document.querySelector('#price-show-to');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => {
    controlFromSlider(fromSlider, toSlider);
    filterArrProducts();
};
toSlider.oninput = () => {
    controlToSlider(fromSlider, toSlider);
    filterArrProducts();
};

const fromSliderAmount = document.querySelector('#fromSliderAmount');
const toSliderAmount = document.querySelector('#toSliderAmount');
const showPriceFromAmount = document.querySelector('#amount-show-from');
const showPriceToAmount = document.querySelector('#amount-show-to');
fillSliderAmount(fromSliderAmount, toSliderAmount, '#C6C6C6', '#25daa5', toSliderAmount);
setToggleAccessibleAmount(toSliderAmount);

fromSliderAmount.oninput = () => {
    controlFromSliderAmount(fromSliderAmount, toSliderAmount);
    filterArrProducts();
};
toSliderAmount.oninput = () => {
    controlToSliderAmount(fromSliderAmount, toSliderAmount);
    filterArrProducts();
};

pullLocalStorage();
controlFromSlider(fromSlider, toSlider);
controlToSlider(fromSlider, toSlider);
controlFromSliderAmount(fromSliderAmount, toSliderAmount);
controlToSliderAmount(fromSliderAmount, toSliderAmount);
filterArrProducts();

// ------------------ Подтягивание из localeStorage ------------------ //

function pullLocalStorage() {
    checkBoxList.forEach(el => {
        if (el.id === 'brand-apple') {el.checked = lsTempObj.filter.brandApple};
        if (el.id === 'brand-asus') {el.checked = lsTempObj.filter.brandASUS};
        if (el.id === 'brand-HP') {el.checked = lsTempObj.filter.brandHP};
        if (el.id === 'brand-lenovo') {el.checked = lsTempObj.filter.brandLenovo};
        if (el.id === 'brand-dell') {el.checked = lsTempObj.filter.brandDell};
        if (el.id === 'display-13') {el.checked = lsTempObj.filter.disp13};
        if (el.id === 'display-14') {el.checked = lsTempObj.filter.disp14};
        if (el.id === 'display-15') {el.checked = lsTempObj.filter.disp15};
        if (el.id === 'display-16') {el.checked = lsTempObj.filter.disp16};
        if (el.id === 'ram-8') {el.checked = lsTempObj.filter.ram8};
        if (el.id === 'ram-16') {el.checked = lsTempObj.filter.ram16};
        if (el.id === 'storage-256') {el.checked = lsTempObj.filter.stor256};
        if (el.id === 'storage-512') {el.checked = lsTempObj.filter.stor512};
        if (el.id === 'storage-1024') {el.checked = lsTempObj.filter.stor1024};
        if (el.id === 'color-silver') {el.checked = lsTempObj.filter.colSilv};
        if (el.id === 'color-black') {el.checked = lsTempObj.filter.colBlack};
        if (el.id === 'color-grey') {el.checked = lsTempObj.filter.colGray};
    });
    buttonSortArr.forEach(el => {
        if (el.classList.contains("button-sort-az")) {
            if (lsTempObj.sort.az === true) {
                el.classList.add('set-button-sort');
            }
        }
        if (el.classList.contains("button-sort-za")) {
            if (lsTempObj.sort.za === true) {
                el.classList.add('set-button-sort');
            }
        }
        if (el.classList.contains("button-sort-year-up")) {
            if (lsTempObj.sort.yearUp === true) {
                el.classList.add('set-button-sort');
            }
        }
        if (el.classList.contains("button-sort-year-down")) {
            if (lsTempObj.sort.yearDown === true) {
                el.classList.add('set-button-sort');
            }
        }
    });
    fromSlider.value = lsTempObj.filter.priceFrom;
    toSlider.value = lsTempObj.filter.priceTo;
    fromSliderAmount.value = lsTempObj.filter.amountFrom;
    toSliderAmount.value = lsTempObj.filter.amountTo;
    busketCompleteArr = lsTempObj.cart;
    cartNumber.innerHTML = busketCompleteArr.length;
}

// ------------------ Загрузка в localeStorage ------------------ //

function updateLocaleStorage() {
    checkBoxList.forEach(el => {
        if (el.id === 'brand-apple') {lsTempObj.filter.brandApple = (el.checked? true : false)};
        if (el.id === 'brand-asus') {lsTempObj.filter.brandASUS = (el.checked? true : false)};
        if (el.id === 'brand-HP') {lsTempObj.filter.brandHP = (el.checked? true : false)};
        if (el.id === 'brand-lenovo') {lsTempObj.filter.brandLenovo = (el.checked? true : false)};
        if (el.id === 'brand-dell') {lsTempObj.filter.brandDell = (el.checked? true : false)};
        if (el.id === 'display-13') {lsTempObj.filter.disp13 = (el.checked? true : false)};
        if (el.id === 'display-14') {lsTempObj.filter.disp14 = (el.checked? true : false)};
        if (el.id === 'display-15') {lsTempObj.filter.disp15 = (el.checked? true : false)};
        if (el.id === 'display-16') {lsTempObj.filter.disp16 = (el.checked? true : false)};
        if (el.id === 'ram-8') {lsTempObj.filter.ram8 = (el.checked? true : false)};
        if (el.id === 'ram-16') {lsTempObj.filter.ram16 = (el.checked? true : false)};
        if (el.id === 'storage-256') {lsTempObj.filter.stor256 = (el.checked? true : false)};
        if (el.id === 'storage-512') {lsTempObj.filter.stor512 = (el.checked? true : false)};
        if (el.id === 'storage-1024') {lsTempObj.filter.stor1024 = (el.checked? true : false)};
        if (el.id === 'color-silver') {lsTempObj.filter.colSilv = (el.checked? true : false)};
        if (el.id === 'color-black') {lsTempObj.filter.colBlack = (el.checked? true : false)};
        if (el.id === 'color-grey') {lsTempObj.filter.colGray = (el.checked? true : false)};
    });
    buttonSortArr.forEach(el => {
        if (el.classList.contains("button-sort-az")) {lsTempObj.sort.az = (el.classList.contains("set-button-sort")? true : false)};
        if (el.classList.contains("button-sort-za")) {lsTempObj.sort.za = (el.classList.contains("set-button-sort")? true : false)};
        if (el.classList.contains("button-sort-year-up")) {lsTempObj.sort.yearUp = (el.classList.contains("set-button-sort")? true : false)};
        if (el.classList.contains("button-sort-year-down")) {lsTempObj.sort.yearDown = (el.classList.contains("set-button-sort")? true : false)};
    });
    lsTempObj.filter.priceFrom = Number(fromSlider.value);
    lsTempObj.filter.priceTo = Number(toSlider.value);
    lsTempObj.filter.amountFrom = Number(fromSliderAmount.value);
    lsTempObj.filter.amountTo = Number(toSliderAmount.value);
    lsTempObj.cart = busketCompleteArr;
    lsTempObj.filter.fieldSearch = searchField.value;
    localStorage.setItem('rsschool-koviatsinets-store', JSON.stringify(lsTempObj));
}

// ------------------ Слайд-меню ------------------ //

let brand = document.querySelector('#brand');
let display = document.querySelector('#display');
let ram = document.querySelector('#ram');
let storage = document.querySelector('#storage');
let color = document.querySelector('#color');

let brandBlock = document.querySelector('#brand-block');
let displayBlock = document.querySelector('#display-block');
let ramBlock = document.querySelector('#ram-block');
let storageBlock = document.querySelector('#storage-block');
let colorBlock = document.querySelector('#color-block');

brand.addEventListener('click', openBrand);
display.addEventListener('click', openDisplay);
ram.addEventListener('click', openRam);
storage.addEventListener('click', openStorage);
color.addEventListener('click', openColor);

function openBrand() {
    brandBlock.classList.toggle('brand-block-open');
}
function openDisplay() {
    displayBlock.classList.toggle('display-block-open');
}
function openRam() {
    ramBlock.classList.toggle('ram-block-open');
}
function openStorage() {
    storageBlock.classList.toggle('storage-block-open');
}
function openColor() {
    colorBlock.classList.toggle('color-block-open');
}

// ------------------ Фильтрация ------------------ //

function filterArrProducts() {
    searchField.value = '';
    let newArrProductsBrand = [];
    let newArrProductsDisplay = [];
    let newArrProductsRam = [];
    let newArrProductsStorage = [];
    let newArrProductsColor = [];
    let newArrProductsPrice = [];
    let newArrProductsAmount = [];
    
    productsArr.forEach(el => {
        if (checkBoxList[0].checked || checkBoxList[1].checked || checkBoxList[2].checked || checkBoxList[3].checked || checkBoxList[4].checked) {
            if (el.brand === "Apple" && checkBoxList[0].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "ASUS" && checkBoxList[1].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "HP" && checkBoxList[2].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "Lenovo" && checkBoxList[3].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "Dell" && checkBoxList[4].checked) {
                newArrProductsBrand.push(el);
            };
        } else {
            newArrProductsBrand = productsArr;
        }
    });
    newArrProductsBrand.forEach(el=> {
        if (checkBoxList[5].checked || checkBoxList[6].checked || checkBoxList[7].checked || checkBoxList[8].checked) {
            if (el.display === "13" && checkBoxList[5].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "14" && checkBoxList[6].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "15" && checkBoxList[7].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "16" && checkBoxList[8].checked) {
                newArrProductsDisplay.push(el);
            };
        } else {
            newArrProductsDisplay = newArrProductsBrand;
        }
    });
    newArrProductsDisplay.forEach(el=> {
        if (checkBoxList[9].checked || checkBoxList[10].checked) {
            if (el.ram === "8" && checkBoxList[9].checked) {
            newArrProductsRam.push(el);
            };
            if (el.ram === "16" && checkBoxList[10].checked) {
                newArrProductsRam.push(el);
            };
        } else {
            newArrProductsRam = newArrProductsDisplay;
        }
    });
    newArrProductsRam.forEach(el=> {
        if (checkBoxList[11].checked || checkBoxList[12].checked || checkBoxList[13].checked) {
            if (el.storage === "256" && checkBoxList[11].checked) {
                newArrProductsStorage.push(el);
            };
            if (el.storage === "512" && checkBoxList[12].checked) {
                newArrProductsStorage.push(el);
            };
            if (el.storage === "1024" && checkBoxList[13].checked) {
                newArrProductsStorage.push(el);
            };
        } else {
            newArrProductsStorage = newArrProductsRam;
        }
    });
    newArrProductsStorage.forEach(el=> {
        if (checkBoxList[14].checked || checkBoxList[15].checked || checkBoxList[16].checked) {
            if (el.color === "silver" && checkBoxList[14].checked) {
                newArrProductsColor.push(el);
            };
            if (el.color === "black" && checkBoxList[15].checked) {
                newArrProductsColor.push(el);
            };
            if (el.color === "grey" && checkBoxList[16].checked) {
                newArrProductsColor.push(el);
            };
        } else {
            newArrProductsColor = newArrProductsStorage;
        }
    });
    newArrProductsColor.forEach(el => {
        if ((Number(el.price) > Number(fromSlider.value)) && (Number(el.price) < Number(toSlider.value))) {
            newArrProductsPrice.push(el);
        }
    });
    newArrProductsPrice.forEach(el => {
        if ((Number(el.amount) > Number(fromSliderAmount.value)) && (Number(el.amount) < Number(toSliderAmount.value))) {
            newArrProductsAmount.push(el);
        }
    });
    newArrProductsResult = newArrProductsAmount;
    searchByField();
    renderProducts();
    if (newArrProductsResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    }
}

// ------------------ Рендер списка продуктов ------------------ //

function renderProducts(n) {
    if (!n) {
        n = newArrProductsResult;
    }
    contentProducts.innerHTML = '';
    n.forEach(el => {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('element');
        tempDiv.innerHTML = `<img src="${el.img}" alt=""><p>${el.name}</p><div class="product-block-group"><div class="product-block"><p>year: ${el.year}</p><p>color: ${el.color}</p></div><div>Количество на складе: ${el.amount}</div><div class="product-down-group"><p class="product-price">${el.price}$</p><span class="material-symbols-outlined add-cart">shopping_cart_checkout</span></div></div>`
        contentProducts.appendChild(tempDiv);
        for (let elem of busketCompleteArr) {
            if (elem.name === el.name) {
                tempDiv.childNodes[2].childNodes[2].childNodes[1].innerHTML = 'add_shopping_cart';
                tempDiv.childNodes[2].childNodes[2].childNodes[1].classList.add('add-complete');
                tempDiv.style.border = 'solid lightgreen 1px';
            }
        }
    });
    let addToBusketArr = document.querySelectorAll('.add-cart');
    addToBusketArr.forEach(el => {
        el.addEventListener('click', addToBusket);
    });
    updateLocaleStorage();
}

// ------------------ Кнопка "очистить" ------------------ //

function clearCheckbox() {
    checkBoxList.forEach(el => {
        el.checked = false;
    });
    filterArrProducts();
    buttonSortArr.forEach(el => {el.classList.remove('set-button-sort')});
    fromSlider.value = 0;
    toSlider.value = 2050;
    fromSliderAmount.value = 0;
    toSliderAmount.value = 24;
    controlFromSlider(fromSlider, toSlider);
    controlToSlider(fromSlider, toSlider);
    controlFromSliderAmount(fromSliderAmount, toSliderAmount);
    controlToSliderAmount(fromSliderAmount, toSliderAmount);
    updateLocaleStorage();
}


// ------------------ Сортировка ------------------ //

function compareProducts(EO) {
    EO=EO||window.event;
    buttonSortArr.forEach(el => {el.classList.remove('set-button-sort')})
    if (EO.currentTarget.classList.value === "button-sort-az") {
        newArrProductsResult.sort((a,b) => a.name.localeCompare(b.name))
    }
    if (EO.currentTarget.classList.value === "button-sort-za") {
        newArrProductsResult.sort((a,b) => b.name.localeCompare(a.name))
    }
    if (EO.currentTarget.classList.value === "button-sort-year-up") {
        newArrProductsResult.sort((a,b) => a.year.localeCompare(b.year))
    }
    if (EO.currentTarget.classList.value === "button-sort-year-down") {
        newArrProductsResult.sort((a,b) => b.year.localeCompare(a.year))
    }
    EO.currentTarget.classList.add('set-button-sort');
    renderProducts();
    if (searchField.value !== '') {
        console.log('В строке поиска есть значенииие')
        searchByField();
    }
}

// ------------------ Добавление и удаление из корзины ------------------ //

function addToBusket(EO) {
    if (EO.target.classList.contains('add-complete') === false) {
        if (busketCompleteArr.length < 20) {
            EO.target.innerHTML = 'add_shopping_cart';
            EO.target.classList.add('add-complete');
            EO.target.parentNode.parentNode.parentNode.style.border = 'solid lightgreen 1px';
            productsArr.forEach(el => {
                    if (el.name === EO.target.parentNode.parentNode.parentNode.childNodes[1].innerText) {
                        busketCompleteArr.push(el);
                    }
            });
        } else {
            openModal();
        }
    } else {
        EO.target.classList.remove('add-complete');
        EO.target.parentNode.parentNode.parentNode.style.border = "solid rgb(229, 229, 229) 1px";
        busketCompleteArr.forEach((el,i) => {
            if (el.name === EO.target.parentNode.parentNode.parentNode.childNodes[1].innerText) {
                busketCompleteArr.splice(i,1);
                EO.target.innerHTML = 'shopping_cart_checkout';
            }
        });
    };
    cartNumber.innerHTML = busketCompleteArr.length;
    updateLocaleStorage();
}

// ------------------ Модальное окно ------------------ //

function openModal() {
    modalWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modalWindow.childNodes[1].childNodes[1].innerText = 'Извините, все слоты заполнены';
    buttonModalClose.focus();
}

function closeModal() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'auto';
    searchField.value = '';
}

// ------------------ Поиск в поле ------------------ //

function searchByField() {
    let arrFieldResult = [];
    newArrProductsResult.forEach(elem => {
        if (elem.name.lastIndexOf(searchField.value) !== -1) {
            arrFieldResult.push(elem);
        } else {
            console.log('Не найден')
        }
    });
    renderProducts(arrFieldResult);
    if (arrFieldResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    };
    updateLocaleStorage();
};

// ------------------ Очистка поля ------------------ //

function clearSearch() {
    searchField.value = '';
    renderProducts();
}

// ------------------ Слайдер с двумя ползунками (Price)------------------ //

function controlFromSlider(fromSlider, toSlider) {
    searchField.value = '';
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  if (from > to) {
    fromSlider.value = to;
    showPriceFrom.innerHTML = to + '$';
    // console.log(to)
  } else {
    showPriceFrom.innerHTML = from + '$';
    // console.log(from)
  }
}

function controlToSlider(fromSlider, toSlider,) {
    searchField.value = '';
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    showPriceTo.innerHTML = to + '$';
    // console.log(to)
  } else {
    showPriceTo.innerHTML = from + '$';
    // console.log(from)
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

// ------------------ Слайдер с двумя ползунками (Amount)------------------ //

function controlFromSliderAmount(fromSlider, toSlider) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = to;
      showPriceFromAmount.innerHTML = to + 'psc.';
      // console.log(to)
    } else {
      showPriceFromAmount.innerHTML = from + 'psc.';
      // console.log(from)
    }
  }

function controlToSliderAmount(fromSlider, toSlider,) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessibleAmount(toSlider);
    if (from <= to) {
      toSlider.value = to;
      showPriceToAmount.innerHTML = to + 'psc.';
      // console.log(to)
    } else {
      showPriceToAmount.innerHTML = from + 'psc.';
      // console.log(from)
      toSlider.value = from;
    }
  }

function getParsedAmount(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

function fillSliderAmount(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessibleAmount(currentTarget) {
    const toSliderAmount = document.querySelector('#toSliderAmount');
    if (Number(currentTarget.value) <= 0 ) {
      toSliderAmount.style.zIndex = 2;
    } else {
      toSliderAmount.style.zIndex = 0;
    }
  }
  

