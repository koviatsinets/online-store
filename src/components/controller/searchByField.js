import { newArrProductsResult, contentProducts, searchField } from '../../index';
import renderProducts from '../view/renderProducts';
import updateLocaleStorage from '../app/localeStoragePush';

// ------------------ Поиск в поле ------------------ //

export default function searchByField() {
    let arrFieldResult = [];
    newArrProductsResult.forEach(elem => {
        if (elem.name.lastIndexOf(searchField.value) !== -1) {
            arrFieldResult.push(elem);
        }
    });
    renderProducts(arrFieldResult);
    if (arrFieldResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    };
    updateLocaleStorage();
};