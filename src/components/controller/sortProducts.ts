import { buttonSortArr, newArrProductsResult, searchField } from "../../index";
import { DataProd } from "../../types/interface";
import renderProducts from "../view/renderProducts";
import searchByField from "./searchByField";

// ------------------ Сортировка ------------------ //

export default function compareProducts(EO: Event) {
    EO=EO||window.event;
    buttonSortArr.forEach(el => {(el as HTMLInputElement).classList.remove('set-button-sort')})
    if ((EO.currentTarget as HTMLElement).classList.value === "button-sort-az") {
        newArrProductsResult.sort((a,b) => (a as DataProd).nameProduct.localeCompare((b as DataProd).nameProduct))
    }
    if ((EO.currentTarget as HTMLElement).classList.value === "button-sort-za") {
        newArrProductsResult.sort((a,b) => (b as DataProd).nameProduct.localeCompare((a as DataProd).nameProduct))
    }
    if ((EO.currentTarget as HTMLElement).classList.value === "button-sort-year-up") {
        newArrProductsResult.sort((a,b) => (a as DataProd).year.localeCompare((b as DataProd).year))
    }
    if ((EO.currentTarget as HTMLElement).classList.value === "button-sort-year-down") {
        newArrProductsResult.sort((a,b) => (b as DataProd).year.localeCompare((a as DataProd).year))
    }
    (EO.currentTarget as HTMLElement).classList.add('set-button-sort');
    renderProducts();
    if (searchField.value !== '') {
        searchByField();
    }
}