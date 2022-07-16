import { busketCompleteArr, cartNumber } from "../../index";
import { productsArr } from "../app/dataProducts";
import openModal from "../view/openModalWindow";
import updateLocaleStorage from "../app/localeStoragePush";
import { DataProd } from "../../types/interface";

// ------------------ Добавление и удаление из корзины ------------------ //

export default function addToBusket(EO: Event) {
    if ((EO.target as HTMLElement).classList.contains('add-complete') === false) {
        if (busketCompleteArr.length < 20) {
            (EO.target as HTMLElement).innerHTML = 'add_shopping_cart';
            (EO.target as HTMLElement).classList.add('add-complete');
            ((((EO.target as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).style.border = 'solid lightgreen 1px';
            productsArr.forEach(el => {
                    if (el.nameProduct === (((((EO.target as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).childNodes[1] as HTMLElement).innerText) {
                        busketCompleteArr.push((el as DataProd) as never);
                    }
            });
        } else {
            openModal();
        }
    } else {
        (EO.target as HTMLElement).classList.remove('add-complete');
        ((((EO.target as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).style.border = "solid rgb(229, 229, 229) 1px";
        busketCompleteArr.forEach((el,i) => {
            if ((el as DataProd).nameProduct === (((((EO.target as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).childNodes[1] as HTMLElement).innerText) {
                busketCompleteArr.splice(i,1);
                (EO.target as HTMLElement).innerHTML = 'shopping_cart_checkout';
            }
        });
    };
    cartNumber.innerHTML = String(busketCompleteArr.length);
    updateLocaleStorage();
}
