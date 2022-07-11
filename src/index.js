import { doc } from 'prettier';
import './global.css';

// ------------------ Организация массива данных для товаров ------------------ //

const productsArr = [
    {
        "name": "Macbook Air M1 13\" 8Gb 256Gb",
        "brand": "Apple",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "grey",
        "price": "999",
        "year": "2020",
        "amount": "5",
        "img": "./assets/images/macbook-air-8-256.jpeg"
    },
    {
        "name": "Macbook Pro M1 13\" 16Gb 256Gb",
        "brand": "Apple",
        "display": "13",
        "ram": "16",
        "storage": "256",
        "color": "silver",
        "price": "1299",
        "year": "2020",
        "amount": "4",
        "img": "./assets/images/macbook-pro-16-256.png"
    },
    {
        "name": "Macbook Pro M1 16\" 16Gb 512Gb",
        "brand": "Apple",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "1999",
        "year": "2020",
        "amount": "2",
        "img": "./assets/images/macbook-pro-16-512.jpeg"
    },
    {
        "name": "Macbook Pro M2 14\" 16Gb 1Tb",
        "brand": "Apple",
        "display": "14",
        "ram": "16",
        "storage": "1024",
        "color": "silver",
        "price": "1799",
        "year": "2022",
        "amount": "9",
        "img": "./assets/images/macbook-pro-14-1024.png"
    },
    {
        "name": "HP Victus 16\" 16Gb 512Gb",
        "brand": "HP",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1050",
        "year": "2021",
        "amount": "11",
        "img": "./assets/images/hp-victus-16-512.jpeg"
    },
    {
        "name": "HP Pavilion 15\" 8Gb 512Gb",
        "brand": "HP",
        "display": "15",
        "ram": "8",
        "storage": "512",
        "color": "black",
        "price": "1350",
        "year": "2021",
        "amount": "10",
        "img": "./assets/images/hp-pavilion-8-512.jpeg"
    },
    {
        "name": "HP ProBook 14\" 16Gb 256Gb",
        "brand": "HP",
        "display": "14",
        "ram": "16",
        "storage": "256",
        "color": "silver",
        "price": "1090",
        "year": "2021",
        "amount": "15",
        "img": "./assets/images/hp-probook-16-256.jpg"
    },
    {
        "name": "HP EliteBook 16\" 16Gb 1Tb",
        "brand": "HP",
        "display": "16",
        "ram": "16",
        "storage": "1Tb",
        "color": "silver",
        "price": "1700",
        "year": "2022",
        "amount": "2",
        "img": "./assets/images/hp-elitebook-16-512.jpg"
    },
    {
        "name": "ASUS ZenBook 13\" 8Gb 256Gb",
        "brand": "ASUS",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "black",
        "price": "890",
        "year": "2021",
        "amount": "21",
        "img": "./assets/images/asus-zenbook-8-256.jpg"
    },
    {
        "name": "ASUS VivoBook 15\" 8Gb 256Gb",
        "brand": "ASUS",
        "display": "15",
        "ram": "8",
        "storage": "256",
        "color": "grey",
        "price": "700",
        "year": "2020",
        "amount": "19",
        "img": "./assets/images/asus-vivobook-8-256.jpg"
    },
    {
        "name": "ASUS RogStrix 16\" 16Gb 1Tb",
        "brand": "ASUS",
        "display": "16",
        "ram": "16",
        "storage": "1024",
        "color": "black",
        "price": "1800",
        "year": "2022",
        "amount": "9",
        "img": "./assets/images/asus-rogstrix-16-1Tb.webp"
    },
    {
        "name": "ASUS Tuf Gaming Dash 16\" 16Gb 512Gb",
        "brand": "ASUS",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1590",
        "year": "2022",
        "amount": "8",
        "img": "./assets/images/asus-tuf-16-512.webp"
    },
    {
        "name": "Lenovo Legion 16\" 16Gb 512Gb",
        "brand": "Lenovo",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "2050",
        "year": "2022",
        "amount": "18",
        "img": "./assets/images/lenovo-legion-16-1024.jpg"
    },
    {
        "name": "Lenovo Ideapad 15\" 8Gb 256Gb",
        "brand": "Lenovo",
        "display": "15",
        "ram": "8",
        "storage": "256",
        "color": "silver",
        "price": "880",
        "year": "2020",
        "amount": "13",
        "img": "./assets/images/lenovo-ideapad-8-256.jpg"
    },
    {
        "name": "Lenovo V14 14\" 8Gb 256Gb",
        "brand": "Lenovo",
        "display": "14",
        "ram": "8",
        "storage": "256",
        "color": "black",
        "price": "680",
        "year": "2020",
        "amount": "11",
        "img": "./assets/images/lenovo-V14-8-256.jpg"
    },
    {
        "name": "Lenovo ThinkBook 14\" 16Gb 512Gb",
        "brand": "Lenovo",
        "display": "14",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "1000",
        "year": "2021",
        "amount": "20",
        "img": "./assets/images/lenovo-thinkbook-16-512.jpg"
    },
    {
        "name": "Dell Vostro 16\" 16Gb 1Tb",
        "brand": "Dell",
        "display": "16",
        "ram": "16",
        "storage": "1024",
        "color": "silver",
        "price": "1590",
        "year": "2022",
        "amount": "16",
        "img": "./assets/images/dell-vostro-16-1024.jpg"
    },
    {
        "name": "Dell Latitude 15\" 16Gb 512Gb",
        "brand": "Dell",
        "display": "15",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1490",
        "year": "2021",
        "amount": "24",
        "img": "./assets/images/dell-latitude-16-512.jpg"
    },
    {
        "name": "Dell Vostro 13\" 8Gb 256gb",
        "brand": "Dell",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "silver",
        "price": "750",
        "year": "2020",
        "amount": "13",
        "img": "./assets/images/dell-vostro-8-256.jpg"
    },
    {
        "name": "Dell XPS 14\" 8Gb 512Gb",
        "brand": "Dell",
        "display": "14",
        "ram": "8",
        "storage": "512",
        "color": "grey",
        "price": "1980",
        "year": "2022",
        "amount": "2",
        "img": "./assets/images/dell-latitude-16-512.jpg"
    },
    {
        "name": "Dell Vostro 13\" 8Gb 512gb",
        "brand": "Dell",
        "display": "13",
        "ram": "8",
        "storage": "512",
        "color": "silver",
        "price": "850",
        "year": "2020",
        "amount": "18",
        "img": "./assets/images/dell-vostro-8-256.jpg"
    },
  ]

let contentProducts = document.querySelector('.content-products');
let checkBoxList = document.querySelectorAll('input[type=checkbox]');
let cartNumber = document.querySelector('.cart-number');


for (let el of checkBoxList) {
    el.addEventListener('click', filterArrProducts);
}

let newArrProductsResult = [];

filterArrProducts();



// ------------------ Слайд-меню ------------------ //

let brand = document.querySelector('#brand');
let display = document.querySelector('#display');
let ram = document.querySelector('#ram');
let storage = document.querySelector('#storage');
let color = document.querySelector('#color');

let brandBlock = document.querySelector('#brand-block');
let displayBlock = document.querySelector('#display-block');
let ramBlock = document.querySelector('#ram-block');
let storageBlock = document.querySelector('#storage-block');
let colorBlock = document.querySelector('#color-block');

brand.addEventListener('click', openBrand);
display.addEventListener('click', openDisplay);
ram.addEventListener('click', openRam);
storage.addEventListener('click', openStorage);
color.addEventListener('click', openColor);

function openBrand() {
    brandBlock.classList.toggle('brand-block-open');
}
function openDisplay() {
    displayBlock.classList.toggle('display-block-open');
}
function openRam() {
    ramBlock.classList.toggle('ram-block-open');
}
function openStorage() {
    storageBlock.classList.toggle('storage-block-open');
}
function openColor() {
    colorBlock.classList.toggle('color-block-open');
}

// ------------------ Фильтрация ------------------ //

function filterArrProducts() {

    let newArrProductsBrand = [];
    let newArrProductsDisplay = [];
    let newArrProductsRam = [];
    let newArrProductsStorage = [];
    let newArrProductsColor = [];
    
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
    newArrProductsRam.forEach(el=> {
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
    newArrProductsResult = newArrProductsColor;
    });
    renderProducts();
    if (newArrProductsResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    }
}

// ------------------ Рендер списка продуктов ------------------ //

function renderProducts(n) {
    if (!n) {
        n = newArrProductsResult;
    }
    contentProducts.innerHTML = '';
    n.forEach(el => {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('element');
        tempDiv.innerHTML = `<img src="${el.img}" alt=""><p>${el.name}</p><div class="product-block-group"><div class="product-block"><p>year: ${el.year}</p><p>color: ${el.color}</p></div><div>Количество на складе: ${el.amount}</div><div class="product-down-group"><p class="product-price">${el.price}$</p><span class="material-symbols-outlined add-cart">shopping_cart_checkout</span></div></div>`
        contentProducts.appendChild(tempDiv);
    });
    let addToBusketArr = document.querySelectorAll('.add-cart');
    addToBusketArr.forEach(el => {
        el.addEventListener('click', addToBusket);
    });
}

// ------------------ Кнопка "очистить" ------------------ //

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCheckbox);

function clearCheckbox() {
    checkBoxList.forEach(el => {
        el.checked = false;
    });
    filterArrProducts();
}

// ------------------ Сортировка ------------------ //

let buttonSortAZ = document.querySelector('.button-sort-az');
let buttonSortZA = document.querySelector('.button-sort-za');
let buttonSortYearUp = document.querySelector('.button-sort-year-up');
let buttonSortYearDown = document.querySelector('.button-sort-year-down');

const buttonSortArr = [buttonSortAZ, buttonSortZA, buttonSortYearUp, buttonSortYearDown];
buttonSortArr.forEach(el => {el.addEventListener('click', compareProducts)})

function compareProducts(EO) {
    EO=EO||window.event;
    buttonSortArr.forEach(el => {el.classList.remove('setButtonSort')})
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
    filterArrProducts();
    EO.currentTarget.classList.add('setButtonSort');
}

// ------------------ Добавление и удаление из корзины ------------------ //

// let addToBusketArr = document.querySelectorAll('.add-cart');
// addToBusketArr.forEach(el => {
//     el.addEventListener('click', addToBusket);
// })
let busketCompleteArr = [];

function addToBusket(EO) {
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
            console.log('>20')
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
    console.log(busketCompleteArr);
}

// ------------------ Модальное окно ------------------ //

let buttonModalClose = document.querySelector('.button-modal-close');
let modalWindow = document.querySelector('.fog');

buttonModalClose.addEventListener('click', closeModal);

function openModal() {
    modalWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modalWindow.childNodes[1].childNodes[1].innerText = 'Извините, все слоты заполнены';
    buttonModalClose.focus();
}

function closeModal() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'auto';
    searchField.value = '';
}

// ------------------ Поиск в поле ------------------ //

let searchField = document.querySelector('.search');
searchField.addEventListener('input', searchByField);

let clearSearchButton = document.querySelector('.search-button');
clearSearchButton.addEventListener('click', clearSearch);

function clearSearch() {
    searchField.value = '';
}

function searchByField() {
    let arrFieldResult = [];
    newArrProductsResult.forEach(elem => {
        if (elem.name.lastIndexOf(searchField.value) !== -1) {
            arrFieldResult.push(elem);
        } else {
            console.log('Не найден')
        }
    });
    renderProducts(arrFieldResult);
    if (arrFieldResult.length === 0) {
        contentProducts.innerHTML = 'Товар не найден';
    }
};