
import { contentProducts, busketCompleteArr, newArrProductsResult} from '../../index';
import updateLocaleStorage from '../app/localeStoragePush';
import addToBusket from '../controller/addToBusket';

// ------------------ Рендер списка продуктов ------------------ //

export default function renderProducts(n) {
    if (!n) {
        n = newArrProductsResult;
    }
    contentProducts.innerHTML = '';
    n.forEach(el => {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('element');
        tempDiv.innerHTML = `<img src="${el.img}" alt=""><p>${el.name}</p><div class="product-block-group"><div class="product-block"><p>year: ${el.year}</p><p>color: ${el.color}</p></div><div>Количество на складе: ${el.amount}</div><div class="product-down-group"><p class="product-price">${el.price}$</p><span class="material-symbols-outlined add-cart">shopping_cart_checkout</span></div></div>`
        contentProducts.appendChild(tempDiv);
        for (let elem of busketCompleteArr) {
            if (elem.name === el.name) {
                tempDiv.childNodes[2].childNodes[2].childNodes[1].innerHTML = 'add_shopping_cart';
                tempDiv.childNodes[2].childNodes[2].childNodes[1].classList.add('add-complete');
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