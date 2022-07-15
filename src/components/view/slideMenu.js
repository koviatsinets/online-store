import { brandBlock, displayBlock, ramBlock, storageBlock, colorBlock } from '../../index';


// ------------------ Слайд-меню ------------------ //


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

export { openBrand, openDisplay, openRam, openStorage, openColor };