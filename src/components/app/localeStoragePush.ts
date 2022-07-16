import {checkBoxList, buttonSortArr, busketCompleteArr, searchField, fromSlider, toSlider, fromSliderAmount, toSliderAmount} from '../../index';
import { lsTempObj } from "../../index";
import { LocStor } from "../../types/interface";

// ------------------ Загрузка в localeStorage ------------------ //

export default function updateLocaleStorage() {
    
    checkBoxList.forEach(el => {
        if (el.id === 'brand-apple') {lsTempObj.filter.brandApple = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'brand-asus') {lsTempObj.filter.brandASUS = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'brand-HP') {lsTempObj.filter.brandHP = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'brand-lenovo') {lsTempObj.filter.brandLenovo = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'brand-dell') {lsTempObj.filter.brandDell = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'display-13') {lsTempObj.filter.disp13 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'display-14') {lsTempObj.filter.disp14 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'display-15') {lsTempObj.filter.disp15 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'display-16') {lsTempObj.filter.disp16 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'ram-8') {lsTempObj.filter.ram8 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'ram-16') {lsTempObj.filter.ram16 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'storage-256') {lsTempObj.filter.stor256 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'storage-512') {lsTempObj.filter.stor512 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'storage-1024') {lsTempObj.filter.stor1024 = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'color-silver') {lsTempObj.filter.colSilv = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'color-black') {lsTempObj.filter.colBlack = ((el as HTMLInputElement).checked? true : false)};
        if (el.id === 'color-grey') {lsTempObj.filter.colGray = ((el as HTMLInputElement).checked? true : false)};
    });
    buttonSortArr.forEach(el => {
        if ((el as HTMLElement).classList.contains("button-sort-az")) {lsTempObj.sort.az = ((el as HTMLElement).classList.contains("set-button-sort")? true : false)};
        if ((el as HTMLElement).classList.contains("button-sort-za")) {lsTempObj.sort.za = ((el as HTMLElement).classList.contains("set-button-sort")? true : false)};
        if ((el as HTMLElement).classList.contains("button-sort-year-up")) {lsTempObj.sort.yearUp = ((el as HTMLElement).classList.contains("set-button-sort")? true : false)};
        if ((el as HTMLElement).classList.contains("button-sort-year-down")) {lsTempObj.sort.yearDown = ((el as HTMLElement).classList.contains("set-button-sort")? true : false)};
    });
    lsTempObj.filter.priceFrom = fromSlider.value;
    lsTempObj.filter.priceTo = toSlider.value;
    lsTempObj.filter.amountFrom = fromSliderAmount.value;
    lsTempObj.filter.amountTo = toSliderAmount.value;
    lsTempObj.cart = busketCompleteArr;
    lsTempObj.filter.fieldSearch = searchField.value;
    localStorage.setItem('rsschool-koviatsinets-store', JSON.stringify(lsTempObj));
}