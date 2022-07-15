import { searchField, showPriceFromAmount, showPriceToAmount } from "../../index";

// ------------------ Слайдер с двумя ползунками (Amount)------------------ //

export function controlFromSliderAmount(fromSlider, toSlider) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
      fromSlider.value = to;
      showPriceFromAmount.innerHTML = to + 'psc.';
    } else {
      showPriceFromAmount.innerHTML = from + 'psc.';
    }
  }

export function controlToSliderAmount(fromSlider, toSlider,) {
    searchField.value = '';
    const [from, to] = getParsedAmount(fromSlider, toSlider);
    fillSliderAmount(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessibleAmount(toSlider);
    if (from <= to) {
      toSlider.value = to;
      showPriceToAmount.innerHTML = to + 'psc.';
    } else {
      showPriceToAmount.innerHTML = from + 'psc.';
      toSlider.value = from;
    }
  }

export function getParsedAmount(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

export function fillSliderAmount(from, to, sliderColor, rangeColor, controlSlider) {
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

export function setToggleAccessibleAmount(currentTarget) {
    const toSliderAmount = document.querySelector('#toSliderAmount');
    if (Number(currentTarget.value) <= 0 ) {
      toSliderAmount.style.zIndex = 2;
    } else {
      toSliderAmount.style.zIndex = 0;
    }
  }