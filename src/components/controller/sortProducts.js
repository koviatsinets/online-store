import { buttonSortArr, newArrProductsResult, searchField } from '../../index';
import renderProducts from '../view/renderProducts';
import searchByField from './searchByField'

// ------------------ Сортировка ------------------ //

export default function compareProducts(EO) {
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
        searchByField();
    }
}