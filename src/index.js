import './global.css';

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