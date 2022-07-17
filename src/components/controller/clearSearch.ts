import { searchField } from "../../index";
import renderProducts from "../view/renderProducts";

// ------------------ Очистка поля ------------------ //

export default function clearSearch() {
    searchField.value = '';
    renderProducts();
}