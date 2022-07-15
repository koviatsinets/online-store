import { searchField, newArrProductsResult, checkBoxList, contentProducts } from '../../index';
import { productsArr } from '../app/dataProducts';
import renderProducts from '../view/renderProducts';
import searchByField from './searchByField';

// ------------------ Фильтрация ------------------ //

export default function filterArrProducts() {
    searchField.value = '';
    let newArrProductsBrand = [];
    let newArrProductsDisplay = [];
    let newArrProductsRam = [];
    let newArrProductsStorage = [];
    let newArrProductsColor = [];
    let newArrProductsPrice = [];
    let newArrProductsAmount = [];
    
    productsArr.forEach(el => {
        if (checkBoxList[0].checked || checkBoxList[1].checked || checkBoxList[2].checked || checkBoxList[3].checked || checkBoxList[4].checked) {
            if (el.brand === "Apple" && checkBoxList[0].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "ASUS" && checkBoxList[1].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "HP" && checkBoxList[2].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "Lenovo" && checkBoxList[3].checked) {
                newArrProductsBrand.push(el);
            };
            if (el.brand === "Dell" && checkBoxList[4].checked) {
                newArrProductsBrand.push(el);
            };
        } else {
            newArrProductsBrand = productsArr;
        }
    });
    newArrProductsBrand.forEach(el=> {
        if (checkBoxList[5].checked || checkBoxList[6].checked || checkBoxList[7].checked || checkBoxList[8].checked) {
            if (el.display === "13" && checkBoxList[5].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "14" && checkBoxList[6].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "15" && checkBoxList[7].checked) {
                newArrProductsDisplay.push(el);
            };
            if (el.display === "16" && checkBoxList[8].checked) {
                newArrProductsDisplay.push(el);
            };
        } else {
            newArrProductsDisplay = newArrProductsBrand;
        }
    });
    newArrProductsDisplay.forEach(el=> {
        if (checkBoxList[9].checked || checkBoxList[10].checked) {
            if (el.ram === "8" && checkBoxList[9].checked) {
            newArrProductsRam.push(el);
            };
            if (el.ram === "16" && checkBoxList[10].checked) {
                newArrProductsRam.push(el);
            };
        } else {
            newArrProductsRam = newArrProductsDisplay;
        }
    });
    newArrProductsRam.forEach(el=> {
        if (checkBoxList[11].checked || checkBoxList[12].checked || checkBoxList[13].checked) {
            if (el.storage === "256" && checkBoxList[11].checked) {
                newArrProductsStorage.push(el);
            };
            if (el.storage === "512" && checkBoxList[12].checked) {
                newArrProductsStorage.push(el);
            };
            if (el.storage === "1024" && checkBoxList[13].checked) {
                newArrProductsStorage.push(el);
            };
        } else {
            newArrProductsStorage = newArrProductsRam;
        }
    });
    newArrProductsStorage.forEach(el=> {
        if (checkBoxList[14].checked || checkBoxList[15].checked || checkBoxList[16].checked) {
            if (el.color === "silver" && checkBoxList[14].checked) {
                newArrProductsColor.push(el);
            };
            if (el.color === "black" && checkBoxList[15].checked) {
                newArrProductsColor.push(el);
            };
            if (el.color === "grey" && checkBoxList[16].checked) {
                newArrProductsColor.push(el);
            };
        } else {
            newArrProductsColor = newArrProductsStorage;
        }
    });

    newArrProductsColor.forEach(el => {
        if ((Number(el.price) >= Number(fromSlider.value)) && (Number(el.price) <= Number(toSlider.value))) {
            newArrProductsPrice.push(el);
        }
    });

    newArrProductsPrice.forEach(el => {
        if ((Number(el.amount) >= Number(fromSliderAmount.value)) && (Number(el.amount) <= Number(toSliderAmount.value))) {
            newArrProductsAmount.push(el);
        }
    });
    newArrProductsResult.length = 0;
    newArrProductsAmount.forEach(el => {newArrProductsResult.push(el)})
    searchByField();
    renderProducts();
    if (newArrProductsResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    }
}