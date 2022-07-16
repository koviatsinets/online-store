import { searchField, newArrProductsResult, checkBoxList, contentProducts,
     fromSlider, toSlider, fromSliderAmount, toSliderAmount } from '../../index';
import { productsArr } from "../app/dataProducts";
import renderProducts from "../view/renderProducts";
import searchByField from "./searchByField";
import { DataProd } from "../../types/interface";

// ------------------ Фильтрация ------------------ //

export default function filterArrProducts() {
    searchField.value = '';
    let newArrProductsBrand: [] = [];
    let newArrProductsDisplay: [] = [];
    let newArrProductsRam: [] = [];
    let newArrProductsStorage: [] = [];
    let newArrProductsColor: [] = [];
    let newArrProductsPrice: [] = [];
    let newArrProductsAmount: [] = [];
    
    productsArr.forEach(el => {
        if ((checkBoxList[0] as HTMLInputElement).checked || (checkBoxList[1] as HTMLInputElement).checked || (checkBoxList[2] as HTMLInputElement).checked || (checkBoxList[3] as HTMLInputElement).checked || (checkBoxList[4] as HTMLInputElement).checked) {
            if (el.brand === "Apple" && (checkBoxList[0] as HTMLInputElement).checked) {
                newArrProductsBrand.push(el as never);
            };
            if (el.brand === "ASUS" && (checkBoxList[1] as HTMLInputElement).checked) {
                newArrProductsBrand.push(el as never);
            };
            if (el.brand === "HP" && (checkBoxList[2] as HTMLInputElement).checked) {
                newArrProductsBrand.push(el as never);
            };
            if (el.brand === "Lenovo" && (checkBoxList[3] as HTMLInputElement).checked) {
                newArrProductsBrand.push(el as never);
            };
            if (el.brand === "Dell" && (checkBoxList[4] as HTMLInputElement).checked) {
                newArrProductsBrand.push(el as never);
            };
        } else {
            (newArrProductsBrand as DataProd[]) = productsArr;
        }
    });
    newArrProductsBrand.forEach(el=> {
        if ((checkBoxList[5] as HTMLInputElement).checked || (checkBoxList[6] as HTMLInputElement).checked || (checkBoxList[7] as HTMLInputElement).checked || (checkBoxList[8] as HTMLInputElement).checked) {
            if ((el as DataProd).display === "13" && (checkBoxList[5] as HTMLInputElement).checked) {
                newArrProductsDisplay.push(el);
            };
            if ((el as DataProd).display === "14" && (checkBoxList[6] as HTMLInputElement).checked) {
                newArrProductsDisplay.push(el);
            };
            if ((el as DataProd).display === "15" && (checkBoxList[7] as HTMLInputElement).checked) {
                newArrProductsDisplay.push(el);
            };
            if ((el as DataProd).display === "16" && (checkBoxList[8] as HTMLInputElement).checked) {
                newArrProductsDisplay.push(el);
            };
        } else {
            newArrProductsDisplay = newArrProductsBrand;
        }
    });
    newArrProductsDisplay.forEach(el=> {
        if ((checkBoxList[9] as HTMLInputElement).checked ||( checkBoxList[10] as HTMLInputElement).checked) {
            if ((el as DataProd).ram === "8" && (checkBoxList[9] as HTMLInputElement).checked) {
            newArrProductsRam.push(el);
            };
            if ((el as DataProd).ram === "16" && (checkBoxList[10] as HTMLInputElement).checked) {
                newArrProductsRam.push(el);
            };
        } else {
            newArrProductsRam = newArrProductsDisplay;
        }
    });
    newArrProductsRam.forEach(el=> {
        if ((checkBoxList[11] as HTMLInputElement).checked || (checkBoxList[12] as HTMLInputElement).checked || (checkBoxList[13] as HTMLInputElement).checked) {
            if ((el as DataProd).storage === "256" && (checkBoxList[11] as HTMLInputElement).checked) {
                newArrProductsStorage.push(el);
            };
            if ((el as DataProd).storage === "512" && (checkBoxList[12] as HTMLInputElement).checked) {
                newArrProductsStorage.push(el);
            };
            if ((el as DataProd).storage === "1024" && (checkBoxList[13] as HTMLInputElement).checked) {
                newArrProductsStorage.push(el);
            };
        } else {
            newArrProductsStorage = newArrProductsRam;
        }
    });
    newArrProductsStorage.forEach(el=> {
        if ((checkBoxList[14] as HTMLInputElement).checked || (checkBoxList[15] as HTMLInputElement).checked || (checkBoxList[16] as HTMLInputElement).checked) {
            if ((el as DataProd).color === "silver" && (checkBoxList[14] as HTMLInputElement).checked) {
                newArrProductsColor.push(el);
            };
            if ((el as DataProd).color === "black" && (checkBoxList[15] as HTMLInputElement).checked) {
                newArrProductsColor.push(el);
            };
            if ((el as DataProd).color === "grey" && (checkBoxList[16] as HTMLInputElement).checked) {
                newArrProductsColor.push(el);
            };
        } else {
            newArrProductsColor = newArrProductsStorage;
        }
    });

    newArrProductsColor.forEach(el => {
        if ((Number((el as DataProd).price) >= Number(fromSlider.value)) && (Number((el as DataProd).price) <= Number(toSlider.value))) {
            newArrProductsPrice.push(el);
        }
    });

    newArrProductsPrice.forEach(el => {
        if ((Number((el as DataProd).amount) >= Number(fromSliderAmount.value)) && (Number((el as DataProd).amount) <= Number(toSliderAmount.value))) {
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