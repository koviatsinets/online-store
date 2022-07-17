import {checkBoxList, buttonSortArr, busketCompleteArr,
     cartNumber, fromSlider, toSlider, fromSliderAmount, toSliderAmount } from "../../index";
import { lsTempObj } from "../../index";

// ------------------ Подтягивание из localeStorage ------------------ //

export default function pullLocalStorage() {
    checkBoxList.forEach(el => {
        if (el.id === 'brand-apple') {(el as HTMLInputElement).checked = lsTempObj.filter.brandApple};
        if (el.id === 'brand-asus') {(el as HTMLInputElement).checked = lsTempObj.filter.brandASUS};
        if (el.id === 'brand-HP') {(el as HTMLInputElement).checked = lsTempObj.filter.brandHP};
        if (el.id === 'brand-lenovo') {(el as HTMLInputElement).checked = lsTempObj.filter.brandLenovo};
        if (el.id === 'brand-dell') {(el as HTMLInputElement).checked = lsTempObj.filter.brandDell};
        if (el.id === 'display-13') {(el as HTMLInputElement).checked = lsTempObj.filter.disp13};
        if (el.id === 'display-14') {(el as HTMLInputElement).checked = lsTempObj.filter.disp14};
        if (el.id === 'display-15') {(el as HTMLInputElement).checked = lsTempObj.filter.disp15};
        if (el.id === 'display-16') {(el as HTMLInputElement).checked = lsTempObj.filter.disp16};
        if (el.id === 'ram-8') {(el as HTMLInputElement).checked = lsTempObj.filter.ram8};
        if (el.id === 'ram-16') {(el as HTMLInputElement).checked = lsTempObj.filter.ram16};
        if (el.id === 'storage-256') {(el as HTMLInputElement).checked = lsTempObj.filter.stor256};
        if (el.id === 'storage-512') {(el as HTMLInputElement).checked = lsTempObj.filter.stor512};
        if (el.id === 'storage-1024') {(el as HTMLInputElement).checked = lsTempObj.filter.stor1024};
        if (el.id === 'color-silver') {(el as HTMLInputElement).checked = lsTempObj.filter.colSilv};
        if (el.id === 'color-black') {(el as HTMLInputElement).checked = lsTempObj.filter.colBlack};
        if (el.id === 'color-grey') {(el as HTMLInputElement).checked = lsTempObj.filter.colGray};
    });
    buttonSortArr.forEach(el => {
        if ((el as HTMLElement).classList.contains("button-sort-az")) {
            if (lsTempObj.sort.az === true) {
                (el as HTMLElement).classList.add('set-button-sort');
            }
        }
        if ((el as HTMLElement).classList.contains("button-sort-za")) {
            if (lsTempObj.sort.za === true) {
                (el as HTMLInputElement).classList.add('set-button-sort');
            }
        }
        if ((el as HTMLElement).classList.contains("button-sort-year-up")) {
            if (lsTempObj.sort.yearUp === true) {
                (el as HTMLElement).classList.add('set-button-sort');
            }
        }
        if ((el as HTMLElement).classList.contains("button-sort-year-down")) {
            if (lsTempObj.sort.yearDown === true) {
                (el as HTMLElement).classList.add('set-button-sort');
            }
        }
    });
    fromSlider.value = lsTempObj.filter.priceFrom;
    toSlider.value = lsTempObj.filter.priceTo;
    fromSliderAmount.value = lsTempObj.filter.amountFrom;
    toSliderAmount.value = lsTempObj.filter.amountTo;
    lsTempObj.cart.forEach(el => {busketCompleteArr.push(el)});
    cartNumber.innerHTML = String(busketCompleteArr.length); 
}