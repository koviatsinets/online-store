import './global.css';

// ------------------ Организация массива данных для товаров ------------------ //

const productsArr = [
    {
        "name": "Macbook Air M1 13\" 8Gb 256Gb 2020",
        "brand": "Apple",
        "display": "13",
        "ram": "8",
        "storage": "256",
        "color": "grey",
        "price": "999",
        "year": "2020",
        "img": "./assets/images/macbook-air-8-256.webp"
    },
    {
        "name": "Macbook Pro M1 13\" 16Gb 256Gb 2020",
        "brand": "Apple",
        "display": "13",
        "ram": "16",
        "storage": "256",
        "color": "silver",
        "price": "1299",
        "year": "2020",
        "img": "./assets/images/macbook-pro-16-256.webp"
    },
    {
        "name": "Macbook Pro M1 16\" 16Gb 512Gb 2020",
        "brand": "Apple",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "grey",
        "price": "1999",
        "year": "2020",
        "img": "./assets/images/macbook-pro-16-512.webp"
    },
    {
        "name": "Macbook Pro M2 14\" 16Gb 1Tb 2022",
        "brand": "Apple",
        "display": "14",
        "ram": "16",
        "storage": "1024",
        "color": "silver",
        "price": "1799",
        "year": "2022",
        "img": "./assets/images/macbook-pro-14-1024.webp"
    },
    {
        "name": "HP Victus 16\" 16Gb 512Gb 2021",
        "brand": "HP",
        "display": "16",
        "ram": "16",
        "storage": "512",
        "color": "black",
        "price": "1050",
        "year": "2021",
        "img": "./assets/images/hp-victus-16-512.jpeg"
    },
    {
        "name": "HP Pavilion 15\" 8Gb 512Gb 2021",
        "brand": "HP",
        "display": "15",
        "ram": "8",
        "storage": "512",
        "color": "black",
        "price": "1350",
        "year": "2021",
        "img": "./assets/images/hp-pavilion-8-512.jpeg"
    },
    {
     
    },
    {
      
    },
    {

    },
    {

    },
    {
      
    },
    {
      
    },
    {
      
    },
    {
     
    },
    {
     
    },
    {
     
    },
    {
      
    },
    {

    },
    {

    },
  ]

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