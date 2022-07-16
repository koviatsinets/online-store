import { contentProducts, busketCompleteArr, newArrProductsResult} from '../../index';
import updateLocaleStorage from "../app/localeStoragePush";
import addToBusket from "../controller/addToBusket";
import { DataProd } from "../../types/interface";

// ------------------ Рендер списка продуктов ------------------ //

export default function renderProducts(n?: []) {
    if (!n) {
        n = newArrProductsResult;
    }
    contentProducts.innerHTML = '';
    n.forEach(el => {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('element');
        tempDiv.innerHTML = `<img src="${(el as DataProd).img}" alt=""><p>${(el as DataProd).nameProduct}</p><div class="product-block-group"><div class="product-block"><p>year: ${(el as DataProd).year}</p><p>color: ${(el as DataProd).color}</p></div><div>Количество на складе: ${(el as DataProd).amount}</div><div class="product-down-group"><p class="product-price">${(el as DataProd).price}$</p><span class="material-symbols-outlined add-cart">shopping_cart_checkout</span></div></div>`
        contentProducts.appendChild(tempDiv);
        for (let elem of busketCompleteArr) {
            if ((elem as DataProd).nameProduct === (el as DataProd).nameProduct) {
                (tempDiv.childNodes[2].childNodes[2].childNodes[1] as HTMLElement).innerHTML = 'add_shopping_cart';
                (tempDiv.childNodes[2].childNodes[2].childNodes[1] as HTMLElement).classList.add('add-complete');
                tempDiv.style.border = 'solid lightgreen 1px';
            }
        }
    });
    let addToBusketArr = document.querySelectorAll('.add-cart');
    addToBusketArr.forEach(el => {
        el.addEventListener('click', addToBusket);
    });
    updateLocaleStorage();
}