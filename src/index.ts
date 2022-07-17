export { checkBoxList, buttonSortArr, busketCompleteArr, searchField, cartNumber };
import pullLocalStorage from "./components/app/localeStoragePull";
export { brandBlock, displayBlock, ramBlock, storageBlock, colorBlock };
import { openBrand, openDisplay, openRam, openStorage, openColor } from "./components/view/slideMenu";
export { newArrProductsResult, contentProducts }
import filterArrProducts from "./components/controller/filterProducts";
export { modalWindow, buttonModalClose};
import closeModal from "./components/view/closeModalWindow";
import clearCheckbox from "./components/controller/clearFilters";
import compareProducts from "./components/controller/sortProducts";
import searchByField from "./components/controller/searchByField";
import clearSearch from "./components/controller/clearSearch";
import clearLocalStorage from "./components/controller/clearLocalStorage";
import { controlFromSlider, controlToSlider, fillSlider, setToggleAccessible } from "./components/controller/sliderPrice";
import { controlFromSliderAmount, controlToSliderAmount, fillSliderAmount, setToggleAccessibleAmount } from "./components/controller/sliderAmount";
export { showPriceFrom, showPriceTo, showPriceFromAmount, showPriceToAmount };
export { fromSlider, toSlider, fromSliderAmount, toSliderAmount };
export { lsTempObj }
import './global.css';

// ------------------ Общий блок кода ------------------ //

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
        'priceFrom': '0',
        'priceTo': '2050',
        'amountFrom': '0',
        'amountTo': '24',
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

lsTempObj = (localStorage.getItem('rsschool-koviatsinets-store') === null)? lsTempObj : JSON.parse((localStorage.getItem('rsschool-koviatsinets-store')) as string);
let contentProducts: HTMLElement = document.querySelector('.content-products') as HTMLElement;
let checkBoxList = document.querySelectorAll('input[type=checkbox]');
let cartNumber: HTMLElement = document.querySelector('.cart-number') as HTMLElement;
let buttonSortAZ = document.querySelector('.button-sort-az');
let buttonSortZA = document.querySelector('.button-sort-za');
let buttonSortYearUp = document.querySelector('.button-sort-year-up');
let buttonSortYearDown = document.querySelector('.button-sort-year-down');
let busketCompleteArr: [] = [];
let newArrProductsResult: [] = [];
let clearButton = document.querySelector('.clear');
let clearButtonLS = document.querySelector('.clear-ls');
let buttonModalClose: HTMLElement = document.querySelector('.button-modal-close') as HTMLElement;
let modalWindow: HTMLElement = (document.querySelector('.fog') as HTMLElement);
let searchField: HTMLInputElement = document.querySelector('.search') as HTMLInputElement;
let clearSearchButton = document.querySelector('.search-button');
const buttonSortArr = [buttonSortAZ, buttonSortZA, buttonSortYearUp, buttonSortYearDown];

checkBoxList.forEach(el => el.addEventListener('click', filterArrProducts));
buttonSortArr.forEach(el => (el as HTMLElement).addEventListener('click', compareProducts));
(clearButton as HTMLElement).addEventListener('click', clearCheckbox);
(clearButtonLS as HTMLElement).addEventListener('click', clearLocalStorage);
(buttonModalClose as HTMLElement).addEventListener('click', closeModal);
(searchField as HTMLElement).addEventListener('input', searchByField);
(clearSearchButton as HTMLElement).addEventListener('click', clearSearch);

const fromSlider: HTMLInputElement = document.querySelector('#fromSlider') as HTMLInputElement;
const toSlider: HTMLInputElement = document.querySelector('#toSlider') as HTMLInputElement;
const showPriceFrom: HTMLElement = document.querySelector('#price-show-from') as HTMLElement;
const showPriceTo: HTMLElement = document.querySelector('#price-show-to') as HTMLElement;
fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
setToggleAccessible(toSlider);

(fromSlider as HTMLInputElement).oninput = () => {
    controlFromSlider(fromSlider, toSlider);
    filterArrProducts();
};
(toSlider as HTMLInputElement).oninput = () => {
    controlToSlider(fromSlider, toSlider);
    filterArrProducts();
};

const fromSliderAmount: HTMLInputElement = document.querySelector('#fromSliderAmount') as HTMLInputElement;
const toSliderAmount: HTMLInputElement = document.querySelector('#toSliderAmount') as HTMLInputElement;
const showPriceFromAmount: HTMLElement = document.querySelector('#amount-show-from') as HTMLElement;
const showPriceToAmount: HTMLElement = document.querySelector('#amount-show-to') as HTMLElement;
fillSliderAmount(fromSliderAmount, toSliderAmount, '#C6C6C6', '#25daa5', toSliderAmount);
setToggleAccessibleAmount(toSliderAmount);

(fromSliderAmount as HTMLInputElement).oninput = () => {
    controlFromSliderAmount(fromSliderAmount, toSliderAmount);
    filterArrProducts();
};
(toSliderAmount as HTMLInputElement).oninput = () => {
    controlToSliderAmount(fromSliderAmount, toSliderAmount);
    filterArrProducts();
};

pullLocalStorage();
controlFromSlider(fromSlider, toSlider);
controlToSlider(fromSlider, toSlider);
controlFromSliderAmount(fromSliderAmount, toSliderAmount);
controlToSliderAmount(fromSliderAmount, toSliderAmount);
filterArrProducts();
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

(brand as HTMLElement).addEventListener('click', openBrand);
(display as HTMLElement).addEventListener('click', openDisplay);
(ram as HTMLElement).addEventListener('click', openRam);
(storage as HTMLElement).addEventListener('click', openStorage);
(color as HTMLElement).addEventListener('click', openColor);