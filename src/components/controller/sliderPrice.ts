import { searchField, showPriceFrom, showPriceTo } from "../../index";

// ------------------ Слайдер с двумя ползунками (Price)------------------ //

export function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement) {
    searchField.value = '';
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = String(to);
      showPriceFrom.innerHTML = to + '$';
    } else {
      showPriceFrom.innerHTML = from + '$';
    }
}

export function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement) {
    searchField.value = '';
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = String(to);
      showPriceTo.innerHTML = to + '$';
    } else {
      showPriceTo.innerHTML = from + '$';
      toSlider.value = String(from);
    }
}

export function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

export function fillSlider(from: HTMLInputElement, to: HTMLInputElement, sliderColor: string, rangeColor: string, controlSlider: HTMLInputElement) {
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

export function setToggleAccessible(currentTarget: HTMLInputElement) {
  const toSlider: HTMLInputElement = document.querySelector('#toSlider') as HTMLInputElement;
  if (Number(currentTarget.value) <= 0 ) {
    toSlider.style.zIndex = '2';
  } else {
    toSlider.style.zIndex = '0';
  }
}