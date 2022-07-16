import { searchField, showPriceFromAmount, showPriceToAmount } from "../../index";

// ------------------ Слайдер с двумя ползунками (Amount)------------------ //

export function controlFromSliderAmount(fromSlider: HTMLInputElement, toSlider: HTMLInputElement) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = String(to);
      showPriceFromAmount.innerHTML = to + 'psc.';
    } else {
      showPriceFromAmount.innerHTML = from + 'psc.';
    }
  }

export function controlToSliderAmount(fromSlider: HTMLInputElement, toSlider: HTMLInputElement,) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessibleAmount(toSlider);
    if (from <= to) {
      toSlider.value = String(to);
      showPriceToAmount.innerHTML = to + 'psc.';
    } else {
      showPriceToAmount.innerHTML = from + 'psc.';
      toSlider.value = String(from);
    }
  }

export function getParsedAmount(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

export function fillSliderAmount(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

export function setToggleAccessibleAmount(currentTarget: HTMLInputElement) {
    const toSliderAmount: HTMLInputElement = document.querySelector('#toSliderAmount') as HTMLInputElement;
    if (Number(currentTarget.value) <= 0 ) {
      toSliderAmount.style.zIndex = '2';
    } else {
      toSliderAmount.style.zIndex = '0';
    }
  }