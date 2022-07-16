import {checkBoxList, buttonSortArr, busketCompleteArr, searchField} from '../../index.js';
import { lsTempObj } from '../../index';

// ------------------ Загрузка в localeStorage ------------------ //

export default function updateLocaleStorage() {
    
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