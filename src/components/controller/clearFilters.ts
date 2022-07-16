import { checkBoxList, buttonSortArr } from '../../index'
import filterArrProducts from "./filterProducts";
import updateLocaleStorage from "../app/localeStoragePush";
import { controlFromSlider, controlToSlider } from "./sliderPrice";
import { controlFromSliderAmount, controlToSliderAmount } from "./sliderAmount";
import { fromSlider, toSlider, fromSliderAmount, toSliderAmount } from "../../index";


// ------------------ Кнопка "очистить" ------------------ //

export default function clearCheckbox() {
    checkBoxList.forEach(el => {
        (el as HTMLInputElement).checked = false;
    });
    filterArrProducts();
    buttonSortArr.forEach(el => {(el as HTMLInputElement).classList.remove('set-button-sort')});
    fromSlider.value = '0';
    toSlider.value = '2050';
    fromSliderAmount.value = '0';
    toSliderAmount.value = '24';
    controlFromSlider(fromSlider, toSlider);
    controlToSlider(fromSlider, toSlider);
    controlFromSliderAmount(fromSliderAmount, toSliderAmount);
    controlToSliderAmount(fromSliderAmount, toSliderAmount);
    updateLocaleStorage();
}