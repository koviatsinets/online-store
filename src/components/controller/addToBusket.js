import { busketCompleteArr, cartNumber } from '../../index';
import { productsArr } from '../app/dataProducts';
import openModal from '../view/openModalWindow';
import updateLocaleStorage from '../app/localeStoragePush';

// ------------------ Добавление и удаление из корзины ------------------ //

export default function addToBusket(EO) {
    if (EO.target.classList.contains('add-complete') === false) {
        if (busketCompleteArr.length < 20) {
            EO.target.innerHTML = 'add_shopping_cart';
            EO.target.classList.add('add-complete');
            EO.target.parentNode.parentNode.parentNode.style.border = 'solid lightgreen 1px';
            productsArr.forEach(el => {
                    if (el.name === EO.target.parentNode.parentNode.parentNode.childNodes[1].innerText) {
                        busketCompleteArr.push(el);
                    }
            });
        } else {
            openModal();
        }
    } else {
        EO.target.classList.remove('add-complete');
        EO.target.parentNode.parentNode.parentNode.style.border = "solid rgb(229, 229, 229) 1px";
        busketCompleteArr.forEach((el,i) => {
            if (el.name === EO.target.parentNode.parentNode.parentNode.childNodes[1].innerText) {
                busketCompleteArr.splice(i,1);
                EO.target.innerHTML = 'shopping_cart_checkout';
            }
        });
    };
    cartNumber.innerHTML = busketCompleteArr.length;
    updateLocaleStorage();
}
