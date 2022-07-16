// import { doc } from 'prettier';
export { checkBoxList, buttonSortArr, busketCompleteArr, searchField, cartNumber };
import pullLocalStorage from './components/app/localeStoragePull';
export { brandBlock, displayBlock, ramBlock, storageBlock, colorBlock };
import { openBrand, openDisplay, openRam, openStorage, openColor } from './components/view/slideMenu';
export { newArrProductsResult, contentProducts }
import filterArrProducts from './components/controller/filterProducts';
export { modalWindow, buttonModalClose};
import closeModal from './components/view/closeModalWindow'
import clearCheckbox from './components/controller/clearFilters';
export { controlFromSlider, controlToSlider, controlFromSliderAmount, controlToSliderAmount };
import compareProducts from './components/controller/sortProducts';
import searchByField from './components/controller/searchByField';
import clearSearch from './components/controller/clearSearch';
import { controlFromSlider, controlToSlider } from './components/controller/sliderPrice';
import { controlFromSliderAmount, controlToSliderAmount, fillSliderAmount, setToggleAccessibleAmount } from './components/controller/sliderAmount';
import { fillSlider, setToggleAccessible} from './components/controller/sliderPrice';
export { showPriceFrom, showPriceTo, showPriceFromAmount, showPriceToAmount };
export { fromSlider, toSlider, fromSliderAmount, toSliderAmount };
import './components/app/dataLocaleStorage'
import './global.css';



// ------------------ Общий блок кода ------------------ //


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





















  

